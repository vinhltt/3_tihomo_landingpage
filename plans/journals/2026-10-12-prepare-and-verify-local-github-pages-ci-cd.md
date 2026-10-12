---
title: Prepare and verify local GitHub Pages CI/CD
date: 2026-10-12
summary: Local site and workflow verified; source exposure and production bootstrap approval remain pending.
---

# Prepare and verify local GitHub Pages CI/CD

## What happened

Implemented the accepted GitHub Pages local cutover: Astro site/base, base-aware locale/layout/assets, six sibling-link owners, canonical/hreflang and static sitemap/robots. Updated the existing artifact checker without removing content/product/privacy gates. Added the explicit pinned official-action workflow and the owning README bootstrap/lookup/rollback route.

## Verification

Node20 worktree build and isolated explicit Node22.23.3 npm ci/full build passed. Six isolated malformed-artifact cases failed correctly; clean artifact passed. GNU tar packaging contained 23 regular site files and no source/wrapper/links. Desktop/mobile/no-JS browser smoke covered ten direct routes/reloads, locale pairs, themes and sticky anchors. Actionlint and two independent scoped reviewers found no local contract bug. Source/history Gitleaks preflight found no secrets; user index stayed unchanged.

Browser probes initially raced native cross-document transition snapshots; observing DOM and using reduced-motion for the navigation matrix resolved probe timing without changing UI source. Windows PATH case handling initially selected the wrong Node executable; explicit executable/child-shell version proof established Node22 verification.

## Decision and limits

Keep Astro5/static/no-data scope. npm audit reports existing Astro/sharp/esbuild vulnerable packages; primary advisory prerequisites are not reachable in this static artifact (no SSR, client islands, untrusted image processing or esbuild serve). Do not claim patched dependencies or use audit fix --force. Dependency remediation needs separate scope if those surfaces change.

Phases 1–3 are local-complete; phase 4 remains pending final source/business-disclosure and baseline approval. No commit/push/visibility/settings/PR/merge/publication occurred. Public repo would expose handoff/private-app source pointers, strategy and plan machine paths, not just dist. Agent will never auto-merge. Preview and task-owned tabs were stopped/closed.

## Next steps

Approve A/B inclusion/exclusion and remote effects, validate the exact workflow-free A commit tree, then seed/protect main and create workflow PR B. Observe/enforce the real Actions build check and selected-main environment before maintainer normal merge; only actual main artifact/deployment/public browser proof can complete the plan.

## Production bootstrap continuation

The maintainer subsequently approved disclosure, baseline commits/settings and the PR negative probe, including both existing .specify updates. Exact workflow-free A was built/scanned and seeded to public protected default main. PR #1 introduced the workflow; actual Ubuntu/Node22 positive CI passed, the missing-asset probe failed correctly with no artifact/deploy, and a valid restoration was pushed. Strict provider-bound build checking, admin PR enforcement, selected-main environment and Pages Actions source were read back.

Personal-repo protection needed organization-only empty bypass fields omitted. The current required-check API accepts checks or deprecated contexts, not both; using exact observed checks preserved all gates. A GraphQL PR-create 504 had already created the PR; REST adoption prevented duplication.

GitHub incident 93njd414rpbx reports Actions/Checks/PR degradation and new-run queueing issues. The restored PR head and merge refs exist but current-head check suites/run are absent; workflow/permissions remain valid. No trigger change, dummy status, noop commit, old-SHA rerun, merge or protection bypass was used. Real evidence/runbook updates remain in the same PR. Production deployment/public browser acceptance are blocked on fresh current-head CI and maintainer normal merge; the plan remains in progress.

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.
