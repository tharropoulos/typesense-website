// Gates for handoffs 01 (code tabs) and 02 (in-content controls). Run with run.js.
const DOCS = '/docs/30.2/api/documents.html'
const SEARCH = '/docs/30.2/api/search.html'
const FEDERATED = '/docs/30.2/api/federated-multi-search.html'
const COLLECTIONS = '/docs/30.2/api/collections.html'
const NL_SEARCH = '/docs/30.2/api/natural-language-search.html'
const HA = '/docs/guide/high-availability.html'
const HA_IMG = '.vp-doc img[alt="Typesense Cloud HA Hostnames"]'
const VERSION_TRIGGER = '.aside-pinned-version button[role=combobox]'
const LANG_TRIGGER = 'button[aria-label="Choose copied languages"]'

const desktop = { viewport: { width: 1280, height: 800 } }
const wide = { viewport: { width: 1440, height: 900 } }
const phone = { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }

const wait = ms => new Promise(r => setTimeout(r, ms))
const frames = (page, n = 2) =>
  page.evaluate(
    n =>
      new Promise(r => {
        const step = k => (k ? requestAnimationFrame(() => step(k - 1)) : r())
        step(n)
      }),
    n,
  )

async function open(page, url, path) {
  await page.goto(url(path), { waitUntil: 'load' })
  await page.waitForFunction(() => document.querySelector('#app')?.__vue_app__)
  await frames(page)
}

async function openTabs(page, url, path = DOCS) {
  await open(page, url, path)
  await page.waitForSelector('[data-copy-tabs] > [aria-hidden=true]')
}

async function openZoom(page, url) {
  await open(page, url, HA)
  await page.locator(HA_IMG).scrollIntoViewIfNeeded()
  await page.waitForFunction(s => document.querySelector(s).classList.contains('medium-zoom-image'), HA_IMG)
}

const focused = page =>
  page.evaluate(() => {
    const a = document.activeElement
    if (!a || a === document.body) return 'BODY'
    const name =
      a.getAttribute('aria-label') ||
      a.getAttribute('title') ||
      a.getAttribute('alt') ||
      a.textContent.trim().slice(0, 30)
    return `${a.tagName.toLowerCase()}${a.getAttribute('role') ? `[${a.getAttribute('role')}]` : ''} "${name}"`
  })

// focus the control with a real Tab press, so :focus-visible matches
async function tabTo(page, selector) {
  await page.locator(selector).first().focus()
  await page.keyboard.press('Shift+Tab')
  await page.keyboard.press('Tab')
  return page.evaluate(s => document.activeElement === document.querySelector(s), selector)
}

// put the sequential focus start point at an element, the way a click on it does
const clickText = async (page, locator) => {
  await locator.scrollIntoViewIfNeeded()
  await frames(page)
  await wait(100)
  const box = await locator.boundingBox()
  await page.mouse.click(box.x + 4, box.y + box.height / 2)
}

const alphaOf = color => {
  if (color === 'transparent') return 0
  const slash = color.match(/\/\s*([\d.]+)(%?)\s*\)$/)
  if (slash) return slash[2] ? slash[1] / 100 : +slash[1]
  const rgba = color.match(/^rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)$/)
  return rgba ? +rgba[1] : 1
}

// getComputedStyle prints each layer as colour, offsets, blur, spread and then inset
const shadowLayers = shadow =>
  shadow === 'none'
    ? []
    : shadow.split(/,(?![^(]*\))/).map(layer => {
        const color = layer.trim().match(/^([a-z-]+\([^)]*\)|[a-z]+)/)?.[1] ?? ''
        const px = (layer.match(/-?[\d.]+px/g) || []).map(parseFloat)
        return { inset: /\binset\b/.test(layer), spread: px[3] ?? 0, alpha: alphaOf(color) }
      })

const firstStripParagraph = page =>
  page.locator('p', { hasText: "Let's see how we can add a new document to a collection." }).first()

const selectedTabs = page =>
  page.evaluate(() =>
    [...document.querySelectorAll('[data-copy-tabs]')]
      .filter(s => JSON.parse(s.dataset.copyTabs).includes('PHP'))
      .map(s => s.dataset.copyActiveTab),
  )

module.exports = [
  // handoff 01, code tabs
  {
    id: 'tabs-are-a-tablist',
    title: 'Screen readers hear code tabs as a tab list with the selected tab',
    shas: ['5ed71446'],
    kind: 'aria',
    expect: 'flip',
    checks:
      'Reads the first code tab strip on documents.html. Passes when the strip is role=tablist, every tab is a role=tab with aria-selected, exactly one tab is a Tab stop, and each tab points at a role=tabpanel labelled by it.',
    context: desktop,
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const v = await page.evaluate(() => {
        const strip = document.querySelector('[data-copy-tabs]')
        const tabs = [...strip.querySelectorAll('[role=tab]')]
        const panelsOk = tabs.every(t => {
          const p = document.getElementById(t.getAttribute('aria-controls'))
          return p && p.getAttribute('role') === 'tabpanel' && p.getAttribute('aria-labelledby') === t.id
        })
        return {
          strip: `${strip.tagName} role=${strip.getAttribute('role')}`,
          tabs: tabs.length,
          selected: tabs.filter(t => t.getAttribute('aria-selected') === 'true').map(t => t.textContent.trim()),
          tabStops: tabs.filter(t => t.tabIndex === 0).length,
          panelsOk: tabs.length > 0 && panelsOk,
        }
      })
      const ax = (await page.locator('[data-copy-tabs]').first().ariaSnapshot()).split('\n')
      v.axTree = ax
        .slice(0, 3)
        .map(l => l.trim())
        .join(' ')
      return {
        pass:
          v.strip.endsWith('role=tablist') &&
          v.tabs === 10 &&
          v.selected.length === 1 &&
          v.tabStops === 1 &&
          v.panelsOk &&
          ax[0] === '- tablist:' &&
          ax[1].includes('[selected]'),
        value: v,
      }
    },
  },
  {
    id: 'tabs-arrow-keys-switch-language',
    title: 'Tab reaches the code tabs and the arrow keys switch the language everywhere',
    shas: ['5ed71446'],
    kind: 'keyboard',
    expect: 'flip',
    checks:
      'Clicks the paragraph above the first strip on documents.html, presses Tab, then ArrowRight twice and ArrowLeft once. Passes when Tab lands on the JavaScript tab and the arrows leave PHP focused and selected in every group that has PHP.',
    context: desktop,
    run: async ({ page, url }) => {
      await openTabs(page, url)
      await clickText(page, firstStripParagraph(page))
      await page.keyboard.press('Tab')
      const afterTab = await focused(page)
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowLeft')
      await frames(page)
      const afterArrows = await focused(page)
      const groups = await selectedTabs(page)
      const php = groups.filter(t => t === 'PHP').length
      return {
        pass: afterTab === 'button[tab] "JavaScript"' && afterArrows === 'button[tab] "PHP"' && php === groups.length,
        value: { afterTab, afterArrows, groupsOnPHP: `${php} of ${groups.length}` },
      }
    },
  },
  {
    id: 'tabs-lone-tab-not-a-stop',
    title: 'Tabbing through the page never stops on a lone "JSON" label',
    shas: ['ba82008a'],
    kind: 'focus-order',
    expect: 'guard',
    checks:
      'Base never had focusable tabs, so this guards HEAD. Reads the tabIndex of every lone tab on documents.html, then clicks the first "Sample Response" line and presses Tab 6 times. Passes when no lone tab has tabIndex 0 and no stop lands inside a lone strip.',
    context: desktop,
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const lone = await page.evaluate(() =>
        [...document.querySelectorAll('[data-copy-tabs]')]
          .map(s => [...s.children].filter(c => !c.hasAttribute('aria-hidden')))
          .filter(kids => kids.length === 1)
          .map(([tab]) => tab.tabIndex),
      )
      await clickText(page, page.locator('.vp-doc p', { hasText: /^Sample Response$/ }).first())
      const stops = []
      for (let i = 0; i < 6; i++) {
        await page.keyboard.press('Tab')
        stops.push(
          await page.evaluate(() => {
            const a = document.activeElement
            const strip = a.closest('[data-copy-tabs]')
            const lone = strip && [...strip.children].filter(c => !c.hasAttribute('aria-hidden')).length === 1
            return lone ? `LONE ${a.textContent.trim()}` : a.getAttribute('title') || a.textContent.trim().slice(0, 20)
          }),
        )
      }
      return {
        pass: lone.length > 0 && lone.every(t => t === -1) && !stops.some(s => s.startsWith('LONE')),
        value: { loneTabs: lone.length, loneTabIndex: [...new Set(lone)], stops },
      }
    },
  },
  {
    id: 'tabs-focus-clears-strip-edges',
    title: 'A keyboard-focused tab on a phone scrolls fully clear of the strip edge fades',
    shas: ['9a961159'],
    kind: 'focus-order',
    expect: 'head',
    checks:
      'At 390px scrolls the first strip 40px sideways so JavaScript sits under the left fade, clicks the paragraph above and presses Tab. Passes when the focused JavaScript tab sits at least 16px inside both strip edges. Base has no focusable tabs, so only HEAD counts.',
    context: phone,
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const para = firstStripParagraph(page)
      await para.scrollIntoViewIfNeeded()
      await page.evaluate(() => (document.querySelector('[data-copy-tabs]').scrollLeft = 40))
      await clickText(page, para)
      await page.keyboard.press('Tab')
      await wait(100)
      const value = await page.evaluate(() => {
        const a = document.activeElement
        const s = document.querySelector('[data-copy-tabs]').getBoundingClientRect()
        const r = a.getBoundingClientRect()
        return {
          tab: a.matches('[role=tab]')
            ? a.textContent.trim()
            : `not a tab: ${a.tagName} ${a.getAttribute('title') || ''}`.trim(),
          left: Math.round((r.left - s.left) * 10) / 10,
          right: Math.round((s.right - r.right) * 10) / 10,
        }
      })
      return { pass: value.tab === 'JavaScript' && value.left >= 15.5 && value.right >= 15.5, value }
    },
  },
  {
    id: 'tabs-in-server-html',
    title: 'Code tabs are in the page before JavaScript runs',
    shas: ['8c75edf5'],
    kind: 'ssr-html',
    expect: 'flip',
    checks:
      'Loads search.html at 390px with JavaScript off. Counts role=tablist strips and reads whether the first tab panel already holds code. Passes when there are strips and the first one shows code.',
    context: { ...phone, javaScriptEnabled: false },
    run: async ({ page, url }) => {
      await page.goto(url(SEARCH), { waitUntil: 'load' })
      const v = await page.evaluate(() => {
        const panel = document.querySelector('[role=tabpanel]')
        return {
          tablists: document.querySelectorAll('[role=tablist]').length,
          stripsAnyMarkup: document.querySelectorAll('[data-copy-tabs]').length,
          firstPanelCode: panel?.querySelector('pre code')?.textContent.trim().slice(0, 40) ?? null,
        }
      })
      return { pass: v.tablists > 0 && !!v.firstPanelCode, value: v }
    },
  },
  {
    id: 'tabs-no-load-shift',
    title: 'API page text no longer jumps down while the code tabs load',
    shas: ['8c75edf5'],
    kind: 'dom',
    expect: 'flip',
    checks:
      "Loads search.html at 390px with 4x CPU throttling and no saved language, waits 3s, then reads the buffered layout-shift entries. Passes when the total CLS is under 0.01. The biggest shift lists the nodes it moved. Without the throttle a fast load can mount base's tabs before the first paint, which records no shift at all.",
    context: phone,
    run: async ({ page, context, url }) => {
      await (await context.newCDPSession(page)).send('Emulation.setCPUThrottlingRate', { rate: 4 })
      await open(page, url, SEARCH)
      await wait(3000)
      const shifts = await page.evaluate(
        () =>
          new Promise(resolve => {
            const entries = []
            new PerformanceObserver(list => entries.push(...list.getEntries())).observe({
              type: 'layout-shift',
              buffered: true,
            })
            setTimeout(
              () =>
                resolve(
                  entries
                    .filter(e => !e.hadRecentInput)
                    .map(e => ({
                      value: e.value,
                      moved: e.sources
                        .map(s => s.node?.nodeName)
                        .filter(Boolean)
                        .join(' '),
                    })),
                ),
              500,
            )
          }),
      )
      const cls = Math.round(shifts.reduce((sum, e) => sum + e.value, 0) * 1000) / 1000
      const biggest = shifts.sort((a, b) => b.value - a.value)[0]
      return {
        pass: cls < 0.01,
        value: { cls, biggest: biggest ? `${biggest.value.toFixed(3)} moved ${biggest.moved}` : null },
      }
    },
  },
  {
    id: 'tabs-arrow-steps-from-focused-tab',
    title: 'Arrow keys move on from the tab that has focus, not the selected one',
    shas: ['eb4869bf'],
    kind: 'keyboard',
    expect: 'head',
    checks:
      'With JavaScript selected, focuses Ruby in the first strip on documents.html and presses ArrowRight. Passes when Dart is then selected and focused. The pre-fix code would pick PHP. Base has no tabs and neither build has the pre-fix code, so only HEAD counts.',
    context: desktop,
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const ruby = page
        .locator('[data-copy-tabs]')
        .first()
        .locator(':scope > *', { hasText: /^\s*Ruby\s*$/ })
      await ruby.focus()
      const rubyFocused = await ruby.evaluate(el => el.matches(':focus'))
      await page.keyboard.press('ArrowRight')
      await frames(page)
      const v = {
        rubyFocused,
        selected: await page.evaluate(() => document.querySelector('[data-copy-tabs]').dataset.copyActiveTab),
        focused: await focused(page),
      }
      return { pass: v.selected === 'Dart' && v.focused === 'button[tab] "Dart"', value: v }
    },
  },
  {
    id: 'tabs-lone-tab-unclickable',
    title: 'Clicking a lone "JSON" label does nothing and shows no pointer',
    shas: ['9f5824f1'],
    kind: 'dom',
    expect: 'flip',
    checks:
      'Saves Python as the language, then clicks the centre of the first lone JSON tab on documents.html. Reads the cursor under that point and the saved language. Passes when the cursor is not a pointer and Python is still saved.',
    context: desktop,
    run: async ({ page, context, url }) => {
      await context.addInitScript(() => localStorage.setItem('default-tab', 'Python'))
      await openTabs(page, url)
      const tab = page.locator('[data-copy-tabs=\'["JSON"]\'] > :not([aria-hidden])').first()
      await tab.scrollIntoViewIfNeeded()
      const box = await tab.boundingBox()
      const x = box.x + box.width / 2
      const y = box.y + box.height / 2
      await page.mouse.move(x, y)
      const under = await page.evaluate(
        ([x, y]) => {
          const el = document.elementFromPoint(x, y)
          return { tag: el.tagName, cursor: getComputedStyle(el).cursor }
        },
        [x, y],
      )
      await page.mouse.click(x, y)
      await frames(page)
      const saved = await page.evaluate(() => localStorage.getItem('default-tab'))
      return {
        pass: under.cursor !== 'pointer' && saved === 'Python',
        value: { underPoint: under.tag, cursor: under.cursor, savedAfterClick: saved },
      }
    },
  },
  {
    id: 'tabs-lone-tab-not-selectable',
    title: 'Drag-selecting across a JSON sample leaves out the "JSON" label',
    shas: ['b38e1318'],
    kind: 'text',
    expect: 'flip',
    checks:
      'Drags the mouse from the first "Sample Response" line into its JSON code on documents.html, copies with Cmd/Ctrl+C and reads the clipboard. Passes when the copied text has "Sample Response" and the code but no "JSON" line. Chrome keeps the label in getSelection().toString() either way, so the clipboard is the honest read.',
    context: { ...desktop, permissions: ['clipboard-read', 'clipboard-write'] },
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const heading = page.locator('.vp-doc p', { hasText: /^Sample Response$/ }).first()
      await heading.scrollIntoViewIfNeeded()
      await page.evaluate(() => window.scrollBy(0, -200))
      const h = await heading.boundingBox()
      const code = await page
        .locator('[data-copy-tabs=\'["JSON"]\']')
        .first()
        .locator('xpath=../..')
        .locator('.tab-content pre')
        .first()
        .boundingBox()
      await page.mouse.move(h.x + 2, h.y + h.height / 2)
      await page.mouse.down()
      await page.mouse.move(code.x + 60, code.y + 30, { steps: 8 })
      await page.mouse.up()
      await page.keyboard.press('ControlOrMeta+C')
      await wait(150)
      const text = await page.evaluate(() => navigator.clipboard.readText())
      const lines = text
        .split('\n')
        .map(l => l.trim())
        .filter(Boolean)
      return {
        pass: lines[0] === 'Sample Response' && lines[1] === '{' && !lines.includes('JSON'),
        value: { copiedLines: lines.slice(0, 3) },
      }
    },
  },

  // handoff 02, in-content controls
  {
    id: 'focus-rings-drawn-inside',
    title:
      'Keyboard focus rings on Copy Markdown, the languages button and the version picker are drawn inside the control',
    shas: ['ec87f0ff'],
    kind: 'focus-order',
    expect: 'flip',
    checks:
      'At 1440px on documents.html, reaches each control with a real Tab press and reads its box-shadow. Passes when each has an inset layer with a spread of at least 2px and a colour that is not fully transparent, so the button group and aside cannot clip the ring.',
    context: wide,
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const controls = { copyMarkdown: '.markdown-actions > button', languages: LANG_TRIGGER, version: VERSION_TRIGGER }
      const value = {}
      for (const [name, sel] of Object.entries(controls)) {
        const reached = await tabTo(page, sel)
        const shadow = await page.evaluate(s => getComputedStyle(document.querySelector(s)).boxShadow, sel)
        const layers = shadowLayers(shadow)
        const inset = layers.find(l => l.inset && l.spread >= 2 && l.alpha > 0)
        if (!reached) value[name] = 'not reached'
        else if (inset) value[name] = `inset ring ${inset.spread}px`
        else if (layers.some(l => !l.inset && l.spread === 4)) value[name] = 'outer ring with 2px offset'
        else value[name] = `other: ${shadow.slice(0, 60)}`
      }
      return { pass: Object.values(value).every(v => v.startsWith('inset ring')), value }
    },
  },
  ...['light', 'dark'].map(theme => ({
    id: `copy-checkbox-edge-${theme}`,
    title: `Language checkboxes in the copy menu have a visible edge (${theme})`,
    shas: ['a8463db1'],
    kind: 'contrast',
    expect: 'flip',
    theme,
    checks:
      'Opens the copy languages menu on federated-multi-search.html and reads each checkbox border (or outline) against the menu background. Passes when every enabled box edge is at least 3:1 and the greyed Swift box has an edge at all.',
    context: desktop,
    run: async ({ page, url }) => {
      await openTabs(page, url, FEDERATED)
      await page.click(LANG_TRIGGER)
      await page.waitForSelector('[role=dialog] [role=checkbox]')
      await wait(300)
      const rows = await page.evaluate(() => {
        const cv = document.createElement('canvas')
        cv.width = cv.height = 1
        const ctx = cv.getContext('2d', { willReadFrequently: true })
        const rgba = c => {
          ctx.clearRect(0, 0, 1, 1)
          ctx.fillStyle = c
          ctx.fillRect(0, 0, 1, 1)
          const d = ctx.getImageData(0, 0, 1, 1).data
          return [d[0], d[1], d[2], d[3] / 255]
        }
        const lum = ([r, g, b]) => {
          const f = v => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
          return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
        }
        const over = (fg, bg, a) => fg.slice(0, 3).map((v, i) => v * a + bg[i] * (1 - a))
        const dialog = document.querySelector('[role=dialog]')
        let bgEl = dialog
        while (bgEl && rgba(getComputedStyle(bgEl).backgroundColor)[3] === 0) bgEl = bgEl.parentElement
        const bg = rgba(getComputedStyle(bgEl).backgroundColor)
        return [...dialog.querySelectorAll('[role=checkbox]')].map(box => {
          const cs = getComputedStyle(box)
          const row = box.closest('label, button:not([role=checkbox])') || box.parentElement
          const name = row.textContent.trim().replace(/\s+/g, ' ')
          let opacity = 1
          for (let el = box; el && el !== dialog; el = el.parentElement)
            opacity *= parseFloat(getComputedStyle(el).opacity)
          const edge =
            cs.borderTopStyle !== 'none' && parseFloat(cs.borderTopWidth) > 0
              ? cs.borderTopColor
              : cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0
              ? cs.outlineColor
              : null
          if (!edge) return { name, edge: 'none', ratio: 1 }
          const c = rgba(edge)
          const l1 = lum(over(c, bg, c[3] * opacity))
          const l2 = lum(bg)
          return {
            name,
            edge: cs.borderTopStyle !== 'none' ? 'border' : 'outline',
            disabled: box.disabled || box.hasAttribute('data-disabled'),
            ratio: Math.round(((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)) * 100) / 100,
          }
        })
      })
      const enabled = rows.filter(r => !r.disabled && !/Unavailable/.test(r.name))
      const greyed = rows.filter(r => r.disabled || /Unavailable/.test(r.name))
      return {
        pass:
          enabled.length > 0 &&
          enabled.every(r => r.ratio >= 3) &&
          greyed.length > 0 &&
          greyed.every(r => r.edge !== 'none'),
        value: {
          enabled: `${enabled[0]?.edge} ${Math.min(...enabled.map(r => r.ratio))}:1`,
          greyed: greyed.map(
            r => `${r.name.replace(' Unavailable', '')} ${r.edge}${r.edge === 'none' ? '' : ` ${r.ratio}:1`}`,
          ),
        },
      }
    },
  })),
  {
    id: 'copy-languages-are-checkboxes',
    title: 'Screen readers hear each copy language as a checkbox, and Space ticks it',
    shas: ['2547430e'],
    kind: 'aria',
    expect: 'flip',
    checks:
      'Opens the copy languages menu on federated-multi-search.html and finds the checkbox named Python. Focuses it and presses Space. Passes when it reads unchecked then checked, and Swift is a disabled checkbox.',
    context: desktop,
    run: async ({ page, url }) => {
      await openTabs(page, url, FEDERATED)
      await page.click(LANG_TRIGGER)
      await page.waitForSelector('[role=dialog]')
      const python = page.getByRole('dialog').getByRole('checkbox', { name: 'Python', exact: true })
      const count = await python.count()
      const value = { pythonCheckboxes: count }
      if (count === 1) {
        value.before = await python.getAttribute('aria-checked')
        await python.focus()
        await page.keyboard.press('Space')
        await frames(page)
        value.afterSpace = await python.getAttribute('aria-checked')
      } else {
        value.rowRole = (await page
          .getByRole('dialog')
          .getByRole('button', { name: /^Python/ })
          .count())
          ? 'button'
          : 'none'
      }
      const swift = page.getByRole('dialog').getByRole('checkbox', { name: /^Swift/ })
      value.swift = (await swift.count())
        ? (await swift.isDisabled())
          ? 'disabled checkbox'
          : 'enabled checkbox'
        : 'no checkbox'
      return {
        pass:
          count === 1 && value.before === 'false' && value.afterSpace === 'true' && value.swift === 'disabled checkbox',
        value,
      }
    },
  },
  {
    id: 'zoom-snaps-under-reduced-motion',
    title: 'With reduced motion on, image zoom snaps open and shut',
    shas: ['37cc1324'],
    kind: 'motion',
    expect: 'flip',
    checks:
      'With reducedMotion reduce on high-availability.html, samples the zoomed image scale every frame for 1s after a click, then clicks it shut. Passes when the transition is under 10ms, at most one frame shows an in-between scale, and the zoom is gone within 500ms.',
    context: { ...desktop, reducedMotion: 'reduce' },
    run: async ({ page, url }) => {
      await openZoom(page, url)
      const img = page.locator(HA_IMG)
      const duration = await img.evaluate(el => getComputedStyle(el).transitionDuration)
      await page.evaluate(() => {
        window.__scales = []
        const loop = () => {
          const z = document.querySelector('.medium-zoom-image--opened')
          const m = z && getComputedStyle(z).transform.match(/matrix\(([^,]+)/)
          if (m) window.__scales.push(parseFloat(m[1]))
          if (performance.now() < window.__until) requestAnimationFrame(loop)
        }
        window.__until = performance.now() + 1000
        requestAnimationFrame(loop)
      })
      await img.click()
      await wait(1100)
      const scales = await page.evaluate(() => window.__scales)
      const final = scales.at(-1)
      const between = scales.filter(v => v > 1.001 && v < final - 0.001).length
      await page.click('.medium-zoom-image--opened')
      const t0 = Date.now()
      let closedMs = null
      while (Date.now() - t0 < 1500) {
        if (!(await page.$('.medium-zoom-image--opened'))) {
          closedMs = Date.now() - t0
          break
        }
        await wait(25)
      }
      return {
        pass: parseFloat(duration) < 0.01 && scales.length > 0 && between <= 1 && closedMs !== null && closedMs < 500,
        value: {
          transition: duration,
          framesBetween1AndFinal: between,
          finalScale: final && Math.round(final * 100) / 100,
          closedMs: closedMs && Math.round(closedMs / 50) * 50,
        },
      }
    },
  },
  {
    id: 'zoom-from-keyboard',
    title: 'Doc images zoom from the keyboard and Tab closes the zoom back onto the image',
    shas: ['db6f668e'],
    kind: 'keyboard',
    expect: 'flip',
    checks:
      'On high-availability.html clicks the paragraph above the HA screenshot and presses Tab up to 6 times looking for the image, then Enter, then Tab. Passes when Tab reaches the image (role button), Enter opens the zoom, and the next Tab closes it with focus back on the image.',
    context: desktop,
    run: async ({ page, url }) => {
      await openZoom(page, url)
      const img = page.locator(HA_IMG)
      const role = await img.getAttribute('role')
      await clickText(page, img.locator('xpath=preceding-sibling::*[1]'))
      const isImg = () => img.evaluate(el => document.activeElement === el)
      let tabs = 0
      let onImage = false
      while (tabs < 6 && !onImage) {
        await page.keyboard.press('Tab')
        tabs++
        onImage = await isImg()
      }
      const value = { role, tabsToImage: onImage ? tabs : 'not in 6' }
      if (onImage) {
        await page.keyboard.press('Enter')
        await wait(500)
        value.enterOpens = !!(await page.$('.medium-zoom-image--opened'))
        await page.keyboard.press('Tab')
        await wait(600)
        value.tabCloses = !(await page.$('.medium-zoom-image--opened'))
        value.focusAfterClose = (await isImg()) ? 'image' : await focused(page)
      }
      return { pass: onImage && value.enterOpens && value.tabCloses && value.focusAfterClose === 'image', value }
    },
  },
  {
    id: 'zoom-focus-moves-in',
    title: 'Opening an image zoom moves focus onto the zoomed image',
    shas: ['529af28e'],
    kind: 'focus-order',
    expect: 'flip',
    checks:
      'Clicks the HA screenshot on high-availability.html and reads the focused element after 400ms, closes with Escape, then Tabs to the image and presses Enter. Passes when focus is on the zoomed image both times, with a ring only after Enter.',
    context: desktop,
    run: async ({ page, url }) => {
      await openZoom(page, url)
      const img = page.locator(HA_IMG)
      const read = () =>
        page.evaluate(() => {
          const a = document.activeElement
          if (a === document.body) return 'BODY'
          const where = a.classList.contains('medium-zoom-image--opened')
            ? 'zoomed image'
            : `${a.tagName} ${a.className}`.trim()
          return `${where}${a.matches(':focus-visible') ? ' with ring' : ''}`
        })
      await img.click()
      await wait(400)
      const afterClick = await read()
      await page.keyboard.press('Escape')
      await wait(500)
      const value = { afterClick }
      if (await tabTo(page, HA_IMG)) {
        await page.keyboard.press('Enter')
        await wait(400)
        value.afterEnter = await read()
      } else value.afterEnter = 'image not focusable'
      return { pass: afterClick === 'zoomed image' && value.afterEnter === 'zoomed image with ring', value }
    },
  },
  {
    id: 'zoom-click-close-returns-focus',
    title: 'Clicking a zoomed image shut puts focus back on the image',
    shas: ['0e6dbad4'],
    kind: 'focus-order',
    expect: 'flip',
    checks:
      'Clicks the HA screenshot open, then clicks the zoomed image to close it, and reads the focused element. Passes when focus is on the original image.',
    context: desktop,
    run: async ({ page, url }) => {
      await openZoom(page, url)
      const img = page.locator(HA_IMG)
      await img.click()
      await wait(400)
      await page.click('.medium-zoom-image--opened')
      await page.waitForSelector('.medium-zoom-image--opened', { state: 'detached' })
      await wait(100)
      const onImage = await img.evaluate(el => document.activeElement === el)
      return { pass: onImage, value: { focusAfterClose: onImage ? 'original image' : await focused(page) } }
    },
  },
  {
    id: 'copy-announced',
    title: 'Screen readers hear "Code copied" and "Markdown copied" after a copy',
    shas: ['68b077cd'],
    kind: 'aria',
    expect: 'flip',
    checks:
      'On documents.html reads every role=status region before any copy, clicks the first "Copy code" button, then Copy Markdown, reads the status text next to each, and reads every region again 2.7s after the Markdown click. Passes when all regions start empty, they read "Code copied" and "Markdown copied", and all are empty again, so a later copy is announced afresh.',
    context: { ...desktop, permissions: ['clipboard-read', 'clipboard-write'] },
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const spoken = () =>
        page.evaluate(() =>
          [...document.querySelectorAll('[role=status]')].map(s => s.textContent.trim()).filter(Boolean),
        )
      const before = await spoken()
      // a handle, because the clicked button's title turns to "Copied!"
      const copy = await page.$('.vp-doc button[title="Copy code"]')
      await copy.scrollIntoViewIfNeeded()
      await copy.hover()
      await copy.click()
      await wait(150)
      const code = await copy.evaluate(b => {
        const s = b.previousElementSibling
        return s && s.getAttribute('role') === 'status' ? s.textContent.trim() : null
      })
      await page.locator('.markdown-actions > button').first().click()
      await wait(1500)
      const md = await page.evaluate(() => {
        const s = [...document.querySelectorAll('[role=status]')].find(n => /markdown/i.test(n.textContent))
        return s ? s.textContent.trim() : null
      })
      await wait(1200)
      const after = await spoken()
      const statuses = await page.evaluate(() => document.querySelectorAll('[role=status]').length)
      return {
        pass: before.length === 0 && code === 'Code copied' && md === 'Markdown copied' && after.length === 0,
        value: {
          beforeCopy: before.slice(0, 3),
          codeStatus: code,
          markdownStatus: md,
          after2700ms: after,
          statusNodes: statuses,
        },
      }
    },
  },
  {
    id: 'version-greyed-described',
    title: 'Screen readers hear why a version is greyed out in the picker',
    shas: ['17966f88'],
    kind: 'aria',
    expect: 'flip',
    checks:
      'Opens the aside version picker from the keyboard on natural-language-search.html and reads aria-describedby on every option. Passes when every greyed option points at "Greyed out versions don\'t have this page." and no enabled option has a description.',
    context: wide,
    run: async ({ page, url }) => {
      await open(page, url, NL_SEARCH)
      await tabTo(page, VERSION_TRIGGER)
      await page.keyboard.press('Enter')
      await page.waitForSelector('[role=listbox] [role=option]')
      const v = await page.evaluate(() => {
        const opts = [...document.querySelectorAll('[role=listbox] [role=option]')]
        const greyed = opts.filter(o => o.hasAttribute('data-disabled') || o.getAttribute('aria-disabled') === 'true')
        const enabled = opts.filter(o => !greyed.includes(o))
        const text = o => document.getElementById(o.getAttribute('aria-describedby') || '')?.textContent.trim() ?? null
        const texts = [...new Set(greyed.map(text))]
        const ids = [...new Set(greyed.map(o => o.getAttribute('aria-describedby')).filter(Boolean))]
        return {
          options: opts.length,
          greyed: greyed.length,
          greyedDescriptions: texts,
          enabledWithDescription: enabled.filter(o => o.hasAttribute('aria-describedby')).length,
          idMatches: ids.map(id => document.querySelectorAll(`[id="${id}"]`).length).join(','),
        }
      })
      return {
        pass:
          v.greyed > 0 &&
          v.greyedDescriptions.length === 1 &&
          v.greyedDescriptions[0] === "Greyed out versions don't have this page." &&
          v.enabledWithDescription === 0 &&
          v.idMatches === '1',
        value: v,
      }
    },
  },
  {
    id: 'version-typeahead-without-v',
    title: 'Typing "0.23" in the open version list jumps to v0.23.1',
    shas: ['ba4383af'],
    kind: 'keyboard',
    expect: 'flip',
    checks:
      'Opens the aside version picker from the keyboard on collections.html and types 0.23. Passes when the focused row starts with v0.23.1.',
    context: wide,
    run: async ({ page, url }) => {
      await open(page, url, COLLECTIONS)
      await tabTo(page, VERSION_TRIGGER)
      await page.keyboard.press('Enter')
      await page.waitForSelector('[role=listbox] [role=option]')
      await wait(200)
      await page.keyboard.type('0.23')
      await wait(150)
      const row = await page.evaluate(() => document.activeElement.textContent.trim().split(/\s/)[0])
      return { pass: row === 'v0.23.1', value: { focusedRow: row } }
    },
  },
  {
    id: 'version-end-keeps-focus',
    title: 'End in the open version list goes to the last row and the arrows keep working',
    shas: ['547c3e8d'],
    kind: 'keyboard',
    expect: 'flip',
    checks:
      'Opens the aside version picker from the keyboard on collections.html, presses End, then ArrowUp. Passes when End focuses the last option and ArrowUp the one above it.',
    context: wide,
    run: async ({ page, url }) => {
      await open(page, url, COLLECTIONS)
      await tabTo(page, VERSION_TRIGGER)
      await page.keyboard.press('Enter')
      await page.waitForSelector('[role=listbox] [role=option]')
      await wait(200)
      const read = () =>
        page.evaluate(() => {
          const a = document.activeElement
          const opts = [...document.querySelectorAll('[role=listbox] [role=option]')]
          return a.getAttribute('role') === 'option'
            ? `option ${opts.indexOf(a) + 1} of ${opts.length} ${a.textContent.trim().split(/\s/)[0]}`
            : a.tagName
        })
      await page.keyboard.press('End')
      await wait(150)
      const afterEnd = await read()
      await page.keyboard.press('ArrowUp')
      await wait(150)
      const afterUp = await read()
      const n = afterEnd.match(/of (\d+)/)?.[1]
      return {
        pass: !!n && afterEnd.startsWith(`option ${n} of ${n}`) && afterUp.startsWith(`option ${n - 1} of ${n}`),
        value: { afterEnd, afterUp },
      }
    },
  },

  // guards
  {
    id: 'guard-tabs-sync-holds-strip',
    title: 'Picking a language with the mouse switches every group and keeps the clicked strip still',
    shas: ['5ed71446', '9a961159'],
    kind: 'dom',
    expect: 'guard',
    checks:
      'Scrolls strip 14 of 25 on documents.html (9 languages) to 300px from the top and clicks its Python tab. Passes when every group with Python switches to it and the strip moves less than 2px on screen while the page scrolls to absorb the groups above changing height.',
    context: desktop,
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const strip = page.locator('[data-copy-tabs]').nth(13)
      await strip.evaluate(s => window.scrollBy(0, s.getBoundingClientRect().top - 300))
      await wait(200)
      const before = await strip.evaluate(s => s.getBoundingClientRect().top)
      const y0 = await page.evaluate(() => scrollY)
      await strip.locator(':scope > *', { hasText: /^\s*Python\s*$/ }).click()
      await wait(400)
      const after = await strip.evaluate(s => s.getBoundingClientRect().top)
      const y1 = await page.evaluate(() => scrollY)
      const groups = await page.evaluate(() =>
        [...document.querySelectorAll('[data-copy-tabs]')]
          .filter(s => JSON.parse(s.dataset.copyTabs).includes('Python'))
          .map(s => s.dataset.copyActiveTab),
      )
      const py = groups.filter(t => t === 'Python').length
      return {
        pass: py === groups.length && Math.abs(after - before) < 2,
        value: {
          stripTop: `${Math.round(before)} to ${Math.round(after)}`,
          scrollY: `${Math.round(y0)} to ${Math.round(y1)}`,
          groupsOnPython: `${py} of ${groups.length}`,
        },
      }
    },
  },
  {
    id: 'guard-tabs-saved-language',
    title:
      'A saved language and a shared ?languages= link both pick the tab on load, and Vue logs no hydration mismatch',
    shas: ['5ed71446', '8c75edf5', '17966f88'],
    kind: 'dom',
    expect: 'guard',
    checks:
      'Loads documents.html once with localStorage default-tab=Shell and once with ?languages=Go and nothing saved, listening to the console. Passes when every group that has the language shows it and Vue logs no hydration mismatch. The production build only reports mismatched text that Vue renders and mismatched element structure. A wrong attribute or class, or changed text inside static markdown, logs nothing, so a quiet console does not prove the server sent the same tab state.',
    context: desktop,
    run: async ({ page, context, url }) => {
      const hydration = []
      page.on('console', m => /hydrat/i.test(m.text()) && hydration.push(m.text().slice(0, 80)))
      await context.addInitScript(() => {
        if (location.search.includes('languages')) localStorage.removeItem('default-tab')
        else localStorage.setItem('default-tab', 'Shell')
      })
      const showing = lang =>
        page.evaluate(lang => {
          const g = [...document.querySelectorAll('[data-copy-tabs]')].filter(s =>
            JSON.parse(s.dataset.copyTabs).includes(lang),
          )
          return [g.filter(s => s.dataset.copyActiveTab === lang).length, g.length]
        }, lang)
      await openTabs(page, url)
      await wait(300)
      const saved = await showing('Shell')
      await openTabs(page, url, DOCS + '?languages=Go')
      await wait(300)
      const linked = await showing('Go')
      const full = ([on, of]) => of > 0 && on === of
      return {
        pass: full(saved) && full(linked) && hydration.length === 0,
        value: {
          savedShell: `${saved[0]} of ${saved[1]}`,
          linkGo: `${linked[0]} of ${linked[1]}`,
          hydrationWarnings: hydration,
        },
      }
    },
  },
  {
    id: 'guard-copy-popover-focus',
    title: 'The copy languages menu opens on Enter, focuses "Select all" and Escape returns focus',
    shas: ['2547430e', 'a8463db1', 'ec87f0ff'],
    kind: 'keyboard',
    expect: 'guard',
    checks:
      'Tabs to the braces button on federated-multi-search.html, presses Enter, reads the focused element and aria-expanded, then presses Escape. Passes when focus moves to "Select all" and comes back to the trigger with the menu closed.',
    context: desktop,
    run: async ({ page, url }) => {
      await openTabs(page, url, FEDERATED)
      await tabTo(page, LANG_TRIGGER)
      await page.keyboard.press('Enter')
      await page.waitForSelector('[role=dialog]')
      await wait(300)
      const inside = await focused(page)
      const expanded = await page.getAttribute(LANG_TRIGGER, 'aria-expanded')
      await page.keyboard.press('Escape')
      await wait(300)
      const back = await page.evaluate(s => document.activeElement === document.querySelector(s), LANG_TRIGGER)
      const dialog = !!(await page.$('[role=dialog]'))
      return {
        pass: /Select all/.test(inside) && expanded === 'true' && back && !dialog,
        value: {
          afterEnter: inside,
          ariaExpanded: expanded,
          afterEscape: back ? 'trigger' : await focused(page),
          dialogOpen: dialog,
        },
      }
    },
  },
  {
    id: 'guard-version-picker-keys',
    title: 'The version picker opens on Enter, arrows move, and Escape returns focus',
    shas: ['17966f88', 'ba4383af', '547c3e8d', 'ec87f0ff'],
    kind: 'keyboard',
    expect: 'guard',
    checks:
      'Tabs to the aside version picker on collections.html, presses Enter, ArrowDown, then Escape. Passes when Enter focuses the current version, ArrowDown the next row, and Escape closes the list with focus on the trigger.',
    context: wide,
    run: async ({ page, url }) => {
      await open(page, url, COLLECTIONS)
      await tabTo(page, VERSION_TRIGGER)
      await page.keyboard.press('Enter')
      await page.waitForSelector('[role=listbox] [role=option]')
      await wait(200)
      const row = () =>
        page.evaluate(() =>
          document.activeElement.getAttribute('role') === 'option'
            ? document.activeElement.textContent.trim().split(/\s/)[0]
            : document.activeElement.tagName,
        )
      const opened = await row()
      await page.keyboard.press('ArrowDown')
      await wait(100)
      const down = await row()
      await page.keyboard.press('Escape')
      await wait(300)
      const back = await page.evaluate(s => document.activeElement === document.querySelector(s), VERSION_TRIGGER)
      return {
        pass: opened === 'v30.2' && /^v/.test(down) && down !== opened && back,
        value: { afterEnter: opened, afterArrowDown: down, afterEscape: back ? 'trigger' : await focused(page) },
      }
    },
  },
  {
    id: 'guard-code-copy-button',
    title: 'The code copy button shows on keyboard focus, is named "Copy code" and keeps focus after copying',
    shas: ['68b077cd'],
    kind: 'keyboard',
    expect: 'guard',
    checks:
      'Tabs to the first code copy button on documents.html, reads its title and opacity, presses Enter and reads the focused element. Passes when it is named "Copy code", fully visible on focus and still focused after the copy.',
    context: { ...desktop, permissions: ['clipboard-read', 'clipboard-write'] },
    run: async ({ page, url }) => {
      await openTabs(page, url)
      const sel = '.vp-doc button[title="Copy code"]'
      await tabTo(page, sel)
      await wait(250)
      const before = await page.evaluate(() => ({
        name: document.activeElement.getAttribute('title'),
        opacity: getComputedStyle(document.activeElement).opacity,
      }))
      const btn = await page.evaluateHandle(() => document.activeElement)
      await page.keyboard.press('Enter')
      await wait(200)
      const kept = await btn.evaluate(b => document.activeElement === b)
      const clip = await page.evaluate(() => navigator.clipboard.readText()).catch(() => null)
      return {
        pass: before.name === 'Copy code' && before.opacity === '1' && kept && !!clip,
        value: {
          name: before.name,
          opacityOnFocus: before.opacity,
          focusKept: kept,
          copiedChars: clip ? clip.length : 0,
        },
      }
    },
  },
]
