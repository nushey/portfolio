import { experience } from './experience.js'
import { projects } from './projects.js'

// Flat, document-order list of every navigable "stop" id used by the fixed
// SectionNav arrow control — so the whole page is reachable purely via the arrows,
// stepping through major sections AND their subsections (each experience role and
// each project), never skipping a view. Derived from the same data arrays that
// render those subsections, so order and ids stay in sync automatically.
//
// Experience role anchors are the `exp-<id>` ids set on each timeline card;
// project anchors are the section ids already rendered by `ProjectSection`.
export const navStops = [
  'inicio',
  'bio',
  'experiencia',
  ...experience.map((entry) => `exp-${entry.id}`),
  'proyectos',
  ...projects.map((project) => project.id),
  'contacto',
]
