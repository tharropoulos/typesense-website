<template>
  <header
    v-if="hasNavbar"
    class="VPNav pointer-events-none sticky left-0 z-[var(--vp-z-index-nav)] w-full transition-[top] duration-300 motion-reduce:transition-none narrow:fixed narrow:top-[var(--vp-layout-top-height,0px)] max-wide:[&_.VPNavBarMenu_.vp-external-link-icon]:hidden"
    :class="hidden ? '-top-[var(--vp-nav-height)]' : 'top-[var(--vp-layout-top-height,0px)]'"
  >
    <!-- vitepress sets has-sidebar after mount, so the bar snapped to full width at hydration -->
    <VPNavBar :class="{ 'has-sidebar': hasSidebar }" :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen">
      <template #nav-bar-title-before><slot name="nav-bar-title-before" /></template>
      <template #nav-bar-title-after><slot name="nav-bar-title-after" /></template>
      <template #nav-bar-content-before><slot name="nav-bar-content-before" /></template>
      <template #nav-bar-content-after><slot name="nav-bar-content-after" /></template>
    </VPNavBar>
    <VPNavScreen :open="isScreenOpen" />
  </header>
</template>

<script setup lang="ts">
import { onKeyStroke, useMediaQuery } from '@vueuse/core'
import { inBrowser, useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
// @ts-expect-error vitepress ships no types for its internals
import { useNav } from 'vitepress/dist/client/theme-default/composables/nav.js'
import VPNavBar from 'vitepress/dist/client/theme-default/components/VPNavBar.vue'
import { computed, provide, watch, watchEffect } from 'vue'
import { useNavHidden } from '../composables/useNavHidden'
import VPNavScreen from './VPNavScreen.vue'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
const { frontmatter } = useData()
const { hasSidebar } = useSidebar()
const hidden = useNavHidden()

const hasNavbar = computed(() => frontmatter.value.navbar !== false)

provide('close-screen', closeScreen)

// escape in a popup portalled out of the nav, like the version list, closes only that.
// webkit leaves focus on body after a tap
onKeyStroke('Escape', e => {
  if (!isScreenOpen.value || !(e.target as Element).matches('body, .VPNav *')) return
  closeScreen()
  document.querySelector<HTMLElement>('.VPNavBarHamburger')?.focus()
})

// vitepress closes the menu by outerWidth, which page zoom leaves alone
watch(useMediaQuery('(min-width: 768px)'), closeScreen)

watchEffect(() => {
  if (inBrowser) {
    document.documentElement.classList.toggle('hide-nav', !hasNavbar.value)
  }
})
</script>
