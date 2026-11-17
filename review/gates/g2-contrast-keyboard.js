// Gates for handoffs 03 (text contrast, colour tokens, dark surfaces) and 04 (shell keyboard). Run with run.js.
const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')
const { createRequire } = require('module')

const REPO = path.resolve(__dirname, '../..')
// the commits the two previews were built from. Update them when a preview is rebuilt
const REF = { base: '6e776ca3', head: 'e69af439' }
// one live 'vector search' response, captured once and replayed so no gate hits the cluster
const SEARCH_STUB = fs.readFileSync(path.join(__dirname, 'search-vector-search.json'), 'utf8')
const NOT_FOUND_STUB = JSON.stringify({
  grouped_hits: [
    {
      hits: [
        {
          document: {
            url_without_anchor: 'https://typesense.org/docs/guide/install-typesense.html',
            'hierarchy.lvl0': 'Installing Typesense',
          },
        },
      ],
    },
  ],
})

// Runs in the page. Colours go through a 1x1 canvas, so color(srgb ...) and oklch() come back as rgb.
function pageHelpers() {
  const cv = document.createElement('canvas')
  cv.width = cv.height = 1
  const cx = cv.getContext('2d', { willReadFrequently: true })
  const rgba = c => {
    cx.clearRect(0, 0, 1, 1)
    cx.fillStyle = 'rgba(0,0,0,0)'
    cx.fillStyle = c
    cx.fillRect(0, 0, 1, 1)
    const d = cx.getImageData(0, 0, 1, 1).data
    return [d[0], d[1], d[2], d[3] / 255]
  }
  const over = (top, bot) => {
    const a = top[3] + bot[3] * (1 - top[3])
    return [0, 1, 2].map(i => (top[i] * top[3] + bot[i] * bot[3] * (1 - top[3])) / a).concat(a)
  }
  const lum = c => {
    const f = v => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
    return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2])
  }
  const ratio = (a, b) => {
    const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
    return Math.round(((x + 0.05) / (y + 0.05)) * 100) / 100
  }
  const hex = c =>
    '#' +
    c
      .slice(0, 3)
      .map(v => Math.round(v).toString(16).padStart(2, '0'))
      .join('')
  const bgOf = el => {
    const layers = []
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      const c = rgba(getComputedStyle(n).backgroundColor)
      if (c[3] > 0) layers.push(c)
      if (c[3] >= 1) break
    }
    let bg = layers.length && layers[layers.length - 1][3] >= 1 ? layers.pop() : [255, 255, 255, 1]
    while (layers.length) bg = over(layers.pop(), bg)
    return bg
  }
  const contrast = el => {
    const bg = bgOf(el)
    const fg = over(rgba(getComputedStyle(el).color), bg)
    return { fg: hex(fg), bg: hex(bg), ratio: ratio(fg, bg) }
  }
  const token = name => {
    const s = document.createElement('span')
    s.style.color = `var(${name})`
    document.body.append(s)
    const c = rgba(getComputedStyle(s).color)
    s.remove()
    return hex(c)
  }
  const oklch = c => {
    const lin = v => ((v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
    const [r, g, b] = c.slice(0, 3).map(lin)
    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
    const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)
    const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s
    const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
    return { L: Math.round((0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s) * 1000) / 1000, C: Math.hypot(A, B) }
  }
  const active = () => {
    const a = document.activeElement
    const r = a.getBoundingClientRect()
    const text = (a.textContent || '')
      .replace(/\u200b/g, '')
      .trim()
      .slice(0, 30)
    return {
      tag: a.tagName,
      id: a.id || undefined,
      text: text || `(${String(a.className).split(' ')[0] || a.tagName})`,
      x: Math.round(r.x),
      y: Math.round(r.y),
    }
  }
  const ring = el => {
    const cs = getComputedStyle(el)
    const outline = cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0 && rgba(cs.outlineColor)[3] > 0
    if (outline) return `${cs.outlineStyle} ${cs.outlineWidth} ${cs.outlineColor}`
    return cs.boxShadow === 'none' ? 'none' : `box-shadow ${cs.boxShadow}`
  }
  window.__g2 = { rgba, over, lum, ratio, hex, bgOf, contrast, token, oklch, active, ring }
}

async function stubSearch(page) {
  await page.route(/typesense\.net/, route => {
    const req = route.request()
    const cors = {
      'access-control-allow-origin': '*',
      'access-control-allow-headers': '*',
      'access-control-allow-methods': '*',
    }
    if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: cors })
    if (req.url().includes('/multi_search'))
      return route.fulfill({ status: 200, contentType: 'application/json', headers: cors, body: SEARCH_STUB })
    if (req.url().includes('/documents/search'))
      return route.fulfill({ status: 200, contentType: 'application/json', headers: cors, body: NOT_FOUND_STUB })
    return route.abort()
  })
}

const prepared = new WeakSet()
async function open(page, href, theme) {
  if (!prepared.has(page)) {
    prepared.add(page)
    await page.addInitScript(pageHelpers)
    await stubSearch(page)
  }
  await page.goto(href)
  if (theme && (await page.evaluate(t => localStorage.getItem('vitepress-theme-appearance') !== t, theme))) {
    await page.evaluate(t => localStorage.setItem('vitepress-theme-appearance', t), theme)
    await page.reload()
  }
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {})
  await page.waitForTimeout(300)
  if (
    theme &&
    (await page.evaluate(() => document.documentElement.classList.contains('dark'))) !== (theme === 'dark')
  ) {
    throw new Error(`theme ${theme} did not apply`)
  }
}

async function device(context, options) {
  const ctx = await context.browser().newContext(options)
  return { ctx, page: await ctx.newPage() }
}

const PHONE = { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }
const active = page => page.evaluate(() => __g2.active())

const DROPPED = {
  f5b32529: {
    css: /\.(?:[\w-]+\\:)*-?(?:text|bg|border|ring|shadow|outline|fill|stroke|decoration|divide|from|via|to|placeholder|caret|accent)-(?:accent-(?:hover-border|secondary)|ink-lightest|line-dark|code-(?:bg|inline)|badge-(?:tip|warning|error)|warning-bg)(?![\w-])|\.(?:[\w-]+\\:)*shadow-popover(?![\w-])/g,
    src: /(?<![\w-])(?:[\w-]+:)*-?(?:text|bg|border|ring|shadow|outline|fill|stroke|decoration|divide|from|via|to|placeholder|caret|accent)-(?:accent-(?:hover-border|secondary)|ink-lightest|line-dark|code-(?:bg|inline)|badge-(?:tip|warning|error)|warning-bg)(?![\w-])|(?<![\w-])(?:[\w-]+:)*shadow-popover(?![\w-])/,
    grep: 'ink-lightest|accent-hover-border|accent-secondary|line-dark|code-bg|code-inline|badge-(tip|warning|error)|warning-bg|shadow-popover',
    keys: [
      'theme.extend.colors.accent.hover-border',
      'theme.extend.colors.accent.secondary',
      'theme.extend.colors.ink.lightest',
      'theme.extend.colors.line.dark',
      'theme.extend.colors.code',
      'theme.extend.colors.badge',
      'theme.extend.colors.warning-bg',
      'theme.extend.boxShadow.popover',
    ],
  },
  c23acb4e: {
    css: /\.(?:max-)?mobile-narrow\\:|\.(?:[\w-]+\\:)*max-w-(?:content|home)(?![\w-])|\.(?:[\w-]+\\:)*-?(?:w|h|size|min-w|max-w|min-h|max-h|m[trblxyse]?|p[trblxyse]?|inset(?:-[xy])?|top|left|right|bottom|start|end|translate-[xy]|scroll-[mp][trblxyse]?|gap(?:-[xy])?|space-[xy]|basis)-(?:navbar|sidebar)(?![\w-])/g,
    src: /(?<![\w-])(?:max-)?mobile-narrow:|(?<![\w-])(?:[\w-]+:)*max-w-(?:content|home)(?![\w-])|(?<![\w-])(?:[\w-]+:)*-?(?:w|h|size|min-w|max-w|min-h|max-h|m[trblxyse]?|p[trblxyse]?|inset(?:-[xy])?|top|left|right|bottom|start|end|translate-[xy]|scroll-[mp][trblxyse]?|gap(?:-[xy])?|space-[xy]|basis)-(?:navbar|sidebar)(?![\w-])/,
    grep: 'mobile-narrow|max-w-(content|home)|-(navbar|sidebar)',
    keys: [
      'theme.screens.mobile-narrow',
      'theme.extend.spacing.navbar',
      'theme.extend.spacing.sidebar',
      'theme.extend.maxWidth.content',
      'theme.extend.maxWidth.home',
    ],
  },
}

async function builtCss(page) {
  return page.evaluate(async () =>
    (await Promise.all([...document.styleSheets].filter(s => s.href).map(s => fetch(s.href).then(r => r.text())))).join(
      '\n',
    ),
  )
}

function sourceUses(build, token) {
  let out = ''
  try {
    out = execFileSync(
      'git',
      [
        '-C',
        REPO,
        'grep',
        '-nE',
        DROPPED[token].grep,
        REF[build],
        '--',
        'docs-site/content',
        ':!docs-site/content/.vitepress/dist',
        ':!docs-site/content/.vitepress/cache',
      ],
      { encoding: 'utf8' },
    )
  } catch (e) {
    if (e.status !== 1) throw e
  }
  return out
    .split('\n')
    .filter(l => DROPPED[token].src.test(l.split(':').slice(3).join(':')))
    .map(l => {
      const [, file, line, ...rest] = l.split(':')
      return `${path.basename(file)}:${line} ${rest.join(':').match(DROPPED[token].src)[0]}`
    })
}

const docsRequire = createRequire(path.join(REPO, 'docs-site', 'package.json'))

function tailwindConfig(build) {
  const src = execFileSync('git', ['-C', REPO, 'show', `${REF[build]}:docs-site/tailwind.config.js`], {
    encoding: 'utf8',
  })
  const mod = { exports: {} }
  new Function('module', 'exports', 'require', src)(mod, mod.exports, docsRequire)
  return mod.exports
}

function tokenGate(token, build, css) {
  const config = tailwindConfig(build)
  const inConfig = DROPPED[token].keys.filter(k => k.split('.').reduce((o, key) => o?.[key], config) !== undefined)
  const inCss = [...new Set(css.match(DROPPED[token].css) || [])]
  const inSource = sourceUses(build, token)
  return {
    pass: !inConfig.length && !inCss.length && !inSource.length,
    value: { configKeys: inConfig, cssUtilities: inCss, sourceClassUses: inSource },
  }
}

async function compileDarkSample(build) {
  const exported = tailwindConfig(build)
  const config = {
    ...exported,
    content: [{ raw: '<span class="dark:underline"></span>' }],
    corePlugins: { ...exported.corePlugins, preflight: false },
  }
  const { css } = await docsRequire('postcss')([docsRequire('tailwindcss')(config)]).process('@tailwind utilities;', {
    from: undefined,
  })
  return { css, darkMode: exported.darkMode || 'unset (media)' }
}

function deadUtilityClasses() {
  const ruled = new Set()
  const walk = rules =>
    [...rules].forEach(r => {
      if (r.selectorText)
        (r.selectorText.match(/\.(?:\\.|[\w-])+/g) || []).forEach(c => ruled.add(c.slice(1).replace(/\\(.)/g, '$1')))
      if (r.cssRules) walk(r.cssRules)
    })
  ;[...document.styleSheets].forEach(s => {
    try {
      walk(s.cssRules)
    } catch {}
  })
  const utility =
    /[:[]|^-?(?:text|bg|border|ring|shadow|outline|fill|stroke|decoration|divide|from|via|to|accent|caret|placeholder|w|h|size|min-w|max-w|min-h|max-h|m[trblxyse]?|p[trblxyse]?|inset(?:-[xy])?|top|left|right|bottom|start|end|translate-[xy]|scroll-[mp][trblxyse]?|gap(?:-[xy])?|space-[xy]|rounded(?:-[trblse]{1,2})?|z|opacity|leading|tracking|font|basis|grid-cols|col-span|order|duration|ease|delay|animate|transition|underline-offset|line-clamp|aspect|justify|self|overflow|whitespace|break|cursor|select|pointer-events|origin|scale|rotate|blur|backdrop)-/
  const dead = new Set()
  document.querySelectorAll('[class]').forEach(e =>
    (e.getAttribute('class') || '').split(/\s+/).forEach(c => {
      if (c && utility.test(c) && !/^(group|peer)(\/|$)/.test(c) && !ruled.has(c)) dead.add(c)
    }),
  )
  return [...dead]
}

async function shiftTabWalk(page, url, presses) {
  await open(page, url('/docs/30.2/api/search.html'))
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
  await page.waitForTimeout(500)
  // start from the last control in the article, as a click in the blank space below it would
  await page.evaluate(() => {
    const stops = [...document.querySelectorAll('.vp-doc a[href], .vp-doc button, .vp-doc [tabindex="0"]')].filter(
      e => e.getClientRects().length,
    )
    stops[stops.length - 1].focus({ preventScroll: true })
  })
  await page.waitForTimeout(300)
  const measure = wait =>
    page.evaluate(
      wait =>
        new Promise(done =>
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              setTimeout(() => {
                const a = document.activeElement
                if (!a.closest('.vp-doc')) return done(null)
                const r = a.getBoundingClientRect()
                const floor = document.querySelector('[data-sticky-floor]').getBoundingClientRect().top
                done({
                  text: (a.textContent || '').trim().slice(0, 24),
                  top: Math.round(r.top),
                  floor: Math.round(floor),
                  covered: r.top < floor - 1 && r.bottom > 0,
                  tooTall: r.height > innerHeight - floor,
                })
              }, wait),
            ),
          ),
        ),
      wait,
    )
  const covered = []
  let stops = 0
  let tooTall = 0
  for (let i = 0; i < presses; i++) {
    await page.keyboard.press('Shift+Tab')
    let s = await measure(350)
    if (s && s.covered && !s.tooTall) s = await measure(400)
    if (!s) continue
    stops++
    if (s.tooTall) tooTall++
    else if (s.covered) covered.push(s)
  }
  return {
    pass: stops > 20 && covered.length === 0,
    value: {
      stops,
      covered: covered.length,
      tallerThanView: tooTall,
      first: covered.slice(0, 2).map(({ text, top, floor }) => ({ text, top, floor })),
    },
  }
}

module.exports = [
  // handoff 03, contrast and tokens
  {
    id: 'light-brand-text-passes-aa',
    title: 'Inline code, links and tip titles are readable in light mode',
    shas: ['886ec9e6'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      'On search.html in light mode, reads the WCAG ratio of the first code chip in an odd and an even parameter-table row, a prose link and the first tip title against what sits behind each. Passes when all four reach 4.5.',
    context: { viewport: { width: 1280, height: 800 } },
    theme: 'light',
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      const value = await page.evaluate(() => {
        const rows = document.querySelectorAll('.vp-doc table tbody tr')
        const els = {
          codeOddRow: rows[0].querySelector('code'),
          codeEvenRow: rows[1].querySelector('code'),
          link: document.querySelector(".vp-doc a[href*='collections.html#create-a-collection']"),
          tipTitle: document.querySelector('.vp-doc .custom-block.tip .custom-block-title'),
        }
        return Object.fromEntries(Object.entries(els).map(([k, el]) => [k, __g2.contrast(el)]))
      })
      return { pass: Object.values(value).every(c => c.ratio >= 4.5), value }
    },
  },
  {
    id: 'warning-title-passes-aa',
    title: 'Warning callout titles are readable in light mode, dark unchanged',
    shas: ['ff3818a2'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      'On install-typesense.html, reads the ratio of the first warning title against its callout fill, in light and in dark. Passes when both reach 4.5 (16px semibold is not large text).',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      const value = {}
      for (const theme of ['light', 'dark']) {
        await open(page, url('/docs/guide/install-typesense.html'), theme)
        value[theme] = await page.evaluate(() =>
          __g2.contrast(document.querySelector('.vp-doc .custom-block.warning .custom-block-title')),
        )
      }
      return { pass: value.light.ratio >= 4.5 && value.dark.ratio >= 4.5, value }
    },
  },
  {
    id: 'code-token-hues-differ-in-lightness',
    title: 'Coloured code tokens differ in lightness, not only hue, and stay readable',
    shas: ['e3d83063'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      'On search.html, collects every distinct hued colour (OKLCH chroma over 0.06) used by code tokens and reads their OKLCH lightness, in both themes. Passes when every pair is at least 0.05 apart in lightness and every visible token reaches 4.5 against its line.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      const value = {}
      for (const theme of ['light', 'dark']) {
        await open(page, url('/docs/30.2/api/search.html'), theme)
        value[theme] = await page.evaluate(() => {
          const g = __g2
          const spans = [...document.querySelectorAll('.vp-doc pre code span')].filter(
            s => !s.children.length && s.textContent.trim(),
          )
          const hued = new Map()
          let minContrast = 99
          spans.forEach(s => {
            const c = g.rgba(getComputedStyle(s).color)
            const { L, C } = g.oklch(c)
            if (C > 0.06) hued.set(g.hex(c), L)
            if (s.getClientRects().length) minContrast = Math.min(minContrast, g.contrast(s).ratio)
          })
          const L = [...hued.values()].sort((a, b) => b - a)
          const minGap = Math.min(...L.slice(1).map((l, i) => Math.round((L[i] - l) * 1000) / 1000))
          return { lightness: Object.fromEntries([...hued].sort((a, b) => b[1] - a[1])), minGap, minContrast }
        })
      }
      return { pass: ['light', 'dark'].every(t => value[t].minGap >= 0.05 && value[t].minContrast >= 4.5), value }
    },
  },
  {
    id: 'tailwind-dark-follows-site-toggle',
    title: 'A Tailwind dark: class would follow the site theme toggle, not the OS',
    shas: ['80cdff98'],
    kind: 'css',
    expect: 'flip',
    checks:
      "Nothing uses dark: yet, so the gate compiles one sample dark:underline class with the build's own tailwind.config.js and injects it into the live page. Passes when it stays off with the site on light and the OS on dark, and turns on with the site on dark and the OS on light.",
    context: { viewport: { width: 1280, height: 800 }, colorScheme: 'dark' },
    run: async ({ page, url, build }) => {
      const { css, darkMode } = await compileDarkSample(build)
      const probe = () =>
        page.evaluate(css => {
          const style = document.createElement('style')
          style.textContent = css
          const el = document.createElement('span')
          el.className = 'dark:underline'
          el.textContent = 'x'
          document.head.append(style)
          document.body.append(el)
          return getComputedStyle(el).textDecorationLine
        }, css)
      await open(page, url('/docs/30.2/api/search.html'), 'light')
      const siteLightOsDark = await probe()
      await page.emulateMedia({ colorScheme: 'light' })
      await open(page, url('/docs/30.2/api/search.html'), 'dark')
      const siteDarkOsLight = await probe()
      return {
        pass: siteLightOsDark === 'none' && siteDarkOsLight === 'underline',
        value: { darkMode, siteLightOsDark, siteDarkOsLight },
      }
    },
  },
  {
    id: 'small-gray-labels-pass-aa',
    title: 'Code block language labels and 404 suggestions are readable in both themes',
    shas: ['35505491'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      "Reads the ratio of the 'markdown' corner label on install-typesense.html, and of the 404 page's 'Were you looking for?' heading and suggestion URL (suggestions stubbed), in light and dark. Passes when all reach 4.5.",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      const value = {}
      for (const theme of ['light', 'dark']) {
        await open(page, url('/docs/guide/install-typesense.html'), theme)
        const label = await page.evaluate(
          () => __g2.contrast(document.querySelector(".vp-doc div[class*='language-markdown'] > span.lang")).ratio,
        )
        await open(page, url('/docs/guide/instal-typesense.html'), theme)
        await page.waitForSelector('#VPContent section.mt-14 li span.font-mono', { timeout: 10000 })
        await page.waitForTimeout(300)
        const nf = await page.evaluate(() => ({
          heading: __g2.contrast(document.querySelector('#VPContent section.mt-14 > h2')).ratio,
          url: __g2.contrast(document.querySelector('#VPContent section.mt-14 li span.font-mono')).ratio,
        }))
        value[theme] = { codeLabel: label, ...nf }
      }
      return { pass: Object.values(value).every(t => Object.values(t).every(r => r >= 4.5)), value }
    },
  },
  {
    id: 'unavailable-note-readable',
    title: "The copy menu's 'Unavailable' note matches its greyed row and clears 3:1",
    shas: ['aa3eebef'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      "Opens 'Choose copied languages' on analytics-query-suggestions.html in light and dark and reads the first 'Unavailable' note against the menu. Passes when it reaches 3.0 (the ledger's accepted floor for disabled-row text, which WCAG exempts) and has the same colour as its row.",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      const value = {}
      for (const theme of ['light', 'dark']) {
        await open(page, url('/docs/30.2/api/analytics-query-suggestions.html'), theme)
        await page.click("button[aria-label='Choose copied languages']")
        await page.waitForSelector("[role='dialog']")
        await page.waitForTimeout(400)
        value[theme] = await page.evaluate(() => {
          const note = [...document.querySelectorAll("[role='dialog'] span")].find(
            s => !s.children.length && s.textContent.trim() === 'Unavailable',
          )
          return {
            ...__g2.contrast(note),
            sameAsRow: getComputedStyle(note).color === getComputedStyle(note.parentElement).color,
          }
        })
      }
      return { pass: ['light', 'dark'].every(t => value[t].ratio >= 3 && value[t].sameAsRow), value }
    },
  },
  {
    id: 'dropped-colour-tokens-gone',
    title: 'The unused Tailwind colours and popover shadow are gone from the config and nothing uses them',
    shas: ['f5b32529'],
    kind: 'css',
    expect: 'flip',
    checks:
      "Reads tailwind.config.js at the build's commit with git show and lists which of the keys f5b32529 deleted are still there (accent hover-border and secondary, ink lightest, line dark, code, badge, warning-bg, boxShadow popover). Also fetches the page's built stylesheets for utilities made from them and greps every source and markdown file at that commit for class uses. Passes when all three lists are empty. Base fails because its config still has every key, and it still uses text-ink-lightest.",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url, build }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      return tokenGate('f5b32529', build, await builtCss(page))
    },
  },
  {
    id: 'dropped-layout-tokens-unused',
    title: 'The unused breakpoint, spacing and max-width tokens are gone from the config and used nowhere',
    shas: ['c23acb4e'],
    kind: 'css',
    expect: 'flip',
    checks:
      'Same three lists for the keys c23acb4e deleted, the mobile-narrow screen, spacing navbar and sidebar, and maxWidth content and home. Base fails because its config still has them. Nothing used them on base either, so the CSS and source lists are empty on both builds.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url, build }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      return tokenGate('c23acb4e', build, await builtCss(page))
    },
  },
  {
    id: 'no-dead-utility-classes',
    title: 'Every Tailwind class on the page still produces CSS',
    shas: ['f5b32529', 'c23acb4e', '66d59344'],
    kind: 'css',
    expect: 'guard',
    checks:
      "Visits search, install-typesense, home and the 404 at 1280, opens the copy menu, version list and search modal, then the phone menu at 390 and the extra menu at 768. Lists utility-shaped classes in the DOM that no loaded CSS rule matches. Passes when the only one is sm:gap-2.5, a stock shadcn class that never generated because 'sm' isn't a screen in this config.",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      const dead = new Set()
      const take = async () => (await page.evaluate(deadUtilityClasses)).forEach(c => dead.add(c))
      for (const p of [
        '/docs/30.2/api/search.html',
        '/docs/guide/install-typesense.html',
        '/docs/',
        '/docs/nope.html',
      ]) {
        await open(page, url(p))
        await take()
      }
      await open(page, url('/docs/30.2/api/analytics-query-suggestions.html'))
      await page.click("button[aria-label='Choose copied languages']")
      await page.waitForTimeout(400)
      await take()
      await page.keyboard.press('Escape')
      await page.click(".aside-pinned-version button[role='combobox']")
      await page.waitForTimeout(400)
      await take()
      await page.keyboard.press('Escape')
      await page.click('.DocSearch-Button')
      await page.fill('.DocSearch-Input', 'vector search')
      await page.waitForSelector('.DocSearch-Hit', { timeout: 10000 })
      await take()
      await page.keyboard.press('Escape')
      await page.setViewportSize({ width: 390, height: 844 })
      await open(page, url('/docs/30.2/api/search.html'))
      await page.click('.VPNavBarHamburger')
      await page.waitForTimeout(500)
      await take()
      await page.setViewportSize({ width: 768, height: 1024 })
      await open(page, url('/docs/30.2/api/search.html'))
      await page.focus("button[aria-label='extra navigation']")
      await page.keyboard.press('Enter')
      await page.waitForTimeout(400)
      await take()
      const unexpected = [...dead].filter(c => c !== 'sm:gap-2.5')
      return { pass: unexpected.length === 0, value: { dead: [...dead].sort() } }
    },
  },
  {
    id: 'shadcn-hover-stays-neutral',
    title: 'Copy Markdown, language and raw-markdown buttons hover gray, the checked version stays lime',
    shas: ['66d59344'],
    kind: 'dom',
    expect: 'guard',
    checks:
      'On documents.html in light and dark, hovers the three action buttons and reads their fill and text, opens the version list and reads the checked row, then presses ArrowDown and reads the focused row. Passes when the hovers resolve to gray 4 with gray 12 text, the checked row is brand 5 and the focused row is a neutral gray.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      const value = {}
      let pass = true
      for (const theme of ['light', 'dark']) {
        await open(page, url('/docs/30.2/api/documents.html'), theme)
        const want = await page.evaluate(() => ({
          fill: __g2.token('--gray-4'),
          text: __g2.token('--gray-12'),
          lime: __g2.token('--brand-5-raw'),
        }))
        const hovers = []
        for (const sel of [
          '.markdown-actions button >> nth=0',
          "button[aria-label='Choose copied languages']",
          "a[aria-label='View raw markdown']",
        ]) {
          await page.hover(sel)
          await page.waitForTimeout(400)
          hovers.push(
            await page
              .locator(sel)
              .evaluate(e => [
                __g2.hex(__g2.rgba(getComputedStyle(e).backgroundColor)),
                __g2.hex(__g2.rgba(getComputedStyle(e).color)),
              ]),
          )
          await page.mouse.move(640, 790)
          await page.waitForTimeout(200)
        }
        await page.click(".aside-pinned-version button[role='combobox']")
        await page.waitForSelector("[role='listbox']")
        await page.waitForTimeout(300)
        const checked = await page.evaluate(() =>
          __g2.hex(
            __g2.rgba(
              getComputedStyle(document.querySelector("[role='option'][data-state='checked']")).backgroundColor,
            ),
          ),
        )
        await page.keyboard.press('ArrowDown')
        await page.waitForTimeout(300)
        const focused = await page.evaluate(() =>
          __g2.hex(__g2.bgOf(document.querySelector("[role='option'][data-highlighted]"))),
        )
        await page.keyboard.press('Escape')
        const rgb = focused.match(/\w\w/g).map(h => parseInt(h, 16))
        const neutral = Math.max(...rgb) - Math.min(...rgb) < 24
        pass = pass && hovers.every(([f, t]) => f === want.fill && t === want.text) && checked === want.lime && neutral
        value[theme] = { hovers: hovers.map(h => h.join(' on ')), checked, focused, expected: want }
      }
      return { pass, value }
    },
  },
  {
    id: 'dark-selection-keeps-code-readable',
    title: 'Selected code and gray text stay readable in dark mode',
    shas: ['78e0b917'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      'Dark mode on search.html. Reads the ::selection fill (getComputedStyle resolves it in this Chromium) over the first visible code block, then the lowest ratio of any token in that block and of the gray table header against it. Passes when both reach 4.5 and tip prose still selects in brand 5.',
    context: { viewport: { width: 1280, height: 800 } },
    theme: 'dark',
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      const value = await page.evaluate(() => {
        const g = __g2
        const pre = [...document.querySelectorAll('.vp-doc pre')].find(p => p.offsetHeight)
        const spans = [...pre.querySelectorAll('span')].filter(s => !s.children.length && s.textContent.trim())
        const sel = g.over(g.rgba(getComputedStyle(spans[0], '::selection').backgroundColor), g.bgOf(pre))
        const onSel = el => g.ratio(g.over(g.rgba(getComputedStyle(el).color), sel), sel)
        const th = document.querySelector('.vp-doc th')
        const thSel = g.over(g.rgba(getComputedStyle(th, '::selection').backgroundColor), g.bgOf(th))
        const tipP = document.querySelector('.vp-doc .custom-block.tip p:not(.custom-block-title)')
        return {
          selection: g.hex(sel),
          lowestToken: Math.min(...spans.map(onSel)),
          grayHeader: g.ratio(g.over(g.rgba(getComputedStyle(th).color), thSel), thSel),
          tipProseSelection: g.hex(g.rgba(getComputedStyle(tipP, '::selection').backgroundColor)),
          brand5: g.token('--brand-5-raw'),
        }
      })
      return {
        pass: value.lowestToken >= 4.5 && value.grayHeader >= 4.5 && value.tipProseSelection === value.brand5,
        value,
      }
    },
  },
  {
    id: 'table-labels-normal-tracking',
    title: 'Table headers and phone column labels lose their wide letter-spacing',
    shas: ['39ab66e7'],
    kind: 'css',
    expect: 'flip',
    checks:
      "Reads letter-spacing of the first table header on search.html at 1280, and of the phone 'Behavior' column label (td::before) on documents.html at 390. Passes when both are normal.",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, context, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      const header = await page.evaluate(() => getComputedStyle(document.querySelector('.vp-doc th')).letterSpacing)
      const phone = await device(context, PHONE)
      await open(phone.page, url('/docs/30.2/api/documents.html'))
      const label = await phone.page.evaluate(
        () => getComputedStyle(document.querySelector(".vp-doc td[data-label='Behavior']"), '::before').letterSpacing,
      )
      await phone.ctx.close()
      const normal = v => v === 'normal' || v === '0px'
      return { pass: normal(header) && normal(label), value: { header, phoneLabel: label } }
    },
  },
  {
    id: 'dark-popovers-lifted',
    title: 'Dark version list and copy menu sit on a lighter gray than code blocks',
    shas: ['5bfe7432'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      'Dark mode. Opens the aside version list on search.html and the copy menu on analytics-query-suggestions.html, and compares each surface with the code block fill (gray 2). Passes when both surfaces are lighter by at least 1.05:1, the ArrowDown row is lighter than its list and the checked row stays brand 5.',
    context: { viewport: { width: 1280, height: 800 } },
    theme: 'dark',
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      await page.click(".aside-pinned-version button[role='combobox']")
      await page.waitForSelector("[role='listbox']")
      await page.waitForTimeout(300)
      const checked = await page.evaluate(
        () =>
          __g2.hex(
            __g2.rgba(
              getComputedStyle(document.querySelector("[role='option'][data-state='checked']")).backgroundColor,
            ),
          ) === __g2.token('--brand-5-raw'),
      )
      await page.keyboard.press('ArrowDown')
      await page.waitForTimeout(300)
      const list = await page.evaluate(() => {
        const g = __g2
        const code = g.bgOf(document.querySelector('.vp-doc div[class*=language-]'))
        const surface = g.bgOf(document.querySelector("[role='listbox']"))
        const row = g.bgOf(document.querySelector("[role='option'][data-highlighted]"))
        return {
          code: g.hex(code),
          list: g.hex(surface),
          listVsCode: g.lum(surface) > g.lum(code) ? g.ratio(surface, code) : 1,
          focusedRow: g.hex(row),
          rowVsList: g.lum(row) > g.lum(surface) ? g.ratio(row, surface) : 1,
        }
      })
      await page.keyboard.press('Escape')
      await open(page, url('/docs/30.2/api/analytics-query-suggestions.html'))
      await page.click("button[aria-label='Choose copied languages']")
      await page.waitForSelector("[role='dialog']")
      await page.waitForTimeout(400)
      const menu = await page.evaluate(() => {
        const g = __g2
        const code = g.bgOf(document.querySelector('.vp-doc div[class*=language-]'))
        const surface = g.bgOf(document.querySelector("[role='dialog']"))
        return { copyMenu: g.hex(surface), copyMenuVsCode: g.lum(surface) > g.lum(code) ? g.ratio(surface, code) : 1 }
      })
      const value = { ...list, ...menu, checkedRowLime: checked }
      return { pass: value.listVsCode >= 1.05 && value.copyMenuVsCode >= 1.05 && value.rowVsList > 1 && checked, value }
    },
  },
  {
    id: 'search-hit-mark-passes-aa',
    title: 'The matched words in the selected search hit are readable in light mode',
    shas: ['6ad33ed6'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      "Light mode. Opens search on search.html and types 'vector search' (results replayed from one captured live response). Reads the first highlighted word in the selected hit against that hit's fill. Passes at 4.5.",
    context: { viewport: { width: 1280, height: 800 } },
    theme: 'light',
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      await page.click('.DocSearch-Button')
      await page.fill('.DocSearch-Input', 'vector search')
      await page.waitForSelector(".DocSearch-Hit[aria-selected='true'] mark", { timeout: 15000 })
      await page.waitForTimeout(400)
      const value = await page.evaluate(() => ({
        ...__g2.contrast(document.querySelector(".DocSearch-Hit[aria-selected='true'] mark")),
        word: document.querySelector(".DocSearch-Hit[aria-selected='true'] mark").textContent,
      }))
      return { pass: value.ratio >= 4.5, value }
    },
  },
  {
    id: 'dark-nav-flyout-lifted',
    title: "The tablet '•••' menu sits on the same lifted gray as the other dark menus",
    shas: ['fe94d5f1'],
    kind: 'contrast',
    expect: 'flip',
    checks:
      "Dark mode at 768. Opens 'extra navigation' from the keyboard (so hover plays no part) and compares the visible menu panel with the code block fill. Passes when the panel is lighter by at least 1.05:1.",
    context: { viewport: { width: 768, height: 1024 } },
    theme: 'dark',
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      await page.focus("button[aria-label='extra navigation']")
      await page.keyboard.press('Enter')
      await page.waitForSelector('.VPMenu >> visible=true')
      await page.waitForTimeout(300)
      const value = await page.locator('.VPMenu >> visible=true').evaluate(m => {
        const g = __g2
        const code = g.bgOf(document.querySelector('.vp-doc div[class*=language-]'))
        const panel = g.bgOf(m)
        return {
          panel: g.hex(panel),
          code: g.hex(code),
          panelVsCode: g.lum(panel) > g.lum(code) ? g.ratio(panel, code) : 1,
        }
      })
      return { pass: value.panelVsCode >= 1.05, value }
    },
  },

  // handoff 04, shell keyboard
  {
    id: 'focus-clear-of-pinned-bars-desktop',
    title: 'Shift+Tab never leaves a focused link hidden under the pinned section bars (1440)',
    shas: ['d74ea978'],
    kind: 'focus-order',
    expect: 'flip',
    checks:
      "At 1440 on search.html, starts from the article's last control at the bottom and presses Shift+Tab 60 times. After each stop it waits two frames plus 350ms and counts article stops whose top sits above the bottom of the pinned bars ([data-sticky-floor]). Stops taller than the space below the bars can't fit and are counted apart. Passes at 0 covered.",
    context: { viewport: { width: 1440, height: 900 } },
    run: ({ page, url }) => shiftTabWalk(page, url, 60),
  },
  {
    id: 'focus-clear-of-pinned-bars-phone',
    title: 'Shift+Tab never leaves a focused link hidden under the pinned bars on a phone',
    shas: ['d74ea978'],
    kind: 'focus-order',
    expect: 'flip',
    checks: 'Same walk at 390x844 with touch, where the nav also slides away and back. Passes at 0 covered.',
    context: PHONE,
    run: ({ page, url }) => shiftTabWalk(page, url, 60),
  },
  {
    id: 'closed-phone-sidebar-out-of-tab-order',
    title: 'The closed phone sidebar takes no keyboard focus, the desktop sidebar still does',
    shas: ['f01a81ed'],
    kind: 'focus-order',
    expect: 'flip',
    checks:
      'At 390 with touch, reads the closed .VPSidebar visibility and presses Tab 40 times from the top, counting stops inside the sidebar. Repeats at 1280. Passes when the phone sidebar is hidden with 0 stops and the desktop one is visible with stops.',
    context: PHONE,
    run: async ({ page, context, url }) => {
      const walk = async p => {
        await open(p, url('/docs/30.2/api/search.html'))
        const visibility = await p.evaluate(() => getComputedStyle(document.querySelector('.VPSidebar')).visibility)
        const xs = []
        for (let i = 0; i < 40; i++) {
          await p.keyboard.press('Tab')
          const a = await p.evaluate(
            () =>
              document.activeElement.closest('.VPSidebar') &&
              Math.round(document.activeElement.getBoundingClientRect().x),
          )
          if (a !== null) xs.push(a)
        }
        return { visibility, sidebarStops: xs.length, firstX: xs[0] }
      }
      const phone = await walk(page)
      const desk = await device(context, { viewport: { width: 1280, height: 800 } })
      const desktop = await walk(desk.page)
      await desk.ctx.close()
      return {
        pass:
          phone.visibility === 'hidden' &&
          phone.sidebarStops === 0 &&
          desktop.visibility === 'visible' &&
          desktop.sidebarStops > 0,
        value: { phone, desktop },
      }
    },
  },
  {
    id: 'phone-menu-escape-and-focus-trap',
    title: 'The phone menu keeps Tab inside it and closes on Escape with focus back on the hamburger',
    shas: ['6c40f66a'],
    kind: 'keyboard',
    expect: 'flip',
    checks:
      'At 390 with touch, taps the hamburger and checks the skip link, local nav, sidebar and content are inert. Presses Tab 16 times and counts stops outside the nav (the document wrap to <body> excepted), then Escape. Passes when all four are inert, no stop escapes, and Escape closes the menu with focus on the hamburger and no inert left.',
    context: PHONE,
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      await page.tap('.VPNavBarHamburger')
      await page.waitForTimeout(500)
      const inert = await page.evaluate(() =>
        ['.VPSkipLink', '.VPLocalNav', '.VPSidebar', '.VPContent'].every(
          s => !!document.querySelector(s)?.closest('[inert]'),
        ),
      )
      const outside = []
      for (let i = 0; i < 16; i++) {
        await page.keyboard.press('Tab')
        const a = await page.evaluate(() =>
          document.activeElement === document.body || document.activeElement.closest('.VPNav')
            ? null
            : (document.activeElement.textContent || '').trim().slice(0, 20),
        )
        if (a !== null) outside.push(a)
      }
      await page.keyboard.press('Escape')
      await page.waitForTimeout(400)
      const after = await page.evaluate(() => ({
        menuOpen: !!document.querySelector('#VPNavScreen'),
        focusOnHamburger: document.activeElement.matches('.VPNavBarHamburger'),
        inertLeft: document.querySelectorAll('[inert]').length,
      }))
      return {
        pass: inert && outside.length === 0 && !after.menuOpen && after.focusOnHamburger && after.inertLeft === 0,
        value: { restInert: inert, stopsOutsideMenu: outside.slice(0, 4), afterEscape: after },
      }
    },
  },
  {
    id: 'cross-page-link-keeps-focus',
    title: 'Following a link to a heading on another page leaves focus there',
    shas: ['08c5cbf5'],
    kind: 'focus-order',
    expect: 'flip',
    checks:
      'On search.html, focuses the first link to collections.html#schema-parameters and presses Enter. After the landing, reads the focused element and scrollY, then presses Tab and reads them again. Passes when focus is on #schema-parameters and the Tab stays in the article within 100px of the landing.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      await page.focus(".vp-doc a[href*='collections.html#schema-parameters']")
      await page.keyboard.press('Enter')
      await page.waitForFunction(() => location.hash === '#schema-parameters', null, { timeout: 10000 })
      await page.waitForTimeout(800)
      const landed = { ...(await active(page)), scrollY: await page.evaluate(() => Math.round(scrollY)) }
      await page.keyboard.press('Tab')
      await page.waitForTimeout(300)
      const next = {
        ...(await active(page)),
        scrollY: await page.evaluate(() => Math.round(scrollY)),
        inArticle: await page.evaluate(() => !!document.activeElement.closest('.vp-doc')),
      }
      return {
        pass: landed.id === 'schema-parameters' && next.inArticle && Math.abs(next.scrollY - landed.scrollY) < 100,
        value: {
          landed: { tag: landed.tag, id: landed.id, scrollY: landed.scrollY },
          afterTab: { tag: next.tag, text: next.text, inArticle: next.inArticle, scrollY: next.scrollY },
        },
      }
    },
  },
  {
    id: 'skip-link-lands-in-article',
    title: "'Skip to content' goes straight to the article, past the version picker and outline",
    shas: ['64ec5980'],
    kind: 'focus-order',
    expect: 'flip',
    checks:
      'At 1440, presses Tab (must focus .VPSkipLink), Enter, then Tab until focus is inside .VPDoc main, on search.html and install-typesense.html. Passes when the first Tab after the skip is already in the article on both pages.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, url }) => {
      const value = {}
      for (const p of ['/docs/30.2/api/search.html', '/docs/guide/install-typesense.html']) {
        await open(page, url(p))
        await page.keyboard.press('Tab')
        const onSkip = await page.evaluate(() => document.activeElement.matches('.VPSkipLink'))
        await page.keyboard.press('Enter')
        await page.waitForTimeout(300)
        let before = 0
        let first = null
        for (; before < 60; before++) {
          await page.keyboard.press('Tab')
          const a = await page.evaluate(() => ({
            inArticle: !!document.activeElement.closest('.VPDoc main'),
            inAside: !!document.activeElement.closest('.VPDocAside'),
            text: __g2.active().text,
          }))
          first = first || a
          if (a.inArticle) break
        }
        value[path.basename(p)] = {
          onSkip,
          stopsBeforeArticle: before,
          firstStop: first.inAside ? `aside: ${first.text}` : first.text,
        }
      }
      return { pass: Object.values(value).every(v => v.onSkip && v.stopsBeforeArticle === 0), value }
    },
  },
  {
    id: 'outline-dropdown-state-and-focus',
    title: "'On this page' reports open or closed and Escape puts focus back on it",
    shas: ['4bcb92ad'],
    kind: 'aria',
    expect: 'flip',
    checks:
      "At 390 (touch) and 768, reads aria-expanded and aria-controls on the 'On this page' toggle, clicks it, reads them again, focuses the first outline link and presses Escape. Passes when it goes 'false' to 'true', aria-controls names the open list, and Escape closes it with focus on the toggle.",
    context: PHONE,
    run: async ({ page, context, url }) => {
      const check = async p => {
        await open(p, url('/docs/30.2/api/search.html'))
        const btn = p.locator('.VPLocalNavOutlineDropdown > button')
        const closed = await btn.getAttribute('aria-expanded')
        await btn.click()
        await p.waitForTimeout(300)
        const opened = await btn.evaluate(b => ({
          expanded: b.getAttribute('aria-expanded'),
          controlsList:
            !!b.getAttribute('aria-controls') &&
            !!document.getElementById(b.getAttribute('aria-controls'))?.querySelector('a'),
        }))
        await p.locator('.VPLocalNavOutlineDropdown .items a >> nth=0').focus()
        await p.keyboard.press('Escape')
        await p.waitForTimeout(300)
        const after = await p.evaluate(() => ({
          open: !!document.querySelector('.VPLocalNavOutlineDropdown .items'),
          focus: document.activeElement.matches('.VPLocalNavOutlineDropdown > button')
            ? 'toggle'
            : document.activeElement.tagName,
        }))
        return { closed, ...opened, afterEscape: after }
      }
      const phone = await check(page)
      const tab = await device(context, { viewport: { width: 768, height: 1024 } })
      const tablet = await check(tab.page)
      await tab.ctx.close()
      const ok = v =>
        v.closed === 'false' &&
        v.expanded === 'true' &&
        v.controlsList &&
        !v.afterEscape.open &&
        v.afterEscape.focus === 'toggle'
      return { pass: ok(phone) && ok(tablet), value: { phone, tablet } }
    },
  },
  {
    id: 'sidebar-groups-state-one-stop',
    title: 'Collapsible sidebar groups announce their state and take one Tab stop each',
    shas: ['e5046597'],
    kind: 'aria',
    expect: 'flip',
    checks:
      "On search.html, every sidebar role=button must carry aria-expanded. Focuses 'API Resources', presses Enter and Tab, and reads where focus went. On install-typesense.html, every caret button must carry aria-expanded and no group row may be a dead tabindex=0 stop. Passes when all hold and the Tab after Enter reaches 'API Errors'.",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      const api = await page.evaluate(() => {
        const buttons = [...document.querySelectorAll('.VPSidebar [role=button]')]
        return {
          buttons: buttons.length,
          withoutExpanded: buttons.filter(b => !b.hasAttribute('aria-expanded')).length,
        }
      })
      await page.locator('.VPSidebar [role=button]', { hasText: 'API Resources' }).focus()
      await page.keyboard.press('Enter')
      await page.waitForTimeout(300)
      const expandedAfterEnter = await page
        .locator('.VPSidebar .item', { hasText: 'API Resources' })
        .first()
        .evaluate(
          i =>
            (i.matches('[role=button]') ? i : i.querySelector('[role=button]'))?.getAttribute('aria-expanded') ?? null,
        )
      await page.keyboard.press('Tab')
      const nextStop = await page.evaluate(
        () =>
          (document.activeElement.textContent || '').trim().slice(0, 20) ||
          `(${document.activeElement.className.split(' ')[0]})`,
      )
      await open(page, url('/docs/guide/install-typesense.html'))
      const guide = await page.evaluate(() => ({
        caretButtonsWithoutExpanded: [...document.querySelectorAll('.VPSidebar .caret[role=button]')].filter(
          c => !c.hasAttribute('aria-expanded'),
        ).length,
        deadRowStops: document.querySelectorAll(".VPSidebar .item[tabindex='0']:not([role])").length,
      }))
      return {
        pass:
          api.withoutExpanded === 0 &&
          expandedAfterEnter === 'false' &&
          nextStop === 'API Errors' &&
          guide.caretButtonsWithoutExpanded === 0 &&
          guide.deadRowStops === 0,
        value: { api: { ...api, expandedAfterEnter, tabAfterEnter: nextStop }, guide },
      }
    },
  },
  {
    id: 'extra-menu-click-only',
    title: "The tablet '•••' menu opens on click or tap only and closes on Escape",
    shas: ['f2ad9046'],
    kind: 'aria',
    expect: 'flip',
    checks:
      "At 768 with a mouse, hovers 'extra navigation' for 500ms and counts visible menus, then opens it from the keyboard and presses Escape. Then a first tap at 820x1180 with touch. Passes when hover opens nothing, Escape closes it with aria-expanded 'false' and focus on the trigger, and the first tap opens it with aria-expanded 'true'.",
    context: { viewport: { width: 768, height: 1024 } },
    run: async ({ page, context, url }) => {
      const T = "button[aria-label='extra navigation']"
      const state = async p => [
        await p.locator(T).getAttribute('aria-expanded'),
        await p.locator('.VPMenu >> visible=true').count(),
      ]
      await open(page, url('/docs/30.2/api/search.html'))
      await page.hover(T)
      await page.waitForTimeout(500)
      const hover = (await state(page))[1]
      await page.mouse.move(380, 700)
      await page.waitForTimeout(300)
      await page.focus(T)
      await page.keyboard.press('Enter')
      await page.waitForTimeout(400)
      const opened = await state(page)
      await page.keyboard.press('Escape')
      await page.waitForTimeout(400)
      const escape = [
        ...(await state(page)),
        await page.evaluate(t => document.activeElement === document.querySelector(t), T),
      ]
      const touch = await device(context, { viewport: { width: 820, height: 1180 }, isMobile: true, hasTouch: true })
      await open(touch.page, url('/docs/30.2/api/search.html'))
      await touch.page.tap(T)
      await touch.page.waitForTimeout(500)
      const tap = await state(touch.page)
      await touch.ctx.close()
      return {
        pass:
          hover === 0 &&
          opened[0] === 'true' &&
          opened[1] === 1 &&
          escape[0] === 'false' &&
          escape[1] === 0 &&
          escape[2] &&
          tap[0] === 'true' &&
          tap[1] === 1,
        value: {
          hoverMenus: hover,
          keyboardOpen: opened.join(' / '),
          afterEscape: escape.join(' / '),
          firstTap: tap.join(' / '),
        },
      }
    },
  },
  {
    id: 'extra-menu-closes-with-trigger',
    title: "The open '•••' menu goes away when the window crosses 1280 or 768",
    shas: ['9b561402'],
    kind: 'dom',
    expect: 'guard',
    checks:
      "At 768, opens 'extra navigation' from the keyboard, resizes to 1280x800 and counts visible menus. Reloads at 768, opens it again, resizes to 390x844 and counts again. Passes when it was open each time and 0 remain. Base passes because its menu lived inside the trigger.",
    context: { viewport: { width: 768, height: 1024 } },
    run: async ({ page, url }) => {
      const T = "button[aria-label='extra navigation']"
      const run = async size => {
        await page.setViewportSize({ width: 768, height: 1024 })
        await open(page, url('/docs/30.2/api/search.html'))
        await page.focus(T)
        await page.keyboard.press('Enter')
        await page.waitForTimeout(400)
        const before = await page.locator('.VPMenu >> visible=true').count()
        await page.setViewportSize(size)
        await page.waitForTimeout(400)
        return [before, await page.locator('.VPMenu >> visible=true').count()]
      }
      const wide = await run({ width: 1280, height: 800 })
      const narrow = await run({ width: 390, height: 844 })
      return {
        pass: wide[0] === 1 && wide[1] === 0 && narrow[0] === 1 && narrow[1] === 0,
        value: { to1280: `open ${wide[0]} then ${wide[1]}`, to390: `open ${narrow[0]} then ${narrow[1]}` },
      }
    },
  },
  {
    id: 'parameter-anchor-focus-no-ring',
    title: 'A link to a parameter on another page focuses the parameter without a focus ring',
    shas: ['705326e8', '08c5cbf5'],
    kind: 'focus-order',
    expect: 'flip',
    checks:
      "On api-keys.html, focuses the link to search.html#pinned_hits and presses Enter. Reads the focused element's outline and box-shadow. Then focuses span#pinned_hits directly (keyboard heuristic still on) to read the ring it would get. Passes when focus landed on the span and neither shows a visible outline or any box-shadow.",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/api-keys.html'))
      await page.focus("a[href$='search.html#pinned_hits']")
      await page.keyboard.press('Enter')
      await page.waitForFunction(
        () => location.pathname.endsWith('/30.2/api/search.html') && document.getElementById('pinned_hits'),
        null,
        { timeout: 10000 },
      )
      await page.waitForTimeout(600)
      const landed = await page.evaluate(() => {
        const a = document.activeElement
        return { tag: a.tagName, id: a.id || '(none)', ring: __g2.ring(a) }
      })
      const forced = await page.evaluate(() => {
        const s = document.getElementById('pinned_hits')
        if (document.activeElement !== s) {
          s.setAttribute('tabindex', '-1')
          s.focus({ preventScroll: true })
        }
        return { focusVisible: s.matches(':focus-visible'), ring: __g2.ring(s) }
      })
      return {
        pass: landed.id === 'pinned_hits' && landed.ring === 'none' && forced.ring === 'none',
        value: { landed, ifFocused: forced },
      }
    },
  },

  // guards near the changes
  {
    id: 'guard-hash-loads-land-below-bars',
    title: 'Direct #hash loads still land just below the pinned bars',
    shas: ['d74ea978'],
    kind: 'focus-order',
    expect: 'guard',
    checks:
      'Fresh loads of search.html#caching-parameters (h3) and #supported-functions (h4) at 1440 and #pagination (h2) at 390. After 1.5s compares the heading top with the bottom of the pinned bars. Passes when each sits between 2px above and 30px below it.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      const land = async (p, hash) => {
        // a goto that only changes the hash would stay in the same document and skip the load path
        await p.goto('about:blank')
        await open(p, url('/docs/30.2/api/search.html#' + hash))
        await p.waitForTimeout(1500)
        return p.evaluate(h => {
          const top = Math.round(document.getElementById(h).getBoundingClientRect().top)
          const floor = Math.round(document.querySelector('[data-sticky-floor]').getBoundingClientRect().top)
          return { top, floor }
        }, hash)
      }
      const value = { h3: await land(page, 'caching-parameters'), h4: await land(page, 'supported-functions') }
      const phone = await device(context, PHONE)
      value.phoneH2 = await land(phone.page, 'pagination')
      await phone.ctx.close()
      return { pass: Object.values(value).every(v => v.top >= v.floor - 2 && v.top <= v.floor + 30), value }
    },
  },
  {
    id: 'guard-phone-drawer-focus-and-lock',
    title: "The phone sidebar drawer still takes focus, locks scroll and returns focus to 'Menu'",
    shas: ['f01a81ed'],
    kind: 'keyboard',
    expect: 'guard',
    checks:
      "At 390 with touch, focuses 'Menu' in the bar under the nav and presses Enter. Reads whether the drawer is open, focus is inside it and the body is overflow hidden, then moves the mouse over the backdrop at 370,600 and checks a wheel scroll there leaves the page where it was. Presses Escape and reads the drawer and focus again.",
    context: PHONE,
    run: async ({ page, url }) => {
      await open(page, url('/docs/30.2/api/search.html'))
      await page.locator('.VPLocalNav button', { hasText: 'Menu' }).focus()
      await page.keyboard.press('Enter')
      await page.waitForTimeout(600)
      const open_ = await page.evaluate(() => ({
        open: document.querySelector('.VPSidebar').classList.contains('open'),
        focusInside: !!document.activeElement.closest('.VPSidebar'),
        bodyOverflow: getComputedStyle(document.body).overflow,
      }))
      const y = await page.evaluate(() => scrollY)
      await page.mouse.move(370, 600)
      await page.mouse.wheel(0, 600)
      await page.waitForTimeout(400)
      const pageMoved = (await page.evaluate(() => scrollY)) - y
      await page.keyboard.press('Escape')
      await page.waitForTimeout(600)
      const closed = await page.evaluate(() => ({
        open: document.querySelector('.VPSidebar').classList.contains('open'),
        focus: (document.activeElement.textContent || '').trim().slice(0, 20),
      }))
      return {
        pass:
          open_.open &&
          open_.focusInside &&
          open_.bodyOverflow === 'hidden' &&
          pageMoved === 0 &&
          !closed.open &&
          closed.focus === 'Menu',
        value: { opened: open_, pageMovedOnWheel: pageMoved, afterEscape: closed },
      }
    },
  },
  {
    id: 'guard-skip-link-shows-on-focus',
    title: "'Skip to content' still appears top left on focus and reads well in both themes",
    shas: ['08c5cbf5', '64ec5980'],
    kind: 'contrast',
    expect: 'guard',
    checks:
      'At 1280 in light and dark, presses Tab once and reads the focused skip link box and its contrast. Passes when it sits within 24px of the top-left corner, is at least 80x24 and reaches 4.5.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      const value = {}
      for (const theme of ['light', 'dark']) {
        await open(page, url('/docs/30.2/api/search.html'), theme)
        await page.keyboard.press('Tab')
        value[theme] = await page.evaluate(() => {
          const a = document.activeElement
          const r = a.getBoundingClientRect()
          return {
            isSkip: a.matches('.VPSkipLink'),
            box: [r.x, r.y, r.width, r.height].map(Math.round).join(','),
            ratio: __g2.contrast(a).ratio,
          }
        })
      }
      const ok = v => {
        const [x, y, w, h] = v.box.split(',').map(Number)
        return v.isSkip && x <= 24 && y <= 24 && w >= 80 && h >= 24 && v.ratio >= 4.5
      }
      return { pass: ok(value.light) && ok(value.dark), value }
    },
  },
  {
    id: 'guard-no-overflow-360',
    title: 'Nothing scrolls sideways at 360px',
    shas: ['f01a81ed', '6c40f66a', '4bcb92ad', '39ab66e7'],
    kind: 'dom',
    expect: 'guard',
    checks:
      "At 360x740 with touch, loads five pages and reads the root's scrollWidth minus its clientWidth, then opens the phone menu on search.html and reads it again. Passes when every value is 0. innerWidth would not do, because a mobile viewport grows to fit wide content.",
    context: { viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true },
    run: async ({ page, url }) => {
      const value = {}
      const over = () =>
        page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
      for (const p of [
        '/docs/30.2/api/search.html',
        '/docs/30.2/api/documents.html',
        '/docs/30.2/api/server-configuration.html',
        '/docs/guide/install-typesense.html',
        '/docs/',
      ]) {
        await open(page, url(p))
        value[p.replace('/docs/', '') || 'home'] = await over()
      }
      await open(page, url('/docs/30.2/api/search.html'))
      await page.tap('.VPNavBarHamburger')
      await page.waitForTimeout(500)
      value['phone menu open'] = await over()
      return { pass: Object.values(value).every(v => v <= 0), value }
    },
  },
  {
    id: 'guard-body-text-contrast',
    title: 'Body text, links, table headers, outline and sidebar rows stay readable, the current page stands apart',
    shas: ['886ec9e6', '35505491'],
    kind: 'contrast',
    expect: 'guard',
    checks:
      'On search.html at 1280 in light and dark, reads the ratio of the first paragraph, prose link, table header, outline link, a plain sidebar item and the active sidebar item. Passes when all reach 4.5 and the active item has a different colour from the plain one.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, url }) => {
      const value = {}
      let pass = true
      for (const theme of ['light', 'dark']) {
        await open(page, url('/docs/30.2/api/search.html'), theme)
        const v = await page.evaluate(() => {
          const g = __g2
          const q = s => document.querySelector(s)
          const active = g.contrast(q('.VPSidebar .VPSidebarItem.is-active > .item .text'))
          const plain = g.contrast(q('.VPSidebar .VPSidebarItem:not(.is-active) > .item .text'))
          return {
            paragraph: g.contrast(q('.vp-doc p')).ratio,
            link: g.contrast(q('.vp-doc p a')).ratio,
            tableHeader: g.contrast(q('.vp-doc th')).ratio,
            outline: g.contrast(q('.VPDocAsideOutline .outline-link')).ratio,
            sidebarPlain: plain.ratio,
            sidebarActive: active.ratio,
            activeDiffers: active.fg !== plain.fg,
          }
        })
        pass = pass && v.activeDiffers && Object.values(v).every(r => r === true || r >= 4.5)
        value[theme] = v
      }
      return { pass, value }
    },
  },
]
