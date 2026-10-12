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

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.
