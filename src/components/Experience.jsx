import { useLanguage } from '../i18n/LanguageContext.jsx'
import { experience } from '../data/experience.js'

// Experience section (`#experiencia`). A single data-driven, presentational
// component: it maps over the `experience` data array (never duplicating cards)
// and renders each role as a soft glass card matching Bio/ProjectSection. All
// visible copy resolves through the i18n `t` accessor; structural data (company,
// location, dates) comes from the data array, role title and bullets from i18n.
export default function Experience() {
  const { t } = useLanguage()

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16"
    >
      <h2
        id="experience-heading"
        className="font-mono text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
      >
        {t('nav.experiencia')}
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
        {t('experience.intro')}
      </p>

      <ol className="mt-8 space-y-6">
        {experience.map(({ id, translationKey, company, location, dateRange }) => {
          const copyBase = `experience.${translationKey}`
          const bullets = t(`${copyBase}.bullets`)

          return (
            <li key={id}>
              <article className="rounded-3xl border border-zinc-200/70 bg-white/60 p-8 shadow-sm shadow-zinc-200/40 backdrop-blur-xl sm:p-10">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-mono text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                    {t(`${copyBase}.role`)}
                  </h3>
                  <p className="font-mono text-sm tabular-nums text-zinc-500">{dateRange}</p>
                </div>

                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                  {company}
                  <span className="mx-2 text-zinc-300" aria-hidden="true">
                    ·
                  </span>
                  <span className="font-medium normal-case tracking-normal text-zinc-500">
                    {location}
                  </span>
                </p>

                <ul className="mt-6 space-y-3">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 text-base leading-relaxed text-zinc-600 sm:text-lg"
                    >
                      <span
                        className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-blue-400"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
