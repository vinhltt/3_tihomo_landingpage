---
source_epic: "epic-1"
artifact_type: "personas"
status: draft
created: "2026-10-11T18:16:10+07:00"
---

# Persona Discovery

> Persona giả thuyết cho epic-1, chưa có phỏng vấn người dùng hoặc dữ liệu phân khúc. Không biến giả thuyết thành product-wide authority.

## Primary Personas

| Persona đề xuất | Công việc cần giải quyết | Ràng buộc/điểm đau giả thuyết | Nhịp sử dụng | Thông điệp nên nhận |
|---|---|---|---|---|
| Người bận rộn có nhiều tài khoản | Gom thu–chi, giảm ghi lại thủ công và biết dữ liệu có thiếu/sai không | Không muốn kiểm từng giao dịch; không muốn giao toàn quyền cho AI | Ghi nhận hằng ngày, kiểm tra theo tuần/kỳ sao kê | Bớt nhập tay, vẫn kiểm soát được dữ liệu |
| Người chủ động kiểm soát ngân sách | Biết đã chi, còn được chi và khoản sắp đến hạn | Cần cảnh báo đúng lúc, không phải một loạt notification không có hành động | Theo dõi hằng tuần và lập kế hoạch theo tháng | Hiểu dòng tiền, chủ động với chi tiêu |

Đề xuất ưu tiên hai persona này trên homepage. Không mặc định họ biết MCP, webhook hoặc n8n; diễn đạt lợi ích trước công nghệ.

## Secondary Personas

| Persona | Nhu cầu | Vai trò trong landingpage | Giới hạn |
|---|---|---|---|
| Power user/developer dùng n8n và AI agent | API có quyền hạn rõ, event trigger, quan sát dữ liệu do automation tạo | Nội dung sâu và section kết nối; nhóm nhận tin riêng nếu phù hợp | API key/extraction endpoint không chứng minh public MCP/hook đã sẵn sàng |
| Người dùng công cụ thu–chi khác, gồm MISA | Không nhập lại dữ liệu; chuyển đổi/kết nối dễ kiểm tra | Thu thập nhu cầu tích hợp và mô tả định hướng | Chưa xác nhận connector, quan hệ đối tác hay đồng bộ hai chiều |
| Người có vàng/coin/chứng khoán | Xem giá vốn, lãi/lỗ và tổng tài sản bên cạnh dòng tiền | Nhóm mở rộng/roadmap | Theo dõi danh mục không đồng nghĩa tư vấn, đặt lệnh hoặc giữ tài sản |
| Cá nhân có khoản vay/chi tiêu chung | Biết nghĩa vụ trả nợ và phần tiền cần quyết toán | Nội dung bổ trợ dựa trên nền tảng backend hiện có | Cần kiểm chứng UI và luồng thực trước claim sẵn dùng |
| Đội landingpage, content và SEO | Phân biệt bằng chứng với roadmap để viết nội dung đúng | Người nhận bộ handoff này | Không tự nâng status khi có mockup hoặc tên service |

## Jobs To Be Done

- Khi có giao dịch mới, tôi muốn ghi nhận với ít thao tác để không mất thói quen quản lý thu–chi.
- Khi một automation nhập dữ liệu, tôi muốn biết nguồn, số liệu và trạng thái kiểm tra để không tin nhầm số dư hoặc báo cáo.
- Khi nhận sao kê theo kỳ, tôi muốn thấy khoản thiếu, trùng hoặc lệch để sửa dữ liệu có căn cứ.
- Khi có khoản chi/phí khác thường, tôi muốn biết lý do nó được đánh dấu để quyết định cần kiểm tra hay bỏ qua.
- Khi lên ngân sách, tôi muốn thấy cả chi đã phát sinh và nghĩa vụ dự kiến để chọn hạn mức phù hợp.
- Khi dùng AI agent/n8n, tôi muốn quyết định được quyền đọc/ghi và ngắt kết nối để automation vẫn nằm trong kiểm soát của tôi.
- Khi review tài chính, tôi muốn chọn góc nhìn và kỳ báo cáo thay vì phải xuất dữ liệu ra rồi tự ghép mọi lần.
- Khi chuyển từ công cụ khác, tôi muốn đối chiếu dữ liệu trước khi tin vào bản nhập mới.
- Khi có khoản đầu tư, tôi muốn theo dõi chúng cùng nợ và tiền mặt để hiểu tài sản ròng; đây là nhu cầu candidate, chưa cam kết phạm vi public đầu.

## Assumptions

- Nội dung tiếng Việt và người dùng cá nhân là điểm khởi đầu đề xuất, suy ra từ brief và bối cảnh TiHoMo; chưa có khảo sát xác nhận quốc gia, quy mô phân khúc hay khả năng trả phí.
- Automation/AI là cách giảm công sức, không phải lý do để người dùng nhường quyền kiểm soát tiền.
- Người dùng có thể quan tâm đối chiếu trước chatbot; đây là giả thuyết cần kiểm chứng, không tuyên bố thị trường.
- Vai trò n8n/AI agent là tác nhân tích hợp thay mặt người dùng, không phải một persona có quyền truy cập độc lập mặc định.
- Không chọn quản trị doanh nghiệp, kế toán thuế hoặc quản lý quỹ làm persona chính chỉ vì có đề xuất kết nối MISA/đầu tư.
- Tính năng chia sẻ chi phí khác với workspace tài chính gia đình có quyền hạn; không dùng bằng chứng của cái trước để quảng cáo cái sau.
- Interview alignment: **disabled**. Các giả thuyết và câu hỏi chưa được chủ sản phẩm duyệt qua interview; không lưu transcript hoặc ghi đã aligned.

## Open Questions

- Trong hai persona chính, ai là nhóm thử nghiệm đầu tiên? Đề xuất người bận rộn cần giảm nhập tay nhưng vẫn kiểm tra dữ liệu.
- Power user cần kết nối để báo cáo, nhập giao dịch hay thực hiện quyết định tài chính? Đề xuất bắt đầu đọc/ghi có xác nhận, không chuyển tiền.
- Người dùng chủ yếu nhập tay, tải sao kê hay đã có workflow n8n? Cần biết để chọn ví dụ hero và bài SEO đầu tiên.
- Cảnh báo cần hiển thị trong app, bản tổng hợp theo kỳ hay kênh thứ ba? Chưa hứa email/push/Telegram khi chưa xác minh delivery.
- Theo dõi đầu tư là nhu cầu cốt lõi hay của nhóm mở rộng? Giữ ở roadmap cho tới khi chủ sản phẩm chọn.
- Không đặt độ tuổi, thu nhập hoặc tỷ lệ dùng automation giả định: thiếu dữ liệu và không cần để đội landingpage bắt đầu thiết kế thông điệp.
