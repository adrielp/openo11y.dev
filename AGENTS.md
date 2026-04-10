# AGENTS.md

Astro Starlight documentation site published to GitHub Pages at https://openo11y.dev.

## Commands

```bash
npm run dev      # dev server at http://localhost:4321 (hot reload)
npm run build    # build to ./dist/
npm run preview  # preview production build locally
```

Node.js v22+. Dependencies managed via npm.

## Key gotchas

- **New pages must have frontmatter** — at minimum `title:` is required. Add `description:` for SEO.
- **Sidebar is configured in `astro.config.mjs`** — new pages must be added to the `sidebar` array.
- **Markdown indent is 4 spaces** (`.markdownlint.yaml`).
- **Commits use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** — `go-semantic-release` in CI generates versions from them.
- **LaTeX math** is available via `remark-math` + `rehype-katex`. **Mermaid diagrams** can be added via `astro-mermaid` integration if needed.
- **Starlight asides** use `:::note`, `:::tip`, `:::caution`, `:::danger` syntax (not MkDocs `!!!` syntax).

## Repo structure

| Path | Purpose |
|---|---|
| `astro.config.mjs` | Site config, sidebar nav, integrations — the source of truth for site layout |
| `src/content/docs/` | All markdown content |
| `src/assets/` | Processed images (logo, icons) |
| `src/styles/custom.css` | Custom CSS (brand color `#24AE1D`) |
| `public/` | Static assets (favicon, CNAME) |
| `thoughts/` | Context engineering workspace for planning and research |

## Content areas

| Section | Path | Status |
|---|---|---|
| Technical Systems | `src/content/docs/technical-systems/` | Placeholder |
| Human Systems | `src/content/docs/human-systems/` | Migrated content |
| AI Systems | `src/content/docs/ai-systems/` | Placeholder |
| Practice | `src/content/docs/practice/` | Placeholder |

## See also

`CLAUDE.md` in repo root has additional context for Claude Code sessions.
