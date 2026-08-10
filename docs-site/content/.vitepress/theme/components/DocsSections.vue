<template>
  <div class="grid grid-cols-3 gap-[10px] max-mobile:grid-cols-1">
    <DocsSectionButton section-link="#what-s-new" section-name="What's New" />
    <DocsSectionButton :section-link="`/guide/`" section-name="Guide" />
    <DocsSectionButton :section-link="`/${apiVersion}/api/`" section-name="API Reference" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DocsSectionButton from './DocsSectionButton.vue'

const { page, theme } = useData()
// On unversioned pages (e.g. the homepage) fall back to the latest version
// rather than emitting `/null/api/`.
const apiVersion = computed(
  () => (page.value as any).typesenseVersion || (theme.value as any).typesenseLatestVersion,
)
</script>
