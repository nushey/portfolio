import { useLanguage } from '../i18n/LanguageContext.jsx'

// Bio section (`#bio`). A single soft glass card (matching ProjectSection) holds
// the profile paragraph and the stack list rendered as chips. All visible copy
// resolves through the i18n `t` accessor; `bio.stack` is an array of labels.
export default function Bio() {
  const { t } = useLanguage()
  const stack = t('bio.stack')

  return (
    <section
      id="bio"
      aria-labelledby="bio-heading"
      className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16"
    >
      <article className="rounded-3xl border border-zinc-200/70 bg-white/60 p-8 shadow-sm shadow-zinc-200/40 backdrop-blur-xl sm:p-10">
        <h2
          id="bio-heading"
          className="font-mono text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
        >
          {t('nav.bio')}
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          {t('bio.profile')}
        </p>

        <div className="mt-8">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            {t('bio.stackLabel')}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-200 bg-zinc-50/80 px-3 py-1 text-sm font-medium text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}
