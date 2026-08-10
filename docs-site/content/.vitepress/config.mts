import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import mathjax3 from 'markdown-it-mathjax3'
import { sidebar } from './sidebar'
import { typesenseMarkdown } from './markdown/typesense'
import { injectPageMarkdown, mdDevMiddleware, generateMarkdownArtifacts } from './embed-markdown'

const srcDir = fileURLToPath(new URL('..', import.meta.url))
import pkg from '../../package.json'
import versions from '../../../typesenseVersions.json'

const { description } = pkg
const { typesenseVersions, typesenseLatestVersion } = versions

export default defineConfig({
  base: '/docs/',
  title: 'Typesense Documentation',
  description,
  // The published site (S3 + CloudFront) serves `.html` URLs and content links
  // are authored with `.html`; keep that scheme rather than clean URLs.
  cleanUrls: false,

  // VuePress served `README.md` as the directory index (`/guide/` → guide/index.html).
  // VitePress would emit `README.html`, breaking every `/…/` URL and the deploy,
  // so remap README.md → index.md everywhere.
  rewrites: {
    'README.md': 'index.md',
    ':dir(.*)/README.md': ':dir/index.md',
  },
  lastUpdated: true,
  // The versioned tree contains many historical docs with cross-links that no
  // longer resolve cleanly; keep the build green while we finish the port.
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#c0ff58' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Typesense Documentation' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: 'https://typesense.org/docs/images/opengraph_banner.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Typesense Documentation' }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: 'https://typesense.org/docs/images/opengraph_banner.png' }],
    ['link', { rel: 'icon', href: '/docs/favicon.png' }],
    // Google Analytics (page views fired manually on route change — see theme).
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=UA-116415641-1' }],
    [
      'script',
      {},
      "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());" +
        "gtag('config','UA-116415641-1',{anonymize_ip:true,send_page_view:false,linker:{domains:['typesense.org','cloud.typesense.org']}});",
    ],
  ],

  sitemap: {
    hostname: 'https://typesense.org/docs',
  },

  themeConfig: {
    logo: '/images/typesense_logo.svg',

    // Show only the logo in the nav bar (hide the "Typesense Documentation" text).
    siteTitle: false,

    // Show h2–h6 in the "On this page" outline (default only shows h2) so
    // sub-headings are clickable too.
    outline: { level: [2, 6], label: 'On this page' },

    // Non-versioned nav; versioned "API Reference" points at the latest version.
    // Per-page version awareness is handled by the VersionDropdown component.
    nav: [
      { text: 'Overview', link: '/overview/', activeMatch: '/overview/' },
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      // API Reference lives under every version prefix (e.g. /0.25.0/api/, /27.1/api/),
      // so match any versioned `/api/` path, not just the latest version's index.
      { text: 'API Reference', link: `/${typesenseLatestVersion}/api/`, activeMatch: '/api/' },
      { text: 'Help', link: '/help' },
      { text: 'Roadmap', link: 'https://github.com/orgs/typesense/projects/1' },
    ],

    sidebar,

    editLink: {
      pattern: 'https://github.com/typesense/typesense-website/edit/master/docs-site/content/:path',
      text: 'Edit page',
    },

    // Version metadata consumed by the VersionDropdown component.
    // @ts-expect-error custom themeConfig fields
    typesenseVersions,
    typesenseLatestVersion,

    // Typesense-powered DocSearch config (consumed by TypesenseSearchBox).
    typesenseDocsearch: {
      typesenseServerConfig: {
        nearestNode: { host: '01brzocp328nd4xvp.a1.typesense.net', port: 443, protocol: 'https' },
        nodes: [
          { host: '01brzocp328nd4xvp-1.a1.typesense.net', port: 443, protocol: 'https' },
          { host: '01brzocp328nd4xvp-2.a1.typesense.net', port: 443, protocol: 'https' },
          { host: '01brzocp328nd4xvp-3.a1.typesense.net', port: 443, protocol: 'https' },
        ],
        apiKey: 'SnXV7QElNiek7WN3QRT3ibhR5qLjJzS8',
      },
      typesenseCollectionName: 'typesense_docs',
      typesenseSearchParameters: {
        per_page: 6,
        query_by:
          'hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content,embedding',
        vector_query: 'embedding:([], k: 5, distance_threshold: 1.0, alpha: 0.2)',
      },
      // Typesense conversational search ("Ask AI") shown inside the DocSearch modal.
      askAi: {
        conversationModelId: 'model1',
        collection: 'typesense_docs',
        queryBy: 'embedding',
        excludeFields: 'embedding',
        suggestedQuestions: ['hello'],
      },
    },
  },

  markdown: {
    lineNumbers: false,
    config(md) {
      typesenseMarkdown(md)
      md.use(mathjax3)
    },
  },

  vite: {
    plugins: [
      {
        // Vue 3 templates have no `this`; content authored for VuePress uses
        // `this.$site` / `this.$page` inside interpolations. Strip the `this.`
        // prefix from markdown before VitePress compiles it to a Vue SFC.
        //
        // Also inline the latest-version token: fenced code blocks are `v-pre`,
        // so `{{ $site.themeConfig.typesenseLatestVersion }}` renders literally
        // inside them. Substituting the build-time constant here lets version
        // samples live in normal fenced blocks (native styling + copy button).
        name: 'typesense:strip-legacy-this',
        enforce: 'pre',
        transform(code, id) {
          if (!id.endsWith('.md')) return
          if (!code.includes('this.$') && !code.includes('typesenseLatestVersion')) return
          return code
            .replace(/this\.\$(site|page)\b/g, '$$$1')
            .replace(/\{\{\s*\$site\.themeConfig\.typesenseLatestVersion\s*\}\}/g, typesenseLatestVersion)
        },
      },
      {
        // embed-markdown dev server: serve `*.md` and `*.{lang}.md` slices.
        name: 'typesense:embed-markdown-dev',
        configureServer(server) {
          server.middlewares.use(mdDevMiddleware(srcDir))
        },
      },
    ],
    // Static assets (images, favicon, docsearch bundle) still live in the old
    // VuePress public dir; serve them from there until they're relocated.
    publicDir: fileURLToPath(new URL('../.vuepress/public', import.meta.url)),
    resolve: {
      alias: {
        '@images': fileURLToPath(new URL('../.vuepress/public/images', import.meta.url)),
        '@': fileURLToPath(new URL('./theme', import.meta.url)),
      },
    },
  },

  buildEnd(siteConfig) {
    // embed-markdown build step: emit `.md` files, language variants, llms.txt.
    generateMarkdownArtifacts(siteConfig)
  },

  async transformPageData(pageData) {
    // Port of typesense-enhancements `extendPageData`: derive the version from
    // the page path, set canonical URL to the latest version, and add
    // docsearch:version + a "| Typesense" title suffix.
    const version = pageData.relativePath.split('/')[0]
    const isVersioned = typesenseVersions.includes(version)

    pageData.frontmatter.head ??= []

    if (isVersioned) {
      // @ts-expect-error custom field surfaced to the theme
      pageData.typesenseVersion = version
      const canonicalPath = `/docs/${pageData.relativePath.replace(/\.md$/, '.html').replace(version, typesenseLatestVersion)}`
      pageData.frontmatter.head.push(['link', { rel: 'canonical', href: `https://typesense.org${canonicalPath}` }])
    } else {
      // @ts-expect-error custom field surfaced to the theme
      pageData.typesenseVersion = null
      pageData.frontmatter.head.push(['meta', { name: 'docsearch:version', content: 'unversioned' }])
    }

    if (pageData.title) {
      pageData.title = pageData.title.replace(/\{\{ ?\$page\.typesenseVersion ?\}\}/, version)
    }

    // Attach cleaned markdown + copy metadata so MarkdownActions / CopySectionButton work.
    injectPageMarkdown(pageData, srcDir)
  },
})
