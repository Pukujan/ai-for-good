# Luna implementation task

Build the real responsive homepage described by the acceptance contract.

## Deliverable

A production-quality React + TypeScript + Vite homepage that matches the warm editorial direction, uses the bundled child + robot hero asset, keeps it visible on mobile, clearly explains the market gap, remains intentionally compact, is accessible/responsive, and passes every acceptance test without modifying the acceptance layer.

## Sequence

1. Create `src/main.tsx`, `src/App.tsx`, `src/styles.css`.
2. Implement semantic structure and every required `data-testid` from `spec/site-contract.json`.
3. Build desktop, then tablet, then mobile.
4. Confirm the mobile hero image is visible and prominent.
5. Add accessible mobile navigation.
6. Run `npm install` and commit `package-lock.json`.
7. Run lint, build, static validation, Playwright tests, and screenshots.
8. Compare screenshots to the visual reference and fix drift before completion.

## Completion report

Report exact commands run, pass/fail status, screenshot paths, intentional visual deviations, and confirmation protected acceptance files were not changed. Do not report completion if a required command was not run or did not pass.
