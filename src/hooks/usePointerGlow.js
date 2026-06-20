import { useEffect, useRef } from 'react'

// Tracks the cursor and exposes its position as `--x`/`--y` (px) CSS variables on
// the returned element, driving a pointer-following spotlight. rAF-throttled so at
// most one write happens per frame. Mirrors `useReveal.js`: SSR-safe (all
// window/matchMedia access is guarded) and motion-aware — under
// `prefers-reduced-motion` or on coarse/touch pointers it stays inert so the
// static mesh remains the only background and nothing chases the finger.
export function usePointerGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof window === 'undefined') return undefined

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const finePointer = window.matchMedia?.('(pointer: fine)').matches

    if (prefersReducedMotion || !finePointer) return undefined

    let frame = 0

    const handleMove = (event) => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        node.style.setProperty('--x', `${event.clientX}px`)
        node.style.setProperty('--y', `${event.clientY}px`)
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
