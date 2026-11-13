<template>
  <component
    :is="sectionTag"
    class="VPSidebarItem"
    :class="[classes, depth === 0 && (collapsed ? 'pb-2.5' : 'pb-6')]"
  >
    <div
      v-if="item.text"
      class="item group/item relative flex w-full"
      :class="{ 'cursor-pointer': collapsible }"
      :role="itemRole"
      :tabindex="item.items && !item.link ? 0 : undefined"
      :aria-expanded="collapsible && !item.link ? !collapsed : undefined"
      v-on="item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {}"
    >
      <div
        class="indicator absolute -left-[17px] bottom-1.5 top-1.5 w-0.5 rounded-[2px] [transition:background-color_.25s]"
        :class="{ 'bg-[var(--vp-c-brand-1)]': depth >= 2 && isActiveLink }"
      />

      <VPLink
        v-if="item.link"
        :tag="linkTag"
        class="link group/link flex grow items-center"
        :href="item.link"
        :rel="item.rel"
        :target="item.target"
      >
        <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-text-v-html-on-component -- always a native p or heading, text from our sidebar config -->
        <component :is="textTag" class="text" :class="[TEXT, textColor]" v-html="item.text" />
      </VPLink>
      <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-text-v-html-on-component -- as above -->
      <component :is="textTag" v-else class="text" :class="[TEXT, textColor]" v-html="item.text" />

      <!-- a linked group toggles from the caret, any other from the whole row -->
      <div
        v-if="item.collapsed != null && item.items && item.items.length"
        class="caret -mr-[7px] flex size-8 shrink-0 cursor-pointer items-center justify-center text-[var(--vp-c-text-3)] [transition:color_.25s] group-hover/item:text-[var(--vp-c-text-2)] hover:!text-[var(--vp-c-text-1)]"
        v-bind="item.link ? { role: 'button', 'aria-label': 'toggle section', 'aria-expanded': !collapsed, tabindex: 0 } : {}"
        @click="onCaretClick"
        @keydown.enter="onCaretClick"
      >
        <span
          class="vpi-chevron-right caret-icon text-[18px] [transition:transform_.25s]"
          :class="collapsed ? 'rotate-0' : 'rotate-90'"
        />
      </div>
    </div>

    <div
      v-if="item.items && item.items.length"
      class="items"
      :class="{ 'border-l border-[var(--vp-c-divider)] pl-4': depth >= 1, hidden: collapsed }"
    >
      <template v-if="depth < 5">
        <VPSidebarItem v-for="i in item.items" :key="i.text" :item="i" :depth="depth + 1" />
      </template>
    </div>
  </component>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'
// @ts-expect-error vitepress ships no types for its internals
import { isActive } from 'vitepress/dist/client/shared.js'
// @ts-expect-error vitepress ships no types for its internals
import { useSidebarControl } from 'vitepress/dist/client/theme-default/composables/sidebar.js'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { computed } from 'vue'

const TEXT = 'grow py-1 text-[14px] leading-6 [transition:color_.25s] group-hover/link:text-[var(--vp-c-brand-1)]'

const props = defineProps<{
  item: DefaultTheme.SidebarItem
  depth: number
}>()

const { collapsed, collapsible, isLink, hasActiveLink, hasChildren, toggle } = useSidebarControl(
  computed(() => props.item),
)

// vitepress marks the current page only once mounted, which leaves it unmarked before hydration
const { page } = useData()
const isActiveLink = computed(() => isActive(page.value.relativePath, props.item.link))

const sectionTag = computed(() => (hasChildren.value ? 'section' : `div`))

const linkTag = computed(() => (isLink.value ? 'a' : 'div'))

const textTag = computed(() => {
  return !hasChildren.value ? 'p' : props.depth + 2 === 7 ? 'p' : `h${props.depth + 2}`
})

const itemRole = computed(() => (isLink.value ? undefined : 'button'))

const textColor = computed(() => [
  props.depth === 0 ? 'font-bold' : 'font-medium',
  isActiveLink.value
    ? 'text-[var(--vp-c-brand-1)]'
    : hasActiveLink.value || props.depth === 0
      ? 'text-[var(--vp-c-text-1)]'
      : 'text-[var(--vp-c-text-2)]',
])

const classes = computed(() => [
  [`level-${props.depth}`],
  { collapsible: collapsible.value },
  { collapsed: collapsed.value },
  { 'is-link': isLink.value },
  { 'is-active': isActiveLink.value },
  { 'has-active': hasActiveLink.value },
])

function onItemInteraction(e: MouseEvent | Event) {
  if ('key' in e && e.key !== 'Enter') {
    return
  }
  if (!props.item.link) toggle()
}

function onCaretClick() {
  if (props.item.link) toggle()
}
</script>
