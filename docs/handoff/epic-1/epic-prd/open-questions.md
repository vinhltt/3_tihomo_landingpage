---
source_epic: "epic-1"
artifact_type: "open-questions"
status: draft
created: "2026-10-11T18:26:29+07:00"
---

# Epic PRD Open Questions

> Chỉ lưu câu hỏi và quyết định bền vững; không có raw transcript. Interview alignment disabled. Câu hỏi blocking ngăn PRD tự nhận ready cho thiết kế/breakdown, không ngăn đọc bộ handoff draft.

## Blocking Questions

**Số câu hỏi blocking: 1.** Chưa có câu trả lời được xác nhận từ brief/discovery hoặc repository landingpage.

| Question | Why it blocks | Owner | Source |
|---|---|---|---|
| CTA prelaunch sẽ thực hiện hành động gì và tiếp nhận thật ở đâu: chỉ nhận tin, đăng ký private access, hay chưa thu đăng ký? Nếu thu, cần chốt kênh nhận/người quản lý và mục đích dùng dữ liệu để nội dung quyền riêng tư phản ánh đúng. Khuyến nghị hiện tại là nhận tin với dữ liệu tối thiểu, không private access khi chưa có chương trình thật. | Thay đổi journey, ranh giới slice signup và nhu cầu xử lý dữ liệu. Chưa có cơ sở chọn một kênh thật hoặc thiết kế form “thành công” đáng tin; không thể tự bịa provider/đầu mối hay suy ra một backend tiếp nhận đã tồn tại. | Chủ sản phẩm; phối hợp đội landingpage vận hành | [problem.md — bản nháp CTA/Open Questions/Constraints](../discovery/problem.md#open-questions), [mvp-scope.md — MVP Cutline](../discovery/mvp-scope.md#mvp-cutline) |

Nếu chọn không thu đăng ký ở giai đoạn này, phải cập nhật PRD/slice-map bỏ hoặc điều chỉnh signup và chuyển CTA sang nội dung phù hợp; không để một slice Must không có luồng thật. Không tự coi lựa chọn này đã được duyệt.

## Non-Blocking Questions

Các câu hỏi này không quyết định ranh giới thiết kế epic ở mức hiện tại, nhưng một số cần duyệt trước publish. Chúng không được dùng để nâng confidence hoặc bỏ qua review public claim.

| Question | Follow-up path | Source |
|---|---|---|
| Persona chính ưu tiên người bận rộn nhiều tài khoản hay người tập trung ngân sách? | Đề xuất giữ lợi ích cá nhân ở hero, power user là nhóm phụ; review copy trước publish | [personas.md — Open Questions](../discovery/personas.md#open-questions) |
| Những claim/screenshot nào được phép công khai dưới nhãn “nền tảng hiện có — chưa public”? | Chủ sản phẩm duyệt dựa trên evidence; có source vẫn không tự chuyển thành sẵn dùng. Là gate publish nội dung, không bắt PRD triển khai app | [mvp-scope.md — In Scope Candidates/Risks](../discovery/mvp-scope.md#in-scope-candidates) |
| Chọn cụm bài giáo dục nào trước: thu–chi, đối chiếu, ngân sách hay automation? | Content team đề xuất nhóm nhỏ từ discovery, review chất lượng; không cần số volume giả | [mvp-scope.md — MVP Cutline](../discovery/mvp-scope.md#mvp-cutline) |
| Giữ nguyên câu định vị đề xuất hay chỉnh cách diễn đạt? | Review thông điệp; không đổi scope app hay nâng AI thành claim đã có | [problem.md — Problem](../discovery/problem.md#problem) |
| Thứ tự tương lai của AI reconciliation, MISA, đầu tư, MCP, hook và custom report? | Tách thành quyết định cho epic app; trong site hiện tại chỉ giữ nhãn định hướng, không release date | [mvp-scope.md — Open Questions](../discovery/mvp-scope.md#open-questions) |
| Có đưa các feature bổ sung vào nội dung site không? | Mặc định chưa quảng bá như roadmap cam kết; chủ sản phẩm chọn từ candidate | [mvp-scope.md — In Scope Candidates](../discovery/mvp-scope.md#in-scope-candidates) |
| Bổ sung constitution/context authority còn thiếu bằng workflow nào? | Ngoài PRD này; giữ alignment NOT CHECKED và không tự sửa memory | [problem.md — Constraints](../discovery/problem.md#constraints) |

Framework, deploy và cách xử lý tiếp nhận được cụ thể hóa ở thiết kế downstream sau khi blocker sản phẩm được giải quyết; không thêm một kiến trúc tùy đoán trong PRD. Pricing và ngày public được cố ý không đặt vì discovery chưa có đầu vào và không cần để mô tả nội dung prelaunch.

## Assumptions Needing Evidence

| Assumption | Evidence needed | Confidence | Source |
|---|---|---|---|
| Người dùng cá nhân tiếng Việt là target mở đầu phù hợp | Chủ sản phẩm xác nhận và phản hồi người dùng thật | medium | [personas.md — Assumptions](../discovery/personas.md#assumptions) |
| Automation có kiểm soát là câu chuyện dễ hiểu và có giá trị | Review messaging với người dùng mục tiêu; không cần claim độc quyền | medium | [problem.md — Problem](../discovery/problem.md#problem) |
| Người truy cập có nhu cầu để lại thông tin nhận tin trước public | Quan sát đăng ký thật sau khi kênh tiếp nhận được quyết định | low | [problem.md — Open Questions](../discovery/problem.md#open-questions) |
| Cụm chủ đề SEO được đề xuất có lượng tìm kiếm phù hợp | Nghiên cứu keyword/search data có nguồn; chưa có số volume trong discovery | low | [mvp-scope.md — MVP Cutline](../discovery/mvp-scope.md#mvp-cutline) |
| Feature có implementation là feature đủ điều kiện quảng cáo sẵn dùng | Không chấp nhận giả định này; cần runtime và review public readiness riêng | low, hiện chưa đủ evidence | [mvp-scope.md — quy tắc trạng thái](../discovery/mvp-scope.md#in-scope-candidates) |

## Source Trace

| Topic | Discovery source |
|---|---|
| Blocker hành động CTA và kênh tiếp nhận | [problem.md — Open Questions](../discovery/problem.md#open-questions), [mvp-scope.md — MVP Cutline](../discovery/mvp-scope.md#mvp-cutline) |
| Persona và định vị chưa interview | [personas.md — Assumptions/Open Questions](../discovery/personas.md#assumptions), [discovery.md — Summary](../discovery.md#summary) |
| Feature status và no-gos marketing | [mvp-scope.md — In Scope Candidates/Risks](../discovery/mvp-scope.md#in-scope-candidates) |
| SEO chưa có số liệu và constitution chưa đối chiếu | [problem.md — Constraints](../discovery/problem.md#constraints) |

**Readiness consequence:** còn 1 Blocking Question ⇒ **NOT READY** cho epic HLD/breakdown. Bộ draft vẫn dùng được để review nội dung và quyết định tiếp theo; không tự tạo child spec từ seed candidate.
