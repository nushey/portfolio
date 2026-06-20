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
      <article className="rounded-3xl border border-zinc-200/70 bg-white/60 p-8 shadow-sm shadow-zinc-200/40 backdrop-blur-xl sm:p-10">
        <h2
          id={headingId}
          className="font-mono text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
        >
          {t(`nav.${translationKey}`)}
        </h2>

        <dl className="mt-8 space-y-6">
          {blocks.map(({ key, label, text }) => (
            <div key={key}>
              <dt className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                {label}
              </dt>
              <dd className="mt-1.5 text-base leading-relaxed text-zinc-600 sm:text-lg">{text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-zinc-200 bg-zinc-50/80 px-3 py-1 text-sm font-medium text-zinc-700"
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
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
