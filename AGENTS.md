# Binding instructions for Luna and other coding agents

This repository uses an acceptance-contract workflow. Treat the contract files as immutable requirements, not suggestions.

## Before coding

Read `spec/site-contract.json`, `docs/BRAND.md`, `docs/BUILD_SPEC.md`, `docs/VALIDATION.md`, `docs/LUNA_TASK.md`, `design/REFERENCE.md`, and every file in `tests/acceptance/`.

Do not begin by generating a generic landing page and attempting to retrofit it later.

## Work on a feature branch

Create `luna/website-implementation` or another implementation branch. Do not implement directly on `main`.

## Protected acceptance files

Do not modify these paths in an implementation branch:

- `AGENTS.md`
- `spec/**`
- `docs/**`
- `design/reference/**`
- `tests/acceptance/**`
- `scripts/quality/**`
- `.github/workflows/site-quality.yml`

If a requirement is impossible or contradictory, stop and report the conflict. Do not weaken a requirement, change a selector, loosen a threshold, skip a test, replace an assertion with a tautology, or remove validation.

## No test gaming

Explicitly prohibited:

- deleting/skipping acceptance tests;
- changing expected copy to match an incorrect implementation;
- detecting Playwright or a test user-agent and rendering special test-only UI;
- fake DOM nodes added solely to satisfy selectors;
- technically visible but effectively hidden 1px/transparent/off-screen elements;
- replacing the hero with a blank block, gradient, placeholder, or unrelated stock image;
- hiding the hero image on mobile;
- hard-coded viewport screenshots instead of responsive HTML/CSS;
- claiming completion because only `npm run build` passes.

## Required evidence before completion

Run and preserve the output of:

```bash
npm run lint
npm run build
npm run validate:static
npm run test:e2e
npm run screenshots
```

Then inspect desktop, tablet, and mobile screenshots. Passing automation is necessary but not sufficient.

## Product intent

This is not a generic AI tutor or gamified engagement product. It should communicate guided understanding, verification, hints, independent practice, paper/off-screen work, and deliberately decreasing AI assistance. Do not position the robot as a friend, confidant, or replacement teacher/parent.
