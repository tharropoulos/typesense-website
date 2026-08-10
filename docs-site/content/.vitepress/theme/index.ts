import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { reactive } from 'vue'
import 'typesense-docsearch-css'
import './style.css'

import Layout from './Layout.vue'
import Tabs from './components/Tabs.vue'
import MarkdownActions from './components/MarkdownActions.vue'
import CopySectionButton from './components/CopySectionButton.vue'
import RouterLink from './components/RouterLink.vue'
import VersionDropdown from './components/VersionDropdown.vue'
import DocsSections from './components/DocsSections.vue'
import DocsSectionButton from './components/DocsSectionButton.vue'
import RedirectOldLinks from './components/RedirectOldLinks.vue'
import RedirectOldSearchLinksForV023AndAbove from './components/RedirectOldSearchLinksForV023AndAbove.vue'
import versions from '../../../../typesenseVersions.json'
import isSemVer from './util/isSemVer'
import { docsStore } from './store'
import { syncPreferredCopyLanguagesToUrl } from './util/copyLanguagePreferences'

const { typesenseVersions, typesenseLatestVersion } = versions
const BASE = '/docs/'
const GA_ID = 'UA-116415641-1'

// Content markdown still uses VuePress-era interpolations — `$page.typesenseVersion`,
// `$site.base`, `$site.themeConfig.typesenseLatestVersion/typesenseVersions`.
// VitePress doesn't provide `$page`/`$site`, so expose compatible globals.
function deriveVersion(path: string): string | null {
  const withoutBase = path.startsWith(BASE) ? path.slice(BASE.length) : path.replace(/^\//, '')
  const segment = withoutBase.split('/')[0]
  return typesenseVersions.includes(segment) ? segment : null
}

// Extends the default VitePress theme and registers the globally-used components
// that the markdown pipeline and content author against.
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('Tabs', Tabs)
    app.component('MarkdownActions', MarkdownActions)
    app.component('CopySectionButton', CopySectionButton)
    app.component('RouterLink', RouterLink)
    app.component('VersionDropdown', VersionDropdown)
    app.component('DocsSections', DocsSections)
    app.component('DocsSectionButton', DocsSectionButton)
    app.component('RedirectOldLinks', RedirectOldLinks)
    app.component('RedirectOldSearchLinksForV023AndAbove', RedirectOldSearchLinksForV023AndAbove)

    const $site = { base: BASE, themeConfig: { typesenseLatestVersion, typesenseVersions } }
    const $page = reactive<{ typesenseVersion: string | null }>({
      typesenseVersion: deriveVersion(router.route.path),
    })

    app.config.globalProperties.$site = $site
    app.config.globalProperties.$page = $page

    // --- Version redirects (ported from enhanceApp.js) ---------------------
    // `to` includes the `/docs/` base, e.g. `/docs/latest/api/...`.
    router.onBeforeRouteChange = (to) => {
      const rest = to.startsWith(BASE) ? to.slice(BASE.length) : to.replace(/^\//, '')
      const segments = rest.split('/')
      const version = segments[0]

      // /docs/latest/... → /docs/<latest>/...
      if (version === 'latest') {
        segments[0] = typesenseLatestVersion
        router.go(BASE + segments.join('/'))
        return false
      }

      // /docs/<version>/guide/... → strip the version (guide is unversioned)
      if (isSemVer(version) && segments[1] === 'guide') {
        if (segments[2] === '#what-s-new') {
          const [major, minor] = version.split('.').map((n) => parseInt(n, 10))
          if (major >= 0 && minor >= 20) segments[1] = 'api' // post-0.20 What's New lives under /api
        } else {
          segments.shift()
        }
        router.go(BASE + segments.join('/'))
        return false
      }
    }

    let gaTimer: ReturnType<typeof setTimeout> | undefined
    router.onAfterRouteChanged = (to) => {
      $page.typesenseVersion = deriveVersion(to)
      if (typeof window === 'undefined') return

      docsStore.hydrateCopyLanguages()
      syncPreferredCopyLanguagesToUrl(docsStore.state.copyLanguages)

      const gtag = (window as any).gtag
      if (!gtag) return
      clearTimeout(gaTimer)
      gaTimer = setTimeout(() => {
        gtag('config', GA_ID, { page_path: to, location_path: window.location.origin + to })
      }, 2000)
    }
  },
} satisfies Theme
