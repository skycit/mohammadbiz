# mohammad.biz — Project Bible for Claude Code

## CRITICAL: Read this entire file before writing any code.

## What this project is
mohammad.biz is the **personal website** of Mohammad Keshtkar — a
technical founder building privacy-preserving verification, blockchain,
and AI products. The site is a single-page marketing/landing site with
per-project case study pages, optimised for SEO and recruiter/investor
discovery.

It is **not** a generic marketing-template repo. The content is
hand-curated and the structure is deliberately modular. Don't refactor
the architecture without a clear reason.

## Tech stack (fixed — do not suggest alternatives)
- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript ^5
- Tailwind CSS v4 (with `@tailwindcss/postcss`)
- ESLint 9 with `eslint-config-next`
- `lucide-react` for all icons
- `next/image` for all images (never raw `<img>`)
- `next/link` for all internal navigation
- React Compiler enabled (`babel-plugin-react-compiler`)

## Hosting & deployment
**The site deploys via Netlify**, not Vercel. See `netlify.toml`:
- `@netlify/plugin-nextjs` runs `npm run build` and publishes `.next/`
- `www.mohammad.biz` → `mohammad.biz` (301 redirect)
- Trailing slashes stripped (`/foo/` → `/foo`, 301)
- Security headers: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`, `X-Robots-Tag: index, follow`

### Do NOT add Vercel SDKs
`@vercel/analytics` and `@vercel/speed-insights` only collect data on
Vercel deployments. On a Netlify-hosted site they are dead weight.
The Vercel GitHub App may auto-open draft PRs suggesting them — close
those PRs. If web analytics are needed on Netlify, use Netlify Analytics
(server-side, no SDK) or a privacy-friendly tool (Plausible, Umami,
Fathom). Do not add them yourself without the user's explicit go-ahead.

## Project folder structure
```
app/                      Next.js App Router (routes live at the repo root)
  layout.tsx              Root HTML, global metadata, viewport, OG defaults
  page.tsx                Home page — composes section components in order
  globals.css             Tailwind base + global tweaks
  robots.ts               Static robots.txt generation
  sitemap.ts              Sitemap auto-generated from src/content/site.ts
  patent-summary/page.tsx One-pager describing the EPO patent
  projects/[id]/page.tsx  Per-project case study pages — one folder per id
    anybet/page.tsx
    prediction-market/page.tsx       (route slug for the "flagship" id)
    prizely/page.tsx
    vetcast/page.tsx
  api/visitor-count/route.ts         Visitor counter API (Upstash Redis)

src/
  content/site.ts         SINGLE SOURCE OF TRUTH for all editable content
  components/             Section components (one per home-page section)
    Navigation.tsx        Top sticky nav
    Hero.tsx              Hero with portrait, headline, CTAs, trust pills
    About.tsx             "Founder profile" section
    PatentMoat.tsx        Patent moat section (EPO patent details)
    Projects.tsx          Flagship card + grid of "Other ventures"
    NowLookingFor.tsx     Investors / partners / mentors / co-founders
    FAQ.tsx               Accordion FAQ
    Contact.tsx           Contact form + social links
    VisitorCounter.tsx    Footer counter — calls /api/visitor-count
    SeoJsonLd.tsx         JSON-LD: Person, WebSite, ProfilePage, Project
    index.ts              Barrel export for the components above

public/                   Static assets (images, SVGs, OG defaults, robots fallbacks)
  mohammad-keshtkar-new.jpg    Primary portrait used by Hero
  prizely1.png                 Project hero image (Prizely)
  home-screen-mobile.png       Project mobile screenshot (Prizely)
  profile-user-screen.png      Project mobile screenshot (Prizely)
  anybet-new.jpg               Project hero image (AnyBet)
  vetcast-new.jpg              Project hero image (VetCast)
  projects/                    Reserved for project-specific extras

netlify.toml              Build config + redirects + security headers
next.config.ts            Next.js config (kept minimal)
postcss.config.mjs        Tailwind v4 postcss plugin
eslint.config.mjs         ESLint flat config
tsconfig.json             Path alias `@/*` → `src/*` AND `*` → root
.env.example              Required env vars (Upstash for visitor counter)
```

The `@/*` import alias resolves to `src/*` first and then to repo root,
so both `@/components` (→ `src/components`) and `@/content/site` (→
`src/content/site`) work as expected.

## The single source of truth: `src/content/site.ts`
This file is where 95% of content edits should land. It exports:

| Export | Used by | What it is |
|---|---|---|
| `siteConfig` | layout, JSON-LD, contact | Name, title, description, URL, email, social links |
| `heroContent` | `Hero.tsx` | Headline, subheadline, three CTAs |
| `trustPills` | `Hero.tsx` | Credential chips with hover tooltips |
| `openToChips` | `Hero.tsx` | "Open to:" chip list |
| `aboutContent` | `About.tsx` | Founder profile copy + credentials grid |
| `patentContent` | `PatentMoat.tsx` | EPO patent section copy |
| `projects` | `Projects.tsx`, `sitemap.ts` | Flagship + venture project list |
| `nowLookingFor` | `NowLookingFor.tsx` | Looking-for cards (investors, partners, …) |
| `faqContent` | `FAQ.tsx` | FAQ Q&A list |
| `contactContent` | `Contact.tsx` | Contact section copy |

**Rule:** prefer editing `site.ts` over editing the components. Components
are presentational — they consume content from `site.ts`. Only edit a
component when changing the *layout* or *interaction*, not the *copy*.

## How `projects` works
Each project has TWO surfaces that must stay in sync:

1. **Card on the homepage** — driven by an entry in the `projects` array in
   `src/content/site.ts`. Fields:
   ```ts
   {
     id: 'prizely',                 // route slug (except 'flagship', see below)
     name: 'Prizely',
     tagline: '...',
     isFlagship: false,             // true → renders in the dark gradient hero card
     problem: '...',
     approach: '...',
     status: '...',                 // long form for the card body
     statusLabel: 'Live',           // short pill (Live / Building / etc.)
     whatsNext: '...',
     tags: ['Tag', 'Tag', ...],     // ~5 short pills
     screenshot: '/prizely1.png',   // path under public/, displayed in the card
     screenshotAlt: '...',          // descriptive alt text for SEO + a11y
     url: 'https://prizelyapp.com', // public marketing URL or null
     ctaPrimary:   { label: 'Visit Prizely', href: 'https://prizelyapp.com', external: true },
     ctaSecondary: { label: 'Ask about the build', href: '#contact', subject: 'Prizely Questions' },
   }
   ```
   - `external: true` on `ctaPrimary` makes it open in a new tab.
   - When `external` is omitted/false, the button scrolls to `#contact`
     and pre-fills the contact form's `subject` field.

2. **Case study page** — `app/projects/{id}/page.tsx`. Each is a
   server component with its own `metadata` export, the `<ProjectJsonLd />`
   structured-data component at the top, and the same overall section
   structure (hero image → problem → approach → features → status →
   tech stack → CTA → related projects).

### Sitemap quirk: the flagship slug
`app/sitemap.ts` maps `id: 'flagship'` to the route slug `prediction-market`.
If a new flagship project replaces the current one, either keep `id: 'flagship'`
and create a folder named after whatever slug the mapping produces, or
update the mapping in `sitemap.ts` to match the new id. **Do not change
the id of the current flagship to anything other than `flagship`** without
also updating `sitemap.ts`.

### Adding a new project
1. Add a new entry to the `projects` array in `src/content/site.ts`.
2. Create `app/projects/{id}/page.tsx` (copy an existing one as a template).
3. Add the project's hero image to `public/`.
4. Add the FAQ entry (optional) and update the "Other Projects" cross-link
   block at the bottom of every other project page.
5. The sitemap and homepage card pick up automatically from the array.

### Removing a project
1. Delete its entry from `projects` in `src/content/site.ts`.
2. Delete `app/projects/{id}/`.
3. Remove its asset from `public/`.
4. Remove the cross-link from the other project pages.
5. Remove its FAQ entry if present.
6. Update keywords/descriptions in `app/layout.tsx` and `app/page.tsx`.

## SEO architecture
Three layers, all already wired up:

1. **Metadata exports** — every route file exports `metadata: Metadata`
   with `title`, `description`, `alternates.canonical`, `openGraph`, and
   `twitter`. Never skip these on a new route.
2. **JSON-LD components** — `<PersonJsonLd />`, `<WebSiteJsonLd />`,
   `<ProfilePageJsonLd />` on the homepage; `<ProjectJsonLd ... />` at
   the top of each project page. Schema.org `SoftwareApplication` for
   projects, `Person` for the founder. Filtered `sameAs` skips empty
   social URLs automatically.
3. **Sitemap + robots** — `app/sitemap.ts` is dynamic (re-derives from
   `projects` on each build); `app/robots.ts` is static. Both emit
   absolute URLs based on `https://mohammad.biz`.

### OG images
Hero images for OG: each project page sets `openGraph.images` to the
project's hero image. The site-wide default is `/og-default.png`. Keep
new OG images at 1200×630 in `public/`.

## Visitor counter (`/api/visitor-count`)
- Stored in **Upstash Redis** (REST API). Env vars:
  `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`.
- Visitor identity = SHA-256(`ip + user-agent`), truncated to 16 chars.
- A visitor is counted once per **1-hour TTL window** to avoid double-
  counting refreshes.
- Daily set keyed by date, kept for 8 days (rolling 7-day count).
- Counter starts at `INITIAL_COUNT = 1000` (cosmetic floor).
- Returns `{ total, week, today }`. If Redis isn't configured, returns the
  initial floor with `error: 'Redis not configured'` (status 200 — never
  break the page).
- `force-dynamic` + `Cache-Control: no-store` so the count is always live.
- `runtime: 'nodejs'` (uses Node `crypto` for hashing).

If you need to change the visitor identity logic, hashing is a one-way
function — old hashes won't be recoverable, so changing it resets the
"unique visitors" anonymity baseline.

## Contact form
The contact form posts via the user's mail client (`mailto:`). There is
no server-side mail handler. Most CTAs scroll to `#contact` and pre-fill
the `subject` field via the global `id="contact-subject"` input — see the
`scrollToContact()` pattern repeated in `Hero.tsx`, `Projects.tsx`, and
each project page.

## Design system

### Colours (Tailwind palette, no CSS-vars layer)
- **Backgrounds**: `bg-gradient-to-b from-slate-50 via-white to-indigo-50`
  on the homepage. Project pages use the same family with optional
  amber accents (Prizely uses amber-50 instead of indigo-50).
- **Primary brand gradient**: `from-blue-600 to-purple-600` — used on
  primary CTAs, the gradient text on the nav logo, etc.
- **Flagship project card**: `from-slate-900 via-indigo-950 to-purple-950`
  with a subtle inner gradient ring.
- **Project-specific accents**:
  - AnyBet: `blue-600` / `cyan-500`
  - VetCast: indigo / purple
  - Prizely: `amber-400` / `amber-600` / `slate-900` / `amber-950` (gold + navy)
  - Each project's case study uses its own accent for chips, icons, buttons.

### Typography
System font (Inter via `next/font/google`). Tailwind defaults for sizes —
hero `text-4xl md:text-5xl`, section headings `text-2xl`/`text-3xl`,
body `text-gray-600`.

### Iconography
`lucide-react` only. Pick icons that match the section's intent (e.g.
`Sparkles` for Prizely, `TrendingUp` for AnyBet, `MapPin` for venues).
Don't import the entire library — Tree-shaking handles individual imports.

### Layout primitives
- `max-w-6xl mx-auto px-6` for top-level section containers.
- `max-w-4xl` for narrative content (project case studies sometimes use
  `max-w-5xl`).
- `rounded-2xl` for cards, `rounded-xl` for inner cards, `rounded-full`
  for pills.
- Soft shadows: `shadow-sm` for cards, `shadow-lg` / `shadow-xl` for
  hero CTA buttons and big media.

## Absolute rules

1. **Hosting is Netlify.** Don't add Vercel SDKs. Don't suggest moving
   to Vercel without an explicit ask.
2. **Don't flatten the modular architecture.** `app/page.tsx` should
   stay a short composition of `<Section />` components — never a
   monolithic file with 500+ lines of inline JSX. If a section needs
   updating, edit its component in `src/components/`.
3. **Edit content in `src/content/site.ts`, not in components.** If a
   piece of copy isn't in `site.ts` yet, add it there first.
4. **`@/*` imports only — never relative paths longer than `../`.**
   The TypeScript path alias points at both `src/*` and the repo root.
5. **Always use `next/image` with `fill` + `sizes` (or width/height).**
   Lazy-loading is the default; mark hero images as `priority`.
6. **Always use `next/link` for internal links** (anchor-only links to
   `#section` can stay as `<a>`).
7. **Never use `any`.** Use the `lucide-react` types, `Metadata` from
   `next`, and explicit prop types.
8. **Run before finishing any change:**
   - `npx tsc --noEmit` (must exit 0)
   - `npm run build` (must succeed; check that no routes were lost)
9. **Every route file must export `metadata`** with at minimum `title`,
   `description`, and `alternates.canonical`.
10. **Every project case-study page must render `<ProjectJsonLd />`** at
    the top of its return.
11. **Don't add comments that just restate the code.** Comments should
    explain *why*, not *what* — e.g. the `INITIAL_COUNT = 1000` floor in
    the visitor counter is a comment-worthy decision.
12. **Don't commit `.env`** (it's in `.gitignore`). Use `.env.example`
    as the template.
13. **PRs over direct pushes to `main`.** Netlify creates a deploy
    preview for PRs — use it to eyeball changes before merging.
    Direct push to `main` triggers a production deploy with no preview.

## Common gotchas

### `@/components` vs `@/content/site`
Both work because of the dual `paths` mapping in `tsconfig.json`. Don't
"fix" one to match the other — the dual mapping is intentional so that
`src/` content and components are reachable with a clean prefix.

### The flagship sitemap slug
The `projects` entry with `id: 'flagship'` is rendered at
`/projects/prediction-market` because of the mapping in `app/sitemap.ts`.
The folder is `app/projects/prediction-market/`. If you ever rename the
flagship, update the mapping AND rename the folder AND update every
cross-link.

### Cross-links between project pages
Each `app/projects/*/page.tsx` ends with an "Other Projects" block
listing the other three. When adding/removing/renaming a project, update
this block in **every** sibling project page or the cross-links will rot.

### Lint warning on `VisitorCounter.tsx`
There is a known pre-existing `react-hooks/set-state-in-effect` warning
in `src/components/VisitorCounter.tsx` (line 16) for the `setMounted(true)`
hydration guard. It is intentional — leave it alone unless you're
specifically refactoring the visitor counter.

### Trailing slashes
Netlify strips trailing slashes via 301. Always link to `/projects/foo`,
never `/projects/foo/`. Same for `<Link href="...">` — no trailing slash.

### EPO patent context
The site's headline narrative is "founder with EPO-confirmed patent for
privacy-preserving verification." That patent is the **moat** — keep
it visible on the homepage (`<PatentMoat />`) and don't water down its
prominence in metadata or hero copy without explicit instruction.

## Build, test, dev
```bash
npm install                      # legacy peer deps not required
npm run dev                      # Next dev server (Turbopack), localhost:3000
npm run build                    # Production build — must succeed before merge
npm run lint                     # ESLint
npx tsc --noEmit                 # Type check (no emit)
```

The build is fast (~7s compile + ~1s static page generation). 11 routes
should be generated:
```
/                       (static)
/_not-found             (static)
/api/visitor-count      (dynamic — server-rendered on demand)
/icon.svg               (static)
/patent-summary         (static)
/projects/anybet        (static)
/projects/prediction-market   (static)
/projects/prizely       (static)
/projects/vetcast       (static)
/robots.txt             (static)
/sitemap.xml            (static)
```
If you add a project, that count goes up by 1. If it doesn't, the new
route isn't being picked up.

## Environment variables
`.env.example` lists what's needed locally:
- `UPSTASH_REDIS_REST_URL` — Upstash Redis REST URL
- `UPSTASH_REDIS_REST_TOKEN` — Upstash Redis REST token

Optional (used by metadata):
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` — Google Search Console verification
- `NEXT_PUBLIC_BING_VERIFICATION` — Bing webmaster verification

For Netlify, set these in **Site settings → Environment variables**.
The visitor counter falls back gracefully (returns the 1000 floor) if
Upstash isn't configured, so missing env vars won't break the build.

## What this site does NOT do
- No CMS — content is in `src/content/site.ts`. There's no Contentful /
  Sanity / Markdown layer.
- No i18n — English only.
- No authentication — public marketing site.
- No server-side mail — the contact form uses `mailto:`.
- No comments / blog — by design.
- No A/B testing or feature flags.

## Related projects
This is a **monorepo of one** — only this site lives here. The actual
products referenced on the page (Prizely, AnyBet, VetCast, the
prediction market) live in separate repos. Don't try to reach them from
this codebase.
