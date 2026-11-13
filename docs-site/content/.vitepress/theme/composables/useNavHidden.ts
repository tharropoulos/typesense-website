import { createSharedComposable, useEventListener, useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'

export const useNavHidden = createSharedComposable(() => {
  const { y } = useWindowScroll()
  const hidden = ref(true)
  let byUser = false

  // jumps the page makes on its own (anchor links, search results, back/forward,
  // tab groups holding their place, keyboard focus) leave the nav as it was
  useEventListener(['click', 'popstate'], () => (byUser = false), { capture: true })
  useEventListener(['touchmove', 'wheel'], () => (byUser = true), { passive: true })
  useEventListener('keydown', e => (byUser = !['Enter', 'Tab'].includes(e.key) && !e.defaultPrevented))
  // focus inside the hidden nav would sit off screen. webkit scrolls to it a frame after focusin
  useEventListener('focusin', e =>
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (scrollY && (e.target as Element).matches('.VPNav :focus-visible')) hidden.value = false
      }),
    ),
  )

  // a small nudge back up while reading shouldn't pull the nav over the text, and a
  // finger drifting down after a reveal shouldn't hide it again
  let deepest = 0
  let highest = 0

  watch(y, (next, prev) => {
    // ios reports its rubber-band bounce, which reads as a reversal at either end
    const max = document.documentElement.scrollHeight - window.innerHeight - 1
    const [to, from] = [next, prev].map(v => Math.min(Math.max(v, 0), max))
    if (!byUser || to > from) deepest = to
    if (!byUser || to < from) highest = to
    // the open outline panel hangs from the local nav, which a reveal would push off the screen
    if (!byUser || to === from || document.getElementById('VPLocalNavOutline')) return
    if (to - highest >= 8) hidden.value = true
    else if (deepest - to >= 20) hidden.value = false
  })

  return hidden
})
