# Plan validation — 2026-10-12

## Session 1

Trigger: lập plan hard từ brief CI/CD đã duyệt. Không thực hiện implementation/deploy.

Questions asked: 0. Outcome, public-repository decision, option A, constraints/non-goals và acceptance criteria lấy từ brief; không hỏi lại thông tin có trong repo/API. Chưa phát hiện trade-off cần đổi quyết định người dùng. Approved baseline SHA, exposure clean và remote authorization là execution gates, không dữ liệu được tự xác nhận trong plan.

## Verification Results

Tier: Standard — Fact Checker + Contract Verifier. Sample 10 claims/phase: 40 claims checked, 40 verified, 0 failed, 0 unverified **current/source/platform claims**. Future implementation/deployment không nằm trong số claims pass này.

| Phase / claim | Verified evidence |
|---|---|
| 1. Repo private | Live repository API private=true |
| 1. Default develop | Live repository API default_branch=develop |
| 1. Admin available to observed credential | Live repository API permissions.admin=true; không suy ra mutation authorization |
| 1. Main not yet present | Branch API chỉ trả develop |
| 1. Existing develop unprotected | Branch API protected=false |
| 1. No registered Actions workflows | Actions API total_count=0 |
| 1. Current staged work exists | git status: 39 staged source/config/runtime files |
| 1. Unstaged work exists | git status: 2 unstaged .specify files |
| 1. Untracked candidate docs/plans/config | git status: config.yml, docs/, plans/ |
| 1. Public source/history review is accepted gate | brief:38,123,135 |
| 2. Astro 5.18.2 | package.json:15-20 |
| 2. Static/directory/trailing slash | astro.config.mjs:40-47 |
| 2. EN default and VI | astro.config.mjs:42-45 |
| 2. Root-only locale URLs | src/lib/locale.ts:3-6,20-22 |
| 2. Four localePaths module callers | Base:3; HomePage:4; BlogHub:4; BlogArticle:4, grep fallback after LSP unavailable |
| 2. Three articlePath component callers | HomePage:4,117; BlogHub:4,65; BlogArticle:4,94 |
| 2. Six Markdown sibling-link consumers | src/content/blog/{en,vi}/checklist-doi-chieu-sao-ke.md:121,123; khoan-dinh-ky-va-ngan-sach.md:120,124; quan-ly-thu-chi-nhieu-tai-khoan.md:106,130 |
| 2. Global CSS/font pipeline source | Base:2 imports global.css; global.css:1-53 holds six font-face declarations |
| 2. Checker root mapping and metadata bans | scripts/check-dist.mjs:8-16,84-108,195-205,224-225 |
| 2. Collection/static-route owner | src/content.config.ts:5-25; src/lib/blog.ts:4-18; src/pages/{,vi/}blog/[slug].astro:4-13 |
| 3. Existing full build command | package.json:11 |
| 3. Node22 compatible declared engines | package.json:6-8; actual local version v20.19.5 not runner22 |
| 3. Lockfile exists for npm ci/cache | package-lock.json via glob |
| 3. Workflow path is new, not existing owner | .github/ absent via glob; Actions API workflows0 |
| 3. checkout stable snapshot | gh release API v7.0.1 |
| 3. setup-node stable snapshot | gh release API v7.1.0 |
| 3. configure-pages stable snapshot and default enablement false | gh release API v6.0.0 + tagged action.yml |
| 3. upload-pages-artifact stable snapshot | gh release API v5.0.0 |
| 3. deploy-pages stable snapshot and artifact_name/page_url | gh release API v5.0.1 + tagged action.yml |
| 3. Configure read API / deploy write+OIDC / concurrency limits | Primary official contracts cited in research/github-pages-contract.md; no live pipeline claim |
| 4. Pages not enabled at snapshot | Repository API has_pages=false |
| 4. Initial main requires bootstrap | Branch API develop only + brief:91,138 |
| 4. Baseline cannot silently use stale remote | Staged runtime inventory + brief:91,125 |
| 4. User public choice retained | brief:15,38 |
| 4. Develop preserved | brief:91 |
| 4. No agent auto-merge/bypass | brief:19,94-95 |
| 4. Required check discovery and environment policy contracts | Primary GitHub required-check/branch-policy sources cited in research report |
| 4. Production metadata is existing docs gate | docs/README.md:33; README.md:66 |
| 4. Public observation distinct from local build | brief:59,67,71 |
| 4. Rollback via new PR revert | brief:60,106,140 |

`brief` trong bảng là `plans/reports/brainstorm-261012-1722-github-pages-cicd.md`. Các path source rút gọn để đọc; owner đầy đủ nằm trong codebase-evidence/phase file.

## Exercised verification

- Existing npm run build: pass, Astro check 0 errors/warnings/hints, ten pages, check-dist pass. Đây là root-only baseline Node20, không base-aware/Node22/production proof.
- ak plan validate: valid=true, errors=null.
- ak plan parse: 4 phases, 12 unchecked tasks, 0 completed; no scaffold phase còn sót.
- Structural smoke: 5 plan/phase files, 22 relative links + anchors exist, dependencies acyclic/in forward order, 12 actionable Todo items, no scaffold text, no failures.
- Live action release APIs và configure/deploy manifests xác nhận exact version/input snapshot; no SHA invented.
- Origin robots read HTTP404; gh API origin-site repo trả404 (không suy ra absolute nonexistence). Project robots không phải authoritative root policy; chưa public-sitemap/browser acceptance.

## Scope / ownership consistency

HOLD SCOPE. >8 affected source/content/docs files cần thiết để cắt đổi tất cả URL consumers và owning checker/docs; không tạo service/class hoặc convention build mới. Bốn phase có safety/dependency boundaries riêng, không parallel edits. README/docs có owners nối tiếp ở phases2–4. Metadata endpoints là hai file mới thật, không mock/scaffold. Action SHA resolution là prerequisite tương lai, không YAML chưa hoàn thiện được giao trong phiên plan.

## Whole-Plan Consistency Sweep

Before reviewer adjudication: plan.md + cả bốn phase đã đọc đầy đủ. Delta đã kiểm tra: configure-pages chỉ deploy; A seed không workflow/B PR workflow; root/project robots semantics; observed/static verification separation. Corrected one brief heading anchor to `#2-brainstorm-contract`. Không đổi requirement hoặc caller API đã duyệt.

## Final gate after red-team corrections

- Hai Medium findings được sửa, không Critical/High; [adjudication và evidence](./red-team-review.md). External CSS resolution dùng stylesheet URL; content rollback giữ pipeline, không whole-revert bootstrap B; first launch chưa có prior published version dùng corrective PR.
- Whole-plan sweep reread đủ năm plan/phase files: 24 local links/anchors, hai decision deltas, no missing links/dependency cycles/stale instructions/unresolved contradictions.
- Final `ak plan validate`: valid=true; `reindex --apply` nhận bốn phases; `parse` trả 12 tasks, 0 done, plan pending.
- Runtime todo đã mirror đúng 12 checklist items P1.1–P4.4. Chúng nằm ở phase “Implementation — chờ ak:cook”, blocked chỉ vì invocation hiện tại là planning. Dependency/ownership authority vẫn là từng phase file; khi Cook được yêu cầu, unblock/rehydrate theo thứ tự 1→2→3→4, không bỏ gate hoặc coi blocked runtime là source completion.
- `ak plan use` đã pin plan vào worktree-private pointer. Không sửa tracked repo settings.
- Automatic local journal đã lưu tại `plans/journals/2026-10-12-plan-github-pages-ci-cd-for-tihomo.md`; AgentWiki publish skipped (không được yêu cầu).
- Status: ready for implementation planning handoff; actual implementation/deployment/security preflight vẫn chưa thực hiện. Không có user decision còn thiếu để hoàn tất deliverable plan; approved baseline/exposure/remote authorization là gates của execution.

## Session 2

Trigger: người dùng yêu cầu tự validate lại plan. Mode: automatic; questions asked: 0. Không chạy implementation hoặc remote mutations.

### Verification Results

- `ak plan validate --json`: valid=true, errors=null. `ak plan parse --json`: bốn phase, 12 tasks, 0 done, status pending.
- Reread đủ plan.md và cả bốn phase. Structural smoke kiểm tra 24 local links/anchors, frontmatter/status, dependency ordering và task-to-phase mapping; errors=0, không cycle hoặc scaffold/[UNVERIFIED].
- Refresh GitHub API: private=true, default_branch=develop, has_pages=false, admin permission hiện có; chỉ develop/protected=false; workflows total_count=0. Không drift làm thay đổi bootstrap assumptions.
- Refresh git status: 39 staged, 2 unstaged, 3 nhóm untracked như snapshot; không stage/reset/commit/push. Giữ baseline/exposure review trong phase 1, không coi status là security proof.
- Source recheck xác nhận Astro5.18.2/static/EN default/VI, build script đầy đủ, localePaths bốn module caller, articlePath ba component caller, getLocalizedArticlePaths hai route wrappers. Locale-qualified content IDs khác public data.slug như plan đang dùng.
- Sáu Markdown files có 14 root-relative sibling links. Throwaway URL-resolution smoke đã resolve cả 14 planned `../slug/` href tại public base và giữ đúng locale/slug; 0 failures. Đây là proof URL semantics, không proof site đã migrate.
- External stylesheet-relative font smoke resolve từ `/3_tihomo_landingpage/_astro/site.css` tới `/3_tihomo_landingpage/fonts/font.woff2`; đúng CSS resolution context đã sửa. Source checker vẫn tách document-inline CSS (:210-211) với external stylesheet (:248).
- pages.yml/sitemap.xml.ts/robots.txt.ts chưa tồn tại và được khai báo Create, không phải missing existing owner. Package-lock và sáu self-hosted font files tồn tại.
- Recheck acceptance traceability: PR gate/main same-run artifact/no deploy khi build failure; ten routes/assets/theme; production metadata; protection/environment; actual public evidence; content-revert rollback giữ pipeline đều có owning phase/gate. Không live pipeline claim.

### Whole-Plan Consistency Sweep

- Files reread: plan.md và phase01–04. Previous two Medium fixes vẫn hiện diện, không superseded CSS instruction hoặc whole-bootstrap-revert guidance.
- Confirmed decisions: configure-pages chỉ ở deploy, build contents:read; A không workflow/B real PR; check context/App lấy từ observed CI; main-only environment trước maintainer merge; robots project không phải origin REP; rollback giữ pages.yml, first-launch failure corrective PR.
- New instruction corrections: 0. Unresolved contradictions: 0. Không cần sửa phase hoặc đổi scope/decisions.
- Verification limits: lần này không rerun build đã quan sát ở Session1; không secret/history scan, Node22 runner, Pages deployment hoặc browser public. Những proof đó vẫn là execution gates, không lỗi của deliverable plan.
- Recommendation: **PASS — ready for implementation**. Mười hai implementation tasks vẫn pending/runtime-deferred chờ Cook; validation không cấp quyền public/settings/commit/push/merge.
