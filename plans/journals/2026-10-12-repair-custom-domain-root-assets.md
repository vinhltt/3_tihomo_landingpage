---
title: Repair custom-domain root assets
date: 2026-10-12
summary: Repair GitHub Pages asset paths after the custom-domain cutover; preserve DNS/TLS and protected merge gates.
---

# Repair custom-domain root assets

## Cause

After maintainer deployed main and selected tihomo.vinhltt.com, the old build still emitted /3_tihomo_landingpage/ assets and github.io metadata. The emitted stylesheet URL returned HTTP404 while the equivalent root stylesheet returned HTTP200/text/css.

## Repair and verification

Astro now uses the HTTPS custom origin and base /. The existing checker is unchanged; Node22 full build/check-dist passes, 22 Astro files have zero diagnostics and ten routes are emitted. Managed Chromium exercised every route at desktop1440 and mobile390, loaded real CSS/Be Vietnam Pro fonts, no overflow, sticky headers and locale/theme clicks. Every23 emitted file returned HTTP200, including six fonts. One locale click during a native theme transition was suppressed; after waiting for the transition the same click navigated normally, no source workaround. Console errors were empty.

README/docs now own custom-domain DNS/TLS, root local commands and coordinated rollback. Public proxied HTML contained an injected Cloudflare analytics beacon; this violates the unchanged no-analytics contract, so the runbook keeps DNS-only/no beacon injection. The maintainer reports DNS successful and GitHub provisioning TLS; do not disable certificate validation or reset the domain.

## Next gate

Submit the scoped fix from current main using a temporary index, retain original staging/develop, observe latest-head CI, then maintainer normal merge. Actual public HTTPS/styles/routes still need post-deployment verification; local proof is not production acceptance.

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.
