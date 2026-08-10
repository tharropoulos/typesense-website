import fs from 'node:fs'
import path from 'node:path'
import type { SiteConfig } from 'vitepress'
import type { Connect } from 'vite'
import {
  analyzeMarkdownForCopy,
  stripVueMarkdownWrappers,
  transformRouterLinks,
} from './theme/util/markdownCopy'
import { COPY_LANGUAGE_SLUGS, getCopyLanguageByLabel, getCopyLanguageBySlug } from './theme/util/copyLanguages'
import { filterMarkdownByCopyLanguages } from './theme/util/markdownCopyFilter'
import { buildLlmsArtifacts, writeLlmsArtifacts } from './theme/util/llmsTxt'
import type { LlmsArtifacts, LlmsPage } from './theme/util/llmsTxt'
import versions from '../../../typesenseVersions.json'

// Port of the VuePress `embed-markdown` plugin. Three responsibilities:
//   1. transformPageData → attach cleaned markdown + copy metadata to each page.
//   2. dev middleware    → serve `*.md` (and `*.{lang}.md` slices) in `vitepress dev`.
//   3. buildEnd          → emit `.md` files, language variants, and llms.txt/full.

const { typesenseVersions } = versions
// JSON is untyped at the boundary; the latest version is always `major.minor`.
const typesenseLatestVersion = versions.typesenseLatestVersion as `${number}.${number}`
const BASE = '/docs/'
const LANGUAGE_VARIANT_FANOUT_DEPTH = 2
const FANOUT_VERSIONS = new Set(typesenseVersions.slice(0, LANGUAGE_VARIANT_FANOUT_DEPTH))
const LANG_SLUGS = new Set<string>(COPY_LANGUAGE_SLUGS)

const prependAgentIndex = (md: string): string =>
  [
    '> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.',
    '',
    md,
  ].join('\n')

function withBase(url: string): string {
  if (!url || /^https?:\/\//.test(url)) return url
  const basePath = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE
  const normalized = url.startsWith('/') ? url : `/${url}`
  return normalized.startsWith(`${basePath}/`) ? normalized : `${basePath}${normalized}`
}

function getPageVersion(urlPath: string): string | null {
  const segment = urlPath.split('/')[1]
  return segment && typesenseVersions.includes(segment) ? segment : null
}

const routerCtxFor = (urlPath: string) => ({
  latestVersion: typesenseLatestVersion,
  pageVersion: getPageVersion(urlPath),
})

const shouldFanout = (urlPath: string): boolean => {
  const version = getPageVersion(urlPath)
  return version === null || FANOUT_VERSIONS.has(version)
}

// content-relative source path (e.g. `guide/README.md`) → published URL path.
// README.md and index.md are both treated as the directory index.
function urlPathFor(relativePath: string): string {
  const p = `/${relativePath.replace(/\\/g, '/')}`
  if (/\/(README|index)\.md$/i.test(p)) return p.replace(/(README|index)\.md$/i, '')
  if (/^\/(README|index)\.md$/i.test(p)) return '/'
  return p.replace(/\.md$/, '.html')
}

// Mirror the rendering-side substitution (config.mts) so copied markdown and
// llms artifacts carry the real version instead of the raw interpolation token.
const substituteVersion = (raw: string): string =>
  raw.replace(/\{\{\s*\$site\.themeConfig\.typesenseLatestVersion\s*\}\}/g, typesenseLatestVersion)

// transformPageData may hand us the rewritten `…/index.md`; the source on disk is
// `…/README.md` (or vice-versa). Read whichever exists.
function readSource(srcDir: string, relativePath: string): string {
  const primary = path.join(srcDir, relativePath)
  if (fs.existsSync(primary)) return substituteVersion(fs.readFileSync(primary, 'utf-8'))
  const alt = path.join(srcDir, relativePath.replace(/index\.md$/i, 'README.md'))
  if (alt !== primary && fs.existsSync(alt)) return substituteVersion(fs.readFileSync(alt, 'utf-8'))
  return substituteVersion(fs.readFileSync(primary, 'utf-8'))
}

const markdownUrlFor = (urlPath: string): string =>
  urlPath.endsWith('/') ? `${urlPath}README.md` : urlPath.replace(/\.html$/, '.md')

// --- 1. Page data ----------------------------------------------------------
export function injectPageMarkdown(pageData: any, srcDir: string): void {
  const rel = pageData.relativePath
  if (!rel || !rel.endsWith('.md')) return
  try {
    const raw = readSource(srcDir, rel)
    const data = analyzeMarkdownForCopy(raw)
    const urlPath = urlPathFor(rel)
    const ctx = routerCtxFor(urlPath)

    // Base64 so a literal `</script>` in a code sample can't terminate the
    // inline `__pageData` <script> block VitePress emits. Decoded in the theme.
    pageData.markdown = Buffer.from(
      prependAgentIndex(transformRouterLinks(data.markdown, ctx)),
      'utf-8',
    ).toString('base64')
    pageData.markdownCopyTabGroups = data.copyTabGroups
    pageData.markdownCopyLanguages = data.copyLanguages
    pageData.markdownUrl = markdownUrlFor(urlPath)

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'alternate', type: 'text/markdown', href: withBase(pageData.markdownUrl) },
    ])
  } catch (error) {
    console.error(`embed-markdown: failed for ${rel}:`, (error as Error).message)
  }
}

// --- 2. Dev middleware -----------------------------------------------------
export function mdDevMiddleware(srcDir: string): Connect.NextHandleFunction {
  return (req, res, next) => {
    const rawUrl = (req.url || '').split('?')[0]

    // `/docs/llms.txt` and `/docs/llms-full.txt` are emitted at buildEnd, so in
    // dev they'd otherwise fall through to the SPA. Build them on demand.
    const artifactName = rawUrl.replace(/^\/docs\//, '')
    if (LLMS_ARTIFACT_NAMES.has(artifactName)) {
      const { llmsTxt, llmsFullTxt } = getLlmsArtifacts(srcDir)
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end(artifactName === 'llms-full.txt' ? llmsFullTxt : llmsTxt)
      return
    }

    if (!rawUrl.endsWith('.md')) return next()

    // VitePress loads each page by importing its `.md` file as a JS module over
    // HTTP. Only hijack *direct navigations* to the raw markdown (Sec-Fetch-Dest
    // "document"); let Vite's module requests (dest "script"/"empty") fall
    // through, otherwise every page 404s in dev.
    const dest = req.headers['sec-fetch-dest']
    if (dest && dest !== 'document') return next()

    let requestPath = decodeURIComponent(rawUrl)
    const basePath = '/docs'
    if (requestPath.startsWith(`${basePath}/`)) requestPath = requestPath.slice(basePath.length)

    const variantMatch = requestPath.match(/^(.*)\.([a-z]+)\.md$/)
    let requestedLang: string | null = null
    let normalizedPath = requestPath
    if (variantMatch && LANG_SLUGS.has(variantMatch[2])) {
      requestedLang = variantMatch[2]
      normalizedPath = `${variantMatch[1]}.md`
    }

    const sourceRel = normalizedPath.replace(/^\//, '')
    const sourceFile = path.join(srcDir, sourceRel)
    if (!fs.existsSync(sourceFile)) return next()

    try {
      const raw = substituteVersion(fs.readFileSync(sourceFile, 'utf-8'))
      const ctx = routerCtxFor(normalizedPath)

      if (requestedLang) {
        if (!shouldFanout(normalizedPath)) return next()
        const { markdown: cleaned, copyTabGroups, copyLanguages } = analyzeMarkdownForCopy(raw)
        if (copyTabGroups.length === 0) return next()
        const language = getCopyLanguageBySlug(requestedLang)
        const label = language ? language.label : null
        if (!label || !copyLanguages.includes(label)) return next()
        const filtered = filterMarkdownByCopyLanguages(cleaned, copyTabGroups, [label], true)
        res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
        res.end(prependAgentIndex(transformRouterLinks(filtered, ctx)))
        return
      }

      const markdown = transformRouterLinks(stripVueMarkdownWrappers(raw), ctx)
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
      res.end(prependAgentIndex(markdown))
    } catch (error) {
      console.error('embed-markdown dev:', (error as Error).message)
      next()
    }
  }
}

// --- 3. Build-time generation ---------------------------------------------
function parseFrontmatter(raw: string): Record<string, string> {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const fm: Record<string, string> = {}
  if (m) {
    for (const line of m[1].split(/\r?\n/)) {
      const mm = line.match(/^([\w-]+):\s*(.*)$/)
      if (mm) fm[mm[1]] = mm[2].replace(/^['"]|['"]$/g, '').trim()
    }
  }
  return fm
}

function titleFor(raw: string, fm: Record<string, string>, urlPath: string): string {
  if (fm.title) return fm.title
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n+/, '')
  const h1 = body.match(/^#\s+(.+)$/m)
  return h1 ? h1[1].trim() : urlPath
}

function collectMarkdownFiles(dir: string, root: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) collectMarkdownFiles(full, root, out)
    else if (entry.name.endsWith('.md')) out.push(path.relative(root, full))
  }
  return out
}

export function generateMarkdownArtifacts(siteConfig: SiteConfig): void {
  const srcDir = siteConfig.srcDir
  const outDir = siteConfig.outDir
  const cleanedByPath = new Map<string, string>()
  const pageVersionByPath = new Map<string, string | null>()
  const llmsPages: Array<{ path: string; relativePath: string; title: string; frontmatter: Record<string, string> }> = []
  let variantCount = 0

  const files = collectMarkdownFiles(srcDir, srcDir)

  for (const rel of files) {
    try {
      const raw = substituteVersion(fs.readFileSync(path.join(srcDir, rel), 'utf-8'))
      const urlPath = urlPathFor(rel)
      const ctx = routerCtxFor(urlPath)
      const { markdown: cleaned, copyTabGroups, copyLanguages } = analyzeMarkdownForCopy(raw)
      const baseMarkdown = transformRouterLinks(cleaned, ctx)

      cleanedByPath.set(urlPath, baseMarkdown)
      pageVersionByPath.set(urlPath, ctx.pageVersion)
      const fm = parseFrontmatter(raw)
      llmsPages.push({ path: urlPath, relativePath: rel, title: titleFor(raw, fm, urlPath), frontmatter: fm })

      const outputPath = urlPath.endsWith('/')
        ? path.join(outDir, urlPath, 'README.md')
        : path.join(outDir, urlPath.replace(/\.html$/, '.md'))
      fs.mkdirSync(path.dirname(outputPath), { recursive: true })
      fs.writeFileSync(outputPath, prependAgentIndex(baseMarkdown), 'utf-8')

      if (copyTabGroups.length === 0 || !shouldFanout(urlPath)) continue

      for (const language of copyLanguages) {
        const descriptor = getCopyLanguageByLabel(language)
        if (!descriptor) continue
        const filtered = filterMarkdownByCopyLanguages(cleaned, copyTabGroups, [language], true)
        const variantMarkdown = transformRouterLinks(filtered, ctx)
        const variantPath = urlPath.endsWith('/')
          ? path.join(outDir, urlPath, `README.${descriptor.slug}.md`)
          : path.join(outDir, urlPath.replace(/\.html$/, `.${descriptor.slug}.md`))
        fs.writeFileSync(variantPath, prependAgentIndex(variantMarkdown), 'utf-8')
        variantCount += 1
      }
    } catch (error) {
      console.error(`embed-markdown build: failed for ${rel}:`, (error as Error).message)
    }
  }

  console.log(`Generated ${files.length} markdown files (+${variantCount} language variants)`)

  writeLlmsArtifacts({
    outDir,
    pages: llmsPages,
    base: BASE,
    latestVersion: typesenseLatestVersion,
    cleanedByPath,
    pageVersionByPath,
  })
}

// Collect the same page data the build uses, without writing anything. Lets the
// dev middleware serve llms.txt / llms-full.txt, which otherwise only exist
// after a full `buildEnd`.
interface LlmsData {
  pages: LlmsPage[]
  cleanedByPath: Map<string, string>
  pageVersionByPath: Map<string, string | null>
}

function collectLlmsData(srcDir: string): LlmsData {
  const cleanedByPath = new Map<string, string>()
  const pageVersionByPath = new Map<string, string | null>()
  const pages: LlmsPage[] = []

  for (const rel of collectMarkdownFiles(srcDir, srcDir)) {
    try {
      const raw = substituteVersion(fs.readFileSync(path.join(srcDir, rel), 'utf-8'))
      const urlPath = urlPathFor(rel)
      const ctx = routerCtxFor(urlPath)
      const baseMarkdown = transformRouterLinks(analyzeMarkdownForCopy(raw).markdown, ctx)
      const fm = parseFrontmatter(raw)

      cleanedByPath.set(urlPath, baseMarkdown)
      pageVersionByPath.set(urlPath, ctx.pageVersion)
      pages.push({ path: urlPath, relativePath: rel, title: titleFor(raw, fm, urlPath), frontmatter: fm })
    } catch (error) {
      console.error(`embed-markdown llms: failed for ${rel}:`, (error as Error).message)
    }
  }

  return { pages, cleanedByPath, pageVersionByPath }
}

const LLMS_ARTIFACT_NAMES = new Set([`llms.txt`, `llms-full.txt`])

// Built once per dev server on first request. A restart picks up doc edits;
// these agent-facing artifacts don't need live reload.
let llmsArtifactCache: LlmsArtifacts | null = null

function getLlmsArtifacts(srcDir: string): LlmsArtifacts {
  if (!llmsArtifactCache) {
    llmsArtifactCache = buildLlmsArtifacts({
      ...collectLlmsData(srcDir),
      base: BASE,
      latestVersion: typesenseLatestVersion,
    })
  }
  return llmsArtifactCache
}
