import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { sections } from '../data/sections.js'

// Fixed top navigation, dark glass (h-16 preserved). Anchor links smooth-scroll to
// each section (smooth scroll and scroll-margin are handled globally in index.css,
// guarded for reduced motion). The active section is tracked by `useActiveSection`
// and reflected as a glowing, mono-bold link with `aria-current`. Language is a
// sliding-pill segmented control. All visible labels resolve through the i18n `t`.
// The link list and its order come from the shared `sections` data (single source
// of truth, also consumed by SectionNav).
const NAV_LINKS = sections

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

// Sliding-pill ES/EN segmented control: a glowing thumb is translated via
// `transform` to the active segment. Both options keep `aria-current`, and the
// whole control carries the descriptive toggle `aria-label`.
function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()
  const nextLanguage = language === 'es' ? 'en' : 'es'

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`${t('languageToggle.ariaLabel')} (${nextLanguage.toUpperCase()})`}
      className="relative inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 font-mono text-xs font-semibold backdrop-blur-xl transition-colors duration-200 hover:border-blue-400/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
    >
      <span
        aria-hidden="true"
        className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-blue-500/20 shadow-[0_0_18px_rgba(96,165,250,0.45)] ring-1 ring-blue-400/40 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          language === 'en' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      <span
        aria-current={language === 'es' ? 'true' : undefined}
        className={`relative z-10 w-9 py-1 text-center transition-colors duration-200 ${
          language === 'es' ? 'text-blue-200' : 'text-zinc-400'
        }`}
      >
        ES
      </span>
      <span
        aria-current={language === 'en' ? 'true' : undefined}
        className={`relative z-10 w-9 py-1 text-center transition-colors duration-200 ${
          language === 'en' ? 'text-blue-200' : 'text-zinc-400'
        }`}
      >
        EN
      </span>
    </button>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      aria-label={t('menu.primary')}
      className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="rounded-md bg-gradient-to-br from-white to-white/60 bg-clip-text font-mono text-base font-bold tracking-tight text-transparent transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          NZ
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ id, labelKey }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative rounded-full px-3 py-2 font-mono text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                    isActive
                      ? 'font-bold text-blue-200'
                      : 'font-medium text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {t(labelKey)}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? t('menu.close') : t('menu.open')}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 backdrop-blur-xl transition-colors duration-200 hover:border-blue-400/40 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 md:hidden"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <ul
          id="primary-navigation"
          className="space-y-1 border-t border-white/10 bg-zinc-950/90 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          {NAV_LINKS.map(({ id, labelKey }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block rounded-xl px-4 py-2.5 font-mono text-base transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                    isActive
                      ? 'bg-blue-500/10 font-bold text-blue-200'
                      : 'font-medium text-zinc-300 hover:bg-white/5 hover:text-zinc-100'
                  }`}
                >
                  {t(labelKey)}
                </a>
              </li>
            )
          })}
        </ul>
      ) : null}
    </nav>
  )
}
