<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <button
        type="button"
        class="VPNavBarExtra -mr-3 hidden h-[var(--vp-nav-height)] items-center px-3 text-[var(--vp-c-text-1)] min-[768px]:flex wide:hidden"
        aria-label="extra navigation"
      >
        <span class="vpi-more-horizontal text-[20px]" />
      </button>
    </PopoverTrigger>
    <!-- the menu overlaps the 64px bar, as vitepress's flyout did -->
    <PopoverContent align="end" :side-offset="-12" class="w-auto border-0 bg-transparent p-0 shadow-none">
      <VPMenu>
        <div class="group">
          <VPMenuLink v-for="item in external" :key="item.link" :item="item" />
        </div>
        <div class="group">
          <div class="flex min-w-[176px] items-center whitespace-nowrap px-3">
            <p class="grow text-xs font-medium leading-7 text-[var(--vp-c-text-2)]">
              {{ theme.darkModeSwitchLabel || 'Appearance' }}
            </p>
            <VPSwitchAppearance class="-mr-0.5" />
          </div>
        </div>
        <div v-if="theme.socialLinks" class="group">
          <div class="flex items-center px-3">
            <VPSocialLinks class="-mx-2 -my-1" :links="theme.socialLinks" />
          </div>
        </div>
      </VPMenu>
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'
// @ts-expect-error vitepress ships no types for its internals
import { EXTERNAL_URL_RE } from 'vitepress/dist/client/shared.js'
import VPMenu from 'vitepress/dist/client/theme-default/components/VPMenu.vue'
import VPMenuLink from 'vitepress/dist/client/theme-default/components/VPMenuLink.vue'
import VPSocialLinks from 'vitepress/dist/client/theme-default/components/VPSocialLinks.vue'
import VPSwitchAppearance from 'vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue'
import { useMediaQuery } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const { theme } = useData<DefaultTheme.Config>()
const open = ref(false)

// the menu is portalled, so it would stay behind when its trigger hides
watch(useMediaQuery('(min-width: 768px) and (max-width: 1279.98px)'), () => (open.value = false))

const external = computed(
  () =>
    (theme.value.nav ?? []).filter(
      item => 'link' in item && EXTERNAL_URL_RE.test(item.link),
    ) as DefaultTheme.NavItemWithLink[],
)
</script>
