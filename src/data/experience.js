// Single source of truth for the professional experience entries (most recent first).
// Holds ONLY language-agnostic structural data: the `id`, the `company` and
// `location` labels, the `dateRange`, the optional external `companyUrl`, and the
// i18n key under `translations.experience.*` for the role title and bullet list.
// Visible role copy is resolved by `Experience` through the translations dictionary.

export const experience = [
  {
    id: 'ukg',
    translationKey: 'ukg',
    company: 'UKG',
    location: 'Montevideo, Uruguay',
    dateRange: 'Jun 2025 – Dec 2025',
  },
  {
    id: 'maquilift',
    translationKey: 'maquilift',
    company: 'Maquilift',
    location: 'Uruguay / Remote',
    dateRange: 'Mar 2024 – Aug 2025',
  },
  {
    id: 'ort',
    translationKey: 'ort',
    company: 'ORT University',
    location: 'Montevideo, Uruguay',
    dateRange: 'Mar 2025 – Present',
  },
]
