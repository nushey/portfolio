import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Bio from './components/Bio.jsx'
import Experience from './components/Experience.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import Contact from './components/Contact.jsx'
import { projects } from './data/projects.js'

// Composition root. Renders the fixed Navbar, then the page sections in order.
// The three project blocks are driven from the single `projects` data array
// (never hardcoded). A decorative, fixed background wash gives the translucent
// glass cards something to read against; it is aria-hidden and purely visual.
// `<main>` carries top padding so content clears the fixed h-16 navbar (anchored
// jumps are additionally handled by the global `section { scroll-margin-top }`).
export default function App() {
  return (
    <div className="relative min-h-dvh bg-zinc-50 text-zinc-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_70%_-10%,theme(colors.blue.100/.55),transparent_60%),radial-gradient(50rem_50rem_at_10%_10%,theme(colors.zinc.200/.5),transparent_55%)]"
      />

      <Navbar />

      <main className="pt-16">
        <Hero />
        <Bio />
        <Experience />
        {projects.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}
        <Contact />
      </main>
    </div>
  )
}
