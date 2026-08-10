import { normalizeCopyLanguages } from './copyLanguages'
import type { CopySlot, CopyTabGroup } from './markdownCopy'

function markSlotLinesForRemoval(linesToRemove: Set<number>, slot: CopySlot): void {
  for (let lineNumber = slot.startLine; lineNumber < slot.endLine; lineNumber += 1) {
    linesToRemove.add(lineNumber)
  }
}

/**
 * Filter language-specific code blocks inside `<Tabs>` groups in markdown.
 *
 * Default behavior keeps a group whose tabs do not include any selected
 * language, so the docs UI still shows code in some language when the user's
 * preferred language is not documented for that section.
 *
 * When `dropGroupsMissingLanguage` is true, groups that do not document any
 * selected language are stripped entirely. Used by the agent-facing per-language
 * `.md` build so e.g. `search.php.md` contains only PHP snippets, with nothing
 * shown for sections that have no PHP variant.
 *
 * @param markdown Cleaned markdown (Vue wrappers already stripped).
 * @param copyTabGroups Tab groups from `analyzeMarkdownForCopy`.
 * @param selectedLanguages Language labels to keep (e.g. `['JavaScript']`). Empty array removes all tab-group code.
 * @param dropGroupsMissingLanguage Also strip groups that have none of the selected languages.
 * @returns Filtered markdown.
 */
function filterMarkdownByCopyLanguages(
  markdown: string,
  copyTabGroups: CopyTabGroup[],
  selectedLanguages: unknown,
  dropGroupsMissingLanguage = false,
): string {
  if (!copyTabGroups || copyTabGroups.length === 0) {
    return markdown
  }

  const normalizedLanguages = normalizeCopyLanguages(selectedLanguages)
  if (normalizedLanguages.length === 0) {
    const linesToRemove = new Set<number>()

    copyTabGroups.forEach(group => {
      group.slots.forEach(slot => markSlotLinesForRemoval(linesToRemove, slot))
    })

    return markdown
      .split('\n')
      .filter((_, lineNumber) => !linesToRemove.has(lineNumber))
      .join('\n')
  }

  const selectedLanguageSet = new Set<string>(normalizedLanguages)
  const linesToRemove = new Set<number>()

  copyTabGroups.forEach(group => {
    const hasSelectedLanguageInGroup = group.slots.some(slot => selectedLanguageSet.has(slot.label))
    if (!hasSelectedLanguageInGroup) {
      if (dropGroupsMissingLanguage) {
        group.slots.forEach(slot => markSlotLinesForRemoval(linesToRemove, slot))
      }
      return
    }

    group.slots.forEach(slot => {
      if (!selectedLanguageSet.has(slot.label)) {
        markSlotLinesForRemoval(linesToRemove, slot)
      }
    })
  })

  return markdown
    .split('\n')
    .filter((_, lineNumber) => !linesToRemove.has(lineNumber))
    .join('\n')
}

export {
  filterMarkdownByCopyLanguages,
}
