import { useEffect, useState } from 'react'

// Scrollspy that returns the index of the navigable stop the viewport is currently
// on, given an ordered list of element ids. Unlike `useActiveSection` (which ranks
// by IntersectionObserver ratio), this compares each element's top against a fixed
// reference line just below the navbar and picks the LAST stop already crossed — so
// it stays correct even when a stop element is nested inside another (e.g. the
// `experiencia` section contains each `exp-*` role card). Reads are batched in a
// rAF on scroll/resize. SSR-safe; returns 0 when the DOM/APIs are unavailable.
const REFERENCE_LINE = 100 // px from the viewport top (clears the h-16 navbar)

export function useCurrentStop(ids) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    let raf = 0

    const compute = () => {
      raf = 0
      let current = 0
      for (let i = 0; i < ids.length; i += 1) {
        const el = document.getElementById(ids[i])
        if (!el) continue
        if (el.getBoundingClientRect().top - REFERENCE_LINE <= 1) current = i
      }
      // The last stop sits near the page bottom with little content below it, so it
      // can never be scrolled up to the reference line. Treat reaching the bottom of
      // the page as landing on the final stop.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) current = ids.length - 1
      setIndex(current)
    }

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [ids])

  return index
}
