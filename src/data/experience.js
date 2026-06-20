// Single source of truth for the professional experience entries (most recent first).
// Holds ONLY language-agnostic structural data: the `id`, the `company` and
// `location` labels, the `dateRange`, the `tech` stack used in the role (shown as
// pills), and the `translationKey` under `translations.experience.*` for the role
// title and bullet list. Visible role copy is resolved by `Experience` through the
// translations dictionary; tech names are proper nouns and stay untranslated.

export const experience = [
  {
    id: 'zureo',
    translationKey: 'zureo',
    company: 'Zureo Software',
    location: 'Montevideo, Uruguay',
    dateRange: 'Jan 2026 – Present',
    tech: ['.NET Framework', 'AngularJS', 'SQL', 'REST APIs', 'Postman', 'Agentic AI'],
  },
  {
    id: 'ukg',
    translationKey: 'ukg',
    company: 'UKG',
    location: 'Montevideo, Uruguay',
    dateRange: 'Jun 2025 – Dec 2025',
    tech: ['C#/.NET', 'Kafka', 'Kubernetes', 'Prometheus', 'Grafana', 'CI/CD'],
  },
  {
    id: 'maquilift',
    translationKey: 'maquilift',
    company: 'Maquilift',
    location: 'Uruguay / Remote',
    dateRange: 'Mar 2024 – Aug 2025',
    tech: ['Electron', 'React', 'Node.js', 'Supabase', 'PostgreSQL', 'CI/CD'],
  },
  {
    id: 'ort',
    translationKey: 'ort',
    company: 'ORT University',
    location: 'Montevideo, Uruguay',
    dateRange: 'Mar 2025 – Present',
    tech: ['.NET', 'C#', 'Blazor', 'EF Core', 'TDD', 'GitFlow'],
  },
]
