# Tài liệu TiHoMo Landing Page

Điểm vào dành cho người phát triển, đội nội dung và AI làm việc trong repository landingpage. [README gốc](../README.md) sở hữu hướng dẫn làm việc trong workspace TiHoMo.

## Nguồn và ranh giới thẩm quyền

| Cần biết | Nguồn sở hữu |
|---|---|
| Phạm vi của landingpage và ranh giới với app tài chính | [Quy tắc sub-workspace](../.specify/configurations/rules.md) |
| Đăng ký sub-workspace và cấu hình commands | [Cấu hình TDK](../.specify/.specify.json) |
| Định hướng AI-native đã chọn, persona, giới hạn agent và giả thuyết SEO/đầu tư | [Chiến lược sản phẩm](product/ai-native-strategy.md) — sở hữu lý do và hướng kiểm chứng, không thay spec/app runtime |
| Bối cảnh bàn giao cho đội landingpage và SEO | [Brief prelaunch](handoff/epic-1/20261011-epic-1-landingpage-prelaunch.md) |
| Điều hướng Discovery/PRD và readiness của bộ draft | [Dashboard handoff](handoff/epic-1/index.md) |

Spec và project memory được quản lý tại workspace TiHoMo root theo [quy tắc phạm vi](../.specify/configurations/rules.md). Bộ `handoff/` trong repository này là tài liệu bàn giao có thời điểm và provenance, không thay thế nguồn sản phẩm tại workspace root hoặc chứng minh trạng thái runtime hiện tại.

## Đọc brief trước khi chuẩn bị nội dung

- [Discovery](handoff/epic-1/discovery.md) dẫn tới persona giả thuyết và evidence/giới hạn claim tại thời điểm bàn giao. Định hướng AI trung tâm và persona ưu tiên hiện hành nằm ở [chiến lược sản phẩm](product/ai-native-strategy.md); không sửa snapshot cũ để coi như đã được xác nhận qua nghiên cứu.
- [PRD draft](handoff/epic-1/epic-prd.md) dẫn tới scope đề xuất và các slice candidate; không phải phạm vi triển khai đã duyệt.
- [Open questions](handoff/epic-1/epic-prd/open-questions.md) sở hữu các quyết định còn thiếu, đặc biệt hành động CTA và cơ chế tiếp nhận dữ liệu thật.

Theo [ranh giới thẩm quyền của handoff](handoff/epic-1/index.md#authority-boundary), Discovery/PRD không mint yêu cầu; chỉ child `spec.md` qua workflow `/tdk-specify` mới làm việc đó. Không chuyển snapshot “có source” thành claim “sẵn dùng” hoặc chuyển định hướng thành cam kết ra mắt.

Các đường dẫn nguồn trong brief có thể thuộc workspace gửi, không phải checkout landingpage. Dùng các liên kết cục bộ ở trên để đọc bản bàn giao; xác minh nguồn và phê duyệt tại workspace root trước khi dùng làm authority triển khai.

## Brief và nghiệm thu local

[Brief đã chốt](../plans/reports/brainstorm-261011-2028-tihomo-prelaunch-landingpage.md) — contract truyền thông AI-native, D · Jade Flow, VI/EN và Sáng/Tối/Hệ thống cho site Astro + Markdown local, không thu dữ liệu. [Báo cáo nghiệm thu](../plans/reports/jade-flow-local-acceptance.md) ghi bằng chứng trong phạm vi/lần kiểm tra của chính báo cáo, khác với prototype; không tự xác nhận thay đổi sau đó hoặc app đã public. Chiến lược sở hữu hướng đích, source sở hữu thực thi, báo cáo sở hữu kết quả quan sát.

## Chạy và kiểm tra site local

Lệnh cài, chạy dev, build và preview nằm trong [README gốc](../README.md#chạy-local); `package.json` sở hữu định nghĩa script. [Astro config](../astro.config.mjs) và [checker](../scripts/check-dist.mjs) đã có contract publish-aware dưới project base. [Nghiệm thu local](../plans/261012-1035-github-pages-cicd/reports/base-path-local-acceptance.md) không chứng minh production đã publish hoặc crawl/index được; origin robots và URL public phải được kiểm tra lại sau deployment.

## Giữ tuyến tài liệu nhỏ

Tài liệu này chỉ điều hướng và giữ ranh giới giữa nguồn hiện hành với bản bàn giao. Cấu hình, script và mã nguồn tiếp tục sở hữu chi tiết thực thi; không sao chép chúng thành một bộ hướng dẫn thứ hai.

## Chuẩn bị deploy

[Brief CI/CD GitHub Pages](../plans/reports/brainstorm-261012-1722-github-pages-cicd.md) — contract chuẩn bị publish, phương án pipeline, gate nghiệm thu và rollback; chưa phải bằng chứng đã deploy.

[Plan triển khai](../plans/261012-1035-github-pages-cicd/plan.md) — gate source disclosure, publish-ready site, workflow và bootstrap production; còn chờ quyền remote và bằng chứng public.

