import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { experience } from '../data/experience.js'

// Experience section (`#experiencia`). A single data-driven, presentational
// component built as a vertical timeline: it maps over the `experience` data array
// (never duplicating cards) and renders each role as a soft glass card matching
// Bio/ProjectSection. All visible copy resolves through the i18n `t` accessor;
// structural data (company, location, dates, tech) comes from the data array, the
// role title and bullets from i18n. Cards reveal on scroll (staggered) and lift on
// hover — every motion is gated behind `motion-safe:` / the reduced-motion guard.

function TimelineItem({ entry, index, t }) {
  const { translationKey, company, location, dateRange, tech } = entry
  const copyBase = `experience.${translationKey}`
  const bullets = t(`${copyBase}.bullets`)
  const [ref, isVisible] = useReveal()

  return (
    <li ref={ref} className="relative pl-10 sm:pl-16">
      {/* Timeline node, centered on the rail. */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-7 flex h-[18px] w-[18px] items-center justify-center sm:h-[26px] sm:w-[26px]"
      >
        <span className="h-full w-full rounded-full border-2 border-blue-500 bg-white shadow-sm shadow-blue-200/60" />
        <span className="absolute h-1.5 w-1.5 rounded-full bg-blue-500 sm:h-2 sm:w-2" />
      </span>

      <article
        style={{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }}
        className={`group rounded-3xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm shadow-zinc-200/40 backdrop-blur-xl transition-[transform,box-shadow,border-color,opacity] duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-200/50 sm:p-8 motion-safe:duration-500 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 motion-safe:translate-y-6'
        }`}
      >
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
                className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-blue-400 transition-colors duration-300 group-hover:bg-blue-500"
                aria-hidden="true"
              />
              {bullet}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 font-mono text-xs font-medium text-zinc-600 transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-50/70 group-hover:text-blue-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    </li>
  )
}

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16"
    >
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/70 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
          {t('experience.kicker')}
        </span>

        <h2
          id="experience-heading"
          className="mt-5 font-mono text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
        >
          {t('experience.title')}
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
          {t('experience.intro')}
        </p>
      </header>

      <ol className="relative mt-10 space-y-6 sm:mt-12 sm:space-y-8">
        {/* Vertical rail the nodes sit on. */}
        <span
          aria-hidden="true"
          className="absolute left-[8px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-300 via-zinc-200 to-transparent sm:left-[12px]"
        />
        {experience.map((entry, index) => (
          <TimelineItem key={entry.id} entry={entry} index={index} t={t} />
        ))}
      </ol>
    </section>
  )
}
