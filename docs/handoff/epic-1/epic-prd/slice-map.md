---
source_epic: "epic-1"
artifact_type: "slice-map"
status: draft
created: "2026-10-11T18:26:29+07:00"
---

# Epic Slice Map

> Slice keys là nhãn điều hướng, không phải mã yêu cầu hay work item. Các seed bên dưới là candidate product text; chưa có child ID/spec và chưa được phép dùng chúng để bỏ qua readiness gate hoặc task breakdown.

## Slice Table

| Slice key | Capability | Primary actor | Outcome | Depends on | Suggested child spec title | Priority |
|---|---|---|---|---|---|---|
| prelaunch-homepage | Giới thiệu TiHoMo và phân biệt nền tảng hiện có với định hướng; FAQ về trạng thái sản phẩm | Người tìm công cụ quản lý tài chính cá nhân | Hiểu giá trị, biết app chưa public và biết hướng tiếp theo; không nhầm roadmap với feature sẵn dùng | none; CTA nhận đăng ký phụ thuộc quyết định tiếp nhận | Homepage prelaunch TiHoMo với feature status trung thực | Must |
| launch-updates-signup | Tiếp nhận quan tâm/nhận tin bằng kênh thực, minh bạch dữ liệu và mục đích | Người muốn được thông báo khi ra mắt | Có cách đăng ký và phản hồi thật, không phải form thành công giả | Blocking question về CTA, kênh nhận và việc dùng dữ liệu; không phụ thuộc toàn bộ các slice | Đăng ký nhận tin TiHoMo trước public | Must, sau khi chốt blocker |
| finance-learning-hub | Một nhóm nội dung giáo dục về thu–chi, đối chiếu, ngân sách hoặc automation, có điều hướng và có thể tìm kiếm | Người đang tìm cách giải quyết vấn đề tài chính cá nhân | Nhận giá trị từ nội dung trước khi app public; hiểu chỗ nào là phương pháp và chỗ nào là định hướng sản phẩm | none; ưu tiên cụm bài được chủ sản phẩm/content review | Nội dung SEO giáo dục tài chính cá nhân cho TiHoMo prelaunch | Should |

Định hướng AI/MISA/đầu tư/MCP/hook/custom reports nằm trong nội dung có nhãn trạng thái của homepage/hub, **không phải slice xây app**. Copy quyền riêng tư của form thuộc signup; thông tin trạng thái/quyền AI đề xuất thuộc homepage. Không tạo slice riêng cho công việc nội bộ không có outcome người dùng.

## Suggested Build Order

1. Xác định câu chuyện của `prelaunch-homepage`: lợi ích, trạng thái prelaunch, phạm vi claim và bước tiếp theo. Đây là thứ tự ưu tiên sản phẩm, không phase triển khai.
2. `finance-learning-hub` có thể chuẩn bị độc lập với signup từ các chủ đề discovery; chọn ít nội dung sâu, không cần đợi module AI/MCP hoàn thiện.
3. `launch-updates-signup` chỉ có phạm vi đáng tin sau khi chủ sản phẩm chốt CTA/kênh tiếp nhận và việc dùng dữ liệu. Homepage có thể được mô tả độc lập; không phát hành nút/form nhận đăng ký giả trong lúc chờ.

User journey đề xuất: tìm thấy nội dung hữu ích hoặc homepage → hiểu giá trị và trạng thái của TiHoMo → xem feature/FAQ hoặc bài liên quan → đăng ký nhận tin nếu luồng đã được quyết định và hoạt động thật. Confidence **medium**, chưa có interview hay dữ liệu hành vi.

## Child Spec Seeds

Chỉ là seed text cho downstream breakdown; không tạo child spec hoặc phân bổ ticket trong lần PRD này. Chỉ sau khi readiness gate được giải quyết và workflow thiết kế/breakdown tạo seeds, mới dùng `/tdk-specify` với child ID hợp lệ.

### prelaunch-homepage

> Tạo homepage công khai trước public app cho TiHoMo, ưu tiên lợi ích của người dùng cá nhân. Trình bày định vị automation có kiểm soát, vấn đề, nền tảng hiện có và định hướng phát triển theo bảng trạng thái discovery; FAQ nói rõ app chưa public. Không quảng cáo AI đối chiếu, MISA, public MCP, hook, portfolio hoặc custom report đã sẵn dùng. CTA phải khớp hành động/kênh được duyệt; ảnh minh họa không giả làm bằng chứng runtime.

Source: [problem.md — Problem/Constraints](../discovery/problem.md#problem), [mvp-scope.md — MVP Cutline](../discovery/mvp-scope.md#mvp-cutline).

### launch-updates-signup

> Cung cấp bước nhận tin/quan tâm ra mắt TiHoMo theo quyết định CTA và kênh tiếp nhận đã chốt. Người dùng hiểu dữ liệu được thu và mục đích, nhận phản hồi đúng với kết quả xử lý thực; không báo thành công khi chưa tiếp nhận. Không thu sao kê, token hoặc thông tin đăng nhập ngân hàng. Giữ scope ở nhận quan tâm trước public, không mở thành CRM, funnel quảng cáo hoặc onboarding toàn bộ app.

Source: [problem.md — Open Questions/Constraints](../discovery/problem.md#open-questions), [mvp-scope.md — MVP Cutline](../discovery/mvp-scope.md#mvp-cutline). Seed này đang gated bởi [Blocking Questions](./open-questions.md#blocking-questions).

### finance-learning-hub

> Cung cấp một nhóm bài giáo dục có giá trị độc lập về quản lý thu–chi, đối chiếu sao kê, ngân sách/nghĩa vụ định kỳ hoặc automation từ chủ đề discovery. Người đọc tìm được bài và nội dung liên quan; thông tin có nguồn và ngày cập nhật phù hợp. Phân biệt hướng dẫn phương pháp với tính năng TiHoMo đã được xác minh; không tạo hàng loạt trang feature mỏng hoặc hứa thứ hạng, rich result hay accuracy AI. Chủ đề cụ thể và mức đầu tư được duyệt trước khi seed trở thành child spec.

Source: [mvp-scope.md — MVP Cutline/Risks](../discovery/mvp-scope.md#mvp-cutline), [personas.md — Jobs To Be Done](../discovery/personas.md#jobs-to-be-done).

## Slice Rules

- Chỉ dùng lowercase slug, không mint mã yêu cầu hoặc feature-slice ID.
- Không có slice “all features”, “entire MVP” hoặc “complete platform”; mỗi slice có actor/outcome riêng và scope hữu hạn.
- Homepage và learning hub có thể được đặc tả độc lập, không phụ thuộc mọi slice khác; signup có một quyết định bên ngoài còn mở, không phải dependency vào toàn bộ nền tảng.
- Ưu tiên là hướng sequencing, không phải authority yêu cầu hay lịch phát hành đã chốt.
- SEO/indexability và minh bạch claim là thuộc tính của surface tương ứng, không công việc backend app được lén thêm vào.
- Không lựa chọn framework, schema, provider, API contract hoặc tạo implementation task trong slice map.
- Source inventory dùng để viết nội dung chính xác; có source không chứng minh public readiness.
