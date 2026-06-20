import { useLanguage } from '../i18n/LanguageContext.jsx'
import StackMarquee from './StackMarquee.jsx'

// Bio section (`#bio`). A dark glass card holds the profile copy and the stack list
// rendered as chips, followed by the decorative brand marquee. All visible copy
// resolves through the i18n `t` accessor: `bio.paragraphs` is an array of paragraphs
// where each paragraph is an array of nodes — a plain string, or an `{ em }` object
// for inline-emphasized concepts. `bio.stack` is an array of labels and remains the
// accessible source of the stack (the marquee is aria-hidden).
function renderNodes(paragraph) {
  return paragraph.map((node, index) =>
    typeof node === 'string' ? (
      node
    ) : (
      <strong key={index} className="font-semibold text-zinc-100">
        {node.em}
      </strong>
    ),
  )
}

export default function Bio() {
  const { t } = useLanguage()
  const paragraphs = t('bio.paragraphs')
  const stack = t('bio.stack')

  return (
    <section
      id="bio"
      aria-labelledby="bio-heading"
      className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16"
    >
      <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:border-blue-400/40 hover:shadow-[0_0_40px_-8px_rgba(94,106,210,0.35)] sm:p-10">
        <h2
          id="bio-heading"
          className="bg-gradient-to-br from-white to-white/60 bg-clip-text font-mono text-2xl font-semibold tracking-tight text-transparent sm:text-3xl"
        >
          {t('nav.bio')}
        </h2>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{renderNodes(paragraph)}</p>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-300">
            {t('bio.stackLabel')}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 transition-colors duration-200 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <StackMarquee />
        </div>
      </article>
    </section>
  )
}
