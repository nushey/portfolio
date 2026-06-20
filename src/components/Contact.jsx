import { useLanguage } from '../i18n/LanguageContext.jsx'

// Contact section (`#contacto`) plus the site footer. Direct links only — no
// form — matching the soft glass card / zinc-blue token system used across the
// site. GitHub and LinkedIn open in a new tab with `rel="noopener noreferrer"`;
// email uses `mailto:`. All visible copy resolves through the i18n `t` accessor.
// Structural link data (urls, icons) lives here, not in the translations dict.
function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.8c-2.92.64-3.54-1.25-3.54-1.25-.48-1.22-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.06.07 1.61 1.09 1.61 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.66-1.4-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.07a9.96 9.96 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.57 1.45.21 2.52.1 2.79.67.74 1.08 1.67 1.08 2.82 0 4.02-2.46 4.9-4.8 5.16.38.33.71.97.71 1.96v2.9c0 .29.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}

function EmailIcon() {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export default function Contact() {
  const { t } = useLanguage()

  const channels = [
    {
      key: 'github',
      label: t('contact.githubLabel'),
      href: 'https://github.com/nushey',
      external: true,
      Icon: GitHubIcon,
    },
    {
      key: 'linkedin',
      label: t('contact.linkedinLabel'),
      href: 'https://www.linkedin.com/in/nahuel-zeballos/',
      external: true,
      Icon: LinkedInIcon,
    },
    {
      key: 'email',
      label: t('contact.emailLabel'),
      href: 'mailto:zeballosnahuelfd@gmail.com',
      external: false,
      Icon: EmailIcon,
    },
  ]

  const year = new Date().getFullYear()

  return (
    <>
      <section
        id="contacto"
        aria-labelledby="contact-heading"
        className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16"
      >
        <article className="rounded-3xl border border-zinc-200/70 bg-white/60 p-8 text-center shadow-sm shadow-zinc-200/40 backdrop-blur-xl sm:p-10">
          <h2
            id="contact-heading"
            className="font-mono text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
          >
            {t('contact.heading')}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {t('contact.intro')}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {channels.map(({ key, label, href, external, Icon }) => (
              <li key={key}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <Icon />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <footer className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="border-t border-zinc-200/70 pt-6 text-center text-sm text-zinc-500">
          <p>
            © {year} {t('hero.title')}. {t('footer.rights')}
          </p>
          <p className="mt-1">{t('footer.builtWith')}</p>
        </div>
      </footer>
    </>
  )
}
