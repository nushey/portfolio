import { useLanguage } from '../i18n/LanguageContext.jsx'
import { navStops } from '../data/navStops.js'
import { useCurrentStop } from '../hooks/useCurrentStop.js'

// Fixed, viewport-pinned arrow control on the right edge (vertically centered).
// Always visible, so the whole page is navigable purely via the arrows — no manual
// scrolling. It steps through the flat `navStops` order (major sections AND each
// experience role / project), tracking the current stop with `useCurrentStop`.
//
// Each active arrow is a real anchor (`href="#id"`): the global smooth-scroll +
// `scroll-margin` place the target under the navbar and `useHashArrival` flashes the
// arrival glow. At the ends the unavailable arrow stays in place but disabled, so the
// control never shifts. Dark-glass styling, glowing focus rings and ≥44px hit areas
// mirror the Navbar controls; the down chevron carries a `motion-safe` nudge hint.
function ChevronIcon({ direction }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === 'up' ? <path d="m6 15 6-6 6 6" /> : <path d="m6 9 6 6 6-6" />}
    </svg>
  )
}

const ARROW_BASE =
  'inline-flex h-11 w-11 items-center justify-center rounded-full transition-[transform,color,border-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400'

function Arrow({ targetId, direction, label }) {
  if (!targetId) {
    return (
      <button
        type="button"
        disabled
        aria-label={label}
        className={`${ARROW_BASE} cursor-not-allowed border border-white/5 text-zinc-700`}
      >
        <ChevronIcon direction={direction} />
      </button>
    )
  }

  return (
    <a
      href={`#${targetId}`}
      aria-label={label}
      className={`${ARROW_BASE} border border-white/10 bg-white/5 text-zinc-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-blue-200 hover:shadow-[0_0_24px_-6px_rgba(96,165,250,0.55)]`}
    >
      <span className={direction === 'down' ? 'motion-safe:animate-nudge' : undefined}>
        <ChevronIcon direction={direction} />
      </span>
    </a>
  )
}

export default function SectionNav() {
  const { t } = useLanguage()
  const index = useCurrentStop(navStops)
  const total = navStops.length

  const prevId = index > 0 ? navStops[index - 1] : null
  const nextId = index < total - 1 ? navStops[index + 1] : null

  return (
    <nav
      aria-label={t('sectionNav.label')}
      className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 p-1.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:right-5"
    >
      <Arrow targetId={prevId} direction="up" label={t('sectionNav.previous')} />

      <span aria-hidden="true" className="flex flex-col items-center font-mono text-[10px] leading-tight text-zinc-500">
        <span className="tabular-nums text-blue-300">{String(index + 1).padStart(2, '0')}</span>
        <span className="my-0.5 h-px w-3 bg-white/15" />
        <span className="tabular-nums">{String(total).padStart(2, '0')}</span>
      </span>

      <Arrow targetId={nextId} direction="down" label={t('sectionNav.next')} />
    </nav>
  )
}
