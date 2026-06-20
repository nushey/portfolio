import { useEffect, useState } from 'react'

// Observes the given section ids and returns the id currently considered "active"
// (the one most prominently in view), so the navbar can highlight the matching
// link. Mirrors `useReveal.js`: SSR-safe and guarded against environments without
// IntersectionObserver. Active tracking is informational (not motion), so it runs
// regardless of `prefers-reduced-motion`; if observation is unavailable it simply
// returns the first id and the nav stays usable.
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const visibility = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio)
        }
        let best = ''
        let bestRatio = 0
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }
        if (best) setActiveId(best)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node) => node !== null)
    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [ids])

  return activeId
}
