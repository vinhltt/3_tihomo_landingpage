# Production baseline manifest — 2026-10-12

**Approval: granted. A = `0dcdfafdedfa566f24cd0c5f897a1f84f6338dfb`; initial B = `566f4f383adc03ed4741c21e72be935d001eab20`.** Maintainer duyệt source/docs/history, hai `.specify` updates, selective commit/push/settings/PR và negative CI probe. [PR #1](https://github.com/vinhltt/3_tihomo_landingpage/pull/1) đã có positive/negative CI; restoration `e21a4da5b138c7f2fb281586fa4b038eca924578` và các real evidence/runbook updates thuộc cùng PR, current head phải lấy từ GitHub khi nghiệm thu. Merge vẫn do maintainer thực hiện. User index giữ nguyên bằng temporary index; develop vẫn `f6d8581937706587da1a66fac040766b7f054d3d`.

## Candidate A — publish-ready site, không workflow

Approved inclusion, dùng nội dung working tree đã được maintainer duyệt:

- `.gitignore`, `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json`.
- `public/favicon.svg`, `public/theme.js`, `public/navigation.js`, `public/fonts/OFL.txt`, sáu `public/fonts/*.woff2` đang có.
- Toàn bộ existing `src/components/`, `src/layouts/`, `src/lib/`, `src/styles/`, `src/content.config.ts`, sáu Markdown articles trong `src/content/blog/{en,vi}/`, sáu page owners trong `src/pages/`.
- Hai static metadata endpoints mới `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` và publish-aware `scripts/check-dist.mjs` sau local verification.
- `README.md`, `docs/README.md`: phần publish-ready local contract. Remote vẫn private/not deployed cho tới evidence public.
- Approved documentation inclusion: `docs/handoff/epic-1/`, `docs/product/ai-native-strategy.md`, current `plans/261012-1035-github-pages-cicd/`, `plans/reports/brainstorm-261012-1722-github-pages-cicd.md`, current journals. Maintainer đã chấp thuận disclosure chiến lược/app source pointers và plan machine paths; secret scan không tự cấp approval này.
- `.specify/` gồm hai user updates stack/commands đã được duyệt; production branch metadata sẽ đổi qua PR B sau main bootstrap. Không đổi user index.

**A phải không chứa `.github/workflows/pages.yml`.** Build A commit tree riêng trước seed; local working-tree build không thay thế bước này.

## Candidate B — workflow PR thực vào main

- Thêm `.github/workflows/pages.yml` đã validate.
- Thêm phần operating/bootstrap/rollback runbook vào README và các evidence được duyệt.
- Không dummy commit, fake check hoặc workflow seed trên main. PR CI chạy trên B merge ref; exact check/App được observed rồi mới enforce.

Khi materialize A, omit phần CI/CD runbook trong README, pointer runbook cuối docs/README và `reports/workflow-contract-review.md` khỏi A; những nội dung đó đi cùng workflow ở B. Phải kiểm tra A tree riêng, không dùng working-tree proof để suy ra A/B commit proof.

## Exclusions / preserved work

- `config.yml`: local agent routing; giữ nguyên untracked, không cần cho site/deploy.
- User index/staging giữ nguyên; `.specify` updates đã approved được commit bằng temporary index, không tự stage/unstage user worktree.
- Ignored `.omp/`, `.astro/`, `node_modules/`, `dist/`, scanner/browser temporary files; không public source/artifact ngoài `dist` website.
- Parent workspace/gitlink, develop ref và unrelated files: không sửa.
- Không phục hồi các historical brief/report/prototype hiện không có trong checkout. Existing references tới chúng là historical limitation, không tạo replacement giả.

Local readiness: Node20 full build, isolated explicit Node22.23.3 npm ci/full build, six checker rejection cases, tar packaging, browser desktop/mobile/no-JS, actionlint và hai scoped reviewers đều pass. Source disclosure scan refreshed tới 77 candidate files; dependency audit warnings/disposition được ghi ở [local evidence](base-path-local-acceptance.md#dependency-audit-observation). **Approval đã granted; exact commit-tree và remote receipts chưa có**.

## Final gate chưa thực hiện

1. Review final A/B manifest/diff và business/operational disclosure; incremental secret/history scan.
2. Maintainer cho phép selective commit/push, public visibility, main seed/default/protection, Pages/environment settings và PR creation.
3. Record approved A/B SHA và prove A build từ chính tree đó.
4. Agent không merge; maintainer normal merge sau CI/protection. Không ghi published hoặc complete khi thiếu live evidence.

## Observed A bootstrap

- A tree: 74 files, không workflow/config.yml/workflow review report; build từ exact archived commit tree bằng explicit Node22 npm ci/full build pass.
- Gitleaks A directory và A+parent history (hai commits): exit 0, no findings.
- Source repository đã public; main remote seed đúng A, không pages.yml; main default, PR-only enforce-admin protection, zero required second reviewer, force/deletion disabled. Pages vẫn disabled tại bước này.
- First protection request 422 do empty organization-only bypass allowance fields ở personal repo; đã bỏ field không áp dụng rồi read-back zero bypass, không giảm PR/admin gates.
- SSH push identity verified đúng repo owner; user index SHA256 không đổi, local develop và parent gitlink không đổi.

## Current production gate

Required check `Pages build` / Actions App15368, strict/admin/PR protection, selected-main branch environment và Pages Actions source đã read-back. Provider Actions/Checks incident đang ảnh hưởng queue/check của current PR head; giữ draft, không dùng old-SHA green, không bypass/merge. [Remote receipt](github-pages-public-acceptance.md) giữ exact CI URLs, settings và observed limitations. Main vẫn A không workflow, chưa có public deployment.
