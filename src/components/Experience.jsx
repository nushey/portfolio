import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { experience } from '../data/experience.js'

// Experience section (`#experiencia`). A single data-driven, presentational
// component built as a vertical timeline: it maps over the `experience` data array
// (never duplicating cards) and renders each role as a dark glass card matching
// Bio/ProjectSection. All visible copy resolves through the i18n `t` accessor;
// structural data (company, location, dates, tech) comes from the data array, the
// role title and bullets from i18n.
//
// Each item owns a glowing rail segment that "grows" (`scaleY` 0→1 from the top)
// when the item reveals, so the timeline draws itself as the user scrolls. Under
// reduced motion `useReveal` reports visible immediately, so the rail and cards are
// fully painted and static. All motion is gated behind `motion-safe:`.

function TimelineItem({ entry, index, isLast, t }) {
  const { translationKey, company, location, dateRange, tech } = entry
  const copyBase = `experience.${translationKey}`
  const bullets = t(`${copyBase}.bullets`)
  const [ref, isVisible] = useReveal()

  return (
    <li ref={ref} className="relative pl-10 sm:pl-16">
      {/* Growing rail segment: scales from the node downward when revealed. */}
      {!isLast ? (
        <span
          aria-hidden="true"
          className={`absolute left-[8px] top-7 -z-10 h-full w-px origin-top bg-gradient-to-b from-blue-400/80 via-blue-500/30 to-transparent shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:left-[12px] ${
            isVisible ? 'scale-y-100' : 'scale-y-0'
          }`}
        />
      ) : null}

      {/* Timeline node, centered on the rail. */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-7 flex h-[18px] w-[18px] items-center justify-center sm:h-[26px] sm:w-[26px]"
      >
        <span
          className={`h-full w-full rounded-full border-2 border-blue-400 bg-zinc-950 transition-shadow duration-500 ${
            isVisible ? 'shadow-[0_0_14px_rgba(96,165,250,0.7)]' : ''
          }`}
        />
        <span className="absolute h-1.5 w-1.5 rounded-full bg-blue-400 sm:h-2 sm:w-2" />
      </span>

      <article
        style={{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }}
        className={`group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-[transform,box-shadow,border-color,opacity] duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_0_40px_-8px_rgba(94,106,210,0.35)] sm:p-8 motion-safe:duration-500 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 motion-safe:translate-y-6'
        }`}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-mono text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
            {t(`${copyBase}.role`)}
          </h3>
          <p className="font-mono text-sm tabular-nums text-zinc-400">{dateRange}</p>
        </div>

        <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
          {company}
          <span className="mx-2 text-zinc-600" aria-hidden="true">
            ·
          </span>
          <span className="font-medium normal-case tracking-normal text-zinc-400">
            {location}
          </span>
        </p>

        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative pl-5 text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              <span
                className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-blue-400/70 transition-colors duration-300 group-hover:bg-blue-400"
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
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300 transition-colors duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:text-blue-200"
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
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-blue-300">
          <span
            className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
            aria-hidden="true"
          />
          {t('experience.kicker')}
        </span>

        <h2
          id="experience-heading"
          className="mt-5 bg-gradient-to-br from-white to-white/60 bg-clip-text font-mono text-3xl font-semibold tracking-tight text-transparent sm:text-4xl"
        >
          {t('experience.title')}
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {t('experience.intro')}
        </p>
      </header>

      <ol className="relative mt-10 space-y-6 sm:mt-12 sm:space-y-8">
        {experience.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            index={index}
            isLast={index === experience.length - 1}
            t={t}
          />
        ))}
      </ol>
    </section>
  )
}
