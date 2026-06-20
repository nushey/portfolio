import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Fixed top navigation. Anchor links smooth-scroll to each section (smooth scroll
// and scroll-margin are handled globally in index.css, guarded for reduced motion).
// All visible labels resolve through the i18n `t` accessor.
const NAV_LINKS = [
  { href: '#inicio', labelKey: 'nav.inicio' },
  { href: '#bio', labelKey: 'nav.bio' },
  { href: '#experiencia', labelKey: 'nav.experiencia' },
  { href: '#agents-md-generator', labelKey: 'nav.agentsMdGenerator' },
  { href: '#context-manager', labelKey: 'nav.contextManager' },
  { href: '#sdd-flow', labelKey: 'nav.sddFlow' },
  { href: '#contacto', labelKey: 'nav.contacto' },
]

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

function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()
  const nextLanguage = language === 'es' ? 'en' : 'es'

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`${t('languageToggle.ariaLabel')} (${nextLanguage.toUpperCase()})`}
      className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-sm font-semibold text-zinc-700 shadow-sm transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span aria-current={language === 'es' ? 'true' : undefined} className={language === 'es' ? 'text-blue-700' : ''}>
        ES
      </span>
      <span aria-hidden="true" className="text-zinc-300">
        /
      </span>
      <span aria-current={language === 'en' ? 'true' : undefined} className={language === 'en' ? 'text-blue-700' : ''}>
        EN
      </span>
    </button>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      aria-label={t('menu.primary')}
      className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="rounded-md font-mono text-base font-semibold tracking-tight text-zinc-900 transition-colors duration-200 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          NZ
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, labelKey }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? t('menu.close') : t('menu.open')}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 p-2 text-zinc-700 shadow-sm transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <ul
          id="primary-navigation"
          className="space-y-1 border-t border-zinc-200/60 bg-white/80 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          {NAV_LINKS.map(({ href, labelKey }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-2.5 text-base font-medium text-zinc-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  )
}
