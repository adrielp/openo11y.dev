# openo11y.dev

The practitioner's guide to observing systems — technical, human, and AI.

Visit the live site at [openo11y.dev](https://openo11y.dev).

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

### Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321 (hot reload)
npm run build      # Build to ./dist/
npm run preview    # Preview production build locally
```

### Project Structure

```
src/
├── assets/              # Processed images (logo, icons)
├── content/
│   └── docs/            # All documentation markdown
│       ├── technical-systems/
│       ├── human-systems/
│       ├── ai-systems/
│       └── practice/
├── styles/
│   └── custom.css       # Brand color overrides
└── content.config.ts    # Content collection schema

astro.config.mjs         # Site config, sidebar, integrations
public/                  # Static assets (favicon, CNAME)
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

See [LICENSE](./LICENSE).
