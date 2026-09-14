# Luna implementation task

Build the real responsive homepage described by the acceptance contract.

## Deliverable

A production-quality React + TypeScript + Vite homepage that matches the warm editorial direction, uses the bundled child + robot hero asset, keeps it visible on mobile, clearly explains the market gap, remains intentionally compact, is accessible/responsive, and passes every acceptance test without modifying the acceptance layer.

## Sequence

1. Read `docs/DESIGN_TO_BUILD_PLAYBOOK.md`, `docs/HANDOFF_CHECKLIST.md`, the brand/build/validation docs, `spec/site-contract.json`, visual references, and all acceptance tests before coding.
2. Create `src/main.tsx`, `src/App.tsx`, `src/styles.css`.
3. Implement semantic structure and every required `data-testid` from `spec/site-contract.json`.
4. Build desktop, then tablet, then mobile.
5. Confirm the mobile hero image is visible and prominent.
6. Add accessible mobile navigation.
7. Run `npm install` and commit `package-lock.json`.
8. Run lint, build, static validation, Playwright tests, and screenshots.
9. Compare screenshots to the visual reference and fix drift before completion.
10. Verify the actual production path after deployment, including nested-route assets, metadata, hero image, sitemap/social images, and contact links.
11. Open a pull request to `main` so `site-quality.yml` executes; deployment success alone is not acceptance.
12. Complete `docs/HANDOFF_CHECKLIST.md` and commit a full implementation transcript under `transcripts/luna/`.

## Completion report

Before reporting completion, create:

`transcripts/luna/<YYYY-MM-DD>-studysprout-completion.md`

The transcript must include:

- the complete task instructions/prompts available to you;
- material implementation decisions;
- all files changed;
- exact commands run;
- pass/fail status for every required validation command;
- screenshot paths and what you checked visually;
- production URL checks;
- failures encountered and how they were fixed;
- unresolved placeholders/issues;
- intentional visual deviations;
- final commit SHA;
- confirmation protected acceptance files were not changed or weakened.

Report exact commands run, pass/fail status, screenshot paths, intentional visual deviations, production-verification results, transcript path, and confirmation protected acceptance files were not changed. Do not report completion if a required command was not run or did not pass.
