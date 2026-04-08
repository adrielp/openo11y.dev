# AGENTS.md

MkDocs documentation site (Material theme) published to GitHub Pages at https://openo11y.dev.

## Commands

```bash
make serve   # dev server at http://127.0.0.1:8000 (hot reload)
make build   # build to ./site/ (runs poetry install --no-root first)
```

Poetry manages deps. Python ^3.11.

## Key gotchas

- **New pages must be added to `mkdocs.yml` `nav:`** — MkDocs will not auto-discover them.
- **Markdown indent is 4 spaces** (`.markdownlint.yaml`).
- **Commits use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** — `go-semantic-release` in CI generates versions from them.
- **LaTeX math** is available via `pymdownx.arithmatex` + MathJax. **Mermaid diagrams** via `pymdownx.superfences` custom fence.

## Repo structure

| Path | Purpose |
|---|---|
| `mkdocs.yml` | Nav structure, theme, extensions — the source of truth for site layout |
| `docs/` | All markdown content |
| `docs/overrides/` | Material theme template overrides |
| `docs/styles/` | Custom CSS (brand color `#24AE1D`) |
| `docs/javascripts/config.js` | MathJax config |

## See also

`CLAUDE.md` in repo root has additional context for Claude Code sessions.
