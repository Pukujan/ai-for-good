# Design-to-build playbook for AI-assisted marketing pages

This is the reusable process for future marketing, sales, launch, and product-positioning pages created with ChatGPT for design exploration and a local coding agent for implementation.

The goal is repeatability without flattening every project into the same aesthetic. The process is fixed; the visual language, audience psychology, copy, evidence, and implementation are project-specific.

## Operating principle

Do not begin with code.

Do not begin with a generic landing-page template.

Do not let the coding agent invent the product positioning, visual strategy, or acceptance criteria after implementation has started.

The workflow is:

**research -> positioning -> language -> visual concepts -> human selection -> asset extraction -> implementation contract -> local implementation -> validation -> transcript/archive**

---

## Phase 1 — Research the audience and language first

Before generating any page concepts, research the product category, target market, user/buyer distinction, current alternatives, trust barriers, and relevant behavioral or cultural context.

When the product involves AI, explicitly research how AI-generated marketing copy tends to sound artificial or formulaic. Identify lexical, structural, tonal, and interaction patterns to avoid. Research should distinguish evidence from stylistic preference.

Required outputs:

- primary buyer;
- primary user;
- core problem in the buyer's own likely language;
- market gap;
- evidence/statistics worth communicating;
- trust objections;
- words/phrases competitors overuse;
- words/phrases that make the brand sound machine-written, generic, manipulative, or emotionally false;
- desired human tone;
- tone boundaries: what the brand must never sound like;
- any safety, age, accessibility, legal, or ethical constraints relevant to the audience.

For child-facing products, distinguish the economic buyer from the child user. Avoid manipulative engagement design, artificial intimacy, dependency-oriented messaging, and anthropomorphic claims that imply the AI is a friend, confidant, parent, or replacement teacher unless the product truly and ethically supports that claim.

### Language research checklist

Answer these before concept generation:

1. What language does the audience actually use when describing the problem?
2. What wording is common in competitor pages?
3. Which phrases sound obviously AI-generated or overly polished?
4. What would a thoughtful human say instead?
5. Where should the copy be warm, and where should it be precise?
6. What claims require evidence or qualification?
7. What emotional state is the buyer in when they first land on the page?
8. What single sentence should they understand within five seconds?

---

## Phase 2 — Define the page thesis

Reduce the page to one central proposition before designing sections.

Write:

- one-sentence market problem;
- one-sentence product belief;
- one-sentence product promise;
- one-sentence desired outcome;
- one primary CTA;
- one secondary CTA if truly necessary.

The homepage must not become a feature dump. Every section should support the thesis.

For this StudySprout project the pattern was:

**Problem:** children are already using AI before many families have good guidance.

**Belief:** AI should increase a child's capability rather than replace effort.

**Promise:** guided explanations, questioning, practice, and progressively less assistance.

**Outcome:** a child who can think and work more independently, including away from the device.

---

## Phase 3 — Generate differentiated visual directions

Generate multiple visual concepts only after research and positioning are written down.

Recommended minimum: 4–5 genuinely different directions.

Directions should vary in brand strategy, not merely swap colors or rearrange cards. Useful axes include:

- parent-led emotional photography;
- editorial / mission-led;
- product-led minimalism;
- child-curiosity-led;
- paper / offline / physical-learning-led;
- institutional / evidence-led;
- playful but non-infantile;
- premium / calm / trusted.

Each concept must preserve the same product thesis so the human is choosing an aesthetic and emotional framing, not a completely different product.

Do not generate a production implementation yet.

---

## Phase 4 — Human selection and critique

The human chooses the strongest direction.

Then critique it before implementation:

- What feels genuine?
- What feels generated?
- Is the page too dense?
- Is the hero emotionally credible?
- Does the user/buyer see themselves in it?
- Does the visual imply something the product does not promise?
- Is mobile receiving the same essential visual story as desktop?
- Does the page communicate the market gap before explaining features?

Revise the chosen concept until the human explicitly approves the design direction.

---

## Phase 5 — Extract reusable assets only after selection

Once a direction is selected, generate or extract its assets individually.

Typical asset set:

- hero image;
- logo/wordmark;
- icon mark;
- illustrations;
- supporting visual motifs;
- social-preview image;
- any responsive crops that are truly necessary.

Do not bake important text into images.

Ensure the mobile version includes the essential hero imagery unless there is an explicit approved reason not to.

---

## Phase 6 — Convert design intent into an implementation contract

Before handing the work to a coding agent, create machine-readable and human-readable requirements.

The contract should define:

- exact required copy where exact wording matters;
- required visual assets;
- viewport targets;
- mobile requirements;
- navigation behavior;
- semantic/accessibility expectations;
- content-density constraints;
- source/citation requirements;
- forbidden generic marketing language;
- forbidden engagement or dark-pattern behavior;
- required test IDs or stable selectors;
- test commands;
- screenshot outputs;
- protected contract files the implementation agent may not weaken.

Where possible, acceptance tests should make important visual/product constraints measurable rather than subjective. Example: the hero image must remain visible on mobile, be above a defined vertical threshold, and exceed minimum dimensions.

---

## Phase 7 — Local implementation agent

The local coding agent implements the approved design. It does not redefine the design.

It must:

1. read the contract and visual references before coding;
2. work on an implementation branch;
3. keep contract/test files unchanged;
4. implement semantic responsive HTML/CSS/components;
5. preserve the selected aesthetic across desktop, tablet, and mobile;
6. run all required validations;
7. inspect generated screenshots manually;
8. fix drift instead of weakening acceptance criteria;
9. document intentional deviations.

The local agent must not claim completion because the build or deployment alone succeeded.

---

## Phase 8 — Validation

Validation has four layers.

### 1. Build integrity

- dependency install succeeds;
- typecheck/build succeeds;
- lint succeeds;
- static validation succeeds.

### 2. Functional acceptance

- navigation works;
- CTAs point to intended destinations;
- required content exists;
- images load from approved sources;
- mobile interactions work;
- no horizontal overflow.

### 3. Accessibility

- semantic landmarks;
- keyboard usability;
- visible focus;
- useful alt text;
- automated accessibility scan;
- reduced-motion handling where relevant.

### 4. Visual review

Capture desktop, tablet, and mobile screenshots. The human or reviewing agent must inspect them. Automated assertions are necessary but cannot prove aesthetic fidelity by themselves.

---

## Phase 9 — Production-path verification

After deployment, check the actual production URL rather than assuming a successful host status means the page is correct.

Verify:

- route loads directly;
- refresh on the nested route works;
- JS/CSS/assets load under the production base path;
- hero image loads;
- canonical URL is correct;
- OpenGraph/Twitter images resolve;
- sitemap/robots behavior is intentional;
- contact links are real, not placeholders;
- responsive behavior still matches the accepted design.

---

## Phase 10 — Transcript and archive

Every implementation cycle ends with an audit trail.

The local agent must write a completion transcript into `transcripts/luna/` containing:

- the full task/prompt it received;
- material decisions it made;
- files changed;
- commands run;
- validation output or concise exact results;
- screenshots reviewed;
- failures encountered and how they were fixed;
- intentional deviations from the visual reference;
- deployment information if applicable;
- any unresolved issue or placeholder;
- final git commit SHA;
- confirmation that protected acceptance files were not weakened.

Do not delete the transcript after merge. It is part of the design/implementation record and allows later projects to learn from what worked.

---

# Reuse template for the next project

For each new page, create a project-specific folder or contract containing:

- `RESEARCH.md` — audience, category, evidence, language/tone research;
- `POSITIONING.md` — problem, belief, promise, outcome, CTA;
- `BRAND.md` — visual/tone system;
- `REFERENCE.md` — approved concept and screenshots;
- `site-contract.json` — machine-readable acceptance contract;
- `BUILD_SPEC.md` — implementation behavior;
- acceptance tests;
- final implementation transcript.

The reusable process stays constant. The research, words, imagery, composition, and interaction model must be re-derived for each audience.

# Success criterion

A page is not successful because an AI generated it quickly.

It is successful when:

1. the message is grounded in research;
2. the language sounds appropriate to the actual humans buying/using the product;
3. the human intentionally chose the visual direction;
4. the implementation preserves that direction across devices;
5. important requirements are testable;
6. the production page is verified;
7. the implementation history is reproducible from the repository.
