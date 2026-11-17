// Writes REVIEW.md from site/data.json. Run node assemble.js first.
const fs = require('fs')
const path = require('path')

const D = JSON.parse(fs.readFileSync(path.join(__dirname, 'site/data.json'), 'utf8'))
const sha = s => `\`${s}\``
const cell = s =>
  String(s ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, ' ')
const short = (v, n = 180) => {
  const s = typeof v === 'string' ? v : JSON.stringify(v)
  return s && s.length > n ? s.slice(0, n - 1) + '…' : s
}
const expectText = { flip: 'fails before, passes after', guard: 'passes on both', head: 'branch only' }
const out = []
const w = (...lines) => out.push(...lines)

const ok = D.gates.filter(g => g.verdict === 'ok').length
const check = D.gates.filter(g => g.verdict !== 'ok')
const lookCount = D.stops.reduce((n, s) => n + s.crops.length, 0)

w(
  '# Docs UI review',
  '',
  `Review kit for \`docs-ui-review-fixes\`. It holds ${
    D.meta.commits
  } commits from the docs UI audit, on top of the font bump in PR #512. Before is ${sha(
    D.meta.base,
  )} and after is ${sha(D.meta.head)}. Both were built for production and compared in headless Chromium on ${
    D.meta.captured
  }.`,
  '',
  `Every commit is reviewed in exactly one pass below. The [ledger](#ledger) at the bottom maps each commit to its pass. The same review is also an interactive page with the clips side by side. Open \`review/index.html\` in a browser from a checkout of this branch.`,
  '',
  '| Pass | What you do | Count |',
  '|---|---|---|',
  `| [Look](#look) | Compare before and after screenshots | ${lookCount} pairs |`,
  `| [Watch](#watch) | Play a keyboard or scroll clip on both builds | ${D.walks.length} clips |`,
  `| [Gates](#gates) | Check that each automated test tests its claim | ${D.gates.length} gates, ${ok} as expected, ${check.length} need a look |`,
  `| [Calls](#calls) | Accept or push back on a decision | ${D.calls.length} |`,
  `| [Read](#read) | Read a diff with nothing to see | ${D.read.length} commits |`,
  '',
)

const found = D.calls.filter(c => c.group.startsWith('Found'))
if (found.length || check.length) {
  w('## Needs attention first', '')
  found.forEach(c => w(`- **${c.title}.** ${c.detail} (${c.shas.map(sha).join(', ')})`))
  w('')
}

w(
  '## Look',
  '',
  'Same page, state and crop on both builds. Items marked *not visible here* are checked by a gate instead.',
  '',
)
D.stops.forEach(s => {
  w(`### ${s.title}`, '', `\`${s.page}\` at ${s.viewport}`, '')
  s.crops.forEach(c => {
    w(`#### ${c.title}${c.theme ? ` (${c.theme})` : ''}`, '')
    w(
      '| Before | After |',
      '|---|---|',
      `| <img src="${c.base}" width="420"> | <img src="${c.head}" width="420"> |`,
      '',
    )
    c.items.forEach(i =>
      w(
        `- ${sha(i.sha)} ${
          i.seen
            ? i.look_for
            : `*Not visible in this pair.* ${/^nothing/i.test(i.look_for || '') ? '' : i.look_for || ''}`.trim()
        }`,
      ),
    )
    if (c.note) w('', `> ${c.note}`)
    w('')
  })
})

w(
  '## Watch',
  '',
  'Each clip runs the same steps on both builds. A badge in the corner shows the keys pressed. Open a clip to play it, or use the interactive version to play both in step.',
  '',
)
D.walks.forEach(wk => {
  w(`### ${wk.title}`, '', `\`${wk.page}\` at ${wk.viewport}. Commits ${wk.shas.map(sha).join(', ')}.`, '')
  wk.clips.forEach(c => w(`- ${c.label ? c.label + ' ' : ''}[before](${c.base}) · [after](${c.head})`))
  w(
    '',
    ...wk.steps.map((t, i) => `${i + 1}. ${t}`),
    '',
    `**After.** ${wk.expect_head}`,
    '',
    `**Before.** ${wk.expect_base}`,
    '',
  )
  if (wk.note) w(`> ${wk.note}`, '')
})

w(
  '## Gates',
  '',
  `Each gate runs on both builds in a fresh browser context. A *flip* gate must fail on the base and pass on the branch. A *guard* checks existing behaviour near a change that must still work. The code is in [gates/](gates/), the full values in [results/](results/). Review the check itself. Does it test what its title claims?`,
  '',
)
D.gateGroups.forEach(gr => {
  w(`### ${gr.title}`, '', gr.blurb, '', '| Gate | Commits | Expect | Before | After | |', '|---|---|---|---|---|---|')
  D.gates
    .filter(g => g.group === gr.id)
    .forEach(g => {
      const v = r => cell(`${r.pass ? 'pass' : 'fail'} ${short(r.error ? 'error: ' + r.error : r.value)}`)
      w(
        `| **${cell(g.title)}**<br>${cell(g.checks)}${g.finding ? `<br>**${cell(g.finding)}**` : ''} | ${g.shas
          .map(sha)
          .join(' ')} | ${expectText[g.expect]} | ${v(g.base)} | ${v(g.head)} | ${g.verdict === 'ok' ? '✅' : '⚠️'} |`,
      )
    })
  w('')
})

w(
  '## Calls',
  '',
  'Decisions a person has to accept, and gaps left for later. A screenshot or a gate shows what changed, but not whether it was the right trade.',
  '',
)
;[...new Set(D.calls.map(c => c.group))].forEach(g => {
  w(`### ${g}`, '')
  D.calls.filter(c => c.group === g).forEach(c => w(`- **${c.title}.** ${c.detail} (${c.shas.map(sha).join(', ')})`))
  w('')
})

w('## Read', '', 'Commits with nothing to see or measure. Read the diff with `git show <sha>`.', '')
D.read.forEach(r => w(`- ${sha(r.sha)} ${r.subject}. ${r.summary}`))
w('')

w('## DocSearch fork', '', D.forkNote, '', '| Commit | Branch | Change | How to review |', '|---|---|---|---|')
D.fork.forEach(f => w(`| ${sha(f.sha)} | ${cell(f.branch)} | ${cell(f.subject)} | ${cell(f.plain)} |`))
w('')

const where = e => {
  const out = []
  D.stops.forEach(s => s.crops.forEach(c => c.items.some(i => i.sha === e.sha) && out.push('Look')))
  D.walks.forEach(wk => wk.shas.includes(e.sha) && out.push('Watch'))
  D.gates.forEach(g => g.shas.includes(e.sha) && out.push('Gate'))
  D.read.forEach(r => r.sha === e.sha && out.push('Read'))
  return [...new Set(out)].join(', ') || (e.superseded_by ? `via ${e.superseded_by}` : '')
}
w(
  '## Ledger',
  '',
  '<details><summary>All commits, oldest first</summary>',
  '',
  '| Commit | Handoff | Subject | Reviewed in |',
  '|---|---|---|---|',
)
D.ledger
  .filter(e => e.handoff !== '07-fork')
  .forEach(e =>
    w(
      `| ${sha(e.sha)} | ${e.handoff} | ${cell(e.subject)}${
        e.superseded_by ? ` *(reworked by ${e.superseded_by})*` : ''
      } | ${where(e)} |`,
    ),
  )
w('', '</details>', '')

w(
  '## Run it yourself',
  '',
  'Build both sides and serve them, then run the gates from this folder. A build needs about 16GB and takes about 2.5 minutes. Without bun or Node, `nix develop ./docs-site` from the repo root gives you both.',
  '',
  '```sh',
  '# the branch, from docs-site',
  'bun run build && bun run preview --port 4173',
  '',
  '# the base, in a shared clone so your checkout stays put',
  'git clone --shared --no-checkout <repo> before && cd before && git checkout 6e776ca3',
  'ln -s <repo>/docs-site/node_modules docs-site/node_modules',
  'cd docs-site && bun run build && bun run preview --port 4174',
  '',
  '# the gates, from review/',
  'bun install && bunx playwright install chromium',
  'node run.js gates/g1-tabs-controls.js gates/g2-contrast-keyboard.js gates/g3-shell-load-reading.js gates/g3-shell-load-reading-anchors.js',
  '```',
  '',
  '`node assemble.js` rebuilds the interactive page and `node review-md.js` rebuilds this file.',
  '',
)

fs.writeFileSync(path.join(__dirname, 'REVIEW.md'), out.join('\n'))
console.log(`REVIEW.md ${(out.join('\n').length / 1e3).toFixed(0)}KB, ${out.length} lines`)
