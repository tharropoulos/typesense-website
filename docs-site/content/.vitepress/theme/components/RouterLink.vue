<template>
  <a :href="href"><slot /></a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

// Content authored for VuePress uses <RouterLink :to="`/path.html`">…</RouterLink>.
// VitePress doesn't ship a RouterLink, but it hijacks clicks on internal <a>
// elements for SPA navigation, so a base-aware anchor reproduces the behavior.
const props = defineProps<{ to: string }>()

const href = computed(() => {
  const to = props.to || ''
  // External / anchor / mailto links pass through untouched.
  if (/^(https?:)?\/\//.test(to) || to.startsWith('#') || to.startsWith('mailto:')) return to
  return withBase(to)
})
</script>
