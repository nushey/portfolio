# Portfolio — Nahuel Zeballos

Personal portfolio of Nahuel Zeballos — a bilingual (ES/EN) single-page site built with
React, Vite, and Tailwind. It presents a hero, bio, three flagship open-source projects
(agents-md-generator, context-manager, sdd-flow), and direct contact links.

## Tech stack

- **React 19** — UI, function components, one component per section.
- **Vite** — dev server and production build.
- **Tailwind CSS v4** — utility-first styling via the `@tailwindcss/vite` plugin.
- **Hand-rolled i18n** — a lightweight React Context + a plain translations object
  (no i18n library). Spanish is the default; the choice is persisted to `localStorage`.

## Local development

Requires Node.js and npm.

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (hot reload)
npm run build    # produce the production build in dist/
npm run preview  # serve the built dist/ locally to verify the production output
```

## Project structure

```text
portfolio/
├── index.html                 # document shell, SEO + Open Graph metadata
├── vercel.json                # Vercel deploy config (Vite framework preset)
├── vite.config.js             # Vite + React + Tailwind plugin setup
├── src/
│   ├── main.jsx               # entry point; mounts <App> inside the LanguageProvider
│   ├── App.jsx                # composition root; renders the sections in order
│   ├── index.css              # Tailwind layers, smooth scroll, section scroll-margin
│   ├── components/
│   │   ├── Navbar.jsx         # fixed top nav, smooth-scroll anchors, ES/EN toggle
│   │   ├── Hero.jsx           # #inicio
│   │   ├── Bio.jsx            # #bio
│   │   ├── ProjectSection.jsx # reusable presentational section, rendered 3×
│   │   └── Contact.jsx        # #contacto
│   ├── data/
│   │   └── projects.js        # single source of truth for the three project blocks
│   └── i18n/
│       ├── LanguageContext.jsx# provider + useLanguage hook (state + persistence)
│       └── translations.js    # ES/EN translation dictionary for every visible string
└── README.md
```

## Deployment to Vercel

The repo ships a `vercel.json` at the root with the Vite framework preset, so Vercel
auto-detects the build (`vite build`) and output (`dist/`). The default live target is a
`*.vercel.app` URL; a custom domain is an optional follow-up (see below).

You can deploy either from the dashboard or from the CLI.

### Option A — Import the GitHub repo (dashboard)

1. Sign in to Vercel with GitHub.
2. Import the `portfolio` repository. Vercel auto-detects Vite — no build settings to change.
3. Click **Deploy**. Vercel builds and publishes to a `*.vercel.app` URL.

### Option B — Vercel CLI

These steps are run by you in your own terminal (authentication cannot be done on your behalf):

```bash
npm i -g vercel   # install the Vercel CLI (once)
vercel login      # authenticate (opens the browser)
vercel            # create a preview deployment
vercel --prod     # promote to production (the live *.vercel.app URL)
```

### After the first deploy

`index.html` currently uses the placeholder URL `https://portfolio-nushey.vercel.app/`
for the `<link rel="canonical">` and `og:url` tags. Once the real deployed URL is
assigned, update those tags to the live URL so canonical and Open Graph metadata are
correct, then redeploy.

## Custom domain via Namecheap (optional follow-up)

This is documentation only — no domain is purchased and no DNS is configured as part of
the project.

1. Buy the domain in Namecheap.
2. In Vercel, open **Settings > Domains** for the project and add the domain.
3. Vercel provides DNS records (an `A` record for the apex domain and a `CNAME` for
   `www`). Copy them.
4. In the Namecheap dashboard, open **Advanced DNS** for the domain and paste the
   provided `A` and `CNAME` records.
5. Wait for DNS propagation. Vercel auto-provisions HTTPS once the domain verifies.
