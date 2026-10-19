# Red Team Review — 2026-10-12

Plan review only. Không implementation, lint/build/test, settings mutation hoặc deploy bởi reviewers.

## Review coverage

Ba independent reviewers theo scaling bốn phases: Security Adversary, Assumption Destroyer và Failure Mode Analyst. Standard verification: Fact Checker + Contract Verifier. Controller giữ scope/complexity review và integration ownership.

| Reviewer | Kết quả |
|---|---|
| Security | Không có substantiated Critical/High/Medium finding; không chứng nhận source/history sạch |
| Assumptions/contracts | Một Medium ambiguity trong CSS asset-resolution instruction |
| Failure modes | Một Medium rollback gap của bootstrap workflow |

Findings: 2 total — 0 Critical, 0 High, 2 Medium. Accepted: 2. Rejected: 0. Questions asked: 0; cả hai là technical corrections không có trade-off đổi outcome/constraint/decision người dùng, nên sửa trực tiếp. Không cắt hoặc mở rộng scope.

## Finding 1: External CSS resolution context — Medium, Accepted

- Location trước sửa: phase-02-publish-ready-site.md:71, step9.
- Evidence: scripts/check-dist.mjs:84-88 nhận resolution base; :210-211 dùng page route cho inline CSS; :237-248 dùng stylesheet assetRoute cho CSS ngoài. Base.astro:2 import stylesheet; global.css:6,15,24,33,42,51 có sáu font consumers.
- Failure scenario [INFERENCE]: stylesheet /base/_astro/site.css có ../fonts/font.woff2; browser resolve /base/fonts/font.woff2 nhưng checker nếu dùng article page URL sẽ resolve /base/blog/fonts/font.woff2 và đánh sai valid/broken asset.
- Disposition: Accept. Giữ current caller distinction đúng của checker; HTML/inline CSS resolve document URL, external CSS resolve public stylesheet URL, rồi mới enforce base/strip sang dist path.
- Applied to: phase2 step9. Không thêm helper framework/dependency hoặc sửa source trong phiên plan.

## Finding 2: Reverting bootstrap deletes sole workflow — Medium, Accepted

- Location trước sửa: phase-04-production-bootstrap-acceptance.md:66, step14; phase3 rollback section và plan criterion10 summary cần cùng contract.
- Evidence: phase4:54-59 xác định A không workflow/B thêm workflow; package.json:11 chỉ là build script, không workflow trigger; README.md:18 chưa có deploy; brief:60 yêu cầu rollback qua pipeline và :99 workflow mới.
- Failure scenario [INFERENCE]: whole revert B xóa pages.yml trên merge tree; required CI không thể run từ tree đó, PR không merge bình thường; ngay cả bypass cũng không main deployment. A chưa từng là successful published revision.
- Disposition: Accept. Content-revert PR phải chọn previously successful public revision và giữ working workflow/required-check contract. First-launch failure chưa có prior public revision dùng corrective PR giữ CI/CD. Không thêm dispatch/PAT/bypass hoặc test outage.
- Applied to: phase4 step14/Next Steps, phase3 rollback note, plan acceptance10/decisions.

## Whole-Plan Consistency Sweep

Decision deltas: 2. All five plan/phase files reread during final structural/semantic validation. Reconciled: CSS resolution context; normal content rollback versus bootstrap removal; first-launch corrective PR. Source-fact claims không đổi; không đổi approved option A/public decision, A/B bootstrap, ten routes, no-data/product claims hoặc permissions. Origin/project robots và observed/static evidence separation được giữ nguyên.

Không có unresolved contradiction sau sweep. Final CLI/link/task results nằm trong [plan validation](./plan-validation.md). All implementation tasks pending; no reviewer result được dùng thay production evidence.
