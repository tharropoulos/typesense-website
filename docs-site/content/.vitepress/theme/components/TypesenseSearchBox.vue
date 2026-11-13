<template>
  <div class="typesense-search-wrapper" @click="navHidden = false">
    <div ref="container" class="contents" />
    <!-- docsearch's own button markup, swapped for the real one once the library loads -->
    <button
      v-if="!loaded"
      ref="staticButton"
      type="button"
      :aria-label="`Search (${shortcut})`"
      :aria-keyshortcuts="shortcut"
      class="DocSearch DocSearch-Button"
      @pointerenter="load"
      @focus="load"
      @click="open"
    >
      <span class="DocSearch-Button-Container">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" class="DocSearch-Search-Icon">
          <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" stroke-width="1.4" />
          <path d="m21 21-4.3-4.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="DocSearch-Button-Placeholder">Search</span>
      </span>
      <span class="DocSearch-Button-Keys">
        <kbd v-if="isApple" class="DocSearch-Button-Key">⌘</kbd>
        <kbd v-else class="DocSearch-Button-Key DocSearch-Button-Key--ctrl">Ctrl</kbd>
        <kbd class="DocSearch-Button-Key">K</kbd>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useData, useRouter } from 'vitepress'
import type { DocSearchInstance } from 'typesense-docsearch.js'
import type { TypesensePageData, TypesenseThemeConfig } from '../types'
import { useNavHidden } from '../composables/useNavHidden'
import { underlineAnchor } from '../util/underlineAnchor'

const { theme, page } = useData<TypesenseThemeConfig>()
const router = useRouter()
const navHidden = useNavHidden()

const container = ref<HTMLElement | null>(null)
const staticButton = ref<HTMLElement | null>(null)
const loaded = ref(false)
// the server can't know the platform. docsearch picks the keys the same way
const isApple = ref(true)
const shortcut = computed(() => (isApple.value ? 'Meta+k' : 'Control+k'))
let docsearch: typeof import('typesense-docsearch.js').default | undefined
let loading: Promise<void> | undefined
let instance: DocSearchInstance | undefined
let searchEventTimer: ReturnType<typeof setTimeout> | undefined

function currentVersion(): string | null {
  return (page.value as TypesensePageData).typesenseVersion ?? null
}

function load() {
  loading ??= import('typesense-docsearch.js').then(module => {
    docsearch = module.default
    window.removeEventListener('keydown', onShortcut)
    const hadFocus = document.activeElement === staticButton.value
    initialize()
    loaded.value = true
    if (hadFocus) container.value?.querySelector('button')?.focus()
  })
  return loading
}

async function open() {
  await load()
  instance?.open()
}

// docsearch's own shortcuts, until it loads and takes them over
function onShortcut(event: KeyboardEvent) {
  const target = event.composedPath()[0] as HTMLElement
  const editing = target.isContentEditable || ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(target.tagName)
  // autofill fires keydown events with no key
  const isCmdK = event.key?.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)
  if (!isCmdK && (event.key !== '/' || editing)) return
  event.preventDefault()
  open()
}

function initialize() {
  const userOptions = theme.value.typesenseDocsearch
  if (!userOptions || !container.value || !docsearch) return

  const { typesenseSearchParameters = {} } = userOptions
  const latest = theme.value.typesenseLatestVersion
  const version = currentVersion()

  instance = docsearch({
    ...userOptions,
    container: container.value,
    placeholder: theme.value.searchPlaceholder || '',
    // vitepress's router skips links with a target, which leaves hits on
    // typesense.org to onHitClick too
    hitComponent: ({ hit, children }, { html }) => html`<a href=${hit.url} target="_self">${children}</a>`,
    typesenseSearchParameters: {
      ...typesenseSearchParameters,
      filter_by: version ? `version:=[${version},unversioned]` : `version:=[${latest},unversioned]`,
    },
    transformSearchClient(searchClient) {
      return {
        search(params) {
          const query = params.requests[0]?.q
          if (typeof window !== 'undefined' && typeof query === 'string' && query.length > 0) {
            clearTimeout(searchEventTimer)
            searchEventTimer = setTimeout(() => {
              const w = window as Window & { dataLayer?: Record<string, unknown>[] }
              w.dataLayer = w.dataLayer || []
              w.dataLayer.push({ event: 'docs_search', search_term: query.slice(0, 100) })
            }, 500)
          }
          return searchClient.search(params)
        },
      }
    },
    navigator: {
      navigate({ itemUrl }: { itemUrl: string }) {
        // itemUrl is absolute and already carries the /docs/ base router.go wants
        const { pathname, hash } = new URL(itemUrl, window.location.origin)
        router.go(`${pathname}${decodeURIComponent(hash)}`).then(() => underlineAnchor(hash))
      },
    },
  })
}

function teardown() {
  instance?.destroy()
  instance = undefined
}

onMounted(() => {
  isApple.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
  window.addEventListener('keydown', onShortcut)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onShortcut)
  teardown()
})
function onHitClick(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0) return
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const anchor = (event.target as HTMLElement | null)?.closest?.('.DocSearch-Hit a') as HTMLAnchorElement | null
  if (!anchor?.href) return
  const { pathname, hash } = new URL(anchor.href, window.location.origin)
  if (!pathname.startsWith('/docs/')) return
  event.preventDefault()
  router.go(`${pathname}${decodeURIComponent(hash)}`).then(() => underlineAnchor(hash))
}

onMounted(() => document.addEventListener('click', onHitClick))
onBeforeUnmount(() => document.removeEventListener('click', onHitClick))

// re-filter results when navigating between versioned sections
watch(
  () => currentVersion(),
  () => {
    teardown()
    initialize()
  },
)
</script>

<style>
.DocSearch-Modal {
  @apply rounded-[calc(var(--docsearch-border-radius)+4px)] p-1.5;

  background: radial-gradient(ellipse 200% 110% at bottom left, rgb(222 255 151 / 20%), transparent),
    radial-gradient(ellipse 55% 125% at bottom right, rgb(222 255 151 / 20%), transparent);
}

.dark .DocSearch-Modal {
  background: linear-gradient(rgb(255 255 255 / 3%) 30%, rgb(95 120 42 / 16%));
}

.DocSearch-Dropdown {
  @apply bg-[color:var(--docsearch-modal-background)];
}

.DocSearch-SearchBar {
  @apply rounded-t-[var(--docsearch-border-radius)] overflow-hidden;
}

.DocSearch-Footer {
  @apply rounded-b-[var(--docsearch-border-radius)];
}

.DocSearch-Button {
  @apply max-mobile:border-0 max-mobile:bg-transparent;
}

.DocSearch-Button-Placeholder,
.DocSearch-Button-Keys {
  @apply max-wide:hidden;
}

/* docsearch pins the body up to 768px, which drops the page behind the modal to the top */
body:has(.DocSearch-Container) {
  @apply max-narrow:static;
}
</style>
