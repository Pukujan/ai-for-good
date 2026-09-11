# AI for Good — website build contract

This repository contains the implementation contract for a responsive educational website whose core thesis is:

> **AI should help children become more capable and independent, not more dependent.**

The primary audience is parents. The child is the product user, but the marketing site should speak first to the parent concern: children are already using AI, and families need a safer, more intentional way to teach them when to use it, when to question it, and when to work without it.

## Luna: read in this order

1. `AGENTS.md`
2. `spec/site-contract.json`
3. `docs/BRAND.md`
4. `docs/BUILD_SPEC.md`
5. `docs/VALIDATION.md`
6. `docs/LUNA_TASK.md`
7. `design/REFERENCE.md`
8. `tests/acceptance/*`

Use React + TypeScript + Vite with ordinary CSS. Keep dependencies small.

Required commands after implementation:

```bash
npm install
npm run lint
npm run build
npm run validate:static
npm run test:e2e
npm run screenshots
```

All validation must pass without skipped tests. The hero must show the child + robot image on desktop, tablet, and mobile. Hiding it on mobile is a failure.

The files under `spec/`, `docs/`, `design/reference/`, `tests/acceptance/`, `scripts/quality/`, `AGENTS.md`, and `.github/workflows/site-quality.yml` form the acceptance contract. Do not weaken them to make the build pass.
