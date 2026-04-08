# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Read `AGENTS.md` first** — it is the primary source of truth for commands, repo structure, and key gotchas.

## Additional Context

### CI/CD Pipeline

GitHub Actions (`.github/workflows/build.yml`) runs on PRs and pushes to main:
1. **build** — `make build`, uploads `site/` artifact
2. **go-semantic-release** — Automated versioning with changelog (main branch only)
3. **deploy** — Publishes to GitHub Pages (main branch only)

### Dependencies

- Poetry manages Python deps (`pyproject.toml`). CI uses Python 3.13.
- `Brewfile` provides system deps (poetry, yq) via `make brew`.
- Renovate (`renovate.json`) handles automated dependency updates.

### Content Structure

Docs are organized under `docs/`:
- `human-systems/` — Delivery metrics, DevEx, satisfaction & well-being
- `human-systems/delivery-metrics/` — Overview, lagging/leading indicators, DevEx & platform
- Top-level pages: why-metrics-matter, engineering-defaults, business-systems, delivery-demo, useful-resources, contributing

### thoughts/ Directory

Context engineering workspace:
- `thoughts/shared/{tickets,plans,research}/` — Shared artifacts
- `thoughts/<user>/{tickets,plans,research}/` — Personal workspace
- `thoughts/global/ticket-template.md` — Template for new tickets
