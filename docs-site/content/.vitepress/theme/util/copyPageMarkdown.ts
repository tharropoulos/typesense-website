import { withBase } from 'vitepress'
import { docsStore } from '../store'
import { filterMarkdownByCopyLanguages, getVisibleCopyTabs } from './markdownCopyFilter'
import type { TypesensePageData } from '../types'

// safari drops the click's user activation at the first await. the clipboard
// write has to start inside the click and wait on the fetched markdown
export function copyPageMarkdown(page: TypesensePageData, pick = (markdown: string) => markdown): Promise<void> {
  if (!page.markdownUrl) throw new Error(`${page.relativePath} has no markdown`)
  const tabGroups = page.markdownCopyTabGroups || []
  const languages = docsStore.state.copyLanguages
  const visibleTabs = getVisibleCopyTabs(tabGroups, docsStore.state.defaultTab)
  const text = fetch(withBase(page.markdownUrl), { cache: 'no-cache' })
    .then(response => {
      if (!response.ok) throw new Error(`${response.status} for ${response.url}`)
      return response.text()
    })
    .then(markdown => {
      const filtered = filterMarkdownByCopyLanguages(markdown, tabGroups, languages, false, visibleTabs)
      return new Blob([pick(filtered)], { type: 'text/plain' })
    })
  return navigator.clipboard.write([new ClipboardItem({ 'text/plain': text })])
}
