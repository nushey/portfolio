import { useLanguage } from '../i18n/LanguageContext.jsx'

// Landing section (`#inicio`). Dark, high-impact focal layout: a mono kicker, the
// name set in a heavy gradient typeface revealed with a clip-path wipe over a soft
// accent glow, then the role and tagline. All visible copy resolves through the
// i18n `t` accessor. Every entrance is gated behind `motion-safe:` so the global
// reduced-motion block leaves the content fully painted and static.
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative mx-auto flex min-h-[88vh] w-full max-w-5xl flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-blue-300 motion-safe:animate-fade-in">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        />
        {t('hero.kicker')}
      </p>

      <p className="mb-6 font-mono text-sm font-medium uppercase tracking-[0.2em] text-blue-300 motion-safe:animate-fade-in">
        {t('hero.subtitle')}
      </p>

      <div className="relative">
        {/* Soft accent glow behind the name. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_18rem_at_center,rgba(96,165,250,0.18),transparent_70%)] blur-2xl"
        />
        <h1
          id="hero-title"
          className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-5xl font-black leading-[1.02] tracking-tighter text-transparent motion-safe:animate-hero-reveal sm:text-7xl"
        >
          {t('hero.title')}
        </h1>
      </div>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 motion-safe:animate-fade-in-up sm:text-xl">
        {t('hero.tagline')}
      </p>
    </section>
  )
}
