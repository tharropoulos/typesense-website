<template>
  <div class="my-4">
    <ClientOnly>
      <div
        class="relative overflow-hidden rounded-t-lg max-mobile:-mx-6 max-mobile:rounded-none before:pointer-events-none before:absolute before:z-[1] before:left-0 before:top-0 before:bottom-px before:w-6 before:bg-[linear-gradient(to_right,var(--vp-code-block-bg),transparent)] after:pointer-events-none after:absolute after:right-0 after:top-0 after:bottom-px after:w-6 after:bg-[linear-gradient(to_left,var(--vp-code-block-bg),transparent)]"
      >
        <div
          ref="list"
          role="tablist"
          :data-copy-tabs="JSON.stringify(tabs)"
          :data-copy-active-tab="activeTab"
          class="group relative flex justify-start items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 py-2.5 border-b border-[var(--vp-c-divider)] bg-[var(--vp-code-block-bg)] text-[var(--vp-c-text-2)] text-xs"
          @keydown="onKeydown"
          @focusin="onFocusin"
        >
          <div
            v-if="pill && augmentedTabs.length > 1"
            aria-hidden="true"
            class="pointer-events-none absolute left-0 top-0 rounded-lg border border-border bg-muted shadow-sm transition-[transform,width] duration-300 ease-out-expo group-has-[:focus-visible]:transition-none motion-reduce:transition-none"
            :style="{
              transform: `translate(${pill.left}px, ${pill.top}px)`,
              width: `${pill.width}px`,
              height: `${pill.height}px`,
            }"
          />
          <button
            v-for="(tab, index) in augmentedTabs"
            :id="`${id}-tab-${index}`"
            :key="tab"
            type="button"
            role="tab"
            :aria-selected="tab === activeTab"
            :aria-controls="`${id}-panel-${index}`"
            :tabindex="tab === activeTab && augmentedTabs.length > 1 ? 0 : -1"
            class="relative shrink-0 rounded-lg px-2 py-1.5 leading-none whitespace-nowrap transition-colors after:absolute after:inset-x-0 after:-inset-y-2.5 hover:text-[var(--vp-c-text-1)] aria-selected:text-[var(--vp-c-text-1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            @click="setActiveTab(tab)"
          >
            {{ tab }}
          </button>
        </div>
      </div>
      <div class="content-container">
        <div
          v-for="(tab, index) in augmentedTabs"
          v-show="tab === activeTab"
          :id="`${id}-panel-${index}`"
          :key="tab"
          role="tabpanel"
          :aria-labelledby="`${id}-tab-${index}`"
          class="tab-content"
        >
          <template v-if="tab === 'Other Languages'">
            <div class="language-bash">
              <pre class="language-bash" tabindex="0"><code
              >Typesense has a RESTful HTTP API.
So you can use any HTTP library in your language of choice to make API calls to it.
The official client libraries are just thin wrappers around the API, with a retry mechanism.
Have a look at the "Shell" tab for guidance on HTTP headers, method and parameters to use to make HTTP calls.</code
              ></pre>
            </div>
          </template>
          <slot v-else :name="tab" />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { computed, nextTick, ref, useId, watch } from 'vue'
import { docsStore } from '../store'

const props = defineProps<{ tabs: string[] }>()

const id = useId()

const cmpActiveTab = ref(props.tabs[0])

const augmentedTabs = computed(() =>
  // "other languages" has no business on e.g. sample response tabs
  props.tabs.includes('Ruby') && props.tabs.includes('Python') ? [...props.tabs, 'Other Languages'] : props.tabs,
)

const activeTab = computed(() => {
  const preferred = augmentedTabs.value.find(tab => tab === docsStore.state.defaultTab)
  if (preferred) return preferred
  const singleLanguage = docsStore.singlePreferredCopyLanguage.value
  if (singleLanguage && augmentedTabs.value.includes(singleLanguage)) {
    return singleLanguage
  }
  return cmpActiveTab.value
})

// without this the tabs snap back to the first when the language override drops
watch(activeTab, newTab => {
  if (newTab && newTab !== cmpActiveTab.value) cmpActiveTab.value = newTab
})

async function setActiveTab(tab: string) {
  // a lone tab isn't a choice. Saving it would replace the reader's language
  if (augmentedTabs.value.length === 1) return
  const top = list.value!.getBoundingClientRect().top
  cmpActiveTab.value = tab
  docsStore.setDefaultTab(tab)
  // every group on the page switches, so the ones above can change height. scroll
  // anchoring misses that when its anchor is a code block that gets hidden, and
  // safari has none. Keep this strip where it was on screen
  await nextTick()
  window.scrollBy(0, list.value!.getBoundingClientRect().top - top)
}

function onKeydown(event: KeyboardEvent) {
  const steps: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1 }
  const step = steps[event.key]
  if (!step || event.altKey || event.ctrlKey || event.metaKey) return
  event.preventDefault()
  const count = augmentedTabs.value.length
  const next = (augmentedTabs.value.indexOf(activeTab.value) + step + count) % count
  // focus first so setActiveTab measures the strip after the focus scroll brings it back
  list.value!.querySelectorAll<HTMLElement>('[role="tab"]')[next].focus()
  setActiveTab(augmentedTabs.value[next])
}

const list = ref<HTMLElement | null>(null)
const activeItem = ref<HTMLElement | null>(null)
const pill = ref<{ left: number; top: number; width: number; height: number } | null>(null)

// the list only exists once ClientOnly mounts
watch(
  [list, activeTab],
  () => (activeItem.value = list.value?.querySelector<HTMLElement>('[aria-selected="true"]') ?? null),
  { flush: 'post' },
)

// every strip on the page follows the chosen tab, not just the clicked one
watch(activeItem, (item, previous) => item && reveal(item, !!previous))

// chrome's focus scroll leaves a tab that is only partly past the edge where it is
function onFocusin(event: FocusEvent) {
  const tab = event.target as HTMLElement
  if (tab.matches(':focus-visible')) reveal(tab, false)
}

function reveal(item: HTMLElement, glide: boolean) {
  const strip = item.parentElement!
  // the strip's own padding sits under its edge fades
  const inset = parseFloat(getComputedStyle(strip).paddingLeft)
  const shown =
    item.offsetLeft >= strip.scrollLeft + inset &&
    item.offsetLeft + item.offsetWidth <= strip.scrollLeft + strip.clientWidth - inset
  // an instant scroll in place stops a glide toward an earlier pick, which can carry this one out of view
  const left = shown ? strip.scrollLeft : item.offsetLeft - (strip.clientWidth - item.offsetWidth) / 2
  const smooth = glide && !shown && !matchMedia('(prefers-reduced-motion: reduce)').matches
  strip.scrollTo({ left, behavior: smooth ? 'smooth' : 'instant' })
}

// also catches the font swapping in and tabs that mount hidden
useResizeObserver(activeItem, () => {
  const item = activeItem.value
  pill.value = item?.offsetParent
    ? { left: item.offsetLeft, top: item.offsetTop, width: item.offsetWidth, height: item.offsetHeight }
    : null
})
</script>

<!-- css only because shiki generates this markup, no room for tailwind classes -->
<style scoped>
.tab-content > :deep(div[class^='language-']) {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.tab-content > :deep(div[class^='language-']:not(:last-child)) {
  border-radius: 0;
}

.tab-content :deep(pre[class^='language-']) {
  margin: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

/* duplicate language label */
.tab-content :deep(div[class*='language-'] > span.lang) {
  display: none;
}

@media (max-width: 719px) {
  .tab-content :deep(div[class*='language-']) {
    margin: 0 -1.5rem;
    border-radius: 0;
  }
}
</style>
