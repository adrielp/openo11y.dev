# openo11y.dev Rebrand & Astro Starlight Migration

## Overview

Rebrand openo11y.dev from a Liatrio-era MkDocs documentation site focused on human systems observability into a practitioner-focused Astro Starlight content platform covering full-stack observability — technical systems, human systems, AI systems, and the practice that connects them. Simultaneously migrate from MkDocs Material (Python/Poetry) to Astro Starlight (Node.js).

## Current State Analysis

### What exists
- **Framework**: MkDocs Material, Python/Poetry build chain, GitHub Pages deployment
- **Brand**: "Open Observability" with `#24AE1D` green accent, `logo_o11y_black.png`
- **Content** (10 markdown pages):
  - `index.md` — Landing page with mission statement (Liatrio-era "we" voice)
  - `why-metrics-matter.md` — Generic metrics motivation (commoditized)
  - `engineering-defaults.md` — Pair programming, TBD, CI/CD, security (generic best practices, heavily cross-referenced by delivery metrics)
  - `human-systems/observing-human-systems.md` — **Strongest content**. RFC 2119-style ethical spec for measuring teams. Unique in the industry.
  - `human-systems/delivery-metrics/overview.md` — Brief intro to delivery metrics
  - `human-systems/delivery-metrics/lagging-delivery-indicators.md` — DORA metrics with examples
  - `human-systems/delivery-metrics/leading-delivery-indicators.md` — Branch metrics, PR metrics, code quality, cycle time. References OTel Collector GitHub receiver. Includes LaTeX math.
  - `human-systems/delivery-metrics/devex-platform.md` — Platform metrics, DevEx metrics (thin but valuable)
  - `human-systems/satisfaction-well-being.md` — Joy index, eNPS, communication metrics
  - `business-systems.md` — OKR stub (3 paragraphs, not useful)
  - `delivery-demo.md` — Demo using OTel Collector + GitHub receiver + quickstart repo
  - `useful-resources.md` — Link table (some likely stale)
  - `contributing.md` — Points to CONTRIBUTING.md
- **Assets**: Logo PNG, favicon SVG, OTel SVG, dashboard screenshots, mind map JPG
- **CI/CD**: GitHub Actions — build, go-semantic-release, deploy to GH Pages

### What's wrong
- Site identity is tied to Liatrio ("we" voice, enterprise consulting framing)
- Content is almost entirely about human systems — zero technical observability guidance
- No AI/inference content despite the author being deeply invested in this space
- MkDocs Material limits the site to looking like "project docs" rather than a practitioner resource
- The "Three Pillars" framing the original site was built around is an anti-pattern the author explicitly argues against
- Engineering defaults page is generic best practices available everywhere
- Business systems page is a stub

## Desired End State

A live Astro Starlight site at openo11y.dev with:
- New site identity: **openo11y.dev** as the brand name
- Tagline that reflects the full-stack, practice-oriented, inferable vision
- Content organized around interconnected areas of practice (not siloed "pillars")
- All existing valuable content migrated and reorganized
- Placeholder pages for new content areas signaling intent and roadmap
- Second-person practitioner voice (existing RFC 2119 spec voice preserved where it exists)
- GitHub Pages deployment via Astro's official GitHub Action
- Math (KaTeX) and Mermaid support configured
- Brand color carried forward (`#24AE1D`) with Starlight theming
- Existing logo/favicon carried forward (visual refresh deferred)

### Verification
- `npm run build` completes without errors
- `npm run dev` serves the site locally with all pages rendering correctly
- All existing markdown content renders (footnotes, tables, math, blockquotes)
- Navigation reflects new structure
- Dark/light mode toggle works
- Search indexes all content
- GitHub Actions deploys to openo11y.dev successfully
- `go-semantic-release` continues to work for versioning

## What We're NOT Doing

- **Writing new content** — Phase 1 is structure and migration only. New content for Technical Systems, AI Systems, and Practice sections comes later.
- **Rewriting existing content voice** — Phase 2. We reorganize and add frontmatter but don't rewrite prose.
- **Visual rebrand** (new logo, new color palette, new favicon) — Deferred. Carry existing assets forward.
- **Changing the domain** — openo11y.dev stays.
- **Moving off GitHub Pages** — Stay on GH Pages for now.
- **Removing go-semantic-release** — Conventional commits workflow stays.
- **Building custom Astro components** — Use Starlight built-ins only in Phase 1.

## Implementation Approach

Single phase focused on the technology migration and content reorganization simultaneously. This is a clean cutover — we scaffold Astro Starlight alongside the existing MkDocs files, migrate content, verify, then remove the old build system.

---

## Phase 1: Astro Starlight Scaffold

### Overview
Initialize the Astro Starlight project in the repo root alongside existing files. Configure theming, plugins, and build pipeline.

### Changes Required

#### 1. Initialize Astro project
**Action**: Run `npm create astro@latest` with Starlight template, or manually scaffold
**New files**:
- `package.json` — Astro + Starlight + plugins
- `astro.config.mjs` — Site config, sidebar, integrations
- `tsconfig.json` — TypeScript config (Astro strict)
- `src/content.config.ts` — Content collection schema (Starlight default)
- `src/styles/custom.css` — Brand color overrides

**Dependencies**:
```
@astrojs/starlight
astro
remark-math
rehype-katex
```

#### 2. Configure Starlight theming
**File**: `src/styles/custom.css`
**Changes**: Map existing `#24AE1D` brand green to Starlight CSS custom properties:
```css
:root {
  --sl-color-accent-low: /* dark variant */;
  --sl-color-accent: #24AE1D;
  --sl-color-accent-high: /* light variant */;
}
```
Use Starlight's color theme editor to generate WCAG-compliant light/dark variants.

#### 3. Configure math support
**File**: `astro.config.mjs`
**Changes**: Add `remark-math` and `rehype-katex` to markdown config. Add KaTeX CSS to `customCss` array. Existing `$$...$$` syntax in `leading-delivery-indicators.md` will work unchanged.

#### 4. Configure site metadata
**File**: `astro.config.mjs`
**Changes**:
```js
export default defineConfig({
  site: 'https://openo11y.dev',
  integrations: [
    starlight({
      title: 'openo11y.dev',
      tagline: '...', // see Phase 2
      logo: {
        src: './src/assets/logo_o11y_black.png',
      },
      favicon: '/favicon_o11y.svg',
      social: { github: 'https://github.com/adrielp/openo11y.dev' },
      editLink: { baseUrl: 'https://github.com/adrielp/openo11y.dev/edit/main/' },
    }),
  ],
});
```

### Success Criteria
- `npm run dev` starts and serves the default Starlight welcome page
- `npm run build` completes without errors

---

## Phase 2: Content Migration & Reorganization

### Overview
Move existing markdown into the new Starlight content structure, add required frontmatter, configure the sidebar navigation to reflect the new site organization, and write the new landing page.

### New Site Structure

The site is organized around interconnected **areas of practice**, not isolated categories. The navigation groups content by what you're observing and how you practice observability, but the content itself cross-references freely.

```
src/content/docs/
├── index.mdx                          # Landing page (new)
│
├── technical-systems/
│   └── index.md                       # Placeholder — instrumentation, collection, SLOs
│
├── human-systems/
│   ├── index.md                       # Placeholder intro to observing human systems
│   ├── measurement-ethics.md          # Migrated from observing-human-systems.md (crown jewel)
│   ├── delivery-metrics/
│   │   ├── index.md                   # Migrated from overview.md
│   │   ├── dora.md                    # Migrated from lagging-delivery-indicators.md
│   │   ├── engineering-metrics.md     # Migrated from leading-delivery-indicators.md
│   │   └── devex-platform.md          # Migrated from devex-platform.md
│   ├── satisfaction.md                # Migrated from satisfaction-well-being.md
│   └── engineering-practices.md       # Migrated from engineering-defaults.md (temporary — kept only because delivery metrics link to it; flagged for absorption and removal in content refresh)
│
├── ai-systems/
│   └── index.md                       # Placeholder — LLM o11y, agent tracing, evals
│
├── practice/
│   └── index.md                       # Placeholder — ODD, the inner loop, inferable o11y (strongest placeholder — mini-essay conveying the 4.0 thesis)
│
├── resources.md                       # Migrated from useful-resources.md (standalone, not in a section)
└── contributing.md                    # Migrated from contributing.md
```

**Key structural decisions:**
- **No "Foundations" section** — was a weak grouping of two unrelated pages. Resources stands alone. "Why metrics matter" is archived (commoditized content; the landing page carries the "why" messaging instead).
- **`measurement-ethics.md`** not "observing-safely" — avoids ambiguity with "safe production observability." Title: "The Ethics of Observing Human Systems."
- **`engineering-practices.md` is temporary** — kept only to avoid breaking the 3 reference links in `engineering-metrics.md`. Flagged for removal once delivery metrics content is refreshed to be self-contained.
- **Practice placeholder gets the most investment** — this is the site's thesis (ODD, inferable observability, AI-native workflows). The placeholder should read like a condensed version of the Observability 4.0 blog post, not a "coming soon" stub.
- **Delivery demo archived** — quickstart repo is stale. Will be replaced with a new demo later.

### Content Disposition Detail

| Current file | Action | New location | Notes |
|---|---|---|---|
| `index.md` | **Replace** | `index.mdx` | Completely new landing page |
| `why-metrics-matter.md` | **Archive** | N/A | 23 lines of commoditized content. Every DORA article covers this. The landing page carries the "why" messaging instead. |
| `engineering-defaults.md` | **Migrate (temporary)** | `human-systems/engineering-practices.md` | Rename to "Engineering Practices." Kept ONLY because `engineering-metrics.md` has 3 reference links to it. Flagged for absorption and removal during content refresh — delivery metrics pages should become self-contained. |
| `human-systems/observing-human-systems.md` | **Migrate** | `human-systems/measurement-ethics.md` | Title: "The Ethics of Observing Human Systems." Crown jewel — content stays as-is. |
| `human-systems/delivery-metrics/overview.md` | **Migrate** | `human-systems/delivery-metrics/index.md` | Add frontmatter |
| `human-systems/delivery-metrics/lagging-delivery-indicators.md` | **Migrate** | `human-systems/delivery-metrics/dora.md` | Clearer name. Contains LaTeX — verify KaTeX rendering. |
| `human-systems/delivery-metrics/leading-delivery-indicators.md` | **Migrate** | `human-systems/delivery-metrics/engineering-metrics.md` | Clearer name. Update 3 reference links at bottom to point to `../engineering-practices.md`. |
| `human-systems/delivery-metrics/devex-platform.md` | **Migrate** | `human-systems/delivery-metrics/devex-platform.md` | Add frontmatter |
| `human-systems/satisfaction-well-being.md` | **Migrate** | `human-systems/satisfaction.md` | Add frontmatter |
| `business-systems.md` | **Archive** | N/A | 3-paragraph stub. Not worth carrying forward. Concept resurfaces later under Practice. |
| `delivery-demo.md` | **Archive** | N/A | Quickstart repo is stale. Will be replaced with a new demo later. |
| `useful-resources.md` | **Migrate** | `resources.md` | Standalone page, not in a section. Add frontmatter. Link audit deferred. |
| `contributing.md` | **Migrate** | `contributing.md` | Add frontmatter |

### Changes Required

#### 1. Create directory structure
**Action**: Create all directories under `src/content/docs/`

#### 2. Migrate content files
**Action**: For each file in the disposition table above:
1. Copy to new location
2. Add Starlight frontmatter (`title:` required, `description:` recommended)
3. Update internal cross-reference links to reflect new paths
4. Do NOT rewrite prose content (voice changes are a separate effort)

**Critical**: The delivery metrics pages have relative links to `../../engineering-defaults.md#pair-programming` etc. These must be updated to point to the new `../engineering-practices.md#pair-programming` paths.

#### 3. Write new landing page
**File**: `src/content/docs/index.mdx`
**Content**: New landing page using Starlight's `<Card>`, `<CardGrid>`, and `<LinkCard>` components. Should include:
- Site identity and tagline
- Brief mission statement (second-person, practitioner voice)
- Card grid linking to each content area with brief descriptions
- Signal that Technical Systems, AI Systems, and Practice content is coming
- Link to the author (adrielperkins.dev) and Substack
- No Liatrio references

#### 4. Write placeholder pages
**Files**: `technical-systems/index.md`, `ai-systems/index.md`, `practice/index.md`, `human-systems/index.md`
**Content**: Each should include:
- A brief (2-3 paragraph) description of what this area covers and why it matters
- A short list of planned topics (signals intent to the community)
- A note that contributions are welcome
- These should NOT be empty "coming soon" stubs — they should convey the vision for each area

**Priority order for placeholder quality:**
1. **`practice/index.md`** — Highest investment. This is the site's thesis. Should read as a standalone mini-essay covering ODD, the AI-native inner loop, and inferable observability. Think condensed version of the [Observability 4.0 blog post](https://adrielperkins.substack.com/p/observability-40-is-inferable). A visitor should leave this page understanding what the site is ultimately about.
2. **`ai-systems/index.md`** — Second priority. Cover the landscape: LLM observability, agent tracing, gen_ai.* semantic conventions, eval pipelines. This is timely and draws visitors.
3. **`technical-systems/index.md`** — Frame the OTel-centric approach: instrumentation, collection, signals, SLOs. Standard but necessary.
4. **`human-systems/index.md`** — Brief intro that connects to the existing content below it. Can be lighter since there's already real content in this section.

#### 5. Configure sidebar navigation
**File**: `astro.config.mjs`
**Changes**: Add explicit sidebar config:
```js
sidebar: [
  {
    label: 'Technical Systems',
    items: [
      { slug: 'technical-systems' },
    ],
  },
  {
    label: 'Human Systems',
    items: [
      { slug: 'human-systems' },
      { slug: 'human-systems/measurement-ethics' },
      {
        label: 'Delivery Metrics',
        collapsed: true,
        items: [
          { slug: 'human-systems/delivery-metrics' },
          { slug: 'human-systems/delivery-metrics/dora' },
          { slug: 'human-systems/delivery-metrics/engineering-metrics' },
          { slug: 'human-systems/delivery-metrics/devex-platform' },
        ],
      },
      { slug: 'human-systems/satisfaction' },
      { slug: 'human-systems/engineering-practices', badge: { text: 'Legacy', variant: 'caution' } },
    ],
  },
  {
    label: 'AI Systems',
    items: [
      { slug: 'ai-systems' },
    ],
  },
  {
    label: 'Practice',
    items: [
      { slug: 'practice' },
    ],
  },
  { slug: 'resources' },
  { slug: 'contributing' },
],
```

**Sidebar design decisions:**
- **No "Welcome" in sidebar** — the landing page is accessed via the site logo/title. Sidebar is for navigation into content.
- **Delivery Metrics collapsed by default** — 4 sub-pages is the deepest nesting. Collapsing reduces visual weight and keeps the sidebar scannable.
- **Engineering Practices gets a "Legacy" badge** — signals to visitors (and future contributors) that this page is temporary and slated for rework. Starlight badges support this natively.
- **Resources and Contributing are standalone** — not grouped into a section, just nav items at the bottom.

#### 6. Move static assets
**Action**:
- `docs/img/logo_o11y_black.png` → `src/assets/logo_o11y_black.png`
- `docs/img/favicon_o11y.svg` → `public/favicon_o11y.svg`
- `docs/img/delivery-metrics-dashboard-*.png` → `src/assets/` (referenced by demo page)
- `docs/img/opentelemetry.svg` → `src/assets/opentelemetry.svg`
- Other images as referenced

### Success Criteria

#### Automated Verification
- `npm run build` completes without errors
- `npm run dev` serves all pages without 404s

#### Manual Verification
- All migrated content renders correctly (footnotes, tables, math, blockquotes)
- Internal cross-reference links work (especially delivery metrics → engineering practices)
- Sidebar navigation reflects the new structure
- Landing page renders with card grid
- Dark/light mode toggle works
- Search finds content across all sections
- Placeholder pages render with planned content descriptions

---

## Phase 3: Build Pipeline & Cleanup

### Overview
Replace the MkDocs GitHub Actions workflow with Astro deployment, update repo metadata, and remove old build artifacts.

### Changes Required

#### 1. Replace GitHub Actions workflow
**File**: `.github/workflows/build.yml`
**Changes**: Replace MkDocs build + deploy with Astro's official action:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3

  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Preserve the `go-semantic-release` job for conventional commit versioning.

#### 2. Add CNAME file
**File**: `public/CNAME`
**Content**: `openo11y.dev`

#### 3. Remove MkDocs artifacts
**Files to remove**:
- `mkdocs.yml`
- `pyproject.toml`
- `poetry.lock`
- `Brewfile` (was for Poetry/yq)
- `docs/` directory (after all content is migrated to `src/content/docs/`)
- `docs/javascripts/config.js` (MathJax config, replaced by rehype-katex)
- `docs/styles/` (replaced by `src/styles/custom.css`)
- `docs/overrides/` (empty, was for MkDocs Material overrides)

#### 4. Update repo metadata
**Files**:
- `README.md` — Update to reflect Astro build, new commands (`npm run dev`, `npm run build`)
- `CONTRIBUTING.md` — Update prerequisites (Node.js instead of Python/Poetry)
- `AGENTS.md` — Update commands, repo structure, key gotchas
- `CLAUDE.md` — Update to reflect new build system and structure
- `Makefile` — Update or remove (replace with npm scripts or keep as thin wrappers)
- `.gitignore` — Add `node_modules/`, `dist/`, `.astro/`; remove Python artifacts

#### 5. Update renovate config
**File**: `renovate.json`
**Changes**: Ensure it's configured for npm dependencies instead of Poetry

### Success Criteria

#### Automated Verification
- GitHub Actions workflow runs successfully on push to main
- Site deploys to openo11y.dev
- `go-semantic-release` still generates versions from conventional commits

#### Manual Verification
- openo11y.dev loads the new Starlight site
- All pages accessible via navigation
- Custom domain (HTTPS) works correctly
- Old MkDocs files are gone from the repo

---

## Testing Strategy

### Local verification (before pushing)
1. `npm run dev` — verify all pages render, nav works, search works
2. Manually check each migrated page for rendering issues:
   - `human-systems/delivery-metrics/dora.md` — LaTeX math renders via KaTeX
   - `human-systems/delivery-metrics/engineering-metrics.md` — LaTeX math, tables, reference links to `../engineering-practices.md` work
   - `human-systems/measurement-ethics.md` — footnotes, RFC 2119 formatting, bold/italic
   - All pages with tables — verify GFM table rendering
3. `npm run build` — verify production build completes
4. Test dark/light mode toggle on landing page and content pages
5. Test search — search for "DORA", "telemetry", "human systems"
6. Verify "Legacy" badge renders on Engineering Practices in sidebar
7. Verify Delivery Metrics group is collapsed by default in sidebar

### CI verification (after pushing)
1. PR build succeeds
2. Deploy preview (if configured) shows correct site
3. Main branch deploy updates openo11y.dev

### Rollback
- MkDocs files remain in git history
- If deploy fails, revert the commit and the old MkDocs site is restored

---

## Content Roadmap (Post-Migration)

Not part of this plan's implementation, but documenting the intended content direction for each area:

### Technical Systems
- The evolution of observability (1.0 → 4.0, adapted from the Substack post — serves as the "why" for the whole site)
- OpenTelemetry as the standard (why OTel, what it covers, where it's going)
- OTel Collector patterns (receivers, processors, exporters, pipelines)
- Instrumentation guidance by language (OTel SDK patterns)
- SLOs & SLIs (from definition to implementation)
- Sampling strategies (head vs tail, cost implications)
- Signals deep-dives (when traces vs metrics vs logs vs profiles)

### Human Systems
- Refresh existing delivery metrics content (update DORA references, modernize voice)
- Absorb engineering-practices.md into delivery metrics pages (make them self-contained, then remove the legacy page)
- Expand DevEx section (SPACE framework, developer productivity in the AI age)
- Add: "Measuring Platform Engineering" (IDP metrics, golden paths observability)

### AI Systems
- LLM observability (tracing inference, token costs, latency, gen_ai.* semantic conventions)
- Agent observability (multi-step agent tracing, tool call spans, reasoning paths)
- Eval pipeline instrumentation
- AI cost attribution and optimization
- Observing AI-generated code quality

### Practice
- Observability-Driven Development (the ODD inner loop)
- AI-Native ODD (agents that instrument, the harness approach)
- Inferable Observability (from question to answer, not question to dashboard)
- Closed-Loop Remediation (self-healing systems)
- From SLOs to Team Health (bridging technical and human observability)
- Cost of Incidents (connecting technical failures to business impact)

## References

- Blog post: [Observability 4.0 is inferable](https://adrielperkins.substack.com/p/observability-40-is-inferable)
- Personal site: [adrielperkins.dev](https://adrielperkins.dev)
- Starlight docs: [starlight.astro.build](https://starlight.astro.build)
- Current site: [openo11y.dev](https://openo11y.dev)
