# GitHub Pages production acceptance — execution record

**Not deployed / not complete.** Source visibility/bootstrap đã observed; public website, PR CI, same-run artifact và deployment chưa observed tại checkpoint này. Không lấy source public hoặc local build làm deployment proof.

## Authorization và baseline

Maintainer duyệt source/docs/history disclosure, baseline A/B, commit/push, public/default/protection/Pages/environment settings, PR creation và negative CI probe trên PR; hai `.specify` user updates được đưa vào baseline. Agent không merge/auto-merge/bypass.

- Existing develop: `f6d8581937706587da1a66fac040766b7f054d3d`, giữ nguyên.
- Approved A: `0dcdfafdedfa566f24cd0c5f897a1f84f6338dfb` — 74 files, không `.github/workflows/pages.yml`, không local config.yml; exact A directory/history scans pass, exact A archived tree Node22 npm ci/full build pass.
- B: chưa tạo; không ghi SHA giả hoặc dùng working-tree proof thay actual PR run.
- Local user index/staging giữ nguyên bằng temporary index; local develop và parent gitlink không đổi.

## Observed settings checkpoint

GitHub API và SSH push outputs xác nhận:

- Repository [vinhltt/3_tihomo_landingpage](https://github.com/vinhltt/3_tihomo_landingpage) public.
- Main seed đúng A, remote tree không pages.yml; default branch main.
- Main require PR, enforce admins, zero mandatory second reviewer; force push/deletion disabled, no bypass allowances.
- Required CI check chưa enforce vì chưa có actual successful PR check/App để discover.
- Pages chưa enable; environment github-pages chưa configured. Không có website deployment trong bootstrap seed.

Personal-repo protection request ban đầu 422 vì empty organization-only bypass fields; corrected request bỏ field không áp dụng, giữ PR/admin gates và read-back zero bypass. Không tạo PAT hoặc nới CI permissions.

## Acceptance matrix hiện tại

| Criterion | Evidence / trạng thái |
|---|---|
| 1. PR CI và rejection | Local malformed-artifact rejection pass; actual PR run/negative probe chưa observed |
| 2. Main same-run build/deploy | Static workflow reviewed; actual main run/artifact/deployment chưa có |
| 3. Failed main không deploy | Static needs/success/guard proof; không chủ động gây outage main; live negative PR chưa chạy |
| 4–6. Ten routes/assets/locale/theme/header | [Local browser proof](base-path-local-acceptance.md); public equivalent chưa observed |
| 7. Metadata/crawl readiness | Local checker pass, root robots HTTP404 tại local acceptance; public endpoints/root policy cần recheck |
| 8. Protection/Pages/environment | Public/main/default + enforce-admin PR-only observed; check/App, main-only environment và Actions source còn pending |
| 9. Public evidence | Chưa có PR/run/deployment URLs hoặc artifact ID; chưa verify site public |
| 10. Rollback | [Content-revert PR runbook](../../../README.md#rollback-nội-dung) giữ workflow; chưa exercise real rollback, A không phải prior public revision |

## Required next gate

Tạo real workflow PR B → positive Node22 CI → authorized bad-link probe và restoration → enforce observed exact build check/App → selected-main environment + Pages Actions source → maintainer normal merge → actual push/main same-run artifact/deployment và public browser acceptance. Chỉ observed receipts mới đổi các trạng thái pending; không dummy checks hoặc old-run rerun.
