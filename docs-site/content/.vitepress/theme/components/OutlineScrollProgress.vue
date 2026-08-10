<template>
  <!-- The "On this page" outline title lives inside VPDocAsideOutline and can't
       be reached through a theme slot, so teleport the ring into it once it's
       mounted. `title` is set on mount / route change. -->
  <Teleport v-if="title" :to="title">
    <svg
      class="inline-block align-middle ml-1.5"
      :width="SIZE"
      :height="SIZE"
      :viewBox="`0 0 ${SIZE} ${SIZE}`"
    >
      <circle
        class="fill-none stroke-[var(--vp-c-divider)]"
        :cx="SIZE / 2"
        :cy="SIZE / 2"
        :r="RADIUS"
        :stroke-width="STROKE"
      />
      <circle
        class="fill-none stroke-[var(--vp-c-brand-1)] transition-[stroke-dashoffset] duration-100 ease-linear"
        :cx="SIZE / 2"
        :cy="SIZE / 2"
        :r="RADIUS"
        :stroke-width="STROKE"
        stroke-linecap="round"
        :stroke-dasharray="CIRCUMFERENCE"
        :stroke-dashoffset="CIRCUMFERENCE * (1 - ratio)"
        :transform="`rotate(-90 ${SIZE / 2} ${SIZE / 2})`"
      />
    </svg>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const RADIUS = 7
const STROKE = 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const SIZE = (RADIUS + STROKE) * 2

const route = useRoute()
const title = ref<HTMLElement | null>(null)
const ratio = ref(0)
let frame = 0

function update() {
  const doc = document.documentElement
  const scrollable = doc.scrollHeight - doc.clientHeight
  ratio.value = scrollable > 0 ? Math.min(1, Math.max(0, doc.scrollTop / scrollable)) : 1
}

function onScroll() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

function attach() {
  const el = document.querySelector<HTMLElement>('.VPDocAsideOutline .outline-title')
  if (!el) return
  title.value = el
  update()
}

onMounted(() => {
  // The outline is a sibling that renders after this slot, so defer the first
  // attach a tick to let its title mount (matters on hard loads of a doc page).
  nextTick(attach)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  cancelAnimationFrame(frame)
})

// The outline title is re-rendered on navigation, so re-attach after each route.
watch(
  () => route.path,
  () => {
    title.value = null
    nextTick(attach)
  },
)
</script>
