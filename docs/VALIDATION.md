# Validation and definition of done

The acceptance suite exists to make it difficult for an implementation agent to silently drop requirements.

An implementation is not complete until `npm run lint`, `npm run build`, `npm run validate:static`, `npm run test:e2e`, and `npm run screenshots` all pass. No acceptance test may be skipped, only, fixme, or todo.

Automated checks cover required hero copy/image, image visibility at desktop/tablet/mobile, mobile image prominence, horizontal overflow, source link for the 86% statistic, exactly three core principles, prohibited AI-marketing clichés, dependency-oriented engagement patterns, functional CTAs, mobile navigation, accessibility, and screenshot generation.

Human review must compare the generated desktop/tablet/mobile screenshots against the direction in `design/REFERENCE.md` and ask: editorial rather than dashboard? child active and robot secondary? mobile image meaningful? enough whitespace? market gap understandable in five seconds? too many cards/badges/claims? parent-facing without fearmongering?

Implementation PRs must not modify acceptance files; CI compares them with `main`.
