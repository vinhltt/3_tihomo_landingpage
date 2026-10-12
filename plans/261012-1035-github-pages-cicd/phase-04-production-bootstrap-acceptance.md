---
phase: 4
title: "Phase 4: Bootstrap production và nghiệm thu public"
status: pending
priority: P1
effort: ""
dependencies: [1, 2, 3]
---

# Phase 4: Bootstrap production và nghiệm thu public

## Goal

Public repo an toàn, tạo main/protection/Pages đúng thứ tự, rồi chứng minh PR CI và deployment từ commit main tại URL production thực.

## Context Links

- [Brief acceptance 1–10](../reports/brainstorm-261012-1722-github-pages-cicd.md).
- [Phase 1 public-safety](./phase-01-start.md), [phase 2 site contract](./phase-02-publish-ready-site.md), [phase 3 workflow](./phase-03-pages-workflow.md).
- [Protection](https://docs.github.com/en/rest/branches/branch-protection#update-branch-protection), [required check discovery](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/troubleshooting-required-status-checks).
- [Environment policies](https://docs.github.com/en/rest/deployments/branch-policies), [Pages API](https://docs.github.com/en/rest/pages/pages).

## Overview / Key Insights

Main chưa tồn tại nên không thể bootstrap toàn bộ bằng PR. Seed ref creation là một thao tác được duyệt riêng; sau seed, mọi update main phải PR. Không seed workflow vào main: dùng candidate A đã kiểm chứng gồm publish-ready site nhưng chưa có pages.yml; real PR B thêm workflow/runbook. Như vậy không có bootstrap deployment chạy trước protection, không cần temporary trigger/PAT hay chấp nhận một run setup đỏ.

## Requirements

- Phase 1 exposure gate còn hiệu lực; maintainer duyệt baseline A, diff PR B và scope remote mutation/commit/push. Plan hoặc baseline manifest tự nó không phải authorization.
- Public repo, giữ develop, main là production/default. Source Pages = GitHub Actions, không branch publishing/custom domain.
- Main require PR + exact CI check từ GitHub Actions App, strict up-to-date, enforce admins; không bypass list, force push hoặc deletion. Solo maintainer: zero mandatory second reviewer, nhưng PR requirement vẫn active.
- Environment github-pages selected branch policy chỉ `main`, type branch, không tag/wildcard/protected-branches-any.
- Agent không tự merge PR, admin override hoặc auto-merge. Maintainer merge bằng flow bình thường sau gates.

## Architecture

Approved A without workflow → public source / seed main → PR-only protection → real PR B/Node22 CI → observed required check enforced → main-only environment + Pages workflow source → maintainer normal merge → actual main push build/upload/deploy → public browser proof.

Production artifact là dist của main run, không artifact PR. Không require successful deployment trước merge vì sẽ tạo dependency cycle.

## Related Code Files / Ownership

Tất cả file dưới `D:/1_workspace/0_personal/3_tihomo/src/landingpage/`:

- Modify: `README.md`, `docs/README.md` — runbook/links và trạng thái theo evidence, không copy YAML/settings inventories thành authority thứ hai.
- Create/update evidence: `plans/261012-1035-github-pages-cicd/reports/production-baseline.md`, `public-safety-preflight.md`, `github-pages-public-acceptance.md`.
- Evidence report có thể ghi URLs/SHA/tool output đã redacted; không raw secret/access-token data.
- Remote ownership: vinhltt/3_tihomo_landingpage visibility/default branch, initial main ref, main protection, Actions policy reads, github-pages environment/branch policy, Pages source.
- Không sửa parent workspace gitlink, rename/delete develop, hoặc thêm user-site repo trong scope này.

## Implementation Steps

1. Re-read current candidate/index/refs, phase evidence và admin/Actions eligibility. Review final exposure diff kể cả reports/plans mới; scan incremental candidate/history thay đổi từ phase 1. Confirm maintainer authorization trước public/settings/commit/push. Trên unapproved remote scope, hoàn tất local phases và chỉ ghi blocked prerequisite; không claim deploy.
2. Tạo baseline A từ candidate site đã duyệt, không `.github/workflows/pages.yml`; không bỏ sót file staged/untracked cần site runtime. Tạo PR snapshot B thêm final workflow + vận hành CI/CD thật. Dùng selective staging/commit được duyệt; không commit nguyên staging người dùng. Nếu dùng temporary index/worktree để tách tree, read-only với user index và dọn only own resources. Record exact A/B SHA/diff; validate A tree bằng full build, không gán working-tree proof cho khác commit.
3. Giữ Pages disabled và production writes/merges frozen trong bootstrap. Chỉ sau exposure approval chuyển repo public. Create main ref từ approved A; giữ develop. Seed main không workflow nên không có main Pages push run. Verify remote main tree đúng A và không pages.yml trước bước kế tiếp.
4. Ngay sau seed, apply PR-only protection/enforce admins, zero mandatory approvals, force push/deletion disabled; chưa yêu cầu check chưa tồn tại. Set default branch main. Đây là khoảng bootstrap có kiểm soát, không permission direct-push sau đó.
5. Publish B trên feature branch và mở PR vào main. PR chứa pages.yml/runbook thật, không empty commit hoặc dummy test status. Run full CI trên merge ref; PR không configure/upload/deploy Pages. Quan sát Node22 npm ci/build/check-dist, capture run URL/event/ref/head SHA/check context/App. Nếu CI không run, sửa trigger/Actions permissions/branch head workflow trong PR; không bypass bằng main push.
6. Chứng minh failure CI bằng một scoped throwaway bad link/asset commit trên PR nếu maintainer cho phép negative probe; observe build red và no artifact/deploy, sau đó revert probe trong PR và lấy CI pass trên SHA cuối. Không merge lỗi hoặc tạo outage main để “test failure”. Nếu không chạy live probe, report rejection proof phase 2 + static workflow dependency và ghi rõ live negative path chưa exercised.
7. Lấy observed successful build check name và App ID; GitHub yêu cầu check đã hoàn tất gần đây (trong bảy ngày). Add required checks strict:true và exact Actions provider, giữ PR/admin gates, không require deployment trước merge. Read-back protection; check phải tương ứng current applicable PR merge/head SHA. Nếu base đổi, update PR và chạy CI tự nhiên.
8. Create/configure github-pages environment trước deploy: custom_branch_policies:true, protected_branches:false; selected branch policy name:main/type:branch, no tags/extra policies. No required reviewer/wait timer cho automatic CD. Verify UI/API và remove only stale policy đã được xác định thuộc setting change scope; không rely vào environment auto-created.
9. Enable Pages Source GitHub Actions (`build_type: workflow`) bằng maintainer settings/API đã authorized. Không branch source/gh-pages hoặc configure-pages auto-enable. Read back public/main-default/protection/environment/Pages config. Nếu 401/403/404/422, xác định resource/auth/plan/policy với repo access và API error; không thêm PAT CI hoặc weaken gates.
10. Request maintainer normal merge PR xanh; agent không merge. Sau merge, inspect actual push main run: event push, headSha đúng merged main commit, build success, một artifact github-pages từ dist, deploy success, deployment SHA/page_url đúng. Không use PR artifact, không rerun seed/old commit, không ghi local build = deployment.
11. Tại public HTTPS root `https://vinhltt.github.io/3_tihomo_landingpage/`, browser desktop/mobile direct-open + reload đủ mười routes, locale equivalent pairs, assets/fonts/theme/header/anchors. Capture screenshot, console/network, absence of site-code tracking. Metadata self canonical/reciprocal hreflang/sitemap đúng public URL, không localhost/example. Fetch project robots và origin `/robots.txt` riêng; origin404 = không crawl restriction, nonrestrictive root policy cũng hợp lệ; root deny hoặc 5xx/auth error phải resolve trước crawl-readiness acceptance.
12. Ghi evidence matrix cho cả mười acceptance criteria. Main failure no-deploy được kiểm tra dependency `needs:build`/success semantics và negative build proof; chỉ ghi observed live failed-main evidence nếu thật sự có, không chủ động đưa lỗi vào main. Build failure giữ site cũ do không deploy; deployment-provider failure là trường hợp khác và không có atomic recovery guarantee trong brief.
13. Update owning README/docs trạng thái public/deployed chỉ sau observed successful deployment + browser. Evidence-doc changes sau launch phải PR + cùng CI, maintainer merge nếu cần; không direct push dù là docs. Rà exposure của report trước commit; không tạo loop cập nhật evidence cho mỗi docs-only deployment.
14. Document rollback: chọn một content revision đã publish thành công, tạo PR revert offending content changes vào main, giữ pages.yml đang hoạt động và required-check contract trong final PR tree → CI → maintainer merge → new main SHA build/deploy qua cùng pipeline. Không revert bootstrap B toàn bộ: việc đó xóa workflow duy nhất; workflow-free A chưa từng là successful public deployment. Lỗi first launch khi chưa có prior published revision phải corrective PR giữ CI/CD, không gọi là rollback về A. Không force push, manual artifact upload, old-run rerun hoặc disabled protection. Chỉ exercise real rollback khi cần/authorized; không tạo deployment thừa để claim proof.

## Todo

- [ ] P4.1 — Duyệt exposure/baseline A+B và bootstrap public/main/default/PR-only protection an toàn.
- [ ] P4.2 — Prove real PR Node22 CI, enforce observed required check, configure main-only environment và Pages Actions source.
- [ ] P4.3 — Sau maintainer merge, prove same-run main deployment và public desktop/mobile acceptance đủ mười routes.
- [ ] P4.4 — Ghi evidence/rollback runbook và cập nhật owning docs qua PR, không claim verification chưa exercised.

## Success Criteria / Verification

Read-only từ project root; replace PR/RUN/DEPLOYMENT bằng IDs lấy từ GitHub, không đoán:

```bash
gh api repos/vinhltt/3_tihomo_landingpage --jq '{private,default_branch,has_pages,permissions}'
gh api repos/vinhltt/3_tihomo_landingpage/branches/main/protection
gh api repos/vinhltt/3_tihomo_landingpage/environments/github-pages
gh api repos/vinhltt/3_tihomo_landingpage/environments/github-pages/deployment-branch-policies
gh api repos/vinhltt/3_tihomo_landingpage/pages --jq '{build_type,html_url,status,cname,https_enforced}'
gh pr checks PR --repo vinhltt/3_tihomo_landingpage
gh pr checks PR --repo vinhltt/3_tihomo_landingpage --required
gh run list --repo vinhltt/3_tihomo_landingpage --workflow pages.yml --branch main --event push --limit 10 --json databaseId,headSha,event,status,conclusion,url
gh run view RUN --repo vinhltt/3_tihomo_landingpage --json headSha,event,status,conclusion,url,jobs
gh api repos/vinhltt/3_tihomo_landingpage/actions/runs/RUN/artifacts
gh api repos/vinhltt/3_tihomo_landingpage/deployments/DEPLOYMENT/statuses
```

IDs là implementation-time evidence, không placeholders trong mã sản phẩm. Required-check capture phải đọc check-runs của applicable merge/head SHA; `gh pr checks --required` trước enforcement có thể trống và không chứng minh CI pass.

Report bắt buộc: A/B/main SHA; PR/run/deployment URLs; artifact ID/name/same-run match; setting read-back; actual routes/assets/metadata; screenshots + console/network; negative-path proof loại observed/static; remaining failure/verification limits; rollback procedure chưa exercised nếu chưa chạy.

## Risk Assessment / Security

- Exposure irreversible: public chỉ sau fresh approved gate; private lại không thu hồi source/history.
- Không có workflow trên seed: tránh initial unprotected publish; PR CI phải run được từ B trước enforcement.
- Required check chưa observed: không add guessed context hoặc custom synthetic status.
- Concurrent production merges/reruns: nghiệm thu merge một PR/lần, chờ deploy; không hứa native queue newest-SHA.
- Provider/cache delay: observe thực URL/artifact revision; deployment green không đủ nghiệm thu browser.
- Main write permissions còn bypass: stop before merge/publication, đọc lại settings/admin enforcement.

## Next Steps / Rollback

Complete chỉ khi toàn bộ acceptance criteria có đúng loại bằng chứng và không còn blocker. Public website rollback là content-revert PR giữ pipeline; first launch chưa có prior published version thì corrective PR. Source exposure không có rollback tương đương. Không tự merge hoặc broaden scope khi gặp prerequisite thiếu.
