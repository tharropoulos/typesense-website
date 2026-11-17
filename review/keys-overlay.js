// Init script for walk videos. Shows the last keys pressed in a fixed badge so a viewer can follow along.
// context.addInitScript({ path: '<this file>' })
addEventListener(
  'keydown',
  e => {
    const names = { ' ': 'Space', ArrowDown: '↓', ArrowUp: '↑', ArrowLeft: '←', ArrowRight: '→', Escape: 'Esc' }
    const key =
      (e.shiftKey && e.key !== 'Shift' ? 'Shift+' : '') +
      (e.metaKey && e.key !== 'Meta' ? '⌘' : '') +
      (names[e.key] || e.key)
    let badge = document.getElementById('__keys')
    if (!badge) {
      badge = document.createElement('div')
      badge.id = '__keys'
      badge.setAttribute('aria-hidden', 'true')
      badge.style.cssText =
        'position:fixed;left:12px;bottom:12px;z-index:2147483647;pointer-events:none;font:600 15px/1 ui-monospace,monospace;padding:8px 10px;border-radius:6px;background:#111;color:#c0ff58;box-shadow:0 2px 8px #0006'
      document.documentElement.appendChild(badge)
    }
    badge.textContent = key
    clearTimeout(badge._t)
    badge.style.opacity = '1'
    badge._t = setTimeout(() => {
      badge.style.opacity = '0'
    }, 900)
  },
  true,
)
