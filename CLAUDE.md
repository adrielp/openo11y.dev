# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Read `AGENTS.md` first** — it is the primary source of truth for commands, repo structure, and key gotchas.

## Additional Context

### CI/CD Pipeline

GitHub Actions (`.github/workflows/build.yml`) runs on PRs and pushes to main:
1. **build** — `withastro/action@v6` builds the Astro site, uploads artifact
2. **go-semantic-release** — Automated versioning with changelog (main branch only)
3. **deploy** — Publishes to GitHub Pages (main branch only)

### Dependencies

- Node.js v22+, npm manages dependencies (`package.json`).
- `remark-math` + `rehype-katex` for LaTeX math rendering.
- Renovate (`renovate.json`) handles automated dependency updates.

### Content Structure

Docs are organized under `src/content/docs/`:
- `technical-systems/` — Placeholder for OTel instrumentation, collection, SLOs
- `human-systems/` — Measurement ethics, delivery metrics, DevEx, satisfaction
- `human-systems/delivery-metrics/` — DORA, engineering metrics, DevEx & platform
- `ai-systems/` — Placeholder for LLM/agent observability
- `practice/` — Placeholder for ODD, inferable observability
- Top-level pages: resources, contributing

### thoughts/ Directory

Context engineering workspace:
- `thoughts/shared/{tickets,plans,research}/` — Shared artifacts
- `thoughts/<user>/{tickets,plans,research}/` — Personal workspace
- `thoughts/global/ticket-template.md` — Template for new tickets
