import { useLanguage } from '../i18n/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import ProjectSection from './ProjectSection.jsx'

// Projects wrapper (`#proyectos`). Owns the section header (kicker / title / intro)
// and an in-section quick-nav: the three project names rendered as clickable chips
// that anchor-jump to each project's own subsection. Replaces the per-project
// entries that used to live in the navbar. The individual blocks are still the
// single reusable `ProjectSection`, mapped from the `projects` data array.
export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" aria-labelledby="projects-heading">
      <header className="mx-auto w-full max-w-5xl px-6 pt-12 sm:pt-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/70 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
          {t('projectsSection.kicker')}
        </span>

        <h2
          id="projects-heading"
          className="mt-5 font-mono text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
        >
          {t('projectsSection.title')}
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          {t('projectsSection.intro')}
        </p>

        <nav aria-label={t('projectsSection.quickNavLabel')} className="mt-8">
          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {projects.map((project, index) => (
              <li key={project.id}>
                <a
                  href={`#${project.id}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span className="font-mono text-xs tabular-nums text-blue-500" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono">{t(`nav.${project.translationKey}`)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </section>
  )
}
