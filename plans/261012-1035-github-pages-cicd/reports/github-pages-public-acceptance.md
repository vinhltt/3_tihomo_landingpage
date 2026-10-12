# GitHub Pages production acceptance — execution record

**Not deployed / not complete.** Source/bootstrap, real PR positive/negative CI và protection/Pages/environment settings đã observed. Current restored-head CI chưa được GitHub queue; provider có incident Actions/Checks API. Public website, same-run main artifact và deployment chưa observed. Không lấy source public hoặc PR build làm deployment proof.

## Authorization và baseline

Maintainer duyệt source/docs/history disclosure, baseline A/B, commit/push, public/default/protection/Pages/environment settings, PR creation và negative CI probe trên PR; hai `.specify` user updates được đưa vào baseline. Agent không merge/auto-merge/bypass.

- Existing develop: `f6d8581937706587da1a66fac040766b7f054d3d`, giữ nguyên.
- Approved A: `0dcdfafdedfa566f24cd0c5f897a1f84f6338dfb` — 74 files, không `.github/workflows/pages.yml`, không local config.yml; exact A directory/history scans pass, exact A archived tree Node22 npm ci/full build pass.
- Initial B: `566f4f383adc03ed4741c21e72be935d001eab20`; real draft [PR #1](https://github.com/vinhltt/3_tihomo_landingpage/pull/1) vào main. GraphQL create trả 504 nhưng REST read xác nhận PR đã tạo; adopt PR hiện có, không tạo duplicate.
- Local user index/staging giữ nguyên bằng temporary index; local develop và parent gitlink không đổi.

## Observed settings checkpoint

GitHub API và SSH push outputs xác nhận:

- Repository [vinhltt/3_tihomo_landingpage](https://github.com/vinhltt/3_tihomo_landingpage) public.
- Main seed đúng A, remote tree không pages.yml; default branch main.
- Main require PR, enforce admins, zero mandatory second reviewer; force push/deletion disabled, no bypass allowances.
- Main required check đã enforce: `Pages build`, GitHub Actions App `15368`, strict up-to-date:true, giữ PR/enforce-admin và zero bypass. Context/App lấy từ actual successful positive PR run; current restored head chưa có check, không dùng green của SHA cũ để merge.
- Pages Source `workflow` / GitHub Actions, cname:null, status:null (chưa deploy). Environment github-pages custom branch policies:true/protected_branches:false, đúng một selected policy `main` / type branch, không tag/wildcard, không reviewer/wait timer.

Personal-repo protection request ban đầu 422 vì empty organization-only bypass fields; corrected request bỏ field không áp dụng, giữ PR/admin gates và read-back zero bypass. Không tạo PAT hoặc nới CI permissions.

Required-check request 422 nếu gửi cả deprecated `contexts` và `checks` với current API; corrected request chỉ dùng exact provider-bound `checks`, giữ strict/admin/PR requirements. Source docs không được dùng để nới gate khi provider lỗi.

## Acceptance matrix hiện tại

| Criterion | Evidence / trạng thái |
|---|---|
| 1. PR CI và rejection | Actual Node22 positive run pass; authorized missing-asset probe failed đúng checker, zero artifacts/deploy; restoration pushed, final-head CI cần observed |
| 2. Main same-run build/deploy | Static workflow reviewed; actual main run/artifact/deployment chưa có |
| 3. Failed main không deploy | Static needs/success/guard proof + actual negative PR no artifact/deploy; không chủ động đưa lỗi vào main |
| 4–6. Ten routes/assets/locale/theme/header | [Local browser proof](base-path-local-acceptance.md); public equivalent chưa observed |
| 7. Metadata/crawl readiness | Local checker pass, root robots HTTP404 tại local acceptance; public endpoints/root policy cần recheck |
| 8. Protection/Pages/environment | Public/main/default, PR/admin/strict exact check/App, selected-main branch environment và Actions source đã read-back; current-head CI chưa green |
| 9. Public evidence | PR và positive/negative run URLs có ở dưới; main artifact/deployment/site public chưa observed |
| 10. Rollback | [Content-revert PR runbook](../../../README.md#rollback-nội-dung) giữ workflow; chưa exercise real rollback, A không phải prior public revision |

## Actual PR CI receipts

- Positive [run 38248652982](https://github.com/vinhltt/3_tihomo_landingpage/actions/runs/38248652982): event pull_request, head initial B; checkout thực tế PR merge ref `feb6694cae8106c066209b045c195adcd4ee202e`. Ubuntu 24.04.5, runner 2.337.0, Node22.23.3/npm10.9.9; npm ci/full build/check-dist pass, 22 files zero Astro diagnostics, ten routes. Build token Contents:read/Metadata:read; deploy job skipped, artifact count zero.
- Observed successful required-check identity: `Pages build`, GitHub Actions App `15368` / slug github-actions; attached head SHA đúng initial B, không context/provider đoán.
- Negative [run 38248958195](https://github.com/vinhltt/3_tihomo_landingpage/actions/runs/38248958195), head `fe8eb085dec0986645b2667ccecba49d1ec85646`: check-dist lỗi `missing local asset /3_tihomo_landingpage/ci-probe-missing.svg`, exit 1 sau Astro build; Pages build failure, deploy skipped, artifact count zero.
- Restoration commit `e21a4da5b138c7f2fb281586fa4b038eca924578` đã push PR, tree giống initial B. Main vẫn A; không merge lỗi, không rerun old SHA, user index không đổi. PR head/merge refs đã nhận restoration nhưng check suites rỗng và chưa có Actions run cho head này.

## Required next gate

Chờ provider queue actual check cho current PR head và full CI pass → maintainer normal merge PR → actual push/main same-run artifact/deployment và public browser acceptance. Settings không cần nới hoặc đổi trigger để vượt outage. Chỉ observed receipts mới đổi trạng thái pending; không dummy checks hoặc old-run rerun.

## Provider blocker

[GitHub incident 93njd414rpbx](https://www.githubstatus.com/incidents/93njd414rpbx), started `2026-10-12T12:21:47Z`; official update `12:33:21Z` xác nhận degradation Actions/Pull Requests/Issues, gồm Checks API và queueing new Actions runs.

Đã kiểm tra khác nhau: current PR API head/mergeable, Git pull refs, push event, direct commit check suites, scoped/all Actions run lists, workflow registration active, Actions permissions enabled và gh pr checks. Restored head đã push/PR received, workflow source hợp lệ/unchanged, PR mergeable:true; không check/run hiện hành. Không claim root cause sâu hơn incident provider đã công bố, không rerun kiểm tra để che failure hoặc tạo noop commit.

README/evidence updates là real operating changes thuộc PR; fresh final-head CI vẫn mandatory. Giữ PR draft trong khi Checks/queue chưa cung cấp proof; không main push/merge/bypass. Current public deployment và browser acceptance chưa thể thực hiện vì main vẫn workflow-free A.
