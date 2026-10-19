---
source_epic: "epic-1"
artifact_type: "problem"
status: draft
created: "2026-10-11T18:16:10+07:00"
---

# Problem Discovery

> Bối cảnh cấp epic, phục vụ handoff nội dung landingpage/SEO trước public. Không phải đặc tả hay cam kết phát hành. Định hướng sản phẩm lâu dài chỉ trở thành authority qua constitution và typed memory.

## Problem

Người dùng không chỉ cần ghi lại hôm nay đã tiêu bao nhiêu. Họ cần dữ liệu thu–chi đủ và đúng, biết nghĩa vụ sắp tới, phát hiện khoản đáng chú ý và dùng dữ liệu đó để ra quyết định. Khi nhập liệu qua automation hoặc AI agent, rủi ro chuyển từ quên ghi chép sang dữ liệu bị thiếu, trùng, sai tài khoản, sai số tiền hoặc sai phân loại mà người dùng không biết.

Định hướng do chủ sản phẩm nêu: TiHoMo tiến tới hệ thống quản lý tài chính cá nhân toàn diện, kết hợp ghi chép, đối chiếu sao kê, cảnh báo, ngân sách, kế hoạch, đầu tư, báo cáo tùy chỉnh và kết nối AI agent/automation bên thứ ba.

**Phạm vi epic này:** khám phá và tổng hợp danh mục năng lực để đội landingpage có thể truyền đạt giá trị, xây nội dung SEO và thu thập quan tâm trước khi app public. Không đưa tất cả ý tưởng thành phạm vi ra mắt, không xây site/app trong discovery.

**Luận điểm định vị đề xuất:** “Tự động hóa việc ghi chép. Giữ quyền kiểm soát tài chính của bạn.” Điểm khác biệt muốn phát triển là kiểm soát độ đúng của dữ liệu sau automation, không chỉ thêm một chatbot vào sổ thu chi. Đây là giả thuyết định vị, chưa phải bằng chứng khác biệt thị trường.

### Các hướng đã cân nhắc

| Hướng | Lợi thế | Đánh đổi | Khuyến nghị |
|---|---|---|---|
| App thu–chi và ngân sách thông thường | Dễ hiểu; gần nền tảng hiện có | Chưa thể hiện automation/AI và đối chiếu mà chủ sản phẩm muốn | Dùng làm lớp nền, không phải toàn bộ câu chuyện |
| Tài chính cá nhân có automation và kiểm soát dữ liệu | Gắn công nghệ với lợi ích cụ thể: bớt nhập, phát hiện thiếu/sai, chủ động chi tiêu | Phần đối chiếu thông minh chưa được xác minh là có implementation | Chọn làm định hướng; luôn gắn nhãn tính năng tương lai |
| Nền tảng API/MCP cho người xây AI agent | Rõ nhu cầu của power user và người dùng n8n | Quá kỹ thuật cho người cần quản lý chi tiêu; chưa chứng minh public MCP | Là thông điệp phụ và nhóm nội dung chuyên biệt |

### Bản nháp thông điệp để handoff

- **Tên sản phẩm:** TiHoMo — quản lý tài chính cá nhân hướng tới tự động hóa và AI agent.
- **H1 đề xuất:** “Tự động hóa việc ghi chép. Giữ quyền kiểm soát tài chính của bạn.”
- **Mô tả:** “TiHoMo đang phát triển nền tảng quản lý thu–chi, tài khoản và giao dịch định kỳ, với định hướng đối chiếu sao kê, cảnh báo sai lệch và kết nối AI agent/automation.”
- **CTA chính đề xuất:** “Đăng ký nhận tin ra mắt”. Chỉ đổi thành “Đăng ký trải nghiệm sớm” khi thật sự có chương trình tiếp nhận.
- **CTA phụ đề xuất:** “Xem định hướng tính năng”. Không dùng “Dùng ngay” khi app chưa public.
- **Thông điệp kỹ thuật phụ:** “Định hướng kết nối dữ liệu tài chính với công cụ automation bạn đang dùng.” Không viết “Đã hỗ trợ MCP/MISA/n8n đầy đủ”.
- Đọc danh mục feature, bằng chứng và nhãn trạng thái tại [mvp-scope.md](./mvp-scope.md); persona tại [personas.md](./personas.md).

## Affected Users

- Cá nhân có nhiều tài khoản, ví hoặc thẻ; cần ghi chép thu–chi và hiểu dòng tiền.
- Người bận rộn hoặc đã dùng automation; cần giảm nhập tay nhưng vẫn biết dữ liệu có đáng tin không.
- Người chủ động quản lý ngân sách; cần thấy hạn mức, nghĩa vụ định kỳ và khoản có thể bỏ sót.
- Power user dùng n8n/AI agent; cần kết nối có quyền hạn rõ, giải trình được và có thể ngắt.
- Người đang dùng công cụ thu–chi khác, gồm MISA, hoặc theo dõi vàng/coin/chứng khoán: đối tượng mở rộng theo định hướng, chưa là target bắt buộc của lần public đầu.
- Đội landingpage/SEO: cần nội dung có phân lớp hiện có/tương lai, tránh biến roadmap thành tuyên bố sẵn dùng.

## Current Alternatives

Các phương án thay thế mang tính tình huống, không phải đánh giá đối thủ hay khảo sát thị trường:

- Excel/Google Sheets hoặc ghi chú: linh hoạt nhưng người dùng tự chịu việc gom dữ liệu và kiểm tra sai sót.
- App ngân hàng/ví: người dùng xem lịch sử từng nguồn, rồi tự tổng hợp tình hình tài chính cá nhân.
- App thu–chi hiện dùng, kể cả MISA: việc chuyển đổi hoặc kết nối phải xác minh định dạng, quyền truy cập và điều khoản thực tế.
- n8n/script/AI agent tự xây: có thể giảm nhập tay; cần cơ chế phát hiện và xử lý nhập trùng/thiếu/sai.
- Tự đối chiếu sao kê theo kỳ: vẫn là phương án kiểm tra dữ liệu, nhưng không nên giả định mọi người đang làm thường xuyên.

## Constraints

- App chưa public theo brief. Có source không đồng nghĩa tính năng đã được kiểm chứng end-to-end, đủ bảo mật hoặc sẵn dùng công khai.
- Landingpage hiện chỉ được khởi tạo; chưa có framework/site/deploy/SEO: `src/landingpage/README.md:3-14`. Discovery không lựa chọn framework hoặc sửa repository landingpage.
- Bằng chứng gồm source tại thời điểm khảo sát và typed memory. Memory về import chỉ mô tả XLSX/extraction/RabbitMQ, không phải AI đối chiếu: `.specify/memory/domains/transaction-import/domain-overview.md:25-27`.
- Không tìm thấy constitution tại đường dẫn cấu hình `.specify/memory/constitution.md`; đối chiếu constitution **NOT CHECKED**. Không tạo mới hay tự bổ sung nguyên tắc sản phẩm để lấp khoảng trống.
- Chưa xác minh partner/API/giấy phép của MISA, ngân hàng hoặc nhà cung cấp dữ liệu đầu tư. Không cam kết kết nối trực tiếp, đồng bộ hai chiều hay giá realtime.
- Chưa xác minh mức độ sẵn sàng public của AI, MCP, outbound hook, custom report hoặc kênh cảnh báo. Chỉ mô tả là định hướng nếu chưa có bằng chứng phù hợp.
- Đề xuất an toàn cho định hướng AI: gợi ý và đối chiếu có giải thích, người dùng xác nhận thay đổi quan trọng; không mặc định trao quyền chuyển tiền hoặc giao dịch đầu tư cho agent.
- Site tiền public chỉ nên thu dữ liệu tối thiểu cho mục đích đăng ký đã công bố; không yêu cầu sao kê, token, thông tin đăng nhập ngân hàng hay dữ liệu tài chính nhạy cảm tại form quan tâm.
- Không tuyên bố “AI chính xác tuyệt đối”, “không bao giờ bỏ sót”, “đảm bảo lợi nhuận”, chứng nhận bảo mật, số lượng người dùng hoặc đánh giá khách hàng chưa có bằng chứng.
- SEO là hướng nội dung cần kiểm chứng; chưa có nghiên cứu volume, cạnh tranh, thứ hạng hay cam kết tăng trưởng. Không lấy keyword brainstorm làm dữ liệu thị trường.

## Open Questions

- Đề xuất khởi đầu với cá nhân dùng tiếng Việt, cần giảm nhập tay và kiểm soát dòng tiền; có muốn ưu tiên power user n8n/AI ngay trên hero không? Chưa xác nhận phân khúc.
- CTA lúc public site là nhận tin, waitlist hay trải nghiệm private? Có kênh nhận đăng ký thật và chính sách sử dụng email nào đã được duyệt?
- Feature nào sẽ được demo thật khi site lên? Chủ sản phẩm cần duyệt danh sách claim trước publish; chưa hứa ngày app ra mắt.
- Nguồn sao kê ban đầu là XLSX, CSV hay PDF; đối chiếu theo kỳ hay theo từng lần nhập? Chưa mở rộng khả năng import hiện có thành cam kết hỗ trợ mọi nguồn.
- Người dùng muốn giữ automation chỉ đọc/tạo bản nháp hay có quyền ghi đã phê duyệt? Đây là câu hỏi về quyền và niềm tin, không quyết định kiến trúc trong discovery.
- Đồng bộ MISA cần chiều nào và hình thức nào? Tạm giữ là candidate do chủ sản phẩm nêu, không giả định đã có API được phép dùng.
- Giá, gói thương mại, framework site và lịch triển khai được cố ý bỏ qua: chưa có quyết định đầu vào và không cần để handoff danh mục năng lực.
