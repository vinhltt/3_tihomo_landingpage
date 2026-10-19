# GitHub Pages / Actions contract research

Researcher: GitHubDeployResearch. Status: DONE_WITH_CONCERNS. Không sửa files/settings/refs, không chạy build/test/deploy.

## Snapshot action releases

| Action | Stable release observed |
|---|---|
| actions/checkout | v7.0.1 |
| actions/setup-node | v7.1.0 |
| actions/configure-pages | v6.0.0 |
| actions/upload-pages-artifact | v5.0.0 |
| actions/deploy-pages | v5.0.1 |

Resolve release tags to verified upstream commit SHAs during execution; no SHA invented. Action runtime Node24 khác project Node22. Release metadata/tagged manifest ưu tiên hơn stale example snippets; không claim mọi old major unsupported.

## Contract và quyết định controller

- Workflow `pull_request` target main / `push` main. Checkout event SHA/merge ref, không floating main. Stable Pages build job, no path filters/skip/continue-on-error.
- Official configure-pages đọc Pages API. Controller chọn đặt action ở deploy job, không cấp pages:read cho build. Build contents:read; deploy pages:write/id-token:write và enablement:false. Đây vẫn option A, không PAT/auto-enablement.
- One github-pages artifact từ dist per successful main run, zero artifact/deploy PR. deploy-pages lookup theo current run; no rebuild/old artifact branch.
- Whole-workflow main concurrency với cancel-in-progress:false; PR groups riêng. Native concurrency có thể replace pending, không strict latest-SHA/FIFO guarantee. Không thêm stale guard ngoài brief; rollback qua PR revert, không old run rerun.
- Main PR requirement phải giữ object reviews với required_approving_review_count:0 cho solo owner, strict required check, enforce_admins, force/deletion false. Required check phải recently observed (7 ngày), exact context/App lấy từ check-runs. Không require successful deployment before merge.
- Environment selected custom branch policies main/type branch ONLY, không “any protected branch”, wildcard/tag policy. Create trước first deploy, không dựa auto-created environment.
- Controller chọn bootstrap an toàn hơn recommendation seed-all-workflow: A approved site baseline KHÔNG workflow; B PR thật thêm workflow/runbook. Pages disabled khi seed main, PR-only protection ngay sau seed; observe B CI rồi enforce required check; configure environment/Pages; maintainer merge normal. Không temporary trigger/fake status/initial publish trước protection. Các seed/commit/push/settings vẫn cần execution authorization, không thực hiện trong plan.
- APIs hỗ trợ visibility/default branch, ref create, protection, environment branch policies và Pages build_type:workflow. Permission/auth/plan errors phải phân loại, không weaken gates/PAT.

## Nguồn chính thức

- [Custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Permissions](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions)
- [Pull request workflow events](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request)
- [Concurrency](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency)
- [SHA pinning](https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions)
- [Required checks](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/troubleshooting-required-status-checks)
- [Branch protection API](https://docs.github.com/en/rest/branches/branch-protection#update-branch-protection)
- [Environment branch policies](https://docs.github.com/en/rest/deployments/branch-policies)
- [Pages API](https://docs.github.com/en/rest/pages/pages)
- Release APIs: https://api.github.com/repos/actions/checkout/releases/latest ; https://api.github.com/repos/actions/setup-node/releases/latest ; https://api.github.com/repos/actions/configure-pages/releases/latest ; https://api.github.com/repos/actions/upload-pages-artifact/releases/latest ; https://api.github.com/repos/actions/deploy-pages/releases/latest

Chưa xác minh actual Node22 runner, baseline SHA, security clean hoặc live deployment. Các proof đó là acceptance execution, không inference thành kết quả đã đạt.
