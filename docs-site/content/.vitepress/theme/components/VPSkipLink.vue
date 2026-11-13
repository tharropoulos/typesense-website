<template>
  <span ref="backToTop" tabindex="-1" />
  <a
    href="#VPContent"
    class="VPSkipLink visually-hidden left-2 top-2 z-[999] rounded-lg bg-[var(--vp-c-bg)] px-4 py-2 text-[12px] font-bold text-[var(--vp-c-brand-1)] no-underline [box-shadow:var(--vp-shadow-3)] focus:h-auto focus:w-auto focus:[clip-path:none] focus:[clip:auto] wide:left-4 wide:top-3.5"
    @click="focusOnTargetAnchor"
  >
    {{ theme.skipToContentLabel || 'Skip to content' }}
  </a>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'
import { ref, watch } from 'vue'

const { theme } = useData<DefaultTheme.Config>()
const route = useRoute()
const backToTop = ref<HTMLElement>()

function focusTarget(el: HTMLElement) {
  if (!el.hasAttribute('tabindex')) {
    el.setAttribute('tabindex', '-1')
    el.addEventListener('blur', () => el.removeAttribute('tabindex'), { once: true })
  }
  el.focus({ preventScroll: true })
}

function focusOnTargetAnchor({ target }: Event) {
  const el = document.getElementById(decodeURIComponent((target as HTMLAnchorElement).hash).slice(1))
  if (el) {
    focusTarget(el)
    window.scrollTo(0, 0)
  }
}

// a link to a heading on another page leaves focus there. Tab carries on from it
watch(
  () => route.path,
  () => {
    const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)))
    if (target) focusTarget(target)
    else backToTop.value?.focus()
  },
  { flush: 'post' },
)
</script>
