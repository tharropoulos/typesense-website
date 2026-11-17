const PAGES = ['/docs/30.2/api/collections.html', '/docs/30.2/api/search.html', '/docs/30.2/api/documents.html']

module.exports = [
  {
    id: 'every-parameter-has-a-unique-anchor',
    title: 'Every parameter in a table can be linked to, and no two share an id',
    shas: ['2dc5f5f0', 'e1d57f93'],
    kind: 'anchors',
    expect: 'flip',
    checks:
      'With JavaScript off, reads every Parameter cell on collections, search and documents (30.2). Each must hold a # link whose target exists on the page and sits in the same table row, and no id on the page may repeat. Passes when no cell lacks a working link, no link points into another row and there are no duplicate ids.',
    context: { javaScriptEnabled: false, viewport: { width: 1440, height: 900 } },
    run: async ({ page, url }) => {
      const value = {}
      for (const p of PAGES) {
        await page.goto(url(p))
        value[p.split('/').pop()] = await page.evaluate(() => {
          const cells = [...document.querySelectorAll('.vp-doc td[data-label="Parameter"]')]
          const target = td => {
            const a = td.querySelector('a[href^="#"]')
            return a && document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))
          }
          const broken = cells.filter(td => !target(td))
          const otherRow = cells.filter(td => target(td) && target(td).closest('tr') !== td.closest('tr'))
          const ids = [...document.querySelectorAll('[id]')].map(el => el.id)
          const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))]
          return {
            cells: cells.length,
            withoutWorkingLink: broken.length,
            linkToOtherRow: otherRow.length,
            duplicateIds: dupes.slice(0, 5),
            deduped: ids.filter(id => /-\d+$/.test(id) && ids.includes(id.replace(/-\d+$/, ''))).slice(0, 3),
          }
        })
      }
      const all = Object.values(value)
      return {
        pass: all.every(
          v => v.cells > 0 && v.withoutWorkingLink === 0 && v.linkToOtherRow === 0 && v.duplicateIds.length === 0,
        ),
        value,
      }
    },
  },
]
