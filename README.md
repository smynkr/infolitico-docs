# Infolitico Docs

Standalone Fumadocs documentation site for [Infolitico](https://infolitico.com),
served at [docs.infolitico.com](https://docs.infolitico.com).

- **Canonical content:** flat MDX in `infolitico/` + `docs.json` (navigation).
- **Generated output:** `content/docs/` via `node _migration/tools/run-migration.mjs`
  (deterministic; unmapped Card icons fail generation).
- **Clean URLs:** `/` and `/getting-started` … `/faq` rewrite onto the
  `infolitico/*` routes (`next.config.mjs`).
- **Automation:** the `MenuMakeover` repo drafts doc PRs into this repository
  via the docs-agent pipeline (`pipeline/docs-agent.yml`).
- **Gates:** `npm run test:links`, `npm run links:check`, `npm run types:check`,
  `npm run build`, `npm run memory:check`.

## Development

```bash
npm ci
npm run dev
```

## Docs PRs from product changes

See `pipeline/README.md` for the docs-agent driver and the workflow template
installed in the product repo.
