import { computed } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'

// Shared version-awareness logic for the aside's version dropdown and the
// "switch to latest" warning. Both need the same current/latest comparison and
// the same versioned-path builder, so it lives here rather than in either component.
export function useVersionSwitch() {
  const { page, theme } = useData()
  const route = useRoute()
  const router = useRouter()

  const versions = computed<string[]>(() => (theme.value as any).typesenseVersions || [])
  const latestVersion = computed<string>(() => (theme.value as any).typesenseLatestVersion)
  const currentVersion = computed<string | null>(() => (page.value as any).typesenseVersion)

  // route.path includes the `/docs/` base; strip it for version-relative logic.
  const relPath = computed(() => route.path.replace(/^\/docs/, '') || '/')

  // API Reference pages live under a versioned `/api/` prefix (e.g. /30.2/api/…).
  const isApiPage = computed(() => /\/api(\/|$)/.test(relPath.value))

  const currentPath = computed(() => {
    if (!currentVersion.value) return '/'
    const m = relPath.value.match(new RegExp(`^/${currentVersion.value}(/.*)?$`))
    return m && m[1] ? m[1] : '/'
  })

  const currentHash = computed(() => (typeof window !== 'undefined' ? window.location.hash : ''))

  function compareVersions(a: string | null, b: string | null): number {
    if (!a || !b) return 0
    const aParts = String(a).split('.')
    const bParts = String(b).split('.')
    const len = Math.max(aParts.length, bParts.length)
    for (let i = 0; i < len; i += 1) {
      const aNum = parseInt(aParts[i] || '0', 10)
      const bNum = parseInt(bParts[i] || '0', 10)
      if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
        const aSeg = aParts[i] || ''
        const bSeg = bParts[i] || ''
        if (aSeg === bSeg) continue
        return aSeg > bSeg ? 1 : -1
      }
      if (aNum > bNum) return 1
      if (aNum < bNum) return -1
    }
    return 0
  }

  const showVersionWarning = computed(
    () => !!currentVersion.value && currentVersion.value !== latestVersion.value,
  )
  const isOlderThanLatest = computed(() => compareVersions(currentVersion.value, latestVersion.value) < 0)
  const isNewerThanLatest = computed(() => compareVersions(currentVersion.value, latestVersion.value) > 0)

  function getVersionedPath(version: string): string {
    const [major, minor] = version.split('.').map((n) => parseInt(n, 10))
    const needsApiPrefix = (major === 0 && minor >= 20) || major > 0
    const normalizedPath = currentPath.value.replace('/api', '')
    const prefix = needsApiPrefix ? '/api' : ''
    const targetPath = `/${version}${prefix}${normalizedPath}`
    return `${targetPath}.html${currentHash.value}`.replace(/\/\.html/, '/')
  }

  function switchVersion(event: Event) {
    const newVersion = (event.target as HTMLSelectElement).value
    if (currentVersion.value !== newVersion) router.go(getVersionedPath(newVersion))
  }

  return {
    versions,
    latestVersion,
    currentVersion,
    isApiPage,
    showVersionWarning,
    isOlderThanLatest,
    isNewerThanLatest,
    getVersionedPath,
    switchVersion,
  }
}
