import { useLanguage } from '../i18n/LanguageContext.jsx'

// Reusable, purely presentational project block. Rendered once per entry in the
// `projects` data array (never duplicated). All visible copy resolves through
// the i18n `t` accessor; structural data (id, tech, links) comes from `project`.
function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export default function ProjectSection({ project }) {
  const { t } = useLanguage()
  const { id, translationKey, tech, links } = project

  const headingId = `${id}-heading`
  const copyBase = `projects.${translationKey}`

  const blocks = [
    { key: 'solution', label: t('project.solutionLabel'), text: t(`${copyBase}.solution`) },
    { key: 'problem', label: t('project.problemLabel'), text: t(`${copyBase}.problem`) },
    { key: 'how', label: t('project.howLabel'), text: t(`${copyBase}.how`) },
  ]

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16"
    >
      <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_0_40px_-8px_rgba(94,106,210,0.35)] sm:p-10">
        <h2
          id={headingId}
          className="bg-gradient-to-br from-white to-white/60 bg-clip-text font-mono text-2xl font-semibold tracking-tight text-transparent sm:text-3xl"
        >
          {t(`nav.${translationKey}`)}
        </h2>

        <dl className="mt-8 space-y-6">
          {blocks.map(({ key, label, text }) => (
            <div key={key}>
              <dt className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-300">
                {label}
              </dt>
              <dd className="mt-1.5 text-base leading-relaxed text-zinc-300 sm:text-lg">{text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 transition-colors duration-200 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map(({ label, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 backdrop-blur-xl transition-colors duration-200 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              {label}
              <ExternalLinkIcon />
            </a>
          ))}
        </div>
      </article>
    </section>
  )
}
