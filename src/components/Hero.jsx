import { useLanguage } from '../i18n/LanguageContext.jsx'

// Landing section (`#inicio`). Single-column focal layout with large typography
// and generous whitespace per the minimal-moderno aesthetic. All visible copy
// resolves through the i18n `t` accessor. The subtle entrance fade is driven by
// a Tailwind animation that the global `prefers-reduced-motion` block disables.
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative mx-auto flex min-h-[88vh] w-full max-w-5xl flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p className="mb-6 font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-600 motion-safe:animate-fade-in">
        {t('hero.subtitle')}
      </p>

      <h1
        id="hero-title"
        className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-5xl font-semibold leading-[1.05] tracking-tight text-transparent motion-safe:animate-fade-in-up sm:text-7xl"
      >
        {t('hero.title')}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 motion-safe:animate-fade-in-up sm:text-xl">
        {t('hero.tagline')}
      </p>
    </section>
  )
}
