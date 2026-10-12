# Workflow contract review — 2026-10-12

**PASS actionlint/static contract; chưa observed GitHub CI/OIDC/deploy.** Workflow: [pages.yml](../../../.github/workflows/pages.yml). Operating/bootstrap/rollback route: [README](../../../README.md#cicd-github-pages).

## Tool / upstream evidence

- Official release APIs và tag objects resolved trong execution; annotated tags peeled tới commit nếu cần. Đã đọc manifest của từng pinned commit, không lấy SHA từ ví dụ hoặc nhánh floating.
- Project Node22 khác action runtime Node24; Ubuntu hosted runner là target. Additional isolated npm ci/full build trên official portable Node22.23.3 đã pass; đây là Windows local proof, không gọi đó là GitHub Ubuntu/OIDC proof.
- Actionlint **1.7.12**, official Windows amd64 release archive verified against release checksums: command `.github/workflows/pages.yml`, exit 0, zero diagnostics. Không cài tool vào project dependencies.

| Official action | Reviewed release | Pinned commit |
|---|---|---|
| [checkout](https://github.com/actions/checkout/releases/tag/v7.0.1) | v7.0.1 | `3d3c42e5aac5ba805825da76410c181273ba90b1` |
| [setup-node](https://github.com/actions/setup-node/releases/tag/v7.1.0) | v7.1.0 | `949feb2413d6458794dcd2491c4babbbce0c15c1` |
| [configure-pages](https://github.com/actions/configure-pages/releases/tag/v6.0.0) | v6.0.0 | `45bfe0192ca1faeb007ade9deae92b16b8254a0d` |
| [upload-pages-artifact](https://github.com/actions/upload-pages-artifact/releases/tag/v5.0.0) | v5.0.0 | `fc324d3547104276b827a68afc52ff2a11cc49c9` |
| [deploy-pages](https://github.com/actions/deploy-pages/releases/tag/v5.0.1) | v5.0.1 | `368f82528645a54fb793d4d04e342629a3f51346` |

## Static event/job matrix

| Event/state | Build | Pages artifact | Deploy |
|---|---|---|---|
| PR target main, success | npm ci + existing full build/check | None | Guard skipped |
| PR target main, failure | Red build/check | None | Guard skipped |
| Push main, success | Same checked-out event tree, build once | One `github-pages`, dist root | Same-run artifact, needs build |
| Push main, failure | Red build/check | Upload skipped by implicit success condition | Skipped by needs success |
| develop push / other PR target | No trigger | None | None |

Đây là source/schema evidence, không phải actual GitHub run. Không synthetic status, workflow dispatch, pull_request_target, workflow_run, path filter, continue-on-error hoặc always guard.

## Privilege / artifact boundaries

- Default token contents:read; checkout persist-credentials:false, event ref mặc định. Build không configure Pages hoặc xin quyền publish.
- Deploy override chỉ pages:write/id-token:write, needs build + explicit push/main condition, environment github-pages; không checkout/install/build source ở job có quyền ghi.
- Configure-pages enablement:false; nguồn config site/base checked in. Bootstrap settings phải có trước deploy, không auto-enable/PAT.
- Deploy-pages artifact_name đúng `github-pages`; upstream action lấy artifact trong current workflow run. Không arbitrary run ID hoặc PR artifact.
- **Observed local packaging:** GNU tar 1.35, upstream dereference/hard-dereference/path/exclusion options và Windows --force-local adaptation; tar có 23 regular files, đúng mười HTML routes, không symlink/hardlink, không repository wrapper/source/docs/plans/node_modules. Actual dist không có symlink. Đây là packaging proof local, chưa phải GitHub artifact ID/provenance receipt.

## Concurrency / rollback

Main group pages-main, cancel-in-progress:false; PR groups theo PR number và có thể cancel outdated PR run. Active main build+deploy serial; native pending replacement không FIFO/newest-SHA guarantee. Không rerun old SHA.

Rollback dùng content-revert PR giữ pages.yml và required-check contract. Không revert bootstrap B wholesale; seed A không workflow không phải prior public deployment. First-launch failure dùng corrective PR.

## Remaining bootstrap evidence

[Baseline A/B](production-baseline.md) đã được duyệt; exact A tree build/secret scan pass và đã seed main không workflow. Real PR positive/negative/recovery CI observed; exact check/App đã enforce strict/admin/PR protection, main-only environment và Pages Actions source đã read-back. Evidence head `26c3ee5` pass Node22 CI sau provider delay; maintainer merge, main same-run artifact/deployment/public browser proof còn pending. Không tự merge hoặc dùng old-SHA green; [remote acceptance receipt](github-pages-public-acceptance.md) sở hữu trạng thái.

## Independent scoped review

- Reviewer URL/metadata/checker slice: zero patch-introduced findings; inspected helper consumers, shared English slugs, metadata, CSS URL context và preserved guards.
- Security reviewer workflow/bootstrap slice: zero concrete exploit/contract findings; inspected token isolation, guards, needs, artifact provenance contract, main concurrency và approval/rollback design. Không rerun checks, không remote mutation.
- Security reviewer không certify phần operating runbook được controller thêm trong lúc review; controller đã đối chiếu runbook với accepted bootstrap/rollback gate và live gh run list help.
- Audit warnings xuất hiện sau independent review; controller đọc primary advisories và scoped source/artifact reachability, [ghi riêng trong local evidence](base-path-local-acceptance.md#dependency-audit-observation), không gán đó thành independent audit.
