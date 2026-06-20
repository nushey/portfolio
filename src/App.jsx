import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Bio from './components/Bio.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import SectionNav from './components/SectionNav.jsx'
import { usePointerGlow } from './hooks/usePointerGlow.js'
import { useHashArrival } from './hooks/useHashArrival.js'

// Composition root. Renders the fixed Navbar, then the page sections in order.
// `Projects` wraps the projects header, in-section quick-nav, and the three
// data-driven project blocks.
//
// The fixed, aria-hidden background has two layers, both purely decorative:
//   1. An animated gradient-mesh wash (blue/violet/zinc radial blobs) that drifts
//      slowly via `transform` under `motion-safe` and stays static otherwise.
//   2. A cursor-following spotlight driven by `usePointerGlow` (writes `--x/--y`).
//      The hook only attaches on fine pointers with motion enabled, so the
//      spotlight gradient is centered at 50%/50% (off-screen-irrelevant) and
//      simply never moves on touch / reduced-motion — the static mesh remains.
//
// `<main>` carries top padding so content clears the fixed h-16 navbar (anchored
// jumps are additionally handled by the global `section { scroll-margin-top }`).
export default function App() {
  const glowRef = usePointerGlow()
  useHashArrival()

  return (
    <div className="relative min-h-dvh bg-zinc-950 text-zinc-100">
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [--x:50%] [--y:50%]"
      >
        {/* Layer 1 — drifting gradient-mesh blobs. */}
        <div className="absolute -left-[10%] -top-[15%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_70%)] blur-3xl motion-safe:animate-mesh-drift" />
        <div className="absolute right-[-10%] top-[10%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14),transparent_70%)] blur-3xl motion-safe:animate-mesh-drift-slow" />
        <div className="absolute bottom-[-15%] left-[20%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(63,63,70,0.35),transparent_70%)] blur-3xl motion-safe:animate-mesh-drift" />

        {/* Layer 2 — cursor spotlight (inert on touch / reduced-motion). */}
        <div className="absolute inset-0 bg-[radial-gradient(28rem_28rem_at_var(--x)_var(--y),rgba(96,165,250,0.10),transparent_60%)]" />
      </div>

      <Navbar />

      <main className="pt-16">
        <Hero />
        <Bio />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <SectionNav />
    </div>
  )
}
