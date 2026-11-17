// Builds site/index.html and site/files.json from the kit's outputs.
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const K = __dirname
const read = f => JSON.parse(fs.readFileSync(path.join(K, f), 'utf8'))
const exists = f => fs.existsSync(path.join(K, f))
const ledger = read('ledger.json')
const plan = read('plan.json')
const calls = read('calls.json')
const findings = exists('findings.json') ? read('findings.json') : {}
const media = new Set()
const use = rel => {
  if (!exists(rel)) throw new Error(`missing ${rel}`)
  media.add(rel)
  return rel
}

const stops = plan.stops
  .map(stop => {
    const dir = `captures/${stop.id}`
    if (!exists(`${dir}/manifest.json`)) {
      console.warn(`no manifest for ${stop.id}`)
      return null
    }
    const m = read(`${dir}/manifest.json`)
    return {
      id: stop.id,
      title: m.title || stop.title,
      page: m.page || stop.page,
      viewport: m.viewport || stop.viewport,
      crops: m.crops.map(c => ({
        key: path.basename(c.head).replace(/-head\.png$/, ''),
        title: c.title,
        theme: c.theme,
        viewport: c.viewport || null,
        base: use(`${dir}/${c.base}`),
        head: use(`${dir}/${c.head}`),
        items: c.items,
        note: c.note || null,
      })),
    }
  })
  .filter(Boolean)

const walks = plan.walks
  .map(w => {
    const dir = `walks/${w.id}`
    if (!exists(`${dir}/manifest.json`)) {
      console.warn(`no manifest for ${w.id}`)
      return null
    }
    const m = read(`${dir}/manifest.json`)
    const files = m.files || {}
    const suffixes = [...new Set(Object.keys(files).map(k => k.replace(/^(head|base)/, '')))]
    const clips = suffixes
      .filter(s => files['head' + s] && files['base' + s])
      .map(s => ({
        label: s.replace(/^-/, ''),
        base: use(`${dir}/${path.basename(files['base' + s])}`),
        head: use(`${dir}/${path.basename(files['head' + s])}`),
      }))
    return {
      id: w.id,
      title: m.title || w.title,
      page: m.page,
      viewport: m.viewport,
      shas: m.shas || w.shas,
      steps: m.steps,
      expect_head: m.expect_head,
      expect_base: m.expect_base,
      note: m.note || null,
      clips,
    }
  })
  .filter(Boolean)

const gateGroups = [
  {
    id: 'g1-tabs-controls',
    title: 'Code tabs and in-page controls',
    blurb:
      'Handoffs 01 and 02. Tab semantics and keyboard, the copy menu, image zoom, copy announcements and the version picker.',
  },
  {
    id: 'g2-contrast-keyboard',
    title: 'Contrast, colour tokens and keyboard shell',
    blurb:
      'Handoffs 03 and 04. Contrast ratios, token cleanups that must not change anything, dark surfaces, and keyboard paths through the nav, sidebar and skip link.',
  },
  {
    id: 'g3-shell-load-reading',
    title: 'Shell stability, loading and reading',
    blurb:
      'Handoffs 05 to 08. Server-rendered chrome, layout shift, fonts, lazy loading, copy by fetch, search, the home, and reading changes.',
  },
]
const gates = gateGroups.flatMap(gr =>
  fs
    .readdirSync(path.join(K, 'results'))
    .filter(f => f.startsWith(gr.id))
    .sort()
    .flatMap(f => {
      const name = path.basename(f, '.json')
      const src = require(path.join(K, 'gates', name + '.js'))
      const code = Object.fromEntries(
        src.map(g => [
          g.id,
          [
            g.context ? `context: ${JSON.stringify(g.context)}` : null,
            g.theme ? `theme: '${g.theme}'` : null,
            `run: ${g.run.toString()}`,
          ]
            .filter(Boolean)
            .join('\n'),
        ]),
      )
      return read(`results/${f}`).map(r => ({
        ...r,
        group: gr.id,
        code: code[r.id] || null,
        finding: findings[r.id] || null,
      }))
    }),
)

const readList = ledger
  .filter(e => e.method === 'DIFF' && e.handoff !== '07-fork' && !e.superseded_by)
  .map(e => ({
    sha: e.sha,
    subject: e.subject,
    summary: [e.plain, e.diff?.summary, e.diff?.rendered_effect].filter(Boolean).join(' '),
  }))

const fork = ledger
  .filter(e => e.handoff === '07-fork')
  .map(e => {
    let branch = ''
    try {
      branch = execSync(
        `git -C ${process.env.HOME}/code/docsearch branch --contains ${e.sha} --format='%(refname:short)'`,
      )
        .toString()
        .trim()
        .split('\n')
        .join(', ')
    } catch {}
    return { sha: e.sha, subject: e.subject, branch: branch || 'not found', plain: e.plain }
  })

const runJs = fs.readFileSync(path.join(K, 'run.js'), 'utf8')
const data = {
  meta: {
    commits: ledger.filter(e => e.handoff !== '07-fork').length,
    base: '6e776ca3',
    baseLabel: '(font bump, PR #512)',
    head: 'e69af439',
    headLabel: '(docs-ui-review-fixes)',
    captured: new Date().toISOString().slice(0, 10),
  },
  ledger,
  stops,
  walks,
  gates,
  gateGroups,
  calls,
  read: readList,
  fork,
  forkNote:
    'Handoff 07 fixed DocSearch bugs in the typesense-docsearch.js fork, not in this branch. The site still installs 5.0.2-4 from npm, so neither build on this page shows them. Review them as fork PRs once the branches are pushed. They reach the site after a fork release and a dependency bump.',
  rerun: [
    {
      title: 'Build the branch and preview it',
      text: 'From docs-site on docs-ui-review-fixes. A build needs about 16GB and takes about 2.5 minutes.',
      cmd: 'bun run build && bun run preview --port 4173',
    },
    {
      title: 'Build the base in a shared clone',
      text: 'A shared clone keeps your checkout untouched and reuses its node_modules.',
      cmd: 'git clone --shared --no-checkout <repo> before && cd before && git checkout 6e776ca3\nln -s <repo>/docs-site/node_modules docs-site/node_modules\ncd docs-site && bun run build && bun run preview --port 4174',
    },
    {
      title: 'Run the gates',
      text: 'In any scratch folder with Playwright 1.49.1 installed, next to the gates folder. Each gate opens a fresh context on both builds and prints its verdict.',
      cmd: 'node run.js gates/g1-tabs-controls.js gates/g2-contrast-keyboard.js gates/g3-shell-load-reading.js',
    },
    { title: 'run.js', text: 'The whole runner.', cmd: runJs },
  ],
}

const json = JSON.stringify(data).replace(/</g, '\\u003c')
fs.mkdirSync(path.join(K, 'site'), { recursive: true })
fs.writeFileSync(
  path.join(K, 'site/index.html'),
  fs.readFileSync(path.join(K, 'template.html'), 'utf8').replace('/*__DATA__*/', () => json),
)
fs.writeFileSync(path.join(K, 'site/data.json'), JSON.stringify(data))
fs.writeFileSync(
  path.join(K, 'site/files.json'),
  JSON.stringify(
    [...media].map(p => ({ path: p })),
    null,
    1,
  ),
)
const bytes = [...media].reduce((n, p) => n + fs.statSync(path.join(K, p)).size, 0)
console.log(
  `stops ${stops.length}, crops ${stops.reduce((n, s) => n + s.crops.length, 0)}, walks ${walks.length}, gates ${
    gates.length
  }, calls ${calls.length}, read ${readList.length}, fork ${fork.length}`,
)
console.log(
  `media ${media.size} files, ${(bytes / 1e6).toFixed(1)}MB, page ${(
    fs.statSync(path.join(K, 'site/index.html')).size / 1e3
  ).toFixed(0)}KB`,
)
