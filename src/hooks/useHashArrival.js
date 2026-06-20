import { useEffect } from 'react'

// Briefly flags the section the user just navigated to (via hash change / nav click)
// with a `data-arrived` attribute, which `index.css` turns into a subtle, WCAG-safe
// blue arrival glow that fades out on its own. SSR-safe (guards `window`/`document`);
// the reduced-motion block in `index.css` neutralizes the animation, so this stays
// inert under reduced motion. The attribute is cleared after the glow completes.
export function useHashArrival() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    let timer = 0

    const flagFromHash = () => {
      const id = window.location.hash.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return

      target.setAttribute('data-arrived', 'true')
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        target.removeAttribute('data-arrived')
      }, 1000)
    }

    window.addEventListener('hashchange', flagFromHash)
    return () => {
      window.removeEventListener('hashchange', flagFromHash)
      window.clearTimeout(timer)
    }
  }, [])
}
