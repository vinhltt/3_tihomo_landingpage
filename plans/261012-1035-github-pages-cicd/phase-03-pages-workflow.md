---
phase: 3
title: "Phase 3: CI/CD GitHub Pages"
status: pending
priority: P1
effort: ""
dependencies: [2]
---

# Phase 3: CI/CD GitHub Pages

## Goal

Tạo một workflow explicit: PR vào main chỉ build/check; push main build một lần, upload đúng dist artifact của run rồi deploy với quyền tối thiểu.

## Context Links

- [Brief option A, acceptance 1–3/8/10](../reports/brainstorm-261012-1722-github-pages-cicd.md).
- [Codebase evidence](./reports/codebase-evidence.md), [Astro publish research](./research/astro-publish-contract.md).
- [GitHub custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
- [Workflow permissions](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions), [concurrency](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency).

## Overview / Key Insights

Chưa có .github/workflows trong checkout/remote. Build hiện có đủ Astro check + build + check-dist; không thêm wrapper build hoặc gh-pages branch. configure-pages gọi Pages metadata API; chuyển bước này vào deploy job để PR/build chỉ cần contents:read, thay vì mở quyền pages cho build.

## Requirements

- Triggers duy nhất: pull_request target main và push main. Không path filter, dispatch, PR closed, pull_request_target hoặc workflow_run.
- Stable job ID `build`, name `Pages build`; bảo vệ main dùng check context/App thực tế quan sát trên PR, không đoán tên display.
- Ubuntu hosted runner, project Node22, npm cache theo package-lock.json, npm ci và npm run build. Không Astro upgrade, npm --if-present hoặc continue-on-error.
- Build token chỉ contents:read. Deploy token pages:write/id-token:write; không contents:write/PAT/admin credential.
- Một artifact `github-pages` từ dist root trên push main thành công, zero Pages artifacts/deploy trên PR. Deploy không checkout source, install hoặc rebuild.
- Workflow không tự enable Pages; settings bootstrap ở phase 4.

## Architecture

PR/main event → `build` → npm ci/build/check-dist → main-only upload dist. `deploy` cần build thành công và push refs/heads/main → main-only environment → configure-pages enablement:false → deploy-pages artifact của same run.

Configure-pages trong deploy được quyền đọc từ pages:write; không static_site_generator Astro hoặc token enablement riêng. Site/base là checked-in config, build không phụ thuộc Pages tồn tại.

## Related Code Files / Ownership

- Create: `D:/1_workspace/0_personal/3_tihomo/src/landingpage/.github/workflows/pages.yml`.
- Modify: `D:/1_workspace/0_personal/3_tihomo/src/landingpage/README.md`, section vận hành CI/CD; chưa ghi site deployed.
- Create: `D:/1_workspace/0_personal/3_tihomo/src/landingpage/plans/261012-1035-github-pages-cicd/reports/workflow-contract-review.md`.
- Read-only: package.json/package-lock.json, Astro config, checker và phase 2 evidence.
- No delete. Execution tuần tự; không hai agent cùng sửa README/checker.

## Implementation Steps

1. Đọc release API/tagged manifests của official actions tại execution; resolve reviewed stable release → upstream commit SHA (peeled commit nếu annotated tag). Ghim full SHA với comment version; không invent SHA hoặc dùng master/main/latest. Research snapshot: checkout v7.0.1, setup-node v7.1.0, configure-pages v6.0.0, upload-pages-artifact v5.0.0, deploy-pages v5.0.1. Action-runtime Node24 độc lập project Node22; refresh nguồn nếu phiên bản thay đổi.
2. Define workflow name `GitHub Pages`, triggers không path-filter. Set default permissions contents:read. Build có explicit name `Pages build`, run trên ubuntu-latest; checkout event ref mặc định, persist-credentials:false, không checkout floating main trên PR/push.
3. Setup project Node22, cache:npm, cache-dependency-path:package-lock.json; npm ci rồi npm run build nguyên script. Mỗi run check chính tree được checkout; không bỏ checker để runner xanh.
4. Build success → upload-pages-artifact path:dist, name:github-pages, điều kiện `github.event_name == 'push' && github.ref == 'refs/heads/main'`. Không upload source, docs, plans, package files, node_modules hoặc external symlink content. Inspect actual archive root, không wrapper repo folder. Không broaden permissions để upload.
5. Define deploy `needs: build`, same explicit push/main condition, không always()/continue-on-error. Job permissions pages:write/id-token:write; environment name github-pages và URL từ deployment step page_url. Không execute code PR trong job có quyền ghi.
6. Configure-pages ở đầu deploy, enablement:false, không static_site_generator, không auto-enablement. Sau đó deploy-pages với artifact_name:github-pages. API action chọn artifact từ current run; không run_id arbitrary hoặc rebuild trong deploy.
7. Workflow-level concurrency group main riêng `pages-main`, PR group theo PR number; main cancel-in-progress:false, không hủy deployment đang chạy. Giữ build+deploy trong cùng main group để giảm reorder. Native concurrency có thể thay pending run, không FIFO/strict latest-SHA guarantee; không thêm stale-SHA guard ngoài brief. Vận hành không rerun old SHA; rollback chỉ PR revert.
8. Review YAML/schema bằng actionlint nếu available; chưa có tool thì resolve/install tool ngoài project dependencies, không tạo test framework. Review event matrix, permissions, needs, artifact path/name và deployment environment với source action manifests. Npm local build đã proof phase 2; không chạy giữa từng edit.
9. Record exact action refs, observed validation/tool versions và bootstrap dependency. Chuẩn bị hai snapshot được duyệt ở phase 4: A = publish-ready site không workflow; B = real PR thêm workflow + runbook. Workflow file chỉ lên remote trong B, tránh push main seed tự deploy trước khi protection/settings đã established.

## Todo

- [x] P3.1 — Tạo pages.yml với Node22/build gate, pinned actions và event/permission/artifact boundaries.
- [x] P3.2 — Review YAML và concurrency/job matrix; ghi operating contract và chuẩn bị workflow PR snapshot.

## Success Criteria / Verification

```bash
gh api repos/actions/checkout/releases/latest --jq '{tag_name,html_url}'
gh api repos/actions/setup-node/releases/latest --jq '{tag_name,html_url}'
gh api repos/actions/configure-pages/releases/latest --jq '{tag_name,html_url}'
gh api repos/actions/upload-pages-artifact/releases/latest --jq '{tag_name,html_url}'
gh api repos/actions/deploy-pages/releases/latest --jq '{tag_name,html_url}'
actionlint .github/workflows/pages.yml
```

| Event/state | Build | Artifact | Deploy |
|---|---|---|---|
| PR target main, pass | Required check green | None | Skipped |
| PR target main, fail | Required check red | None | Skipped |
| Push main, pass | Full gate green | One dist artifact | Same-run artifact |
| Push main, fail | Gate red | None | Skipped by needs |
| develop push / PR other target | No matching workflow trigger | None | None |

Report static/schema proof separately from observed GitHub runs. Phase 4 must exercise real PR and main deployment before accepting 1–3/8/9. Không dùng local workflow simulation để claim OIDC/Pages production passed.

## Risk Assessment / Security

- Example docs lag latest releases: resolve from release + tagged source, không copy stale YAML.
- Required context rename: giữ job name stable; cập nhật protection trước rename contract.
- Old rerun có thể publish old commit: no rerun old-SHA operating rule, dùng PR revert.
- Pages chưa enabled hoặc policy cấm action: fail deployment; sửa prerequisite/settings có authorization, không mở token quyền hoặc bypass.

## Next Steps / Rollback

Phase 4 tạo seed main không workflow rồi đưa workflow qua PR thật. Trước merge có thể sửa scoped YAML trên feature branch; sau merge rollback content qua PR giữ workflow/build-check contract, không direct push main hoặc revert bootstrap B toàn bộ.
