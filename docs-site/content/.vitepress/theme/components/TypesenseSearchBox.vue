<template>
  <div ref="container" class="typesense-search-wrapper" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useData, useRouter } from 'vitepress'
import docsearch from 'typesense-docsearch.js'
import type { DocSearchInstance } from 'typesense-docsearch.js'

const { theme, page, site } = useData()
const router = useRouter()

const container = ref<HTMLElement | null>(null)
let instance: DocSearchInstance | undefined

function currentVersion(): string | null {
  return (page.value as any).typesenseVersion
}

function initialize() {
  const userOptions = (theme.value as any).typesenseDocsearch
  if (!userOptions || !container.value) return

  const { typesenseSearchParameters = {} } = userOptions
  const latest = (theme.value as any).typesenseLatestVersion
  const version = currentVersion()

  instance = docsearch({
    ...userOptions,
    container: container.value,
    placeholder: (theme.value as any).searchPlaceholder || '',
    typesenseSearchParameters: {
      ...typesenseSearchParameters,
      filter_by: version
        ? `version:=[${version},unversioned]`
        : `version:=[${latest},unversioned]`,
    },
    navigator: {
      navigate({ itemUrl }: { itemUrl: string }) {
        const { pathname, hash } = new URL(itemUrl, site.value.base)
        const routepath = pathname.replace(site.value.base, '/')
        router.go(`${routepath}${decodeURIComponent(hash)}`)
      },
    },
  })
}

function teardown() {
  instance?.destroy()
  instance = undefined
}

onMounted(initialize)
onBeforeUnmount(teardown)

// Re-filter results when navigating between versioned sections.
watch(() => currentVersion(), () => {
  teardown()
  initialize()
})
</script>
