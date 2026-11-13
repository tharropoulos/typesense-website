<template>
  <div
    ref="main"
    class="VPLocalNavOutlineDropdown px-5 pb-[11px] pt-3 narrow:px-9"
    :style="{ '--vp-vh': vh + 'px' }"
  >
    <button
      v-if="headers.length > 0 || !mounted"
      ref="toggleButton"
      :class="[BUTTON, open ? 'open text-[var(--vp-c-text-1)]' : 'text-[var(--vp-c-text-2)]']"
      :aria-expanded="open"
      aria-controls="VPLocalNavOutline"
      @click="toggle"
    >
      <span class="menu-text">{{ resolveTitle(theme) }}</span>
      <span
        class="vpi-chevron-right icon ml-0.5 inline-block align-middle text-[14px] [transition:transform_.25s] narrow:text-[16px]"
        :class="{ 'rotate-90': open }"
      />
    </button>
    <button v-else :class="[BUTTON, 'text-[var(--vp-c-text-2)]']" @click="scrollToTop">
      {{ theme.returnToTopLabel || 'Return to top' }}
    </button>
    <Transition name="flyout" enter-from-class="opacity-0 -translate-y-4" leave-to-class="opacity-0 -translate-y-4">
      <div
        v-if="open"
        id="VPLocalNavOutline"
        ref="items"
        class="items absolute inset-x-4 top-10 grid max-h-[calc(var(--vp-vh,100vh)-86px)] gap-px overflow-y-auto overflow-x-hidden rounded-lg border border-[var(--vp-c-border)] bg-[var(--vp-c-gutter)] [box-shadow:var(--vp-shadow-3)] narrow:left-[calc(var(--vp-sidebar-width)+32px)] narrow:right-auto narrow:w-80"
        @click="onItemClick"
      >
        <div class="header bg-[var(--vp-c-bg-soft)]">
          <a
            class="top-link block px-4 text-[14px] font-medium leading-[48px] text-[var(--vp-c-brand-1)]"
            href="#"
            @click="scrollToTop"
          >
            {{ theme.returnToTopLabel || 'Return to top' }}
          </a>
        </div>
        <div class="outline bg-[var(--vp-c-bg-soft)] py-2">
          <VPDocOutlineItem :headers="headers" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onKeyStroke, useMounted } from '@vueuse/core'
import { onContentUpdated, useData } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'
// @ts-expect-error vitepress ships no types for its internals
import { resolveTitle } from 'vitepress/dist/client/theme-default/composables/outline.js'
import VPDocOutlineItem from 'vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue'
import { nextTick, ref, watch } from 'vue'

const BUTTON =
  'relative block text-[12px] font-medium leading-6 [transition:color_.5s] hover:text-[var(--vp-c-text-1)] hover:[transition:color_.25s] narrow:text-[14px]'

const props = defineProps<{
  headers: unknown[]
  navHeight: number
}>()

const { theme } = useData<DefaultTheme.Config>()
const open = ref(false)
const vh = ref(0)
const main = ref<HTMLDivElement>()
const items = ref<HTMLDivElement>()
const toggleButton = ref<HTMLButtonElement>()
// headers fill in only once mounted, which made the server render "Return to top"
const mounted = useMounted()

function closeOnClickOutside(e: Event) {
  if (!main.value?.contains(e.target as Node)) {
    open.value = false
  }
}

watch(open, value => {
  if (value) {
    document.addEventListener('click', closeOnClickOutside)
    return
  }
  document.removeEventListener('click', closeOnClickOutside)
})

onKeyStroke('Escape', () => {
  if (!open.value) return
  open.value = false
  if (main.value?.contains(document.activeElement)) toggleButton.value?.focus()
})

onContentUpdated(() => {
  open.value = false
})

function toggle() {
  open.value = !open.value
  vh.value = window.innerHeight + Math.min(window.scrollY - props.navHeight, 0)
}

function onItemClick(e: Event) {
  if ((e.target as HTMLElement).classList.contains('outline-link')) {
    // disable animation on hash navigation when page jumps
    if (items.value) {
      items.value.style.transition = 'none'
    }
    nextTick(() => {
      open.value = false
    })
  }
}

function scrollToTop() {
  open.value = false
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>
