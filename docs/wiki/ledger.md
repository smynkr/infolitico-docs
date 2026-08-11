---
title: Durable ledger
category: current-state
updated: 2026-08-10
summary: Dated durable facts and their source anchors
nav_order: 130
sources: [".codex/harness-memory.json", "README.md", "package.json", "next.config.mjs", "docs.json", "_migration/tools/lib/shared.mjs", "components/brand/products.ts", "public/logo.svg"]
---

# Durable ledger


## 2026-08-11 — Harness-memory conformance (audit FAIL → PASS)

- Added `docs/wiki/_schema.md` (schema + routing + capture contract; group_id
  boundary, content-boundary section, memory gates, Hindsight/Mem Palace
  fully-archived marker). The wiki previously had only index/current-state/
  ledger and failed the harness-memory audit on the missing schema and the
  missing archived-memory marker.
- AGENTS.md: added the Hindsight and Mem Palace fully-archived marker to
  Memory routing.
- Regenerated `docs/AGENT_SOT.md` + `docs/wiki/_sources.json`
  (`npm run memory:generate`); `npm run memory:check` passes and
  `audit-repo.mjs` reports PASS.

Re-establish with:

```bash
npm run memory:check
node ~/.codex/skills/harness-memory/scripts/audit-repo.mjs --repo .
```

## 2026-08-11 — Review-lane fixes: identity regeneration and a11y

- content/docs regenerated: meta.json title is now Infolitico (llms.txt and
  search breadcrumbs were still "Axiomancer Labs"). Infolitico's generated
  tree also carried unprefixed links the migration rewrites — now in sync.
- FocusDeadEndHeading span -> div (valid HTML); 404 heading focus.
- Dark primary #D06B80 + near-black foreground (AA); dead ax-live-badge removed; @theme token prefix inf-.
- Billing copy: 50 monthly credits is a Crossplay Pro entitlement (tiletactician).

Re-establish with:

```bash
npm run memory:check
```


## 2026-08-11 — docs.json asset-path fix

- `favicon` and `logo` in docs.json pointed at `/images/favicon.svg` and
  `/images/logo-{light,dark}.svg`, which do not exist in `public/` (the nav
  renders `/logo.svg` via NavTitle, so nothing was visibly broken).
  Corrected to the real paths (`/favicon.svg`, `/logo.svg`), matching the
  TileTactician reference.

Re-establish with:

```bash
npm run memory:check
npm run test:links
npm run links:check
npm run types:check
npm run build
```


## 2026-08-11 — Dark-first Infolitico brand theme pass

- fd theme tokens replaced the template cyan with the burgundy family:
  dark `#C2566B` (lightened for the void) on `#0A0A0F`, light `#5E0F1C` on
  paper, ring/accent/glow aligned, `.ax-glow` and constellation recolored,
  dead Axiom CSS utilities removed.
- Dark is now the presentation default (`RootProvider theme={{ defaultTheme: 'dark' }}`).
- docs.json identity: name Infolitico, brand colors, logo href to
  infolitico.com; the stale Axiom "Sign in" primary was dropped (no
  infolitico app host exists).
- Support mailtos in page-feedback and search dialog corrected from
  support@menuwright.com to support@infolitico.com.
- OG card and 404 rebranded to the flame mark and the newsroom voice;
  per-page siteName fixed to Infolitico Docs.
- Verified: gates green, dark default + toggle, OG render; deployed via PR #3.

Re-establish with:

```bash
npm run test:links
npm run links:check
npm run types:check
npm run build
npm run memory:check
```

## 2026-08-10 — Standalone Infolitico docs site established

- Scoped from the axiom-docs Fumadocs stack as a single-product site:
  canonical flat MDX under `infolitico/`, generated `content/docs/`, contract
  tests, related-guide wayfinding, and the docs-agent pipeline. All Axiom
  product content, hub components, changelog, Notion mirror, and weekly-recap
  machinery were removed.
- Brand: Infolitico accent `#5E0F1C` (from the live landing capture), custom
  flame mark (`public/logo.svg`), favicon tile
  (`public/favicon.svg`); no Axiom identity anywhere in the chrome.
- Clean URLs: `/` and `/getting-started` … `/faq` rewrite onto the
  `infolitico/*` canonical routes (`next.config.mjs`).
- DNS `docs.infolitico.com` already pointed at Vercel anycast
  (76.76.21.21); domain attached to the Vercel project during launch.
- Automation: `pipeline/docs-agent.yml` template adapted for
  `smynkr/infolitico-docs`; the `infolitico` repo receives the workflow with
  `DOCS_AGENT_PRODUCT: infolitico`.

Re-establish with:

```bash
node _migration/tools/run-migration.mjs
npm run test:links
npm run links:check
npm run types:check
npm run build
npm run memory:check
```

## Related

- [[current-state]] — current repository-owned topology
