// Ordered list of the page's top-level sections — the single source of truth for
// section order, consumed by the Navbar (links + active-section tracking).
// Language-agnostic structural data only: each entry pairs an anchor `id` with the
// i18n `labelKey` that resolves its visible name (copy lives in `translations.js`).
// The finer-grained, subsection-aware order for the arrow control lives in
// `navStops.js`.
export const sections = [
  { id: 'inicio', labelKey: 'nav.inicio' },
  { id: 'bio', labelKey: 'nav.bio' },
  { id: 'experiencia', labelKey: 'nav.experiencia' },
  { id: 'proyectos', labelKey: 'nav.proyectos' },
  { id: 'contacto', labelKey: 'nav.contacto' },
]
