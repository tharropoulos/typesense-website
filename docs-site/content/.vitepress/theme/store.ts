import { reactive, computed } from 'vue'
// Pure, framework-agnostic localStorage helpers ported from VuePress.
import { readPreferredCopyLanguages, writePreferredCopyLanguages } from './util/copyLanguagePreferences'

// Replaces the old Vuex store (`store/index.js`) with a tiny reactive singleton.
//   - defaultTab      : last-selected code tab, persisted to localStorage
//   - copyLanguages   : selected "copy markdown" languages, persisted + URL-synced

function readDefaultTab(): string | null {
  if (typeof window === 'undefined' || !window.localStorage) return null
  try {
    return window.localStorage.getItem('default-tab')
  } catch (error) {
    console.error('Failed to read default tab from localStorage:', error)
    return null
  }
}

function writeDefaultTab(tab: string): void {
  if (typeof window === 'undefined' || !window.localStorage) return
  try {
    window.localStorage.setItem('default-tab', tab)
  } catch (error) {
    console.error('Failed to persist default tab to localStorage:', error)
  }
}

const state = reactive<{ defaultTab: string | null; copyLanguages: string[] }>({
  defaultTab: readDefaultTab(),
  copyLanguages: readPreferredCopyLanguages(),
})

const singlePreferredCopyLanguage = computed(() =>
  state.copyLanguages.length === 1 ? state.copyLanguages[0] : null,
)

export const docsStore = {
  state,
  singlePreferredCopyLanguage,
  hydrateCopyLanguages() {
    state.copyLanguages = readPreferredCopyLanguages()
  },
  setDefaultTab(tab: string) {
    state.defaultTab = tab
    writeDefaultTab(tab)
  },
  setCopyLanguages(languages: string[]) {
    state.copyLanguages = writePreferredCopyLanguages(languages)
  },
}

export type DocsStore = typeof docsStore
