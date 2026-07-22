# Karan Bhosale — Portfolio

A premium, recruiter-focused portfolio for **Karan Bhosale**, a Java Backend Developer and Full
Stack Engineer. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Cinematic hero** — cycling role typewriter, a Three.js network-node scene representing
  distributed backend systems, and an animated "API request" terminal card.
- **Story-driven About** section explaining the Android → Java/Spring Boot journey.
- **Experience timeline** for SaiKet Systems and Navyug Infotech internships.
- **Skills** shown as glass cards grouped by category, with honest star ratings.
- **Featured Projects** with expandable case studies (features, challenges, architecture
  overview), tech chips, and GitHub / demo links.
- **Live GitHub stats** — profile, followers/following/repos with animated counters, plus
  GitHub Readme Stats images for language breakdown and streak/contribution stats.
- **Live LeetCode stats** — total solved, easy/medium/hard breakdown, and global ranking.
- **Education, Certifications marquee, animated Coding Journey roadmap, achievement counters,
  Services, and a glassmorphism Contact form** wired to EmailJS, plus an embedded Google Map.
- **Dark mode by default**, with light mode supported via `next-themes`.
- **Full SEO**: Metadata API, Open Graph + Twitter cards, JSON-LD `Person` schema,
  `robots.ts`, `sitemap.ts`, and `manifest.ts`.
- Resume download wired into the navbar, hero, and footer (`/public/resume.pdf`).

## Tech Stack

| Layer       | Choice |
|-------------|--------|
| Framework   | Next.js 15 (App Router), React 19, TypeScript |
| Styling     | Tailwind CSS, custom design tokens, `tailwindcss-animate` |
| Motion      | Framer Motion (scroll reveals, counters, marquee), GSAP available for advanced timelines |
| 3D          | React Three Fiber + Three.js (hero background) |
| Icons       | lucide-react |
| Email       | @emailjs/browser |
| Data        | Public GitHub REST API + GitHub Readme Stats images, LeetCode Stats API |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your [EmailJS](https://www.emailjs.com) IDs to
make the contact form send real emails:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these set, the form will show a friendly error instead of failing silently.

## Replacing Placeholder Assets

This repo ships with generated placeholders so nothing 404s out of the box. Replace them before
shipping:

- `public/resume.pdf` — your real resume (linked from the navbar, hero, and footer).
- `public/og-image.png` — a real 1200×630 social preview image.
- `public/favicon.ico`, `public/apple-touch-icon.png`, `public/icon-192.png`,
  `public/icon-512.png` — your real logo/mark.

## Content

All copy and data — bio, experience, skills, projects, education, certifications, coding
journey, services — lives in one place: **`lib/constants.ts`**. Edit that file to update the
site; no need to touch components for content changes.

GitHub and LeetCode usernames are also set there (`SITE.githubUsername`,
`SITE.leetcodeUsername`), so the live stats sections update automatically if you fork this for
someone else.

## Running Locally

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings.
4. Deploy — Next.js App Router projects need no extra Vercel configuration.

## Customization Guide

- **Colors** — edit the `primary` / `secondary` / `accent` / `canvas` tokens in
  `tailwind.config.ts`.
- **Fonts** — swap the `Inter` / `JetBrains_Mono` imports in `app/layout.tsx`.
- **Sections** — each section is a standalone component in `components/sections/`; reorder or
  remove sections by editing `app/page.tsx`.
- **Hero 3D scene** — tune node count, colors, or rotation speed in `components/hero-scene.tsx`.
- **SEO metadata** — update `SITE` in `lib/constants.ts` and the JSON-LD block in
  `app/layout.tsx`.

## Folder Structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx           Assembles all sections
  globals.css        Design tokens & utility classes
  robots.ts / sitemap.ts / manifest.ts
components/
  navbar.tsx, footer.tsx, loading-screen.tsx, hero-scene.tsx, project-card.tsx
  theme-provider.tsx
  ui/                Reusable primitives (Button, Card, Badge, Reveal, SectionHeading)
  sections/          One component per page section
lib/
  constants.ts        All content/data (single source of truth)
  utils.ts             cn() class helper, formatting helpers
public/               Static assets (resume, icons, OG image)
```

## Performance & Accessibility Notes

- Sections use React Server Components by default; only interactive pieces (`"use client"`)
  hydrate on the client (navbar, hero typewriter/3D scene, project cards, stats, contact form).
- Images use `next/image` where dimensions are known; third-party stat images are plain `<img>`
  since they're pre-rendered SVGs from external services.
- All interactive elements have visible focus rings (`.focus-ring`) and `prefers-reduced-motion`
  is respected globally in `globals.css`.
