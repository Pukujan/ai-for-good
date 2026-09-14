# StudySprout final handoff checklist

This checklist is the final acceptance handoff for the current `luna/website-implementation` work.

A hosted page is not considered complete until these checks are done and recorded.

## Repository state

- [ ] Implementation remains on an implementation branch until validation is complete.
- [ ] Protected acceptance/spec/design files were not weakened to make tests pass.
- [ ] Implementation branch is synchronized with the latest acceptance contract on `main`.
- [ ] `package-lock.json` is committed.
- [ ] No unintended generated/build artifacts are committed.

## Required local validation

Run all of the following from a clean install/worktree where practical:

```bash
npm ci
npm run lint
npm run build
npm run validate:static
npm run test:e2e
npm run screenshots
```

Record exact pass/fail results in the Luna transcript.

- [ ] `npm ci` succeeds.
- [ ] lint passes.
- [ ] build passes.
- [ ] static validation passes.
- [ ] acceptance/E2E tests pass.
- [ ] desktop screenshot generated and visually reviewed.
- [ ] tablet screenshot generated and visually reviewed.
- [ ] mobile screenshot generated and visually reviewed.

## Visual contract

- [ ] Child + robot + paper hero image is visible on desktop.
- [ ] Child + robot + paper hero image is visible on tablet.
- [ ] Child + robot + paper hero image is visible and prominent on mobile.
- [ ] Mobile does not substitute a blank/placeholder hero.
- [ ] Hero and typography preserve the warm editorial direction.
- [ ] Page remains intentionally compact rather than turning into a feature-card wall.
- [ ] Market-gap section remains visually prominent.
- [ ] Exactly three core principles remain: Ask, Think, Try alone.
- [ ] Independence message remains intact.
- [ ] No horizontal overflow at required viewports.

## Copy and trust

- [ ] Required hero wording matches the contract.
- [ ] Market statistic and source remain present.
- [ ] Common Sense Media source link resolves to the intended source.
- [ ] No forbidden generic AI marketing language was introduced.
- [ ] No dependency-oriented engagement language was introduced.
- [ ] No claim presents the robot/AI as a friend, confidant, replacement parent, or replacement teacher.

## Accessibility and interaction

- [ ] Keyboard focus is visible.
- [ ] Mobile navigation opens, closes, and closes with Escape.
- [ ] Image alt text meaningfully mentions child, robot, and paper.
- [ ] Automated accessibility checks pass at required viewports.
- [ ] Reduced-motion behavior remains supported.

## Production verification

Production target: `https://www.design-bakery.com/ai-for-good/`

- [ ] Production URL loads directly.
- [ ] Refresh/direct navigation on `/ai-for-good/` works.
- [ ] JS/CSS assets load under the nested production path.
- [ ] hero image loads in production.
- [ ] canonical URL points to the production URL.
- [ ] OpenGraph image URL resolves.
- [ ] Twitter image URL resolves.
- [ ] sitemap URL is intentional and resolves.
- [ ] contact CTA uses a real destination.
- [ ] placeholder `hello@studysprout.example` has been replaced or explicitly documented as unresolved.

## Pull request / CI

- [ ] Open a PR from the implementation branch to `main` so `site-quality.yml` actually runs.
- [ ] `contract-integrity` passes.
- [ ] `implementation-quality` passes.
- [ ] responsive screenshot artifact is uploaded by CI.
- [ ] screenshots from CI have been reviewed before merge.

## Required Luna completion transcript

Before reporting the task finished, Luna must create:

`transcripts/luna/<YYYY-MM-DD>-studysprout-completion.md`

The transcript must include:

- complete task instructions/prompts available to Luna;
- material implementation decisions;
- all files changed;
- exact commands run;
- pass/fail result for every required validation command;
- screenshot file paths and what was visually checked;
- production URL checks performed;
- failures encountered and fixes applied;
- any unresolved placeholder or known issue;
- intentional deviations from approved visual references;
- final commit SHA;
- explicit confirmation that protected acceptance files were not weakened.

Do not mark this checklist complete until that transcript is committed to the implementation branch.
