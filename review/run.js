// Runs gate files against the base and HEAD production previews.
// node run.js gates/g1-tabs-controls.js [more files] [--only=id,id] [--base=URL] [--head=URL]
const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

const arg = name => (process.argv.find(a => a.startsWith(`--${name}=`)) || '').split('=').slice(1).join('=')
const BUILDS = { base: arg('base') || 'http://localhost:4174', head: arg('head') || 'http://localhost:4173' }
const only = arg('only').split(',').filter(Boolean)
const files = process.argv.slice(2).filter(a => !a.startsWith('--'))

const verdict = (expect, base, head) => {
  if (expect === 'flip') return !base.pass && head.pass ? 'ok' : 'check'
  if (expect === 'guard') return base.pass && head.pass ? 'ok' : 'check'
  return head.pass ? 'ok' : 'check'
}

async function runOne(browser, gate, build) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, ...gate.context })
  if (gate.theme) await context.addInitScript(t => localStorage.setItem('vitepress-theme-appearance', t), gate.theme)
  const page = await context.newPage()
  const url = p => BUILDS[build] + p
  const timer = new Promise((_, reject) => setTimeout(() => reject(new Error('timed out after 60s')), 60000))
  try {
    const r = await Promise.race([gate.run({ page, context, url, build }), timer])
    return { pass: !!r.pass, value: r.value ?? null }
  } catch (e) {
    return {
      pass: false,
      value: null,
      error: String(e.message || e)
        .split('\n')[0]
        .slice(0, 300),
    }
  } finally {
    await context.close()
  }
}

;(async () => {
  const browser = await chromium.launch()
  await Promise.all(
    files.map(async file => {
      const gates = require(path.resolve(file)).filter(g => !only.length || only.includes(g.id))
      const results = []
      for (const gate of gates) {
        const base = await runOne(browser, gate, 'base')
        const head = await runOne(browser, gate, 'head')
        const { run, context, theme, ...meta } = gate
        results.push({ ...meta, base, head, verdict: verdict(gate.expect, base, head) })
        console.log(
          `${results.at(-1).verdict.padEnd(5)} ${gate.id}  base=${JSON.stringify(
            base.value ?? base.error,
          )}  head=${JSON.stringify(head.value ?? head.error)}`,
        )
      }
      if (!only.length)
        fs.writeFileSync(
          path.join(__dirname, 'results', path.basename(file, '.js') + '.json'),
          JSON.stringify(results, null, 2),
        )
    }),
  )
  await browser.close()
})()
