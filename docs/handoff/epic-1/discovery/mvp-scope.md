---
source_epic: "epic-1"
artifact_type: "mvp-scope"
status: draft
created: "2026-10-11T18:16:10+07:00"
---

# MVP Scope Discovery

> Handoff danh mục feature và định hướng landingpage/SEO; context-only. Các ưu tiên dưới đây là đề xuất để duyệt, không phải kế hoạch triển khai hay cam kết release.

## In Scope Candidates

### Quy tắc đọc trạng thái

- **Có source:** tìm thấy implementation; chưa chạy app để chứng minh public readiness.
- **Một phần:** mới có backend, endpoint, model hoặc cơ chế nền; không đủ chứng minh luồng người dùng hoàn chỉnh.
- **Định hướng chủ sản phẩm:** nằm trong brief, chưa tìm thấy implementation tương ứng trong phạm vi khảo sát.
- **Đề xuất thêm:** ý tưởng brainstorm, chưa được chủ sản phẩm chọn và không mặc định thuộc scope ra mắt.
- Phạm vi bằng chứng: CoreFinance, ExcelApi, Identity, MoneyManagement, PlanningInvestment và các trang/composable Nuxt liên quan. Kết luận không tìm thấy chỉ áp dụng phạm vi này, không khẳng định về hệ thống bên ngoài.
- Nhãn hiển thị trên site nên là **“Nền tảng hiện có — chưa public”**, **“Định hướng phát triển”** hoặc **“Ý tưởng đang tìm hiểu”**. Không tự đổi thành “Sẵn dùng” vì có source hay mockup.

### Danh mục feature chủ sản phẩm yêu cầu

| Feature | Giá trị người dùng | Trạng thái và bằng chứng | Giới hạn claim / hướng cần phát triển |
|---|---|---|---|
| Ghi chép thu–chi hằng ngày, quản lý nhiều tài khoản | Biết tiền vào/ra ở đâu, tìm lại giao dịch | Có source CoreFinance và Nuxt; `src/fe/nuxt/composables/useTransactions.ts:100-155`; `src/be/CoreFinance/CoreFinance.Application/Services/AccountService.cs:32-60` | Không đồng nghĩa tự kết nối ngân hàng hoặc số dư luôn đúng/realtime |
| AI đối chiếu sao kê với dữ liệu nhập tay/automation, tracking thiếu sót | Phát hiện khoản thiếu, trùng hoặc lệch để kiểm tra | Định hướng chủ sản phẩm; hiện có nhập Excel và giao dịch dự kiến, chưa tìm thấy AI matching/reconciliation | Đề xuất đưa về danh sách cần kiểm tra, có căn cứ; không quảng cáo “AI đã tự đối chiếu mọi ngân hàng” |
| Cảnh báo automation sai so với sao kê | Biết workflow có thể nhập sai thay vì tin nhầm báo cáo | Định hướng chủ sản phẩm; chưa tìm thấy luồng reconciliation và cảnh báo này | Chỉ cảnh báo khi có nguồn/kỳ sao kê đối chiếu; không suy ra automation đúng khi chưa đủ dữ liệu |
| Phát hiện chi tiêu hoặc phí bất thường | Nhìn thấy phí tăng, khoản lặp hoặc khoản đáng kiểm tra | Định hướng chủ sản phẩm; chưa tìm thấy anomaly detection tương ứng | “Khoản cần kiểm tra”, không kết luận gian lận; cho xem lý do, điều chỉnh ngưỡng và phản hồi |
| Đồng bộ công cụ bên thứ ba như sổ thu chi MISA | Giảm nhập lại và hỗ trợ chuyển đổi dữ liệu | Một phần rất hẹp: `Transaction.SyncMisa` chỉ là bool; `src/be/CoreFinance/CoreFinance.Domain/Entities/Transaction.cs:83-87`; chưa tìm thấy connector | Chưa chốt API/file, chiều đồng bộ, quyền và xử lý xung đột; không đặt logo/claim đối tác như tích hợp đã hoạt động |
| Quản lý đầu tư vàng, coin, chứng khoán | Theo dõi giá vốn, danh mục, lãi/lỗ và tổng tài sản | Định hướng chủ sản phẩm; mới tìm thấy `src/be/PlanningInvestment/PlanningInvestment.Domain/Enums/InvestmentType.cs:1-62`, chưa tìm thấy portfolio service/UI | Đề xuất theo dõi trước, không đặt lệnh/custody; chưa cam kết realtime hoặc nhà cung cấp giá |
| Public MCP cho AI agent và automation như n8n | Cho agent truy vấn dữ liệu hoặc thao tác được cho phép | Định hướng chủ sản phẩm; có API-key foundation trong Identity, chưa tìm thấy product MCP server | API key không bằng MCP. MCP cho agent khác với HTTP API mà workflow n8n có thể dùng; cần chốt quyền đọc/ghi |
| Quản lý ngân sách và cảnh báo vượt chi tiêu | Biết hạn mức và phát hiện vượt ngân sách | Một phần: `src/be/MoneyManagement/MoneyManagement.Application/Services/BudgetService.cs:137-172` có cập nhật spent amount và truy vấn threshold/over-budget | Chưa tìm thấy linkage từ giao dịch, UI và delivery đầy đủ. Không hứa notification email/push/n8n đã tự chạy |
| Lập kế hoạch chi tiêu | Cân đối khoản đã chi với nghĩa vụ sắp tới | Một phần: recurring sinh expected; `src/be/CoreFinance/CoreFinance.Application/Services/RecurringTransactionTemplateService.cs:204-252`; forecast tại `ExpectedTransactionService.cs:135-160` | Forecast dựa trên giao dịch dự kiến đã khai báo, không phải dự đoán AI hoặc kế hoạch tối ưu toàn diện |
| Custom report | Xem dữ liệu theo kỳ, tài khoản, nhóm chi hoặc tiêu chí riêng | Định hướng chủ sản phẩm; chưa tìm thấy report builder. Có truy vấn/filter/forecast không bằng báo cáo tùy chỉnh | Cần chọn giữa filter lưu lại, template và report bằng ngôn ngữ tự nhiên; chưa hứa mọi biểu đồ/công thức |
| Hệ thống tài chính cá nhân toàn diện với automation và AI agent | Có một nơi quản lý dòng tiền, nghĩa vụ, tài sản và kết nối | Tầm nhìn chủ sản phẩm, không phải feature đã hoàn tất | Truyền đạt là hướng phát triển; không dùng từ “toàn diện” để ngụ ý mọi module sẵn dùng |
| Hook tự kích hoạt app automation bên thứ ba như n8n | Workflow phản ứng khi có giao dịch, sai lệch hoặc vượt ngân sách | Định hướng chủ sản phẩm; chưa tìm thấy cơ chế đăng ký outbound hook. RabbitMQ nội bộ không phải webhook công khai | Phân biệt webhook push với API pull/MCP; cần sự kiện, quyền, ngắt kết nối và xử lý nhận trùng trước public |

### Nền tảng khác đang có bằng chứng

| Năng lực | Bằng chứng | Ý nghĩa cho handoff |
|---|---|---|
| Nhập dữ liệu Excel theo cấu hình, kể cả có password; batch tới CoreFinance | `src/be/ExcelApi/Services/ExcelProcessingService.cs:1-90`; memory transaction-import:25-27 | Có nền tảng giảm nhập lại; chưa chứng minh PDF/OCR, mọi bank template hay đối chiếu AI |
| HTTP extraction tương thích cách gửi file của workflow n8n | `src/be/ExcelApi/Controllers/ExcelController.cs:65-108` | Có endpoint phục vụ trường hợp n8n, không đồng nghĩa connector n8n hoàn chỉnh/public MCP |
| Giao dịch định kỳ, khoản dự kiến; xác nhận với giao dịch thực hoặc ghi nhận thanh toán | `src/be/CoreFinance/CoreFinance.Application/Services/ExpectedTransactionService.cs:268-357`; `src/fe/nuxt/pages/apps/expected-transactions/index.vue` | Có nền cho nghĩa vụ định kỳ/kiểm tra người dùng; không phải matching sao kê tự động |
| Phân bổ theo hũ tài chính, gồm phương pháp 6 hũ | `src/be/MoneyManagement/MoneyManagement.Application/Services/JarService.cs:105-220` | Có backend phân bổ/chuyển giữa hũ; chưa tìm thấy UI tương ứng trong phạm vi khảo sát |
| Chi tiêu chung, chia đều và ghi nhận quyết toán | `src/be/MoneyManagement/MoneyManagement.Application/Services/SharedExpenseService.cs`; `MoneyManagement.Api/Controllers/SharedExpenseController.cs` | Có backend; chưa chứng minh luồng UI hoặc workspace gia đình có quyền hạn |
| Theo dõi nợ | `src/be/PlanningInvestment/PlanningInvestment.Domain/Entities/Debt.cs` | Mới xác minh model. Memory domain overview mô tả CRUD nhưng source khảo sát chưa có Debt service/controller cụ thể; không quảng cáo module nợ đã hoàn chỉnh |
| Quản lý API key | `src/be/Identity/Identity.Api/Controllers/EnhancedApiKeysController.cs`; `Identity.Application/Services/ApiKeys/EnhancedApiKeyService.cs` | Có nền xác thực tích hợp; chưa kiểm chứng public security, quyền từng MCP tool hoặc mọi constraint được enforce |

Dashboard Sales tại `src/fe/nuxt/pages/index.vue:1-83` có nội dung Revenue/Sales và giá trị hiển thị cố định; không dùng ảnh đó để chứng minh báo cáo tài chính cá nhân thực hoặc custom report.

### Feature bổ sung nên cân nhắc

Tất cả bên dưới là **đề xuất thêm**, không phải claim đã có hoặc scope được duyệt.

| Đề xuất | Tình huống/lợi ích | Ưu tiên đề xuất | Đánh đổi / ranh giới |
|---|---|---|---|
| Inbox kiểm tra dữ liệu: nguồn nhập, trạng thái đối chiếu, khoản thiếu/trùng/sai và lịch sử sửa | Biết automation nào tạo giao dịch và cần xử lý gì | Cao, gắn trực tiếp đối chiếu | Không tự xóa/gộp khi chưa có căn cứ; phân biệt “chưa đối chiếu” với “đã khớp” |
| AI/automation preview và phê duyệt; hoàn tác thay đổi được hỗ trợ | Xem việc sắp làm trước khi ghi dữ liệu, sửa sai có truy vết | Cao, tạo niềm tin | Phê duyệt theo rủi ro; không hứa hoàn tác hành động tài chính bên ngoài |
| Gợi ý phân loại và rule người dùng có thể sửa | Giảm thao tác cho giao dịch lặp | Cao sau nhập liệu/đối chiếu | Gợi ý có lý do; sửa rule không âm thầm đổi lịch sử đã xác nhận |
| Theo dõi subscription, hóa đơn và tăng phí định kỳ | Không bỏ qua phí nhỏ lặp lại hoặc kỳ hạn sắp tới | Trung bình; dựa trên recurring | Chưa đồng nghĩa tự phát hiện/hủy subscription ở nhà cung cấp |
| Mục tiêu tiết kiệm và kịch bản dòng tiền “nếu chi thêm…” | Biết còn khả năng chi sau nghĩa vụ và mục tiêu | Trung bình sau chất lượng dữ liệu | Kịch bản từ dữ liệu khai báo, không hứa dự báo đúng tương lai |
| Trung tâm sức khỏe automation: lần chạy cuối, lỗi, dữ liệu chưa kiểm tra, quyền kết nối và nút ngắt | Biết kết nối còn hoạt động và chặn workflow không mong muốn | Cao khi mở API/MCP/hook | Log trạng thái ứng dụng không thay thế đối chiếu sao kê; tránh lộ token |
| Quyền sở hữu dữ liệu: export/backup, xóa, lựa chọn việc gửi dữ liệu cho AI | Người dùng kiểm soát dữ liệu nhạy cảm và giảm phụ thuộc | Cao trước kết nối AI công khai | Chính sách/provider thực tế cần duyệt; không tự tuyên bố dữ liệu “không bao giờ rời thiết bị” |
| Bức tranh tài sản ròng: tiền, nợ và danh mục đầu tư | Hiểu tình hình tài chính tổng thể | Sau module nợ/đầu tư | Không cộng khác tiền tệ thiếu tỷ giá, không tính hai lần chuyển tiền/tài sản |

## Out Of Scope Candidates

- Xây app hoặc landingpage, chọn framework, cấu hình deploy, SEO kỹ thuật hay analytics trong lần discovery này.
- Cam kết mọi ý tưởng AI/MCP/MISA/đầu tư sẽ có ở lần public đầu; roadmap ở đây là định hướng không có mốc hứa hẹn.
- Tự động chuyển tiền, đặt lệnh đầu tư, giữ tiền/tài sản của người dùng hoặc tư vấn đảm bảo lợi nhuận.
- Kết nối trực tiếp tất cả ngân hàng, scraping thông tin đăng nhập, bypass quyền truy cập hay mặc định có API MISA được phép dùng.
- Kế toán doanh nghiệp, thuế, quản lý quỹ; không suy ra từ nhu cầu cá nhân hay đề xuất đồng bộ.
- Pricing, nghiên cứu thị trường đầy đủ, bảng so sánh đối thủ hoặc giả lập khách hàng/testimonial để lấp nội dung site.
- Danh mục đầu tư đầy đủ, realtime market data và đồng bộ hai chiều mọi công cụ là candidate mở rộng, không phải phần tối thiểu để có nội dung prelaunch đáng tin.

## MVP Cutline

### Lát cắt tối thiểu cho handoff/site prelaunch

- **Must:** homepage có định vị, persona rõ, lợi ích trước công nghệ, danh mục feature phân lớp trạng thái, CTA phù hợp trước public và FAQ phân biệt hiện có/tương lai.
- **Must:** đội landingpage nhận đủ bản nháp copy tại [problem.md](./problem.md), danh mục và evidence ở trên; chủ sản phẩm duyệt claim trước publish. Screenshot thật phải đúng capability; mockup phải ghi là minh họa.
- **Must:** trang đăng ký/thông tin quyền riêng tư phản ánh kênh tiếp nhận và dữ liệu thực tế; chưa có backend tiếp nhận thì không tạo form thành công giả. Đây là điều kiện phát hành đề xuất, không implementation trong discovery.
- **Should:** vài nội dung giáo dục có giá trị độc lập, kể cả khi AI/MCP chưa public; chọn ít trang sâu hơn hàng loạt feature page mỏng.
- **Could:** section kết nối cho power user và danh sách quan tâm tính năng tương lai; tách khỏi thông điệp chính cho người dùng phổ thông.
- **Won't:** CTA “Dùng ngay”, release date bịa, fake social proof hoặc claim AI/MISA/MCP/hook sẵn dùng khi chưa được xác minh.

### Ranh giới sản phẩm để PRD cân nhắc, chưa phải scope được chốt

- **Must candidate:** thu–chi/tài khoản, nguồn dữ liệu và kiểm tra nhập, giao dịch định kỳ/dự kiến; người dùng hiểu số liệu đang xem.
- **Should candidate:** một luồng đối chiếu có nguồn giới hạn và người dùng duyệt; ngân sách nối với dữ liệu thật trước khi gửi cảnh báo.
- **Could candidate:** gợi ý phân loại, bản tổng hợp theo kỳ, API đọc hoặc thao tác có phê duyệt; chọn theo nhu cầu thử nghiệm.
- **Won't ở lát cắt đầu đề xuất:** mọi định dạng ngân hàng, MISA hai chiều, portfolio đa tài sản, MCP ghi tự chủ, outbound hooks và report builder đầy đủ cùng lúc. Không loại khỏi tầm nhìn; tránh phạm vi quá lớn trước khi chứng minh luồng cốt lõi.

### Bố cục nội dung đề xuất cho đội landingpage

1. Hero: H1, mô tả prelaunch và CTA nhận tin; bản nháp ở problem.md.
2. Vấn đề: mất công nhập tay, dữ liệu thiếu/sai, khoản chi/phí bị bỏ qua.
3. Nền tảng hiện có: thu–chi/tài khoản, nhập Excel, định kỳ/dự kiến; nói rõ chưa public.
4. Hướng khác biệt: đối chiếu và kiểm soát automation. Kịch bản minh họa: nhập sao kê → kiểm tra với sổ ghi chép → xem sai lệch → người dùng duyệt. Gắn nhãn định hướng, không giả demo đang chạy.
5. Mở rộng: ngân sách/kế hoạch, báo cáo, kết nối AI/n8n, MISA và đầu tư; giữ nhãn trạng thái.
6. Niềm tin và FAQ: dữ liệu được xử lý thế nào, automation được quyền gì, đã public chưa, feature nào đang phát triển. Chỉ trả lời điều đã duyệt.
7. CTA cuối và liên kết nội dung giáo dục/quyền riêng tư.

### Cụm nội dung SEO đề xuất, chưa có dữ liệu volume

| Cụm nhu cầu | Trang/nội dung nên cân nhắc | Phân biệt bài giáo dục và claim sản phẩm |
|---|---|---|
| Quản lý chi tiêu cá nhân, nhiều tài khoản | Homepage và hướng dẫn gom thu–chi | Mô tả nền tảng; không hứa đồng bộ ngân hàng |
| Đối chiếu sao kê, giao dịch thiếu/trùng | Hướng dẫn checklist đối chiếu và sai lệch thường gặp | Phương pháp có thể viết ngay; AI matching của TiHoMo ghi là định hướng |
| Tự động hóa ghi chép bằng n8n/AI | Giải thích API, MCP và webhook phục vụ mục đích khác nhau | Tutorial tích hợp TiHoMo chỉ publish sau khi luồng thực được kiểm chứng |
| Ngân sách, 6 hũ, khoản chi định kỳ | Hướng dẫn hạn mức, phân bổ và nghĩa vụ hằng tháng | Backend foundation không đủ để claim alert tự động đang hoạt động |
| Phí bất thường và subscription | Checklist review phí/đăng ký theo kỳ | Không tuyên bố AI phát hiện gian lận |
| Kế hoạch chi tiêu và báo cáo tài chính cá nhân | Ví dụ câu hỏi cần trả lời từ dữ liệu thu–chi | Không gọi dashboard template là custom report |
| Theo dõi đầu tư vàng/coin/chứng khoán | Nội dung giáo dục/khảo sát nhu cầu sau khi ưu tiên được duyệt | Không mở hàng loạt trang “tính năng sẵn dùng” cho module chưa có |

Keyword là giả thuyết chủ đề, không phải số liệu thị trường. Trước publish, đội site cần kiểm tra nội dung render/indexable, title/description riêng, canonical, sitemap/robots và internal link; không index bản private, trang empty hoặc trang có dữ liệu người dùng. Đo impressions/click theo nhóm bài và đăng ký hợp lệ; chưa đặt chỉ tiêu số hoặc đảm bảo thứ hạng. Không thêm FAQ structured data chỉ để hứa rich result.

## Risks

- **Claim vượt bằng chứng:** tên service, bool `SyncMisa`, enum đầu tư, API key và dashboard template dễ bị hiểu thành feature hoàn chỉnh. Dùng bảng trạng thái, evidence và duyệt copy.
- **AI sửa sai thành sai mới:** đối chiếu có xác suất; thiếu dữ liệu không chứng minh giao dịch không tồn tại. Gợi ý có lý do và người dùng quyết định là hướng an toàn đề xuất.
- **Sai số lan sang cảnh báo/báo cáo:** nhập trùng, chuyển khoản bị tính thành chi, refund, lệch ngày/kỳ/tiền tệ có thể gây cảnh báo sai; không hứa accuracy trước khi kiểm chứng nguồn và luồng.
- **Quyền tích hợp:** MCP/API/hook có thể lộ dữ liệu hoặc tạo thay đổi ngoài ý muốn. Cần quyền tối thiểu, thu hồi kết nối và xác nhận theo rủi ro; không coi API key có sẵn là bảo mật public đã hoàn thành.
- **Hook/automation:** sự kiện nhận trùng, bỏ lỡ, đến trễ và vòng lặp nhập–gửi có thể làm sai số. Chỉ đưa thành claim hoạt động sau khi cơ chế thực được xác minh.
- **Phụ thuộc bên thứ ba:** MISA và dữ liệu thị trường cần quyền/điều khoản, không có bằng chứng partner hiện tại.
- **Phạm vi phình:** làm đối chiếu, MCP, đầu tư và custom reports đồng thời dễ trì hoãn luồng nền. Tách câu chuyện prelaunch khỏi scope ra mắt app.
- **Niềm tin/SEO:** nội dung tài chính thiếu nguồn, claim AI tuyệt đối hoặc feature pages mỏng có thể làm giảm tin cậy. Nội dung giáo dục cần review, tác giả/ngày cập nhật và nguồn phù hợp; không đảm bảo ranking.
- **Evidence drift:** memory planning-investment mô tả rộng hơn source đã xác minh. Ghi trạng thái model-only cho nợ ở handoff; không tự sửa memory trong discovery.

## Open Questions

- Lát cắt public đầu tiên ưu tiên core finance ổn định hay phải có đối chiếu sao kê? Khuyến nghị core + một luồng đối chiếu giới hạn, nhưng chưa coi là quyết định đã duyệt.
- Cần đối chiếu với giao dịch thực, giao dịch dự kiến hay cả hai? Sao kê là bằng chứng đối chiếu theo kỳ, không phải nguồn realtime mặc định.
- MVP AI là rule + gợi ý hay mô hình xử lý sao kê? Chưa chọn công nghệ; cần làm rõ lợi ích và dữ liệu trước.
- Cảnh báo sẽ dùng kênh nào, tần suất nào và người dùng xử lý bằng hành động gì? Không gắn nhãn “đã có notification” chỉ từ endpoint alerts.
- MISA, MCP, hook, đầu tư và custom report: thứ tự nào phù hợp người thử nghiệm? Tất cả được giữ trong danh mục, chưa có lịch release.
- Custom report cần filter lưu, mẫu báo cáo, export hay hỏi bằng ngôn ngữ tự nhiên? Đề xuất bắt đầu từ câu hỏi người dùng thực sự cần trả lời.
- Các đề xuất thêm nào được chấp nhận? Cho tới lúc duyệt, không đưa chúng vào site như roadmap đã cam kết.
- Chưa tạo brief/brainstorm/SEO file riêng: nội dung handoff nằm trong ba detail artifacts theo giới hạn discovery. Không tạo spec, plan, work item hoặc tracker issue.
