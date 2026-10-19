---
source_epic: "epic-1"
artifact_type: "prd"
status: draft
created: "2026-10-11T18:26:29+07:00"
---

# Epic PRD: TiHoMo prelaunch landingpage và nội dung SEO

## Source Summary

Epic `epic-1` tổng hợp danh mục năng lực TiHoMo để đội landingpage tạo site công khai và nội dung SEO trước khi app public. Nguồn: [discovery manifest](../discovery.md), [problem](../discovery/problem.md), [personas](../discovery/personas.md) và [mvp-scope](../discovery/mvp-scope.md).

Đầu vào đã xác nhận là nhu cầu handoff feature hiện có/tương lai; việc chọn tiếp workflow PRD không đồng nghĩa chủ sản phẩm đã duyệt từng đề xuất trong discovery. PRD này là product alignment draft, không sở hữu yêu cầu hay scope triển khai app.

Định vị đề xuất: **“Tự động hóa việc ghi chép. Giữ quyền kiểm soát tài chính của bạn.”** Confidence **medium**: phù hợp brief, chưa được kiểm chứng với người dùng. Interview alignment **disabled**.

## Problem And Current State

- Người dùng cần giảm nhập tay nhưng vẫn biết dữ liệu có đủ/đúng không, thấy nghĩa vụ sắp tới và khoản chi/phí đáng kiểm tra. Automation không loại bỏ nhu cầu đối chiếu.
- Đội landingpage cần một câu chuyện sản phẩm dễ hiểu cùng ranh giới giữa capability có source, implementation một phần, định hướng và đề xuất thêm; nếu trộn các lớp này, site có thể quảng cáo tính năng chưa tồn tại.
- Discovery đã xác minh source thu–chi/tài khoản, Excel import, recurring/expected và forecast. Ngân sách/hũ/chi tiêu chung có backend; chưa có chứng cứ user-facing end-to-end cho mọi luồng.
- AI đối chiếu/cảnh báo sai lệch, MISA connector, public MCP, outbound hook, portfolio đa tài sản và custom report builder vẫn là định hướng trong phạm vi khảo sát. Không dùng bool, enum, API key hoặc dashboard template làm bằng chứng hoàn tất.
- Repository landingpage chưa có site/framework/deploy theo discovery. App chưa public theo brief; không có kênh tiếp nhận đăng ký site được xác minh trong discovery.
- Phương án thay thế được discovery nêu là spreadsheet, app ngân hàng/ví, app thu–chi và workflow tự xây; không có nghiên cứu so sánh thị trường hay số liệu SEO.
- Constitution alignment **NOT CHECKED** vì thiếu file tại đường dẫn cấu hình. Không tự tạo product authority để bù thiếu evidence.

## Personas And Jobs To Be Done

| Persona | Job to be done | Evidence | Confidence |
|---|---|---|---|
| Cá nhân bận rộn, nhiều tài khoản | Hiểu cách TiHoMo có thể giảm ghi chép và giúp kiểm tra dữ liệu, thay vì phải hiểu công nghệ trước | discovery/personas.md — Primary Personas, Jobs To Be Done | medium |
| Người chủ động quản lý ngân sách | Tìm kiến thức và công cụ để hiểu chi tiêu, nghĩa vụ định kỳ và lập kế hoạch | discovery/personas.md — Primary Personas | medium |
| Power user n8n/AI agent | Biết kiểu kết nối nào đang có nền tảng và kiểu nào mới là định hướng | discovery/personas.md — Secondary Personas | medium |
| Đội landingpage/content | Viết nội dung và chọn hình ảnh mà không nâng roadmap thành feature sẵn dùng | discovery/problem.md — Affected Users, Constraints | high |

Hướng đề xuất: lợi ích cho cá nhân đứng trước tên công nghệ; nội dung API/MCP/webhook là lớp phụ. Không giả định persona đã được phỏng vấn.

## Objectives And Outcomes

- **Objective:** cung cấp một điểm đến prelaunch đáng tin để giới thiệu TiHoMo và tích lũy nội dung hữu ích trước public app.
- **Expected outcome:** người truy cập hiểu vấn đề sản phẩm hướng tới giải quyết, phân biệt nền tảng hiện có với định hướng và biết bước tiếp theo phù hợp khi app chưa public.
- **Expected outcome:** đội landingpage có narrative, danh mục trạng thái và nguồn nội dung rõ để không viết lại tầm nhìn hoặc tự bổ sung lời hứa.
- **Expected outcome:** nội dung giáo dục về thu–chi, đối chiếu, ngân sách và automation có giá trị độc lập, không phụ thuộc AI đã ra mắt.
- **Measurement direction:** quan sát impressions/click theo cụm bài và đăng ký hợp lệ nếu có kênh tiếp nhận. Chưa đặt target số, thời hạn hoặc cam kết thứ hạng; số liệu SEO cần nguồn thực tế.
- **Non-goal:** hoàn thiện hệ thống tài chính cá nhân, chứng minh production readiness của app hoặc triển khai các module tương lai trong epic landingpage này.

## Scope

### In Scope

- Homepage prelaunch: định vị, vấn đề, lợi ích, danh mục năng lực phân lớp trạng thái, roadmap không có ngày hứa hẹn, FAQ và bước tiếp theo rõ.
- Nội dung nhận tin/quan tâm ra mắt và luồng tiếp nhận thực khi kênh xử lý, CTA và việc dùng dữ liệu đã được quyết định; không giả định cơ chế lưu/gửi.
- Một nhóm nội dung giáo dục giới hạn về quản lý thu–chi, đối chiếu sao kê, ngân sách/nghĩa vụ định kỳ hoặc automation; xuất phát từ cụm chủ đề discovery, không xuất bản hàng loạt trang mỏng.
- Trình bày minh bạch trạng thái sản phẩm và dữ liệu mà site thực sự thu; mô tả định hướng quyền kiểm soát AI như định hướng, không chứng nhận đã triển khai.
- Nội dung có thể được tìm kiếm/index phù hợp, có liên kết điều hướng và thông tin cập nhật; quyết định kỹ thuật nằm ở thiết kế downstream.
- Toàn bộ feature chủ sản phẩm nêu được giữ trong [danh mục discovery](../discovery/mvp-scope.md): thu–chi, AI đối chiếu/tracking, cảnh báo automation/phí/vượt chi, kế hoạch, custom report, MISA, đầu tư, MCP và hook. Chúng là **nội dung truyền thông có nhãn trạng thái**, không phải các slice xây module app.

### Out Of Scope

- Sửa CoreFinance, MoneyManagement, PlanningInvestment, ExcelApi hoặc Identity để hoàn thiện các feature đang được giới thiệu.
- Implement AI reconciliation/anomaly detection, đồng bộ MISA, MCP server, webhook, custom report builder hoặc portfolio trong epic này.
- Public app, trực tiếp kết nối ngân hàng, chuyển tiền, đặt lệnh, giữ tài sản hoặc tư vấn đầu tư đảm bảo lợi nhuận.
- Pricing/gói dịch vụ, thiết kế thương hiệu đầy đủ, chiến dịch quảng cáo và nghiên cứu thị trường rộng; chưa có đầu vào được duyệt.
- Framework, kiến trúc deploy, schema lead, provider email, tracker issue, kế hoạch/phase hoặc child spec trong artifact PRD.
- Thu sao kê, token, thông tin đăng nhập ngân hàng hoặc dữ liệu tài chính nhạy cảm trên form quan tâm.

## MVP Appetite

- **Must:** homepage truyền đạt lợi ích và trạng thái prelaunch trung thực; người đọc không nhầm roadmap với feature sẵn dùng.
- **Must:** nếu có nhận đăng ký, bước đó xử lý thật và nói rõ dữ liệu/mục đích; không báo thành công giả. Kênh tiếp nhận chưa được chốt nên đây là blocker cho thiết kế đáng tin.
- **Must:** claim và hình ảnh có căn cứ; mockup ghi là minh họa, không dùng dashboard Sales template để chứng minh báo cáo tài chính cá nhân.
- **Should:** nội dung giáo dục sâu cho một số nhu cầu cụ thể, liên kết với homepage và không phụ thuộc tính năng chưa ra mắt.
- **Could:** nội dung giải thích sự khác nhau giữa HTTP API/MCP/webhook và nhóm quan tâm power user, nếu không làm loãng thông điệp chính.
- **Won't:** lời hứa ngày ra mắt/ranking, fake testimonial, CTA “Dùng ngay” khi chưa public hoặc feature page ngụ ý AI/MISA/MCP đã sẵn dùng.
- **App appetite không được chốt ở đây:** discovery gợi ý core finance + một luồng đối chiếu giới hạn; đây vẫn là candidate cho epic app khác, không prerequisite để bắt đầu nội dung prelaunch.

## Assumptions

| Assumption | Source | Confidence | Validation path |
|---|---|---|---|
| Site khởi đầu tiếng Việt, ưu tiên người dùng cá nhân; kỹ thuật là lớp phụ | discovery/personas.md — Assumptions | medium | Chủ sản phẩm review định vị; chưa khẳng định quy mô phân khúc |
| CTA nhận tin phù hợp hơn dùng ngay | discovery/problem.md — bản nháp thông điệp, Open Questions | medium | Chốt hành động và kênh tiếp nhận trong blocking question |
| Kiểm soát độ đúng dữ liệu là thông điệp có giá trị hơn chỉ gọi sản phẩm AI | discovery/problem.md — các hướng đã cân nhắc | medium | Phản hồi người dùng/landingpage; không claim độc quyền thị trường |
| Nội dung giáo dục có thể tạo điểm đến hữu ích trước public | discovery/mvp-scope.md — SEO candidates | medium | Review chất lượng và quan sát dữ liệu search; không dự báo ranking |
| Mọi capability có source vẫn cần duyệt claim trước publish | discovery/mvp-scope.md — quy tắc trạng thái, Risks | high | Người phụ trách sản phẩm duyệt copy/evidence; không thay kiểm chứng runtime |

## Risks And No-Gos

- **Risk:** scope landingpage trượt thành chương trình xây toàn bộ app. **No-go:** biến danh mục roadmap thành slice triển khai backend.
- **Risk:** người dùng hiểu nhầm mức sẵn sàng từ screenshot, bool/enum hoặc chữ “AI”. **No-go:** khẳng định sẵn dùng/đã tích hợp khi chưa xác minh.
- **Risk:** CTA không có nơi nhận thật hoặc dùng email ngoài mục đích thông báo. **No-go:** form thành công giả, thu dữ liệu tài chính hoặc policy không phản ánh cơ chế thực.
- **Risk:** persona hoặc copy chưa được duyệt. Đây là review trước publish, không tự coi thành đồng thuận chỉ vì user chọn workflow PRD.
- **Risk:** nội dung SEO mỏng, thiếu căn cứ về tài chính hoặc hứa kết quả. **No-go:** giả số liệu, đánh giá, chứng nhận bảo mật hay bảo đảm lợi nhuận/thứ hạng.
- **Risk:** mô tả quyền AI như đã enforce dù chỉ mới đề xuất. **No-go:** hứa agent an toàn toàn diện hoặc không bao giờ sai.
- **Risk:** evidence thay đổi sau handoff. Giữ discovery làm nguồn trace; cập nhật claim khi có bằng chứng mới, không tự sửa memory trong PRD.

## Source Trace

| Claim / quyết định đề xuất | Discovery source | Confidence |
|---|---|---|
| Epic phục vụ landingpage/SEO trước public, không xây app | [problem.md — Problem](../discovery/problem.md#problem) | high |
| Định vị automation có kiểm soát và CTA nhận tin | [problem.md — Problem](../discovery/problem.md#problem) | medium |
| Persona cá nhân chính, power user phụ | [personas.md — Primary Personas](../discovery/personas.md#primary-personas) | medium |
| Feature đã có source/một phần/tương lai | [mvp-scope.md — In Scope Candidates](../discovery/mvp-scope.md#in-scope-candidates) | high cho kết quả khảo sát, chưa xác nhận runtime |
| Site nhỏ, nội dung trung thực, education và no-gos | [mvp-scope.md — MVP Cutline](../discovery/mvp-scope.md#mvp-cutline) | medium cho cutline đề xuất |
| Thiếu quyết định CTA/kênh nhận đăng ký | [problem.md — Open Questions](../discovery/problem.md#open-questions) | high |
| SEO chưa có volume/target và governance chưa được đối chiếu | [problem.md — Constraints](../discovery/problem.md#constraints), [discovery.md — Summary](../discovery.md#summary) | high |
