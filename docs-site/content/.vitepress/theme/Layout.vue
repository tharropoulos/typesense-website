<template>
  <Layout>
    <!-- Typesense DocSearch in the navbar (desktop). -->
    <template #nav-bar-content-after>
      <div class="flex items-center gap-2 ml-4">
        <TypesenseSearchBox />
      </div>
    </template>
    <!-- Version dropdown in the mobile nav screen. -->
    <template #nav-screen-content-after>
      <VersionDropdown class="mt-4" />
    </template>
    <!-- Version dropdown at the top of the right aside (desktop). Pinned via CSS;
         its measured height feeds the outline title's sticky offset (below). -->
    <template #aside-top>
      <div ref="asideTop" class="aside-pinned-version">
        <VersionDropdown show-on-desktop-only class="mb-4" />
      </div>
    </template>
    <!-- Radial scroll-progress ring injected into the "On this page" outline title. -->
    <template #aside-outline-before>
      <OutlineScrollProgress />
    </template>
    <!-- "Switch to latest" prompt pinned to the bottom of the right aside (desktop). -->
    <template #aside-bottom>
      <VersionWarning />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import VersionDropdown from './components/VersionDropdown.vue'
import VersionWarning from './components/VersionWarning.vue'
import TypesenseSearchBox from './components/TypesenseSearchBox.vue'
import OutlineScrollProgress from './components/OutlineScrollProgress.vue'

const { Layout } = DefaultTheme

// typesense-docsearch's dark palette keys off `html[data-theme="dark"]`, but
// VitePress toggles dark mode with a `.dark` class — so mirror the state onto
// data-theme, otherwise the search button and modal stay light in dark mode.
const { isDark } = useData()
watch(isDark, (dark) => {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
})

// VitePress marks the current section in the "On this page" outline with an
// `.active` class as you scroll, but it never scrolls the outline itself, so a
// long outline leaves the active item off-screen. VitePress doesn't expose the
// active anchor as reactive state, so observe the class change on the DOM and
// keep the active item centered in its scroll container.
let observer: MutationObserver | undefined

function scrollActiveIntoView() {
  const active = document.querySelector<HTMLElement>('.VPDocAsideOutline .outline-link.active')
  if (active) active.scrollIntoView({ block: 'center', behavior: 'smooth' })
}

// The version block is conditionally rendered and variable-height (warning
// banner), so expose its measured height as `--aside-pinned-top` on the aside;
// style.css uses it to stack the pinned "On this page" title flush beneath it.
const asideTop = ref<HTMLElement | null>(null)
let resize: ResizeObserver | undefined

onMounted(() => {
  document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'

  const outline = document.querySelector('.VPDocAsideOutline')
  if (outline) {
    observer = new MutationObserver(scrollActiveIntoView)
    observer.observe(outline, { attributes: true, attributeFilter: ['class'], subtree: true })
    scrollActiveIntoView()
  }

  if (asideTop.value) {
    const aside = asideTop.value.closest<HTMLElement>('.VPDocAside')
    const sync = () =>
      aside?.style.setProperty('--aside-pinned-top', `${asideTop.value?.offsetHeight ?? 0}px`)
    resize = new ResizeObserver(sync)
    resize.observe(asideTop.value)
    sync()
  }
})

onUnmounted(() => {
  observer?.disconnect()
  resize?.disconnect()
})
</script>
