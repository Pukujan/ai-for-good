# Final handoff task for local Luna

The implementation is visually close and already hosted, but it is not considered formally complete until this handoff is finished.

## First: synchronize the updated contract/process docs

Fetch `main` and merge/rebase the latest `main` into this implementation branch without discarding implementation commits.

The latest `main` adds:

- `docs/DESIGN_TO_BUILD_PLAYBOOK.md`;
- `docs/HANDOFF_CHECKLIST.md`;
- `transcripts/luna/README.md`;
- updated `AGENTS.md`;
- updated `docs/LUNA_TASK.md`.

Do not edit those protected files on the implementation branch to weaken requirements.

## Then complete the handoff

1. Read `docs/HANDOFF_CHECKLIST.md` in full.
2. Replace or explicitly resolve the current placeholder contact destination `hello@studysprout.example`. If no real contact address has been supplied, do not invent one; record it as unresolved in the transcript and flag it to the human.
3. From a clean dependency state where practical, run:

```bash
npm ci
npm run lint
npm run build
npm run validate:static
npm run test:e2e
npm run screenshots
```

4. Visually inspect all required desktop/tablet/mobile screenshots.
5. Confirm the child + robot + paper hero is visible and prominent on mobile.
6. Verify the production deployment at `https://www.design-bakery.com/ai-for-good/`, including direct route load, nested-path assets, hero image, canonical URL, OpenGraph/Twitter image URLs, sitemap, and contact CTA.
7. Open a pull request from `luna/website-implementation` to `main`. This is required because `.github/workflows/site-quality.yml` runs on PRs to `main`; a green Vercel deployment by itself is not acceptance.
8. Confirm both CI jobs pass and inspect the uploaded responsive screenshot artifact.
9. Fix implementation defects if anything fails. Do not alter protected acceptance files or loosen assertions.

## Required completion transcript

Before saying the task is complete, create and commit:

`transcripts/luna/<YYYY-MM-DD>-studysprout-completion.md`

Include the complete task/prompt context available to you, material decisions, files changed, every command run, exact pass/fail results, screenshots reviewed, production checks, failures/fixes, unresolved items, intentional design deviations, final commit SHA, PR link/number, CI result, and explicit confirmation that protected acceptance files were not weakened.

This transcript is required even if every check passes on the first run.

## Definition of done

Do not report completion until:

- all required local validation passes;
- screenshots were manually reviewed;
- production-path checks were performed;
- PR-triggered `site-quality` CI passes;
- any unresolved placeholder is explicitly surfaced;
- the Luna completion transcript is committed.
