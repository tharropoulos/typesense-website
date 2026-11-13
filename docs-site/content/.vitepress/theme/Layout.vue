<template>
  <Layout>
    <template #nav-bar-content-after>
      <div class="flex items-center gap-2 ml-4">
        <!-- covers the band between the nav-screen copy and the aside copy -->
        <div class="hidden min-[768px]:block min-[1280px]:hidden">
          <VersionDropdown align="end" />
        </div>
        <TypesenseSearchBox />
      </div>
    </template>
    <!-- measured height feeds the outline title's sticky offset -->
    <template #sidebar-nav-before>
      <SidebarActivePill />
    </template>
    <template #aside-top>
      <div ref="asideTop" class="aside-pinned-version">
        <VersionDropdown show-on-desktop-only class="mb-4" />
        <VersionWarning />
      </div>
    </template>
    <template #aside-outline-before>
      <OutlineScrollProgress />
    </template>
    <template #doc-before>
      <StickyHeading />
    </template>
    <!-- no aside below 1280px, the prompt rides the doc column instead -->
    <template #doc-bottom>
      <VersionWarning banner />
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { getScrollOffset, useData, useRoute } from 'vitepress'
import mediumZoom, { type Zoom } from 'medium-zoom'
import VersionDropdown from './components/VersionDropdown.vue'
import VersionWarning from './components/VersionWarning.vue'
import TypesenseSearchBox from './components/TypesenseSearchBox.vue'
import OutlineScrollProgress from './components/OutlineScrollProgress.vue'
import SidebarActivePill from './components/SidebarActivePill.vue'
import StickyHeading from './components/StickyHeading.vue'
import NotFound from './components/NotFound.vue'

const { Layout } = DefaultTheme

// typesense-docsearch keys its dark palette off html[data-theme], vitepress
// off a .dark class
const { isDark } = useData()
watch(isDark, dark => {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
})

// vitepress marks the active outline item but never scrolls it into view, and
// doesn't expose it as state either
let observer: MutationObserver | undefined

function scrollActiveIntoView() {
  const active = document.querySelector<HTMLElement>('.VPDocAsideOutline .outline-link.active')
  const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches
  if (active) active.scrollIntoView({ block: 'center', behavior: smooth ? 'smooth' : 'instant' })
}

// the aside is one scroll box for every page, so a new page's outline would
// open wherever the last one was left
const route = useRoute()
watch(
  () => route.path,
  () => {
    if (!location.hash) document.querySelector('.aside-container')?.scrollTo(0, 0)
  },
  { flush: 'post' },
)

// images inside a link keep following the link
const ZOOMABLE = '.vp-doc :not(a) > img'
let zoom: Zoom | undefined

function attachZoom() {
  zoom?.detach()
  zoom?.attach(ZOOMABLE)
  zoom?.getImages().forEach(image => {
    image.tabIndex = 0
    image.setAttribute('role', 'button')
  })
}
watch(() => route.path, attachZoom, { flush: 'post' })

function returnZoomFocus(image: HTMLElement) {
  if (document.activeElement === document.body) image.focus({ preventScroll: true })
}

// while zoomed, focus sits on the clone. until the open animation ends it is on
// <body> or the hidden original
function onZoomKeydown(event: KeyboardEvent) {
  if (!zoom) return
  const target = event.target as HTMLElement
  const zoomed = zoom.getZoomedImage()
  if (zoomed) {
    if (!target.matches('body, .medium-zoom-image') || !['Tab', 'Enter', ' ', 'Escape'].includes(event.key)) return
    event.preventDefault()
    if (event.repeat) return
    zoom.close().then(() => returnZoomFocus(zoomed))
  } else if (['Enter', ' '].includes(event.key) && zoom.getImages().includes(target)) {
    event.preventDefault()
    if (!event.repeat) zoom.open({ target })
  }
}

// vitepress runs useActiveAnchor for the desktop aside only, and short-circuits
// it on isAsideEnabled, which is false at every width where the local nav
// renders. this applies the same "last heading above the fold" rule to the
// dropdown's own copy of the list
let localNav: MutationObserver | undefined
let localNavFrame = 0

// a heading that is display:none or fixed loses its offsetParent chain
function absoluteTop(el: HTMLElement | null) {
  let top = 0
  while (el && el !== document.body) {
    top += el.offsetTop
    el = el.offsetParent as HTMLElement | null
  }
  return el ? top : NaN
}

function syncLocalNavActive() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('.VPLocalNavOutlineDropdown .outline-link')]
  if (!links.length) return

  const headers = links
    .map(link => ({
      link,
      top: absoluteTop(document.getElementById(decodeURIComponent(link.hash.slice(1)))),
    }))
    .filter(({ top }) => !Number.isNaN(top))
    .sort((a, b) => a.top - b.top)

  const atBottom = Math.abs(window.scrollY + window.innerHeight - document.body.offsetHeight) < 1
  const cutoff = window.scrollY + getScrollOffset() + 4
  const reached = atBottom ? headers : headers.filter(({ top }) => top <= cutoff)
  // nothing is current while the page sits at the very top
  const active = window.scrollY < 1 ? undefined : reached[reached.length - 1]?.link

  links.forEach(link => link.classList.toggle('active', link === active))
}

// the panel is its own scroll box, so a long outline can open with the current
// row already past the fold
function revealLocalNavActive() {
  const items = document.querySelector<HTMLElement>('.VPLocalNavOutlineDropdown .items')
  const active = items?.querySelector<HTMLElement>('.outline-link.active')
  if (!items || !active) return
  const offset = active.getBoundingClientRect().top - items.getBoundingClientRect().top
  items.scrollTop += offset - items.clientHeight / 2 + active.offsetHeight / 2
}

function onLocalNavScroll() {
  cancelAnimationFrame(localNavFrame)
  localNavFrame = requestAnimationFrame(syncLocalNavActive)
}

// style.css stacks the pinned outline title beneath this, and the height varies
const asideTop = ref<HTMLElement | null>(null)
let resize: ResizeObserver | undefined

onMounted(() => {
  document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
  zoom = mediumZoom({ background: 'var(--vp-c-bg)' })
  zoom.on('opened', event => {
    const original = event.target as HTMLElement
    const clone = document.querySelector<HTMLElement>('.medium-zoom-image--opened')
    if (!clone) return
    // screen readers close it with a click. overlay, wheel and resize closes
    // leave focus alone, which keeps Space paging down after them
    clone.addEventListener('click', () =>
      original.addEventListener('medium-zoom:closed', () => returnZoomFocus(original), { once: true }),
    )
    if (document.activeElement?.matches('body, .medium-zoom-image')) clone.focus({ preventScroll: true })
  })
  attachZoom()
  document.addEventListener('keydown', onZoomKeydown)

  const outline = document.querySelector('.VPDocAsideOutline')
  if (outline) {
    observer = new MutationObserver(scrollActiveIntoView)
    observer.observe(outline, { attributes: true, attributeFilter: ['class'], subtree: true })
    scrollActiveIntoView()
  }

  // the dropdown's list is v-if'd, so its links only exist while it is open
  const dropdown = document.querySelector('.VPLocalNavOutlineDropdown')
  if (dropdown) {
    localNav = new MutationObserver(() => {
      syncLocalNavActive()
      revealLocalNavActive()
    })
    localNav.observe(dropdown, { childList: true, subtree: true })
  }
  window.addEventListener('scroll', onLocalNavScroll, { passive: true })

  if (asideTop.value) {
    const aside = asideTop.value.closest<HTMLElement>('.VPDocAside')
    const sync = () => aside?.style.setProperty('--aside-pinned-top', `${asideTop.value?.offsetHeight ?? 0}px`)
    resize = new ResizeObserver(sync)
    resize.observe(asideTop.value)
    sync()
  }
})

onUnmounted(() => {
  observer?.disconnect()
  resize?.disconnect()
  localNav?.disconnect()
  zoom?.detach()
  document.removeEventListener('keydown', onZoomKeydown)
  window.removeEventListener('scroll', onLocalNavScroll)
  cancelAnimationFrame(localNavFrame)
})
</script>
