// Gates for handoffs 05 (shell motion and stability), 06 (load performance), 07 (search, 404, home) and 08 (reading and IA). Run with run.js.
const crypto = require('crypto')
const { chromium } = require('playwright')

const SITE_FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com']

// trackers and the search cluster never answer. base keeps its google font, which is the site's own
const isolate = (context, { fonts = true } = {}) =>
  context.route(
    u => u.hostname !== 'localhost' && !(fonts && SITE_FONT_HOSTS.includes(u.hostname)),
    r => r.abort(),
  )
const blockFonts = context => context.route(/\.woff2(\?|$)/, r => r.abort())

const hydrated = page =>
  page.waitForFunction(() => document.querySelector('#app')?.__vue_app__, null, { timeout: 20000 })
async function visit(page, url, path) {
  await page.goto(url(path))
  await hydrated(page)
}
const rawHtml = async (page, url, path) => (await page.request.get(url(path))).text()
const throttle = async (context, page, rate = 4) =>
  (await context.newCDPSession(page)).send('Emulation.setCPUThrottlingRate', { rate })
const sha = text => crypto.createHash('sha256').update(text).digest('hex').slice(0, 12)

async function fresh(context, options, setup) {
  const ctx = await context.browser().newContext(options)
  if (setup) await setup(ctx)
  return { ctx, page: await ctx.newPage() }
}

function SHIFTS() {
  window.__shifts = []
  new PerformanceObserver(list =>
    list.getEntries().forEach(e => {
      if (e.hadRecentInput) return
      const els = e.sources.map(s => (s.node?.nodeType === 1 ? s.node : s.node?.parentElement)).filter(Boolean)
      window.__shifts.push({
        value: e.value,
        t: e.startTime,
        where: els.map(el =>
          el.closest('.VPSidebar')
            ? 'sidebar'
            : el.closest('.VPNavBar')
            ? 'nav'
            : el.closest('.vp-doc')
            ? 'doc'
            : el.id || el.tagName.toLowerCase(),
        ),
      })
    }),
  ).observe({ type: 'layout-shift', buffered: true })
}
const clsOf = (shifts, keep = () => true) =>
  +shifts
    .filter(keep)
    .reduce((sum, e) => sum + e.value, 0)
    .toFixed(4)

const copyState = {}

module.exports = [
  // handoff 05, shell motion and stability
  {
    id: 'pinned-bar-one-line',
    title: 'A long section title in the pinned bar stays on one line',
    shas: ['032fc436'],
    kind: 'dom',
    expect: 'flip',
    checks:
      'Scrolls the Django guide into "Step 8: Implement paginated sync from PostgreSQL to Typesense" at 390 and 1024 wide and reads the pinned h2 bar. Passes at both widths when the bar is one 49px line with overflow-x hidden, white-space nowrap and text-overflow ellipsis, and its text is wider than the bar, so the ellipsis really shows.',
    context: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/guide/django-search-api.html')
      const read = async () => {
        await page.evaluate(() =>
          scrollTo(
            0,
            document
              .getElementById('step-8-implement-paginated-sync-from-postgresql-to-typesense')
              .getBoundingClientRect().top +
              scrollY +
              200,
          ),
        )
        await page.waitForTimeout(700)
        return page.evaluate(() => {
          const bar = document.querySelector("div.sticky.h-0[aria-hidden='true'] > div > div.relative.border-b")
          const cs = getComputedStyle(bar)
          return {
            text: bar.textContent.trim().slice(0, 7),
            height: Math.round(bar.getBoundingClientRect().height),
            textOverflow: cs.textOverflow,
            overflowX: cs.overflowX,
            whiteSpace: cs.whiteSpace,
            truncated: bar.scrollWidth > bar.clientWidth,
          }
        })
      }
      const at390 = await read()
      await page.setViewportSize({ width: 1024, height: 768 })
      const at1024 = await read()
      const oneLine = r =>
        r.text === 'Step 8:' &&
        r.height <= 50 &&
        r.textOverflow === 'ellipsis' &&
        r.overflowX === 'hidden' &&
        r.whiteSpace === 'nowrap' &&
        r.truncated
      return { pass: oneLine(at390) && oneLine(at1024), value: { at390, at1024 } }
    },
  },
  {
    id: 'sidebar-current-one-line',
    title: 'The current sidebar item keeps its title on one line',
    shas: ['84ecbfdd'],
    kind: 'dom',
    expect: 'flip',
    checks:
      "Loads the LangChain guide at 1440 and reads the active sidebar row's height and font weight. Passes when the row is one 32px line at regular weight instead of a 56px semibold two-liner.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/guide/langchain-ai-search.html')
      await page.waitForTimeout(1000)
      const value = await page.evaluate(() => {
        const item = document.querySelector('.VPSidebarItem.is-active > .item')
        const text = item.querySelector('.text')
        return {
          title: text.textContent.trim(),
          rowHeight: Math.round(item.getBoundingClientRect().height),
          fontWeight: getComputedStyle(text).fontWeight,
        }
      })
      return { pass: value.rowHeight <= 36 && +value.fontWeight < 600, value }
    },
  },
  {
    id: 'phone-nav-ignores-drift',
    title: 'On phones a finger drifting a few pixels down does not hide the nav again',
    shas: ['84a244e4'],
    kind: 'scroll',
    expect: 'flip',
    checks:
      'At 390 with touch and reduced motion, marks each scroll as user driven with a wheel event and scrolls to 3000, 2975, 2977, 2980 then 2984, reading the top of .VPNav after each. Passes on hidden, shown, shown, shown, hidden (8px of downward travel hides it).',
    context: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/search.html')
      const steps = []
      for (const y of [3000, 2975, 2977, 2980, 2984]) {
        await page.evaluate(y => {
          dispatchEvent(new WheelEvent('wheel'))
          scrollTo(0, y)
        }, y)
        await page.waitForTimeout(200)
        const top = await page.evaluate(() => Math.round(document.querySelector('.VPNav').getBoundingClientRect().top))
        steps.push(`${y} ${top < 0 ? 'hidden' : 'shown'}`)
      }
      const want = ['3000 hidden', '2975 shown', '2977 shown', '2980 shown', '2984 hidden']
      return { pass: steps.join() === want.join(), value: steps }
    },
  },
  {
    id: 'phone-nav-holds-with-outline-open',
    title: 'On phones the nav stays put while the On this page panel is open',
    shas: ['6d3748cf'],
    kind: 'scroll',
    expect: 'flip',
    checks:
      "At 390 with touch, scrolls to 3000, opens 'On this page' and scrolls up 30px as the user. Passes when the nav stays hidden and the panel's bottom stays inside the 844px screen, and after closing the panel a further 30px scroll up brings the nav back.",
    context: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/search.html')
      const userScroll = (y, by) =>
        page.evaluate(
          ([y, by]) => {
            dispatchEvent(new WheelEvent('wheel'))
            by ? scrollBy(0, by) : scrollTo(0, y)
          },
          [y, by],
        )
      const navTop = () => page.evaluate(() => Math.round(document.querySelector('.VPNav').getBoundingClientRect().top))
      await userScroll(3000)
      await page.waitForTimeout(200)
      // a click at the toggle's own spot. playwright's locator click first scrolls the sticky toggle into view, which moves the page
      const at = await page.evaluate(() => {
        const r = document.querySelector('.VPLocalNavOutlineDropdown > button').getBoundingClientRect()
        return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
      })
      const toggle = () => page.mouse.click(at.x, at.y)
      await toggle()
      await page.waitForSelector('.VPLocalNavOutlineDropdown .items')
      await userScroll(0, -30)
      await page.waitForTimeout(450)
      const open = await page.evaluate(() => ({
        navTop: Math.round(document.querySelector('.VPNav').getBoundingClientRect().top),
        panelBottom: Math.round(
          document.querySelector('.VPLocalNavOutlineDropdown .items').getBoundingClientRect().bottom,
        ),
        screen: innerHeight,
      }))
      await toggle()
      await page.waitForTimeout(400)
      await userScroll(0, -30)
      await page.waitForTimeout(450)
      const afterClose = { navTop: await navTop() }
      const held = open.navTop < 0 && open.panelBottom <= open.screen
      return { pass: held && afterClose.navTop === 0, value: { open, afterClose } }
    },
  },
  {
    id: 'sidebar-native-scrollbar',
    title: 'The sidebar shows the native scrollbar',
    shas: ['7dabec76'],
    kind: 'css',
    expect: 'flip',
    checks:
      'Loads /docs/guide/ at 1440 and reads the .VPSidebar scrollbar gutter, its offsetWidth minus its clientWidth and borders. Passes when the sidebar overflows and the gutter is wider than 0. Base hides the bar, so its gutter is 0.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ url }) => {
      // headless Chromium hides every scrollbar unless this flag is dropped
      const browser = await chromium.launch({ ignoreDefaultArgs: ['--hide-scrollbars'] })
      try {
        const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
        await isolate(context)
        const page = await context.newPage()
        await visit(page, url, '/docs/guide/')
        const value = await page.evaluate(() => {
          const sidebar = document.querySelector('.VPSidebar')
          const cs = getComputedStyle(sidebar)
          const borders = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth)
          return {
            gutter: sidebar.offsetWidth - sidebar.clientWidth - borders,
            overflows: sidebar.scrollHeight > sidebar.clientHeight,
          }
        })
        return { pass: value.overflows && value.gutter > 0, value }
      } finally {
        await browser.close()
      }
    },
  },
  {
    id: 'logo-space-reserved',
    title: "The nav keeps the logo's width before the logo file arrives",
    shas: ['bd0a8728'],
    kind: 'dom',
    expect: 'flip',
    checks:
      'Aborts both typesense_logo_*.svg files and reads the visible .VPNavBarTitle .logo box at 390 and 1440. Passes when it keeps the 275:56 shape and measures 118x24 and 157x32, within 2px each way.',
    context: { viewport: { width: 390, height: 844 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await context.route('**/images/typesense_logo_*.svg', r => r.abort())
      const read = () =>
        page.evaluate(() => {
          const r = [...document.querySelectorAll('.VPNavBarTitle .logo')]
            .find(e => e.offsetParent)
            .getBoundingClientRect()
          return `${Math.round(r.width)}x${Math.round(r.height)}`
        })
      await visit(page, url, '/docs/30.2/api/search.html')
      const at390 = await read()
      await page.setViewportSize({ width: 1440, height: 900 })
      await page.waitForTimeout(300)
      const at1440 = await read()
      const shaped = box => {
        const [w, h] = box.split('x').map(Number)
        return h > 0 && Math.abs(w / h - 275 / 56) < 0.15
      }
      const near = (box, width, height) => {
        const [w, h] = box.split('x').map(Number)
        return Math.abs(w - width) <= 2 && Math.abs(h - height) <= 2
      }
      const pass = shaped(at390) && shaped(at1440) && near(at390, 118, 24) && near(at1440, 157, 32)
      return { pass, value: { at390, at1440 } }
    },
  },
  {
    id: 'nav-bar-server-layout',
    title: 'On sidebar pages the top nav does not snap wider when the page wakes up',
    shas: ['cebd9e1b'],
    kind: 'ssr-html',
    expect: 'flip',
    checks:
      'Reads the raw HTML of search.html for class="VPNavBar has-sidebar", then compares the .VPNavBar .container box with JavaScript off against the hydrated page at 1440. Passes when the server sends has-sidebar and the box is the same in both renders.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      const path = '/docs/30.2/api/search.html'
      const raw = await rawHtml(page, url, path)
      const serverHasSidebar = /class="VPNavBar has-sidebar/.test(raw)
      const box = p =>
        p.evaluate(() => {
          const r = document.querySelector('.VPNavBar .container').getBoundingClientRect()
          return `x${Math.round(r.x)} w${Math.round(r.width)}`
        })
      const off = await fresh(context, { viewport: { width: 1440, height: 900 }, javaScriptEnabled: false }, isolate)
      await off.page.goto(url(path))
      const serverBox = await box(off.page)
      await off.ctx.close()
      await isolate(context)
      await visit(page, url, path)
      await page.waitForTimeout(500)
      const hydratedBox = await box(page)
      return {
        pass: serverHasSidebar && serverBox === hydratedBox,
        value: { serverHasSidebar, serverBox, hydratedBox },
      }
    },
  },
  {
    id: 'sidebar-current-marked-on-server',
    title: 'The current page is highlighted in the sidebar from first paint and with JavaScript off',
    shas: ['04f199ee'],
    kind: 'ssr-html',
    expect: 'flip',
    checks:
      "Reads the raw HTML of search.html for a sidebar item with is-active, then loads it with JavaScript off and reads that item's text and background. Passes when the server marks 'Search' and its row has a coloured background.",
    context: { viewport: { width: 1440, height: 900 }, javaScriptEnabled: false },
    run: async ({ page, context, url }) => {
      const path = '/docs/30.2/api/search.html'
      const raw = await rawHtml(page, url, path)
      const serverActive = (raw.match(/class="VPSidebarItem [^"]*is-active[^"]*"/g) || []).length
      await isolate(context)
      await page.goto(url(path))
      const row = await page.evaluate(() => {
        const item = document.querySelector('.VPSidebarItem.is-active > .item')
        return item && { text: item.textContent.trim(), background: getComputedStyle(item).backgroundColor }
      })
      const painted = !!row && row.background !== 'rgba(0, 0, 0, 0)'
      return { pass: serverActive === 1 && row?.text === 'Search' && painted, value: { serverActive, row } }
    },
  },
  {
    id: 'sidebar-pill-snaps-on-collapse',
    title: 'The sidebar pill moves with its row when a group above it collapses',
    shas: ['a253eacf'],
    kind: 'dom',
    expect: 'flip',
    checks:
      "On ranking-and-relevance.html at 1440, logs the top of the pill and of the active row every frame for 400ms after clicking the 'Getting Started' group title. Passes when the pill sits on its row (within 1px) in every frame after the first two.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/guide/ranking-and-relevance.html')
      await page.waitForTimeout(1000)
      const group = page
        .locator('.VPSidebar .VPSidebarItem.level-0', { hasText: 'Getting Started' })
        .locator('> .item')
        .first()
      await page.evaluate(() => {
        window.__frames = []
        const pill = document.querySelector('#VPSidebarNav > div[aria-hidden="true"]')
        const start = performance.now()
        const tick = () => {
          const item = document.querySelector('.VPSidebarItem.is-active > .item').getBoundingClientRect().top
          window.__frames.push({ item: Math.round(item), gap: Math.round(pill.getBoundingClientRect().top - item) })
          if (performance.now() - start < 1400) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
      await page.waitForTimeout(200)
      await group.click()
      await page.waitForTimeout(800)
      const frames = await page.evaluate(() => window.__frames)
      // the row jumps in one frame. the pill follows on the next frame at the latest
      const jump = frames.findIndex((f, i) => i > 0 && Math.abs(f.item - frames[i - 1].item) > 100)
      const after = jump < 0 ? [] : frames.slice(jump + 1).map(f => f.gap)
      const worst = Math.max(...after.map(Math.abs))
      const value = {
        rowMovedPx: jump < 0 ? 0 : frames[jump - 1].item - frames[jump].item,
        worstGapPx: worst,
        gapsAfterJump: after.slice(0, 10),
      }
      return { pass: jump > 0 && after.length > 10 && worst <= 1, value }
    },
  },
  {
    id: 'local-nav-on-server',
    title: "Below 1280px the 'On this page' bar is in the first paint and nothing jumps when the page wakes up",
    shas: ['103b1f77'],
    kind: 'ssr-html',
    expect: 'flip',
    checks:
      "Reads the raw HTML: search.html must send the 'On this page' toggle, a page without headings (what-is-typesense) must still send 'Return to top', and the home's local nav must be sticky, not fixed. Then takes the worst layout-shift total of 3 loads of /docs/ at 390 with 4x CPU and fonts blocked on both builds. Passes on all three markup checks and CLS under 0.01.",
    context: { viewport: { width: 390, height: 844 } },
    run: async ({ page, context, url }) => {
      const search = await rawHtml(page, url, '/docs/30.2/api/search.html')
      const plain = await rawHtml(page, url, '/docs/overview/what-is-typesense.html')
      const home = await rawHtml(page, url, '/docs/')
      const label = h =>
        (h.match(/VPLocalNavOutlineDropdown[^>]*>\s*<button[^>]*>(?:<span[^>]*>)?([^<]+)</) || [])[1]?.trim()
      const homeLocalNav = (home.match(/<div class="VPLocalNav ([^"]*)"/) || [])[1] || ''
      const markup = {
        search: label(search),
        noHeadings: label(plain),
        homeLocalNavSticky: / sticky /.test(` ${homeLocalNav} `),
      }
      const totals = []
      for (let i = 0; i < 3; i++) {
        const run = await fresh(context, { viewport: { width: 390, height: 844 } }, async ctx => {
          await isolate(ctx, { fonts: false })
          await blockFonts(ctx)
          await ctx.addInitScript(SHIFTS)
        })
        await throttle(run.ctx, run.page)
        await run.page.goto(url('/docs/'))
        await run.page.waitForTimeout(3000)
        totals.push(clsOf(await run.page.evaluate(() => window.__shifts)))
        await run.ctx.close()
      }
      const worstCls = Math.max(...totals)
      const pass =
        markup.search === 'On this page' &&
        markup.noHeadings === 'Return to top' &&
        markup.homeLocalNavSticky &&
        worstCls < 0.01
      return { pass, value: { ...markup, homeCls: totals } }
    },
  },
  {
    id: 'sidebar-server-matches-hydrated',
    title: 'The sidebar group holding the current page renders open on the server too',
    shas: ['d24ce632'],
    kind: 'ssr-html',
    expect: 'guard',
    checks:
      'For a Walk-Throughs page (LangChain) and a Cookbooks page (Semantic Search) at 1440, lists the collapsed level-0 sidebar groups with JavaScript off and again after hydration, and sums sidebar layout shifts during load. Passes when both lists match and the sidebar does not shift.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      const collapsed = p =>
        p.evaluate(
          () =>
            [...document.querySelectorAll('.VPSidebar .VPSidebarItem.level-0.collapsed')]
              .map(s => s.querySelector('.text').textContent.trim())
              .join(', ') || 'none',
        )
      const off = await fresh(context, { viewport: { width: 1440, height: 900 }, javaScriptEnabled: false }, isolate)
      await isolate(context, { fonts: false })
      await blockFonts(context)
      await context.addInitScript(SHIFTS)
      const value = {}
      for (const [name, path] of [
        ['langchain', '/docs/guide/langchain-ai-search.html'],
        ['semantic', '/docs/guide/semantic-search.html'],
      ]) {
        await off.page.goto(url(path))
        const server = await collapsed(off.page)
        await visit(page, url, path)
        await page.waitForTimeout(1500)
        const client = await collapsed(page)
        const sidebarCls = clsOf(await page.evaluate(() => window.__shifts), e => e.where.includes('sidebar'))
        value[name] = { server, client, sidebarCls }
      }
      await off.ctx.close()
      const pass = Object.values(value).every(v => v.server === v.client && v.sidebarCls < 0.005)
      return { pass, value }
    },
  },

  // handoff 06, load performance
  {
    id: 'no-inter-font',
    title: "Pages stop downloading VitePress's unused Inter font",
    shas: ['ba0cc97b'],
    kind: 'font',
    expect: 'flip',
    checks:
      'Reads the raw HTML of search.html for an inter-*.woff2 preload and records every request during a 1440 load until the network is idle. Passes when neither has an Inter font.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      const raw = await rawHtml(page, url, '/docs/30.2/api/search.html')
      const preloads = (raw.match(/inter-[a-z-]+\.[\w-]+\.woff2/g) || []).length
      await isolate(context)
      const inter = []
      page.on('request', r => /\/inter-[^/]*\.woff2/.test(r.url()) && inter.push(r.url().split('/').pop()))
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.waitForLoadState('networkidle')
      return {
        pass: preloads === 0 && inter.length === 0,
        value: { interPreloadsInHtml: preloads, interRequests: inter },
      }
    },
  },
  {
    id: 'content-images-lazy',
    title: 'Images far down a page load only when you scroll near them',
    shas: ['cfdf8875'],
    kind: 'network',
    expect: 'flip',
    checks:
      'Reads the faceting screenshot <img> in the raw HTML of search.html, then loads the page at 1440 without scrolling and records requests until idle plus 2s. Passes when the tag has loading="lazy" and faceting_usecase_example.png (233KB) is never requested.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      const raw = await rawHtml(page, url, '/docs/30.2/api/search.html')
      const tag = (raw.match(/<img[^>]*faceting_usecase_example[^>]*>/) || [''])[0]
      await isolate(context)
      let requested = false
      page.on('request', r => /faceting_usecase_example[^/]*\.png$/.test(r.url()) && (requested = true))
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(2000)
      const lazy = /loading="lazy"/.test(tag)
      return { pass: lazy && !requested, value: { lazyAttr: lazy, requestedWithoutScrolling: requested } }
    },
  },
  {
    id: 'images-hold-their-box',
    title: 'Charts and screenshots hold their space before they load',
    shas: ['63f99faf', '1e5d1ec6'],
    kind: 'dom',
    expect: 'flip',
    checks:
      'Aborts every content image, then reads each listed image box as height divided by width at 1440. Covers the DynamoDB and MongoDB top charts and three images that hash links land next to (search.html faceting, LangChain architecture, Magento configuration). Passes when each box matches the file ratio within 0.01 instead of collapsing to an alt-text line.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await context.route(/\/docs\/images\/.*\.(png|svg)$/, r =>
        r.request().url().includes('typesense_logo') ? r.continue() : r.abort(),
      )
      const cases = [
        ['/docs/guide/dynamodb-full-text-search.html', 'typesense-dynamodb.svg', 1080 / 1920],
        ['/docs/guide/mongodb-full-text-search.html', 'mongodb.svg', 484 / 1852],
        ['/docs/30.2/api/search.html', 'faceting_usecase_example.png', 1792 / 2346],
        ['/docs/guide/langchain-ai-search.html', 'ai-search-architecture.svg', 450 / 800],
        ['/docs/guide/magento2-search.html', 'magento2/configuration.png', 816 / 1138],
      ]
      const value = {}
      for (const [path, file, want] of cases) {
        await page.goto(url(path))
        const r = await page.evaluate(f => {
          const b = document.querySelector(`.vp-doc img[src*="${f}"]`).getBoundingClientRect()
          return { w: Math.round(b.width), h: Math.round(b.height) }
        }, file)
        value[file.split('/').pop()] = { box: `${r.w}x${r.h}`, ratio: +(r.h / r.w).toFixed(4), want: +want.toFixed(4) }
      }
      return { pass: Object.values(value).every(v => Math.abs(v.ratio - v.want) < 0.01), value }
    },
  },
  {
    id: 'font-self-hosted-preloaded',
    title: 'The body font comes from the site and is preloaded',
    shas: ['1796037a'],
    kind: 'font',
    expect: 'flip',
    checks:
      'Reads the raw HTML of install-typesense.html for <link rel="preload" ... source-sans-3-latin.*.woff2 as="font" type="font/woff2" crossorigin> and records every request during a 390 load until idle. Passes when the preload is there, nothing goes to fonts.googleapis.com or fonts.gstatic.com, and the regular woff2 comes from /docs/assets/.',
    context: { viewport: { width: 390, height: 844 } },
    run: async ({ page, context, url }) => {
      const path = '/docs/guide/install-typesense.html'
      const raw = await rawHtml(page, url, path)
      const preload = (raw.match(
        /<link rel="preload" href="\/docs\/assets\/source-sans-3-latin\.[\w-]+\.woff2"[^>]*>/,
      ) || [''])[0]
      const preloadOk = /as="font"/.test(preload) && /type="font\/woff2"/.test(preload) && /crossorigin/.test(preload)
      await isolate(context)
      const google = []
      const woff2 = []
      page.on('request', r => {
        const u = new URL(r.url())
        if (SITE_FONT_HOSTS.includes(u.hostname)) google.push(u.hostname)
        if (u.pathname.endsWith('.woff2'))
          woff2.push(u.hostname === 'localhost' ? u.pathname.split('/').pop() : u.hostname)
      })
      await visit(page, url, path)
      await page.waitForLoadState('networkidle')
      const pass = preloadOk && google.length === 0 && woff2.some(f => /^source-sans-3-latin\.[\w-]+\.woff2$/.test(f))
      return { pass, value: { preloadOk, googleRequests: google.length, woff2 } }
    },
  },
  {
    id: 'font-swap-keeps-lines',
    title: 'Text does not jump when the web font swaps in',
    shas: ['1796037a'],
    kind: 'cls',
    expect: 'flip',
    checks:
      'Holds every .woff2 response for 1.5s and aborts the app script so hydration adds nothing, then sums layout shifts for 4s on install-typesense.html. Worst of 3 loads at 390 and at 1440, 4x CPU on both builds. Passes when the worst total is under 0.02 (the handoff measured about 0.137 before).',
    context: { viewport: { width: 390, height: 844 } },
    run: async ({ context, url }) => {
      const worst = {}
      for (const [w, h] of [
        [390, 844],
        [1440, 900],
      ]) {
        const totals = []
        for (let i = 0; i < 3; i++) {
          const run = await fresh(context, { viewport: { width: w, height: h } }, async ctx => {
            await isolate(ctx)
            await ctx.route(/\.woff2(\?|$)/, async r => {
              await new Promise(done => setTimeout(done, 1500))
              await r.continue().catch(() => {})
            })
            await ctx.route(/\/assets\/app\.[\w-]+\.js$/, r => r.abort())
            await ctx.addInitScript(SHIFTS)
          })
          await throttle(run.ctx, run.page)
          await run.page.goto(url('/docs/guide/install-typesense.html'))
          await run.page.waitForTimeout(4000)
          const swapped = await run.page.evaluate(() =>
            [...document.fonts].some(f => f.family.replace(/"/g, '') === 'Source Sans 3' && f.status === 'loaded'),
          )
          totals.push(swapped ? clsOf(await run.page.evaluate(() => window.__shifts)) : 'font never loaded')
          await run.ctx.close()
        }
        worst[w] = totals
      }
      const all = Object.values(worst).flat()
      return { pass: all.every(t => typeof t === 'number' && t < 0.02), value: worst }
    },
  },
  {
    id: 'docsearch-loads-on-first-use',
    title: 'The search button is there from first paint and the search library downloads only on first use',
    shas: ['780722ac'],
    kind: 'network',
    expect: 'flip',
    checks:
      "Reads the raw HTML of search.html for the static 'DocSearch DocSearch-Button', then at 1440 watches which script carries the '/*! typesense-docsearch.js' banner: during load and 2s of idle, then after hovering the button. Also compares the search box width with JavaScript off and hydrated. Passes when the server sends the button, the library arrives only on hover, and the box keeps its width.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      const path = '/docs/30.2/api/search.html'
      const raw = await rawHtml(page, url, path)
      const serverButton = (raw.match(/class="DocSearch DocSearch-Button"/g) || []).length
      const width = p =>
        p.evaluate(() => Math.round(document.querySelector('.VPNavBarSearch').getBoundingClientRect().width))
      const off = await fresh(context, { viewport: { width: 1440, height: 900 }, javaScriptEnabled: false }, isolate)
      await off.page.goto(url(path))
      await off.page.evaluate(() => document.fonts.ready)
      const serverWidth = await width(off.page)
      await off.ctx.close()

      await isolate(context)
      let phase = 'load'
      const library = []
      page.on('response', async r => {
        if (r.request().resourceType() !== 'script') return
        const body = await r.text().catch(() => '')
        if (body.includes('/*! typesense-docsearch.js'))
          library.push(`${phase}: ${r.url().split('/').pop()} ${Math.round(body.length / 1024)}KB`)
      })
      await visit(page, url, path)
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(2000)
      await page.evaluate(() => document.fonts.ready)
      const hydratedWidth = await width(page)
      phase = 'hover'
      await page.hover('.VPNav .DocSearch-Button')
      await page.waitForTimeout(1500)
      const atLoad = library.filter(l => l.startsWith('load')).length
      const onHover = library.filter(l => l.startsWith('hover')).length
      const pass = serverButton === 1 && atLoad === 0 && onHover === 1 && Math.abs(serverWidth - hydratedWidth) <= 1
      return { pass, value: { serverButton, library, searchBoxWidth: { serverWidth, hydratedWidth } } }
    },
  },
  {
    id: 'page-data-drops-markdown',
    title: 'Pages stop carrying their whole markdown and fetch it on copy',
    shas: ['34a2ed2b'],
    kind: 'weight',
    expect: 'flip',
    checks:
      'Finds search.html\'s page data file (30.2_api_search.md.*.lean.js) in the raw HTML, reads its size and looks for a "markdown":" key, then clicks \'Copy Markdown\' at 1280 and records requests. Passes when the key is gone and the copy fetches /docs/30.2/api/search.md with a 200.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, context, url, build }) => {
      const path = '/docs/30.2/api/search.html'
      const raw = await rawHtml(page, url, path)
      const lean = raw.match(/\/docs\/assets\/30\.2_api_search\.md\.[\w-]+\.lean\.js/)[0]
      const data = await rawHtml(page, url, lean)
      const embedded = data.includes('"markdown":"') || data.includes('\\"markdown\\":\\"')
      copyState[`lean-${build}`] = data.length
      await isolate(context)
      await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new URL(url('/')).origin })
      const md = []
      page.on('response', r => r.url().endsWith('/docs/30.2/api/search.md') && md.push(r.status()))
      await visit(page, url, path)
      await page.locator('.markdown-actions button', { hasText: 'Copy Markdown' }).click()
      await page.waitForTimeout(1500)
      const value = { leanKB: Math.round(data.length / 1024), embeddedMarkdown: embedded, mdFetchOnCopy: md }
      if (build === 'head' && copyState['lean-base']) value.baseLeanKB = Math.round(copyState['lean-base'] / 1024)
      return { pass: !embedded && md.length === 1 && md[0] === 200, value }
    },
  },
  {
    id: 'copy-revalidates-markdown',
    title: 'Every copy checks for a fresh markdown file',
    shas: ['370843e7'],
    kind: 'network',
    expect: 'head',
    checks:
      "Clicks 'Copy Markdown' twice on search.html and reads the request headers of each /docs/30.2/api/search.md fetch. Passes when there are two fetches and each carries cache-control max-age=0. No routes in this gate, because Playwright routing turns the HTTP cache off and hides the header. Base has no fetch to check, it embeds the markdown.",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, context, url }) => {
      await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new URL(url('/')).origin })
      const headers = []
      page.on(
        'request',
        async r =>
          r.url().endsWith('/docs/30.2/api/search.md') &&
          headers.push((await r.allHeaders())['cache-control'] || 'none'),
      )
      await visit(page, url, '/docs/30.2/api/search.html')
      const button = page.locator('.markdown-actions button', { hasText: 'Copy Markdown' })
      await button.click()
      await page.waitForTimeout(1200)
      await button.click()
      await page.waitForTimeout(1200)
      const copied = await page.evaluate(() => navigator.clipboard.readText().then(t => t.length))
      return {
        pass: headers.length === 2 && headers.every(h => h === 'max-age=0') && copied > 1000,
        value: { cacheControl: headers, copiedChars: copied },
      }
    },
  },
  {
    id: 'copy-markdown-same-text',
    title: 'Copy Markdown and section copy give the same text as before',
    shas: ['34a2ed2b', '370843e7'],
    kind: 'text',
    expect: 'guard',
    checks:
      "On search.html at 1280 with fresh storage, clicks 'Copy Markdown', then the copy icon on the 'Facet Results' heading, then reloads with ?languages=python and copies the page again, reading the clipboard each time. Base stores its three texts. HEAD passes when all three match base byte for byte once the one source edit on this page is undone (1e5d1ec6 added {width=2346 height=1792} after the faceting image, which the copy now carries).",
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, context, url, build }) => {
      await isolate(context)
      await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new URL(url('/')).origin })
      const copy = async click => {
        await page.evaluate(() => navigator.clipboard.writeText('__empty__'))
        await click()
        for (let i = 0; i < 40; i++) {
          const text = await page.evaluate(() => navigator.clipboard.readText())
          if (text !== '__empty__') return text
          await page.waitForTimeout(200)
        }
        return '__empty__'
      }
      const copyPage = () => copy(() => page.locator('.markdown-actions button', { hasText: 'Copy Markdown' }).click())
      await visit(page, url, '/docs/30.2/api/search.html')
      const whole = await copyPage()
      const heading = page.locator('.vp-doc #facet-results')
      await heading.scrollIntoViewIfNeeded()
      await heading.hover()
      const section = await copy(() => heading.locator('.copy-section-button').click())
      await visit(page, url, '/docs/30.2/api/search.html?languages=python')
      const python = await copyPage()
      const texts = { page: whole, section, python }
      const sizeAttrs = whole.match(/\{width=\d+ height=\d+\}/g) || []
      const value = Object.fromEntries(Object.entries(texts).map(([k, t]) => [k, { chars: t.length, sha256: sha(t) }]))
      value.sizeAttrsInCopy = sizeAttrs
      if (build === 'base') {
        copyState.base = texts
        return {
          pass: whole.length > 1000 && section.startsWith('## Facet Results') && python.length < whole.length,
          value,
        }
      }
      const undo = t => t.replace('{width=2346 height=1792}', '')
      const differs = Object.keys(texts).filter(k => !copyState.base || copyState.base[k] !== undo(texts[k]))
      value.differsFromBase = differs
      return { pass: !!copyState.base && differs.length === 0, value }
    },
  },

  // handoff 07, search, 404 and home
  {
    id: 'search-site-font',
    title: 'The search button and modal use the site font',
    shas: ['a7a03d39'],
    kind: 'css',
    expect: 'flip',
    checks:
      'At 1440 after document.fonts.ready, reads the nav search button\'s font-family, then clicks it and reads .DocSearch-Input\'s font-family and size. Nothing is typed and the cluster is blocked. Passes when both start with "Source Sans 3" and the input stays 18px.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.evaluate(() => document.fonts.ready)
      const button = await page.evaluate(
        () => getComputedStyle(document.querySelector('.VPNav .DocSearch-Button')).fontFamily,
      )
      await page.click('.VPNav .DocSearch-Button')
      await page.waitForSelector('.DocSearch-Input')
      const input = await page.evaluate(() => {
        const s = getComputedStyle(document.querySelector('.DocSearch-Input'))
        return { fontFamily: s.fontFamily, fontSize: s.fontSize }
      })
      const site = f => f.startsWith('"Source Sans 3"')
      return {
        pass: site(button) && site(input.fontFamily) && input.fontSize === '18px',
        value: { button: button.slice(0, 40), input: { ...input, fontFamily: input.fontFamily.slice(0, 40) } },
      }
    },
  },
  {
    id: 'search-button-site-grays',
    title: "The search button uses the site's blue-tinted grays in both themes",
    shas: ['de20e790'],
    kind: 'css',
    expect: 'flip',
    checks:
      "At 1440 in light then dark, reads the nav search button's border, background and text colour and its first key cap's colours, and compares them with the site tokens --gray-4 (--gray-5 in dark), --vp-nav-bg-color, --gray-11 and --gray-3 resolved inside the nav. Also hovers to swap in the library button on HEAD, moves away and reads again. Passes when every colour matches its token and nothing changes after the swap.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      const read = () =>
        page.evaluate(() => {
          const button = document.querySelector('.VPNav .DocSearch-Button')
          const key = button.querySelector('.DocSearch-Button-Key')
          const dark = document.documentElement.classList.contains('dark')
          const probe = document.createElement('div')
          button.parentElement.appendChild(probe)
          const token = v => {
            probe.style.color = `var(${v})`
            return getComputedStyle(probe).color
          }
          const want = {
            border: token(dark ? '--gray-5' : '--gray-4'),
            background: token('--vp-nav-bg-color'),
            text: token('--gray-11'),
            keyBackground: token('--gray-3'),
            keyText: token('--gray-11'),
          }
          probe.remove()
          const b = getComputedStyle(button)
          const k = getComputedStyle(key)
          const got = {
            border: b.borderTopColor,
            background: b.backgroundColor,
            text: b.color,
            keyBackground: k.backgroundColor,
            keyText: k.color,
          }
          return { got, off: Object.keys(want).filter(n => want[n] !== got[n]) }
        })
      const value = {}
      for (const theme of ['light', 'dark']) {
        await page.goto(url('/docs/30.2/api/search.html'))
        await page.evaluate(t => localStorage.setItem('vitepress-theme-appearance', t), theme)
        await visit(page, url, '/docs/30.2/api/search.html')
        const before = await read()
        await page.hover('.VPNav .DocSearch-Button')
        await page.waitForTimeout(1200)
        await page.mouse.move(700, 600)
        await page.waitForTimeout(500)
        const after = await read()
        value[theme] = {
          ...before.got,
          notToken: before.off,
          changedAfterSwap: Object.keys(before.got).filter(n => before.got[n] !== after.got[n]),
        }
      }
      const pass = Object.values(value).every(v => v.notToken.length === 0 && v.changedAfterSwap.length === 0)
      return { pass, value }
    },
  },
  {
    id: 'search-threshold',
    title: 'The search box drops semantic matches beyond distance 0.7',
    shas: ['092ced0c'],
    kind: 'config',
    expect: 'flip',
    checks:
      "Routes **/multi_search** to record the request body and abort it, so nothing reaches the cluster. Opens search at 1440 and types 'zzqxvj', then reads distance_threshold from searches[0].vector_query. Passes at 0.7. Relevance was settled offline on 1,362 queries, see the G13 report in Fanis's handoff notes (evidence/g13/report.md).",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      const bodies = []
      await page.route('**/multi_search**', r => {
        bodies.push(r.request().postData() || '')
        return r.abort()
      })
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.click('.VPNav .DocSearch-Button')
      await page.waitForSelector('.DocSearch-Input')
      await page.fill('.DocSearch-Input', 'zzqxvj')
      for (let i = 0; i < 30 && !bodies.length; i++) await page.waitForTimeout(200)
      const vectorQuery = bodies.length ? JSON.parse(bodies[0]).searches?.[0]?.vector_query : null
      const threshold = Number((vectorQuery || '').match(/distance_threshold:\s*([\d.]+)/)?.[1])
      return { pass: threshold === 0.7, value: { vectorQuery, requestsCaughtAndAborted: bodies.length } }
    },
  },
  {
    id: 'old-home-cards-rounded',
    title: 'The section cards on old version homes have rounded corners',
    shas: ['eee80b20'],
    kind: 'css',
    expect: 'flip',
    checks: 'Reads border-top-left-radius of the first section card on /docs/0.19.0/ at 1280. Passes at 8px.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/0.19.0/')
      const radius = await page.evaluate(
        () => getComputedStyle(document.querySelector('.vp-doc .grid-cols-3 > a')).borderTopLeftRadius,
      )
      return { pass: radius === '8px', value: { radius } }
    },
  },
  {
    id: 'home-quick-start-and-version-rows',
    title: 'The docs home points to the Quick Start and wraps the version links into rows that stay a list',
    shas: ['4fc72719', '20c1598a'],
    kind: 'ssr-html',
    expect: 'flip',
    checks:
      'Reads the raw HTML of /docs/ for a Quick Start link and the version <ul>, checks /docs/guide/ has id="quick-start", then counts the rows the version links fill at 1280. Passes when the link goes to /docs/guide/#quick-start, the target exists, the <ul> carries role="list" and the links wrap into fewer rows than links.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, context, url }) => {
      const home = await rawHtml(page, url, '/docs/')
      const guide = await rawHtml(page, url, '/docs/guide/')
      const quickStart = (home.match(/<a href="([^"]*)"[^>]*>(?:<strong>)?Quick Start/) || [])[1] || null
      const listTag = (home.match(/<ul [^>]*flex-wrap[^>]*>/) || [null])[0]
      await isolate(context)
      await visit(page, url, '/docs/')
      const rows = await page.evaluate(() => {
        const ul = [...document.querySelectorAll('.vp-doc ul')].find(
          u => u.querySelectorAll('a[href*="/docs/0."]').length > 5,
        )
        const tops = [...ul.children].map(li => Math.round(li.getBoundingClientRect().top))
        return { links: tops.length, rows: new Set(tops).size }
      })
      const pass =
        quickStart === '/docs/guide/#quick-start' &&
        /id="quick-start"/.test(guide) &&
        /role="list"/.test(listTag || '') &&
        rows.rows < rows.links
      return { pass, value: { quickStart, listRoleList: /role="list"/.test(listTag || ''), ...rows } }
    },
  },

  // handoff 08, reading and IA
  {
    id: 'table-block-spacing',
    title: 'Tables sit 16px from the blocks around them',
    shas: ['f78d766d'],
    kind: 'css',
    expect: 'flip',
    checks:
      'Reads margin-top and margin-bottom of the first .vp-doc table on search.html at 1280. Passes at 16px and 16px.',
    context: { viewport: { width: 1280, height: 800 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/search.html')
      const value = await page.evaluate(() => {
        const s = getComputedStyle(document.querySelector('.vp-doc table'))
        return `${s.marginTop} ${s.marginBottom}`
      })
      return { pass: value === '16px 16px', value }
    },
  },
  {
    id: 'callout-line-height',
    title: 'Callout text has the same line height as body text',
    shas: ['af36c9ea'],
    kind: 'css',
    expect: 'flip',
    checks:
      'On documents.html at 1440, reads line-height of the first callout paragraph, the first callout title and a body paragraph. Passes when the callout lines match the 28px body.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/documents.html')
      const value = await page.evaluate(() => ({
        calloutText: getComputedStyle(document.querySelector('.vp-doc .custom-block p:not(.custom-block-title)'))
          .lineHeight,
        calloutTitle: getComputedStyle(document.querySelector('.vp-doc .custom-block-title')).lineHeight,
        body: getComputedStyle(document.querySelector('.vp-doc > div > p')).lineHeight,
      }))
      return { pass: value.calloutText === value.body && value.calloutTitle === value.body, value }
    },
  },
  {
    id: 'balanced-nav-labels',
    title: 'Long sidebar and On this page labels do not leave one word alone on the last line',
    shas: ['8da4e8c6'],
    kind: 'dom',
    expect: 'flip',
    checks:
      'On install-typesense.html at 1440, finds every visible sidebar and outline label of three or more words that wraps, and counts those whose last line holds a single word (word boxes grouped by line). Also reads text-wrap-style. Passes with balance on both and no lone last words.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/guide/install-typesense.html')
      await page.evaluate(() => document.fonts.ready)
      await page.waitForTimeout(500)
      const value = await page.evaluate(() => {
        const lone = []
        const labels = [...document.querySelectorAll('.VPSidebarItem .text, .VPDocAsideOutline .outline-link')]
        labels.forEach(el => {
          const node = [...el.childNodes].find(n => n.nodeType === 3 && n.textContent.trim())
          if (!node || !el.getClientRects().length) return
          const words = [...node.textContent.matchAll(/\S+/g)]
          if (words.length < 3) return
          const range = document.createRange()
          const tops = words.map(m => {
            range.setStart(node, m.index)
            range.setEnd(node, m.index + m[0].length)
            return Math.round(range.getBoundingClientRect().top)
          })
          const last = Math.max(...tops)
          if (new Set(tops).size > 1 && tops.filter(t => t === last).length === 1) lone.push(node.textContent.trim())
        })
        return {
          sidebarWrap: getComputedStyle(document.querySelector('.VPSidebarItem .text')).textWrapStyle,
          outlineWrap: getComputedStyle(document.querySelector('.VPDocAsideOutline .outline-link')).textWrapStyle,
          loneLastWords: lone.length,
          examples: lone.slice(0, 3),
        }
      })
      return {
        pass: value.sidebarWrap === 'balance' && value.outlineWrap === 'balance' && value.loneLastWords === 0,
        value,
      }
    },
  },
  {
    id: 'callout-titles-sentence-case',
    title: 'Untitled callouts read Tip, Info, Warning and Danger',
    shas: ['6a85ca5a'],
    kind: 'text',
    expect: 'flip',
    checks:
      'Lists the callout titles on documents.html as rendered, through innerText, so a CSS text-transform counts. Passes when no title is the all-caps default TIP, INFO, WARNING or DANGER and at least one reads Tip. Hand-typed NOTE titles belong to e69af439 and are ignored.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/documents.html')
      const titles = await page.evaluate(() =>
        [...document.querySelectorAll('.vp-doc .custom-block-title')].map(p => p.innerText.trim()),
      )
      const caps = titles.filter(t => ['TIP', 'INFO', 'WARNING', 'DANGER'].includes(t))
      return { pass: caps.length === 0 && titles.includes('Tip'), value: titles }
    },
  },
  {
    id: 'guide-groups-start-collapsed',
    title: 'Cookbooks, Walk-Throughs and Reference Implementations start collapsed in the Guide sidebar',
    shas: ['d24ce632'],
    kind: 'dom',
    expect: 'flip',
    checks:
      "Lists the collapsed level-0 groups and the sidebar's scrollHeight on install-typesense.html at 1440, then on semantic-search.html checks that Cookbooks opens and the active row is 'Semantic Search'. Passes on exactly those three groups and the open Cookbooks.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      const read = () =>
        page.evaluate(() => ({
          collapsed: [...document.querySelectorAll('.VPSidebar .VPSidebarItem.level-0.collapsed')].map(s =>
            s.querySelector('.text').textContent.trim(),
          ),
          scrollHeight: document.querySelector('.VPSidebar').scrollHeight,
          active: document.querySelector('.VPSidebarItem.is-active .text')?.textContent.trim(),
        }))
      await visit(page, url, '/docs/guide/install-typesense.html')
      await page.waitForTimeout(500)
      const install = await read()
      await visit(page, url, '/docs/guide/semantic-search.html')
      await page.waitForTimeout(800)
      const semantic = await read()
      const pass =
        install.collapsed.join() === 'Cookbooks,Walk-Throughs,Reference Implementations' &&
        !semantic.collapsed.includes('Cookbooks') &&
        semantic.active === 'Semantic Search'
      return {
        pass,
        value: {
          install: { collapsed: install.collapsed, scrollHeight: install.scrollHeight },
          semantic: { collapsed: semantic.collapsed, active: semantic.active },
        },
      }
    },
  },
  {
    id: 'outline-skips-repeated-labels',
    title: "The On this page list stops repeating 'Sample Response' and 'Definition'",
    shas: ['bb6a4814'],
    kind: 'outline',
    expect: 'flip',
    checks:
      "On api-keys.html at 1440, counts outline links, those reading exactly 'Sample Response' or 'Definition', and h4 headings with class ignore-header that keep an id. Passes when the outline has none of the repeated labels and the hidden headings still carry ids.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/api-keys.html')
      await page.waitForSelector('.VPDocAsideOutline .outline-link')
      const value = await page.evaluate(() => {
        const links = [...document.querySelectorAll('.VPDocAsideOutline .outline-link')].map(a => a.textContent.trim())
        return {
          outlineLinks: links.length,
          repeated: links.filter(t => t === 'Sample Response' || t === 'Definition').length,
          hiddenHeadingsWithIds: document.querySelectorAll('.vp-doc h4.ignore-header[id]').length,
        }
      })
      return { pass: value.repeated === 0 && value.hiddenHeadingsWithIds > 0, value }
    },
  },
  {
    id: 'one-version-picker-per-width',
    title: 'Tablets and laptops show one version picker, not two',
    shas: ['fc63b9ee'],
    kind: 'dom',
    expect: 'guard',
    checks:
      'Counts visible version comboboxes (text starting with v and a digit) on search.html at 768, 900, 959 and 1280. Passes on exactly one at each. The 390 count is shown for context. Base has no breadcrumb version on phones at all (that came with e654bb5b).',
    context: { viewport: { width: 768, height: 1024 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/search.html')
      const value = {}
      for (const w of [390, 768, 900, 959, 1280]) {
        await page.setViewportSize({ width: w, height: 1024 })
        await page.waitForTimeout(300)
        value[w] = await page.evaluate(
          () =>
            [...document.querySelectorAll('button[role="combobox"]')].filter(
              b => /^v\d/.test(b.textContent.trim()) && b.getClientRects().length > 0,
            ).length,
        )
      }
      return { pass: [768, 900, 959, 1280].every(w => value[w] === 1), value }
    },
  },
  {
    id: 'prose-width-same-in-both-fonts',
    title: 'Prose keeps the same width whether the web font or the fallback renders it',
    shas: ['085e9425'],
    kind: 'css',
    expect: 'guard',
    checks:
      "On documents.html at 1440, reads max-width and width of the paragraph starting 'If the document contains' once with the web font loaded and once in a fresh context with every .woff2 aborted. Passes when the width is the same in both. Base has no prose cap at all (84032a0f added it), so it passes trivially.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      const path = '/docs/30.2/api/documents.html'
      const read = p =>
        p.evaluate(async () => {
          await document.fonts.ready
          const el = [...document.querySelectorAll('.vp-doc p')].find(p =>
            p.textContent.startsWith('If the document contains'),
          )
          return { maxWidth: getComputedStyle(el).maxWidth, width: +el.getBoundingClientRect().width.toFixed(1) }
        })
      await isolate(context)
      await visit(page, url, path)
      const webfont = await read(page)
      const off = await fresh(context, { viewport: { width: 1440, height: 900 } }, async ctx => {
        await isolate(ctx)
        await blockFonts(ctx)
      })
      await visit(off.page, url, path)
      const fallback = await read(off.page)
      await off.ctx.close()
      return { pass: webfont.width === fallback.width, value: { webfont, fallback } }
    },
  },
  {
    id: 'parameter-hash-link',
    title: 'Each parameter has a # link beside its name and the name stays plain selectable text',
    shas: ['e1d57f93'],
    kind: 'anchors',
    expect: 'head',
    checks:
      "On server-configuration.html at 1440, finds the --config row's a.parameter-anchor and checks the name sits outside any link, reads the anchor's opacity at rest and with the row hovered, triple-clicks the name --api-key and reads the selection and URL hash, then focuses the --config anchor and presses Enter. Passes when the # is hidden at rest, shown on hover, the click selects the whole name without navigating, and Enter sets #--config. Base has no # link to test, so only HEAD counts.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/server-configuration.html')
      const anchor = page.locator('td#--config a.parameter-anchor')
      if (!(await anchor.count())) {
        const cell = await page.evaluate(() => {
          const td = [...document.querySelectorAll('.vp-doc td')].find(td => td.textContent.trim() === '--config')
          return td && { id: td.id || null, links: td.querySelectorAll('a').length }
        })
        return { pass: false, value: { anchor: 'none', configCell: cell } }
      }
      const rest = await anchor.evaluate(a => ({
        opacity: getComputedStyle(a).opacity,
        nameInsideLink: !!a.closest('td').querySelector('a code'),
        label: a.getAttribute('aria-label'),
      }))
      await page.locator('td#--config').hover()
      await page.waitForTimeout(300)
      const hovered = await anchor.evaluate(a => getComputedStyle(a).opacity)
      await page.locator('td#--api-key code').click({ clickCount: 3 })
      const select = await page.evaluate(() => ({ selection: getSelection().toString().trim(), hash: location.hash }))
      await anchor.focus()
      await page.keyboard.press('Enter')
      await page.waitForTimeout(500)
      const hashAfterEnter = await page.evaluate(() => location.hash)
      const pass =
        rest.opacity === '0' &&
        !rest.nameInsideLink &&
        hovered === '1' &&
        select.selection === '--api-key' &&
        select.hash === '' &&
        hashAfterEnter === '#--config'
      return { pass, value: { ...rest, hoveredOpacity: hovered, ...select, hashAfterEnter } }
    },
  },

  // guards near the riskiest changes
  {
    id: 'search-opens-every-way',
    title: 'Search opens on the first click, Cmd+K and /, before and after the library loads',
    shas: ['780722ac'],
    kind: 'dom',
    expect: 'guard',
    checks:
      'Three fresh loads at 1440 with the cluster blocked: a click on the nav button, Cmd+K (then Escape and Cmd+K again once the library is in), and /. Each must show .DocSearch-Modal with focus in .DocSearch-Input, and Escape must return focus to the nav search button.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      // an Escape pressed in the first few hundred ms after opening is dropped on both builds, so each step settles first
      const opened = async () => {
        const ok = await page
          .waitForFunction(
            () => document.querySelector('.DocSearch-Modal') && document.activeElement?.matches('.DocSearch-Input'),
            null,
            { timeout: 5000 },
          )
          .then(
            () => true,
            () => false,
          )
        await page.waitForTimeout(600)
        return ok
      }
      const escape = async () => {
        await page.keyboard.press('Escape')
        await page
          .waitForFunction(() => !document.querySelector('.DocSearch-Modal'), null, { timeout: 3000 })
          .catch(() => {})
        await page.waitForTimeout(300)
        return page.evaluate(
          () =>
            !document.querySelector('.DocSearch-Modal') &&
            !!document.activeElement?.matches('.VPNav .DocSearch-Button'),
        )
      }
      const value = {}
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.click('.VPNav .DocSearch-Button')
      value.click = await opened()
      value.clickEscapeReturnsFocus = await escape()
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.keyboard.press('Meta+k')
      value.cmdK = await opened()
      value.cmdKEscapeReturnsFocus = await escape()
      await page.keyboard.press('Meta+k')
      value.cmdKAgain = await opened()
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.keyboard.press('/')
      value.slash = await opened()
      return { pass: Object.values(value).every(Boolean), value }
    },
  },
  {
    id: 'dark-reload-no-light-flash',
    title: 'A hard reload in dark mode paints dark from the first frame',
    shas: ['1796037a', '780722ac'],
    kind: 'dom',
    expect: 'guard',
    theme: 'dark',
    checks:
      "With dark saved, reloads search.html at 1440 and reads the html class and the body and html backgrounds on the first animation frame that has a body. The painted colour is the body's when it is opaque, or the html's when the body is transparent. Passes when html has the dark class and that colour is opaque with red, green and blue all under 60.",
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await context.addInitScript(() => {
        const look = () => {
          if (!document.body) return requestAnimationFrame(look)
          window.__firstFrame = {
            dark: document.documentElement.classList.contains('dark'),
            body: getComputedStyle(document.body).backgroundColor,
            html: getComputedStyle(document.documentElement).backgroundColor,
          }
        }
        requestAnimationFrame(look)
      })
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.reload()
      await hydrated(page)
      const value = await page.evaluate(() => window.__firstFrame)
      const channels = c => (c.match(/[\d.]+/g) || []).map(Number)
      const alpha = c =>
        c === 'transparent' ? 0 : c.startsWith('rgba(') ? channels(c)[3] : c.startsWith('rgb(') ? 1 : NaN
      const painted = alpha(value.body) === 1 ? value.body : alpha(value.body) === 0 ? value.html : null
      const pass = value.dark && !!painted && alpha(painted) === 1 && channels(painted).every(c => c < 60)
      return { pass, value: { ...value, painted } }
    },
  },
  {
    id: 'hash-landing-holds',
    title: 'A hash link next to an image lands under the bars and stays there when the image arrives late',
    shas: ['cfdf8875', '1e5d1ec6'],
    kind: 'scroll',
    expect: 'guard',
    checks:
      'Holds every content image for 2.5s, loads three hash links (search.html#facet-results and magento2#configuration at 1440, astro#final-output at 390), reads the target top at 2s and again at 4.5s and sums content layout shifts after the first read. Passes when the target sits between 40 and 130px from the top, does not move, and nothing in the content shifts.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ context, url }) => {
      const value = {}
      for (const [path, w, h] of [
        ['/docs/30.2/api/search.html#facet-results', 1440, 900],
        ['/docs/guide/magento2-search.html#configuration', 1440, 900],
        ['/docs/guide/astro-search-bar.html#final-output', 390, 844],
      ]) {
        const run = await fresh(context, { viewport: { width: w, height: h } }, async ctx => {
          await isolate(ctx)
          await ctx.route(/\/docs\/images\/.*\.(png|svg)$/, async r => {
            if (!r.request().url().includes('typesense_logo')) await new Promise(done => setTimeout(done, 2500))
            await r.continue().catch(() => {})
          })
          await ctx.addInitScript(SHIFTS)
        })
        const id = path.split('#')[1]
        const top = () =>
          run.page.evaluate(id => Math.round(document.getElementById(id).getBoundingClientRect().top), id)
        await run.page.goto(url(path))
        await run.page.waitForTimeout(2000)
        const mark = await run.page.evaluate(() => performance.now())
        const landed = await top()
        await run.page.waitForTimeout(2500)
        const later = await top()
        const shifts = await run.page.evaluate(() => window.__shifts)
        value[id] = { landed, later, contentClsAfterLanding: clsOf(shifts, e => e.t > mark && e.where.includes('doc')) }
        await run.ctx.close()
      }
      const pass = Object.values(value).every(
        v => v.landed >= 40 && v.landed <= 130 && v.landed === v.later && v.contentClsAfterLanding < 0.001,
      )
      return { pass, value }
    },
  },
  {
    id: 'search-page-dom-size',
    title: 'search.html stays a manageable DOM size',
    shas: ['e1d57f93', '103b1f77'],
    kind: 'dom',
    expect: 'guard',
    checks:
      'Counts every element on the hydrated search.html at 1440. HEAD measured 5,345 and base 5,065. Passes under 5,600, which is HEAD plus about 5%.',
    context: { viewport: { width: 1440, height: 900 } },
    run: async ({ page, context, url }) => {
      await isolate(context)
      await visit(page, url, '/docs/30.2/api/search.html')
      await page.waitForTimeout(1000)
      const elements = await page.evaluate(() => document.getElementsByTagName('*').length)
      return { pass: elements < 5600, value: { elements } }
    },
  },
]
