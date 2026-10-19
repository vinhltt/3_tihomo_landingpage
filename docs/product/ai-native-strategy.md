# TiHoMo: chiến lược sản phẩm AI-native

## Vai trò và quyết định được chấp nhận

Tài liệu dành cho chủ sản phẩm, đội nội dung/SEO, người thẩm định đầu tư và cộng tác viên AI. Nó sở hữu **lý do chọn hướng sản phẩm và tuyến tới bằng chứng**, không sở hữu implementation, chính sách dữ liệu đang vận hành hay quyền phát hành app. [Brief landingpage đã chốt](../../plans/reports/brainstorm-261011-2028-tihomo-prelaunch-landingpage.md) sở hữu contract truyền thông/site; [quy tắc sub-workspace](../../.specify/configurations/rules.md) giữ nghiệp vụ, spec và project memory tại workspace TiHoMo root. Tài liệu này không tự tạo yêu cầu xây app hoặc thay thế quy trình phê duyệt ở đó.

**Chủ sản phẩm đã chọn:** phát triển định vị TiHoMo theo hướng AI-native cho cá nhân bận rộn có nhiều tài khoản, với agent có giám sát là thành phần trung tâm của trải nghiệm tương lai. AI không chỉ là kênh tích hợp dành cho power user. Người dùng giữ quyền quyết định thay đổi sổ theo dõi; agent không được tự thực hiện giao dịch tài chính.

**Chưa được chọn:** provider/model, framework agent, giao thức triển khai, nguồn sao kê hỗ trợ, chính sách gửi/lưu dữ liệu, phạm vi app ra mắt, gói thương mại, giá và ngưỡng chấp nhận định lượng. Các workflow, kiến trúc chức năng và roadmap bên dưới là đề xuất để kiểm chứng định hướng, không phải tính năng đã triển khai hoặc lịch cam kết.

## Outcome, ràng buộc và tiêu chí thành công

Outcome sản phẩm mong muốn: người dùng có thể kiểm tra dữ liệu thu–chi phân tán với ít công sức hơn mà vẫn biết **số liệu đến từ đâu, còn thiếu gì, AI đề nghị thay đổi gì và ai đã duyệt**. Giảm thao tác không có giá trị nếu làm tăng sai lệch không được phát hiện hoặc khiến người dùng duyệt theo thói quen mà không hiểu thay đổi.

Outcome của chiến lược và landingpage: người đọc VI/EN hiểu vai trò trung tâm của AI, phân biệt nguồn hiện có với đề xuất tương lai, tìm được nội dung giáo dục hữu ích và biết TiHoMo chưa phát hành công khai. Người thẩm định nhìn thấy các giả thuyết có thể bác bỏ và bằng chứng cần có tiếp theo, không bị dẫn tới kết luận đã có traction hoặc product-market fit.

Ràng buộc:

- Ưu tiên chất lượng dữ liệu và đối chiếu; sau đó mới kiểm chứng phân loại/khoản định kỳ; chỉ xem xét kịch bản ngân sách khi nền dữ liệu đủ tin cậy cho kỳ và tài khoản đang xét.
- Giữ toàn bộ danh mục năng lực trong [snapshot sản phẩm](../handoff/epic-1/discovery/mvp-scope.md). Thứ tự nghiên cứu không xóa tầm nhìn mở rộng và không biến mọi khả năng thành phạm vi release.
- Chỉ diễn đạt các khả năng AI là định hướng chưa triển khai/chưa kiểm chứng. Không lấy tên service, model, API key hoặc ảnh minh họa làm bằng chứng hoạt động.
- Landingpage không thu dữ liệu, không form/signup/contact, upload, analytics, tracker hoặc lưu lựa chọn vào storage; không publish trong phạm vi này. Không cần cung cấp sao kê thật để đọc nội dung hay thẩm định chiến lược.
- Không tự động thanh toán/chuyển tiền, đặt lệnh đầu tư, giữ tiền/tài sản, lấy thông tin đăng nhập ngân hàng hoặc tư vấn bảo đảm lợi nhuận. Không hứa mọi ngân hàng/định dạng, độ chính xác tuyệt đối, realtime, chứng nhận bảo mật hoặc quan hệ đối tác chưa được xác minh.

Chiến lược đạt yêu cầu khi mỗi lợi ích có giả thuyết kiểm chứng, mỗi hành động thay đổi dữ liệu có ranh giới quyền rõ và mỗi claim hiện tại truy được về đúng lớp bằng chứng. Site đạt yêu cầu khi chuyển tải trung thực điều đó ở cả hai locale mà vẫn giữ contract nội dung, UI, quyền riêng tư và nghiệm thu của brief. Hoàn tất tài liệu/site **không** đồng nghĩa đạt các gate sản phẩm bên dưới.

## Persona và vấn đề ưu tiên

Chọn **cá nhân bận rộn quản lý nhiều tài khoản, ví hoặc thẻ**. Công việc trọng tâm: “Khi đến kỳ kiểm tra, tôi muốn biết sổ theo dõi có khớp với các nguồn của mình không, xử lý khoản cần xác minh và hiểu nghĩa vụ sắp tới mà không phải làm lại toàn bộ bằng tay.”

[Persona discovery](../handoff/epic-1/discovery/personas.md) và [problem discovery](../handoff/epic-1/discovery/problem.md) là nguồn giả thuyết, không phải nghiên cứu phỏng vấn. Chưa có bằng chứng về quy mô phân khúc, tần suất đau điểm, khả năng trả phí hay ưu thế so với công cụ hiện dùng. Ưu tiên persona là quyết định của chủ sản phẩm, không được trình bày như kết quả thị trường.

Vấn đề cần kiểm chứng: dữ liệu nhiều nguồn dễ thiếu/trùng/sai tài khoản; chuyển nội bộ có thể bị tính thành chi; automation có thể làm sai nhanh hơn thay vì loại bỏ việc kiểm tra; nghĩa vụ định kỳ khó nhìn rõ khi dữ liệu nền chưa đúng. Không giả định tất cả người dùng đã có workflow tự động hoặc muốn trò chuyện với AI.

Power user dùng n8n/MCP vẫn là nhóm mở rộng, nhưng **agent trong sản phẩm** phục vụ trực tiếp persona chính. API/MCP/webhook là các phương tiện kết nối khác nhau, không phải định nghĩa AI-native. Người dùng chỉ cần hiểu công việc và quyền phê duyệt, không cần hiểu giao thức để nhận giá trị.

## Định vị và pitch tương đương VI/EN

Headline công khai cuối cùng và lead/meta được sở hữu tại [brief](../../plans/reports/brainstorm-261011-2028-tihomo-prelaunch-landingpage.md) và [copy homepage](../../src/lib/home-content.ts); không duy trì bản sao headline ở đây.

**Định vị VI:** TiHoMo đang được phát triển theo hướng AI-native: ngữ cảnh tài chính có nguồn, tác vụ có giới hạn và đề xuất có thể kiểm tra trước khi người dùng phê duyệt thay đổi sổ theo dõi. Mục tiêu là giảm công kiểm tra dữ liệu nhiều tài khoản, không chuyển quyền quyết định tài chính cho AI. Ứng dụng chưa phát hành; các khả năng AI mới là định hướng.

**Positioning EN:** TiHoMo is being developed toward AI-native personal finance: source-grounded financial context, bounded tasks and reviewable proposals before users approve ledger changes. The aim is to reduce the work of checking records across multiple accounts, not to hand financial decisions to AI. The application is not publicly available; AI capabilities remain a proposed direction.

**Pitch cho người thẩm định VI:** TiHoMo đặt chất lượng dữ liệu trước câu trả lời của AI. Chúng tôi muốn kiểm chứng liệu agent có giám sát có thể giúp một cá nhân đối chiếu nhiều nguồn, xử lý sai lệch có căn cứ và sau đó lập kịch bản từ dữ liệu đáng tin hơn. Nền tảng có source không chứng minh luồng AI đã hoạt động. Luận điểm đầu tư cần được chứng minh bằng kết quả đối chiếu, khả năng ngăn thay đổi ngoài quyền, thời gian người dùng thực sự tiết kiệm và chi phí vận hành; chưa có kết quả được công bố để khẳng định những lợi ích đó.

**Investor pitch EN:** TiHoMo puts data quality before AI answers. We aim to test whether supervised agents can help individuals reconcile multiple sources, resolve discrepancies with evidence and then explore scenarios using more trustworthy records. Existing source code does not prove an operational AI workflow. The investment thesis must be earned through reconciliation results, enforcement of action permissions, measured user time savings and operating costs; no published results yet substantiate those benefits.

## Vì sao chọn agent có giám sát

“Có giám sát” nghĩa là agent có thể diễn giải ngữ cảnh và đề xuất bước tiếp theo trong phạm vi được cấp, nhưng không tự mở rộng quyền, coi nội dung tài liệu là chỉ thị hoặc ghi sổ thay người dùng. Một workflow do code xác định vẫn có thể là phương án đúng cho bước ổn định; AI-native không yêu cầu biến mọi phép tính thành lời gọi mô hình hay xây nhiều agent.

| Phương án | Đánh đổi và quyết định | Giả định cần thử | Điều kiện bác bỏ hoặc xem lại |
|---|---|---|---|
| Chat-only assistant | Dễ tiếp cận nhưng câu trả lời rời sổ, nguồn và hành động chưa giải quyết trọn việc kiểm tra. Chat có thể là giao diện, không phải toàn bộ sản phẩm | Người dùng cần hoàn tất một công việc có bằng chứng, không chỉ hỏi kiến thức | Nếu chỉ cần giải thích và không có lợi ích từ công cụ/đề xuất có cấu trúc, không thêm vòng agent |
| Agent có giám sát, công cụ giới hạn — hướng chọn | Kết nối ngữ cảnh → đề xuất → duyệt; tăng chi phí thiết kế quyền và công kiểm tra của người dùng | Nguồn và tập hành động có thể giới hạn; người dùng hiểu bản đề xuất và lợi ích bù được công duyệt | Nếu rule/workflow xác định làm tốt hơn, dùng nó; nếu thời gian duyệt/sửa không giảm hoặc người dùng duyệt mù, thiết kế chưa đạt |
| Thực thi tài chính tự chủ | Có vẻ ít thao tác nhưng làm tăng hậu quả sai, khó thu hồi hành động và vượt mục tiêu kiểm soát | Đòi quyền tài chính và mức tin cậy không có trong phạm vi này | Loại khỏi hướng được duyệt; không dùng kết quả đọc/đối chiếu tốt để suy ra quyền thanh toán, giao dịch hay custody |

Nguyên tắc tham khảo: [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) phân biệt workflow do code điều phối với agent do mô hình điều phối, khuyến nghị giải pháp đơn giản đủ dùng, phản hồi từ môi trường và checkpoint của con người. Chi phí, độ trễ và lỗi tích lũy là đánh đổi cần đo. Đây là nguyên tắc thiết kế, không phải lựa chọn Anthropic, xác nhận công nghệ TiHoMo hoặc bằng chứng nhu cầu thị trường.

## Ranh giới chức năng AI-native đề xuất

Đây là **hợp đồng thiết kế để thẩm định tương lai**, không mô tả kiến trúc runtime hiện hành, API hay lựa chọn lưu trữ.

| Ranh giới | Lý do cần có và giới hạn |
|---|---|
| Ngữ cảnh có nguồn | Mỗi dữ kiện phải gắn tài khoản, kỳ, tiền tệ, nguồn và mức đầy đủ đã biết. Sao kê là bằng chứng trong phạm vi của nó, không mặc định bao phủ tiền mặt, mọi tài khoản hoặc giao dịch chưa hạch toán. Dữ liệu chưa đủ là trạng thái cần thấy, không phải số không |
| Công cụ có phạm vi | Quyền đọc, tạo đề xuất và ghi phải tách biệt. Công cụ chỉ nhận phạm vi được người dùng cấp; mô hình không tự cấp quyền hoặc sử dụng credential nằm trong văn bản. MCP tương lai phải tuân cùng ranh giới, không có đặc quyền riêng |
| Tính toán và kiểm tra xác định | Tổng số tiền, số dư, quy đổi kỳ, tiền tệ và kiểm tra cấu trúc phải dựa vào phép tính/validation có thể tái hiện, không lấy văn bản LLM làm nguồn số học. Thiếu tỷ giá có nguồn hoặc kỳ không tương thích thì chưa được cộng thành tổng |
| Đề xuất có căn cứ | Giải thích bằng bản ghi nguồn, phép tính, giả định, khác biệt trước/sau và điều chưa biết. Không cần công khai suy luận nội bộ của mô hình; câu văn tự tin hoặc điểm confidence chưa hiệu chuẩn không thay thế bằng chứng |
| Phê duyệt và thực thi riêng | Người dùng duyệt đúng tập thay đổi trên đúng phiên bản dữ liệu. Duyệt không bỏ qua kiểm tra quyền và điều kiện nghiệp vụ. Nếu nguồn hoặc đề xuất đổi sau khi duyệt thì phải kiểm tra và xin duyệt lại, không dùng xác nhận cũ cho tác vụ mới |
| Dấu vết kết quả | Phân biệt đề xuất, đã duyệt, đã thực thi, bị từ chối và chưa xác định. Bằng chứng cần đủ truy nguồn và đối chiếu kết quả; không ghi credential hoặc lưu sao kê đầy đủ vào log chỉ để có audit. Cách lưu, thời hạn và quyền xem phải được duyệt riêng |
| Nội dung ngoài không phải chỉ thị | Mô tả giao dịch, sao kê, file và kết quả từ bên thứ ba là dữ liệu không đáng tin về mặt điều khiển. Nội dung kiểu “bỏ qua quyền”, “gửi dữ liệu” hoặc đường dẫn trong tài liệu không được nâng thành lệnh, nguồn cấp quyền hay đích gửi mặc định |

Nếu không có đủ căn cứ, hướng đích là dừng ở “cần xác minh” và nêu dữ liệu còn thiếu. Không đánh dấu “đã khớp” để che lỗi, không suy ra “automation đúng” khi chưa có nguồn đối chiếu, không kết luận gian lận từ một bất thường.

### Ma trận quyền và phê duyệt mục tiêu

Ma trận là ranh giới sản phẩm được đề xuất để thiết kế và kiểm chứng, **không phải danh sách quyền đã được enforce**. “Được đọc” không bao gồm quyền gửi dữ liệu cho provider hoặc bên thứ ba.

| Hành động | Agent có thể đề xuất/làm trong hướng đích | Quyền và phê duyệt cần có | Bằng chứng cần giữ |
|---|---|---|---|
| Đọc bản ghi, so sánh, tính toán | Đọc/tính trong phạm vi được cấp, không đổi sổ | Người dùng cấp đúng tài khoản/kỳ/mục đích; việc xử lý AI tuân consent riêng | Phạm vi nguồn, phiên bản dữ liệu, phép tính và phần chưa bao phủ |
| Tạo bản nháp phân loại, đối chiếu hoặc kịch bản | Tạo đề xuất tách khỏi dữ liệu chính thức | Chỉ quyền tạo đề xuất; không lấy im lặng làm duyệt | Nguồn, giả định, thay đổi dự kiến, giới hạn và lý do |
| Thêm/sửa/xóa/gộp giao dịch, sửa phân loại hay đánh dấu đã đối chiếu | Chỉ đề xuất trước; ghi sau khi người dùng chấp thuận | Duyệt tường minh từng thay đổi hoặc một tập thay đổi cố định, thấy được toàn bộ phạm vi; kiểm tra lại trước ghi | Người duyệt, tập thay đổi, phiên bản trước/sau và kết quả thực thi |
| Lưu rule, nghĩa vụ định kỳ, ngân sách hoặc mục tiêu | Đề xuất; không mặc định sửa lịch sử hoặc bật tự ghi tương lai | Duyệt rõ phạm vi áp dụng; bản duyệt rule không cấp quyền ghi sổ tự chủ cho các lần chạy sau | Rule/giá trị được duyệt, phạm vi tương lai/lịch sử và kết quả |
| Xuất/chia sẻ dữ liệu, gửi tới AI provider, bật MCP/hook | Chưa mở chỉ vì người dùng đã cấp quyền đọc | Consent riêng về mục đích, trường dữ liệu, bên nhận và quyền; thẩm định bảo mật/chính sách trước tích hợp | Phạm vi đã đồng ý, bên nhận được duyệt, cơ chế thu hồi và giới hạn xóa thực tế |
| Thay đổi quyền hoặc ngắt kết nối | Có thể giải thích/đề nghị; không tự nâng quyền | Người dùng kiểm soát cấp/thu hồi quyền; quyền bị thu hồi phải chặn tác vụ tiếp theo | Quyền hiệu lực và tác vụ bị chặn/đã thực hiện trước khi thu hồi |
| Thanh toán, chuyển tiền, đặt lệnh, giữ tài sản | Không thuộc phạm vi | Không cung cấp công cụ thực thi này theo chiến lược được duyệt | Không quảng cáo hoặc mô phỏng như năng lực của TiHoMo |

## Ba workflow ưu tiên để kiểm chứng

Tất cả là **giả thuyết trải nghiệm chưa triển khai/chưa kiểm chứng**. Đầu vào mô tả nhu cầu cho app tương lai, không phải lời mời tải dữ liệu lên landingpage. Định dạng hỗ trợ chỉ được chốt sau thẩm định; không mở rộng bằng chứng nhập Excel thành hỗ trợ PDF/OCR hoặc mọi ngân hàng.

### 1. Đối chiếu và chất lượng dữ liệu

- **Đầu vào →** sổ theo dõi và nguồn sao kê được phép sử dụng cho tài khoản/kỳ đã chọn; thông tin nhập liệu thủ công/automation nếu có. Phải biết nguồn nào chưa có và dòng nào chưa đọc được.
- **Đề xuất →** danh sách cặp khớp và khoản thiếu/trùng/lệch cần kiểm tra, kèm bản ghi nguồn, số tiền/ngày/tiền tệ, lý do và khác biệt dự kiến. Hai khoản cùng số tiền chưa đủ để kết luận trùng; chuyển nội bộ, hoàn tiền và ngày ghi nhận cần được phân biệt.
- **Phê duyệt →** người dùng giữ nguyên, sửa đề xuất hoặc duyệt thay đổi cụ thể trước khi ghi sổ; không tự gộp/xóa hoặc xác nhận cả kỳ chỉ vì phần đã đọc khớp.
- **Bằng chứng và thiếu dữ liệu →** đối chiếu về dòng nguồn và phép tính tổng; giữ khoản chưa xác định riêng. Thiếu sao kê một phía, số dư đầu kỳ hoặc tài khoản liên quan thì báo phạm vi chưa đối chiếu, không điền suy đoán hay tuyên bố số dư đúng toàn bộ.

### 2. Phân loại và xem lại khoản định kỳ

- **Đầu vào →** giao dịch có nguồn, nhóm người dùng đã chọn và lịch sử đủ cho phạm vi đang xét; nghĩa vụ/chu kỳ đã khai báo nếu có.
- **Đề xuất →** nhóm chi, khoản có thể lặp, phí có thể tăng và rule dạng bản nháp, chỉ rõ bản ghi so sánh. Khoản lặp không tự chứng minh subscription hoặc nghĩa vụ hợp đồng.
- **Phê duyệt →** người dùng duyệt phân loại, rule hoặc nghĩa vụ dự kiến; việc áp dụng vào giao dịch đã xác nhận phải được duyệt riêng. Không tự hủy subscription hoặc thanh toán hóa đơn.
- **Bằng chứng và thiếu dữ liệu →** giữ lý do, mẫu giao dịch và phản hồi sửa của người dùng. Lịch sử ngắn, merchant mơ hồ, refund hoặc biến động chu kỳ thì ghi “chưa đủ căn cứ”; không bịa ngày đến hạn hoặc lấp tháng còn thiếu.

### 3. Kịch bản ngân sách từ dữ liệu đã kiểm tra

- **Đầu vào →** thu–chi đã kiểm tra trong phạm vi xác định, nghĩa vụ dự kiến, ngân sách/mục tiêu do người dùng khai báo và giả định họ chọn cho kịch bản.
- **Đề xuất →** so sánh “nếu thay đổi khoản này” với phương án gốc, tách khoản thực tế, dự kiến và giả định. Tổng và chênh lệch do tính toán xác định; AI hỗ trợ diễn giải, không dự đoán tương lai như sự thật.
- **Phê duyệt →** xem kịch bản không đổi sổ; lưu ngân sách/mục tiêu hoặc sửa nghĩa vụ phải có xác nhận. Không suy ra quyền chuyển tiền tiết kiệm, đầu tư hoặc điều chỉnh giao dịch.
- **Bằng chứng và thiếu dữ liệu →** nêu kỳ bao phủ, phép tính, nguồn và khoản chưa biết. Thu nhập không chắc chắn hoặc thiếu nghĩa vụ phải được giữ dưới dạng giả định có thể sửa; không kết luận “an toàn để chi” từ dữ liệu chưa đủ, không đưa lời khuyên đầu tư cá nhân bảo đảm kết quả.

## Bằng chứng hiện có và khoảng cách với hướng đích

**Snapshot source, không phải kiểm chứng runtime:** [mvp-scope](../handoff/epic-1/discovery/mvp-scope.md) sở hữu danh mục, đường dẫn source được khảo sát và giới hạn từng claim. Nền thu–chi/tài khoản, nhập Excel và recurring/expected được ghi nhận “có source”; ngân sách/kế hoạch và các module nền khác có bằng chứng một phần. Bản khảo sát không xác minh luồng AI đối chiếu, MCP, connector MISA, outbound hook, portfolio hoặc report builder. Không nâng những trạng thái đó chỉ vì chiến lược đặt AI ở trung tâm; không diễn giải “chưa tìm thấy trong khảo sát” thành kiểm kê toàn hệ thống hiện tại.

**Nguồn site hiện hành:** [copy homepage](../../src/lib/home-content.ts), [component homepage](../../src/components/HomePage.astro) và [nhãn trạng thái](../../src/components/StatusBadge.astro) sở hữu cách truyền đạt; [schema bài](../../src/content.config.ts) và Markdown được link trong phần SEO sở hữu bài giáo dục. [Báo cáo local](../../plans/reports/jade-flow-local-acceptance.md) chỉ chứng minh phạm vi/lần kiểm tra được ghi trong chính báo cáo, không chứng minh app, năng lực AI, production hay SEO thực tế.

**Khoảng cách cần giữ công khai:** chưa có luồng AI và kết quả đánh giá để chứng minh lời hứa giảm công, chất lượng đề xuất, an toàn quyền ghi hoặc chi phí. Chưa có provider/chính sách dữ liệu được chọn; landingpage không phải sản phẩm tài chính đang mở quyền dùng. Handoff cũ được giữ nguyên provenance, không sửa snapshot để khớp với định vị mới.

## Roadmap theo gate bằng chứng, không theo ngày

Đây là thứ tự học hỏi đề xuất, không kế hoạch release đã cam kết. Có thể dừng hoặc thay phương án khi bằng chứng không ủng hộ. Mở rộng danh mục không phải điều kiện để hoàn thành chiến lược/site.

| Gate | Câu hỏi quyết định | Artifact cần có để xét bước tiếp | Khi bằng chứng không đạt |
|---|---|---|---|
| Xác nhận công việc và baseline | Persona có thật sự tốn công đối chiếu và muốn được hỗ trợ không? | Ghi nhận nghiên cứu được đồng ý, tác vụ đại diện, thời gian/lỗi của cách thủ công và rule không AI, lý do không muốn dùng | Xem lại vấn đề hoặc trải nghiệm; không dùng quan tâm với AI thay cho nhu cầu công việc |
| Chất lượng dữ liệu và nguồn | Có thể biết điều gì đã đọc/đã khớp/còn thiếu không? | Bộ tình huống có đáp án được người review, provenance, phạm vi định dạng và ca thiếu/trùng/chuyển nội bộ/hoàn tiền; số liệu tách theo loại ca | Thu hẹp phạm vi được công bố theo bằng chứng, không tuyên bố bao phủ mọi nguồn |
| Đối chiếu có giám sát | Có giảm tổng công kiểm tra mà không tạo thay đổi trái quyền không? | So sánh cùng tác vụ/baseline, bản đề xuất và sửa của người dùng, kết quả kiểm tra quyền/thu hồi/nguồn đổi sau duyệt/nội dung tài liệu chứa chỉ thị | Dừng mở quyền ghi nếu có thay đổi trái quyền; nếu công duyệt lấn át lợi ích, cải thiện hoặc dùng workflow xác định |
| Phân loại và khoản định kỳ | Gợi ý có lặp lại giá trị ngoài một ví dụ đẹp không? | Kết quả theo nhiều chu kỳ phù hợp, lý do chấp nhận/sửa/từ chối, độ đúng rule và phạm vi áp dụng | Không áp rule hồi tố âm thầm hoặc coi ít dữ liệu là một chu kỳ chắc chắn |
| Kịch bản ngân sách | Dữ liệu đầu vào và giả định có đủ để người dùng hiểu kết quả không? | Tính toán tái hiện được, kiểm tra trường hợp thiếu dữ liệu, nghiên cứu người dùng phân biệt thực tế/dự kiến/giả định | Giữ ở minh họa phương pháp; không nâng thành forecast hoặc tư vấn tự chủ |
| Mở kết nối và xét khả năng public | Quyền, consent, chất lượng, chi phí và hỗ trợ có được chứng minh trong phạm vi dự kiến không? | Hồ sơ thẩm định provider/dữ liệu, permission tests, đánh giá rủi ro, nguồn chi phí thật, quyền bên thứ ba và review claim | Giữ chưa public/chưa tích hợp; không lấy API key hay demo thay cho thẩm định |

MCP/n8n/hook, MISA, theo dõi đầu tư và báo cáo vẫn là hướng mở rộng trong danh mục gốc. Chỉ chọn lát cắt khi có công việc người dùng và bằng chứng liên quan; không biến roadmap ưu tiên thành lời hứa sẽ triển khai toàn bộ.

### Chỉ số thực dụng cần đo

Chưa có số đo hoặc ngưỡng thương mại được chấp nhận. Trước một thử nghiệm, người có thẩm quyền cần chốt tập ca, mẫu số, cách review, ngân sách và tiêu chí ra quyết định; không đặt ngưỡng sau khi xem kết quả. Các phép đo là đề xuất nghiên cứu sản phẩm tương lai, không cho phép cài analytics hoặc thu dữ liệu trên site hiện tại.

| Góc đo | Cách đánh giá đề xuất | Tránh kết luận sai |
|---|---|---|
| Độ đúng và độ bao phủ | So đề xuất khớp với đáp án đã review; ghi precision/recall theo loại sai lệch. Tách tỷ lệ dòng đọc được, dòng đánh giá được, dòng chưa xác định và tài khoản/kỳ có nguồn | Không chỉ tính trên đề xuất dễ đã chấp nhận; thiếu nguồn không có mẫu số để khẳng định bao phủ toàn bộ tài chính |
| Thay đổi nguy hiểm chưa được duyệt | Đối chiếu thay đổi thực với đúng quyền, người duyệt và phiên bản đề xuất; thử ca thiếu duyệt, thu hồi quyền, đổi nguồn, lặp yêu cầu và prompt injection trong tài liệu | Bất kỳ thay đổi ngoài quyền đều vi phạm ranh giới, không bù bằng tỷ lệ trung bình cao. Không xảy ra trong tập thử không chứng minh không bao giờ xảy ra |
| Chấp nhận so với sửa/từ chối | Tách chấp nhận nguyên trạng, sửa trước duyệt, từ chối, bỏ qua và sửa lại sau ghi; review độc lập một tập ca phù hợp | Người dùng bấm đồng ý không đồng nghĩa đúng. Đếm cả đề xuất không được xử lý và lý do |
| Thời gian tiết kiệm | So cùng loại tác vụ và độ khó với baseline thủ công; tính cả chuẩn bị, chờ, review, sửa lỗi và hoàn tất kiểm tra | Không lấy thời gian sinh câu trả lời làm thời gian hoàn thành; nêu độ biến thiên và trường hợp chậm hơn, không suy thành ROI |
| Chi phí vận hành | Tính chi phí model, công cụ/hạ tầng và công hỗ trợ/review trên một kỳ đối chiếu hoặc tác vụ hoàn tất đúng; tách tác vụ thất bại và độ trễ | Token rẻ không chứng minh đơn vị kinh tế tốt; chi phí của demo không phải chi phí quy mô thực |

Báo cáo kết quả tương lai cần đi kèm phạm vi dữ liệu, cách lấy mẫu, bản hệ thống được đánh giá, lỗi và ngoại lệ. Dữ liệu đánh giá phải tổng hợp/khử định danh thích hợp; không đưa sao kê, người dùng hoặc credential vào tài liệu công khai.

## Điều kiện trước khi chọn provider và xử lý dữ liệu thật

Đây là **prerequisite phải quyết định**, không phải chính sách TiHoMo đã triển khai hay lời bảo đảm “dữ liệu không rời thiết bị”. Chấp nhận dùng AI không thay thế chấp nhận ghi sổ; cho phép đọc không thay thế cho phép gửi ra ngoài.

- Xác định mục đích và trường dữ liệu tối thiểu cần gửi cho từng công việc; xem xét cách loại bỏ dữ liệu không cần thiết. Không dùng credential ngân hàng hoặc toàn bộ lịch sử chỉ vì mô hình nhận được ngữ cảnh dài.
- Thẩm định điều khoản provider, bên xử lý phụ, vùng xử lý, việc sử dụng dữ liệu để huấn luyện, logging/retention, xóa, giới hạn lưu dự phòng và chi phí thực. Chỉ công bố điều đã được kiểm chứng và ràng buộc bằng thỏa thuận phù hợp.
- Thiết kế consent có thể hiểu được: dữ liệu nào, mục đích nào, gửi cho ai, khi nào, giữ bao lâu, quyền từ chối/thu hồi và hậu quả của việc thu hồi. Không coi sử dụng landingpage hoặc một lần duyệt giao dịch là consent cho mọi xử lý sau đó.
- Chốt cách người dùng xem/xuất/xóa dữ liệu và ngắt kết nối, cùng giới hạn thực tế của hành động đã gửi tới bên thứ ba. Không hứa hoàn tác giao dịch bên ngoài hoặc thu hồi dữ liệu đã truyền khi chưa có cơ chế chứng minh.
- Chứng minh phân tách người dùng/tài khoản, quyền tối thiểu, ngăn lộ dữ liệu qua log và nội dung tài liệu chứa chỉ thị. Cần người có trách nhiệm duyệt bảo mật/chính sách và xử lý sự cố trước thử nghiệm dữ liệu thật.

Không tên provider, lựa chọn triển khai on-device/cloud, chứng nhận hay mức bảo vệ nào được chốt trong chiến lược này. Mọi kết nối tương lai phải có phạm vi được cho phép riêng; site vẫn không nhận dữ liệu.

## Luận điểm đầu tư và mô hình kinh doanh giả thuyết

Luận điểm không dựa vào “AI đang là xu hướng”. Điểm khởi đầu là một công việc có thể đo: kiểm tra sổ nhiều nguồn. Giá trị mở rộng, nếu được chứng minh, là dùng cùng dữ liệu có nguồn và lịch sử quyết định để hỗ trợ phân loại, nghĩa vụ và kịch bản. Không gọi đây là moat, độc quyền hoặc ưu thế đã chứng minh; một đối thủ hoặc workflow xác định có thể giải quyết tốt tương đương.

| Giả thuyết khác biệt | Bằng chứng cần kiếm | Điều có thể bác bỏ |
|---|---|---|
| Chất lượng dữ liệu trước hội thoại giúp hoàn tất công việc tốt hơn | So sánh có kiểm soát với thao tác thủ công, rule và trợ lý chỉ chat trên cùng dữ liệu/tác vụ | Không cải thiện kết quả hoặc công review tăng |
| Căn cứ và quyền duyệt làm người dùng kiểm soát được đề xuất | Nghiên cứu khả năng hiểu trước/sau, lỗi người dùng phát hiện, quyền được enforce và dấu vết kiểm tra được | Người dùng không hiểu căn cứ, duyệt máy móc hoặc vẫn có thay đổi trái quyền |
| Ngữ cảnh có nguồn dùng lại qua các workflow tạo giá trị liên tục | Dùng lặp qua các kỳ với consent, độ đúng giữa đối chiếu/phân loại/kịch bản, lý do tiếp tục hoặc bỏ dùng | Người dùng chỉ cần một tác vụ đơn lẻ; việc giữ ngữ cảnh làm tăng rủi ro/chi phí hơn lợi ích |

**Giả thuyết kinh doanh, chưa phải pricing:** một gói thuê bao cá nhân có thể phù hợp nếu giá trị kiểm tra lặp lại được xác nhận; mô hình theo lượng công việc xử lý có thể phù hợp chi phí biến đổi nhưng dễ tạo cảm giác khó dự đoán; năng lực kết nối nâng cao có thể phục vụ power user sau khi giá trị cốt lõi rõ. Cần phỏng vấn willingness-to-pay và thử nghiệm được phê duyệt riêng, không suy từ traffic hay lời khen AI. Chưa chốt gói miễn phí/trả phí, đơn giá, thị trường, doanh thu hoặc cam kết biên lợi nhuận. Không dùng bán dữ liệu tài chính hay thúc đẩy giao dịch đầu tư làm tiền đề của luận điểm hiện tại.

**Hồ sơ thẩm định cần tạo bằng công việc thật:** ghi nhận vấn đề/baseline có consent; bộ dữ liệu đánh giá có provenance và quyền dùng; kết quả theo loại lỗi; bản ghi đề xuất–duyệt–kết quả đã khử dữ liệu nhạy cảm; minh chứng thử quyền/thu hồi/prompt injection; nghiên cứu khả năng hiểu và dùng lại; chi phí đơn vị từ lượt chạy thật; quyết định provider/dữ liệu; bằng chứng quyền tích hợp và đối chiếu claim với release được phép công bố. Đây là đầu ra cần có để kiếm quyền đưa ra claim, không phải artifact đã tồn tại hoặc yêu cầu tạo một cây tài liệu mới trong lần làm site.

## Chiến lược SEO theo ý định người đọc

Mục tiêu là giúp persona giải quyết công việc ngay cả khi họ không dùng TiHoMo. “AI-native” giải thích định hướng sản phẩm, không thay thế nội dung hữu ích về dữ liệu tài chính. Các truy vấn dưới đây là **giả thuyết ngôn ngữ/ý định**, chưa có volume, mức cạnh tranh, thứ hạng hay xác nhận nhu cầu; bản EN không phải bằng chứng đã mở thị trường quốc tế.

### Bản đồ nội dung đang có

Liên kết dưới đây tới nguồn bài hiện có, không tạo URL sản phẩm hoặc bài mới. Slug và tuyến public được giữ theo [brief](../../plans/reports/brainstorm-261011-2028-tihomo-prelaunch-landingpage.md); source bài sở hữu chi tiết phương pháp, ví dụ và tài liệu tham khảo.

| Cụm ý định | Giả thuyết truy vấn VI / EN | Nội dung sở hữu và vai trò |
|---|---|---|
| Tổng hợp dữ liệu nhiều tài khoản | “quản lý thu chi nhiều tài khoản”, “chuyển khoản nội bộ có tính là chi” / “track spending across multiple accounts”, “avoid double counting internal transfers” | [Bài VI](../../src/content/blog/vi/quan-ly-thu-chi-nhieu-tai-khoan.md) · [Bài EN](../../src/content/blog/en/quan-ly-thu-chi-nhieu-tai-khoan.md): điểm vào cho người cần tổ chức sổ; nối tới đối chiếu |
| Đối chiếu và xử lý sai lệch | “đối chiếu sao kê với sổ thu chi”, “giao dịch trùng hoặc thiếu” / “reconcile bank statement with personal ledger”, “missing or duplicate transactions” | [Bài VI](../../src/content/blog/vi/checklist-doi-chieu-sao-ke.md) · [Bài EN](../../src/content/blog/en/checklist-doi-chieu-sao-ke.md): hướng dẫn công việc cốt lõi có giá trị độc lập, không demo AI |
| Nghĩa vụ định kỳ và ngân sách | “khoản chi định kỳ ngân sách”, “phân bổ hóa đơn hàng năm theo tháng” / “budget for recurring payments”, “monthly equivalent of annual bills” | [Bài VI](../../src/content/blog/vi/khoan-dinh-ky-va-ngan-sach.md) · [Bài EN](../../src/content/blog/en/khoan-dinh-ky-va-ngan-sach.md): nối dữ liệu đã kiểm tra với nghĩa vụ, không hứa forecast |
| Hiểu sản phẩm và quyền của AI | “TiHoMo AI quản lý tài chính cá nhân”, “AI có tự sửa giao dịch không” / “TiHoMo AI-native personal finance”, “AI ledger approval controls” | [Homepage dùng chung](../../src/components/HomePage.astro): giải thích định hướng, quyền duyệt, trạng thái và dẫn tới bài; không cần trang feature mỏng |

### Bài ứng viên, chưa có URL hoặc lịch xuất bản

| Cụm tiếp nối và truy vấn giả thuyết VI / EN | Bài ứng viên và giá trị cần thêm | Điều kiện để viết/public |
|---|---|---|
| “hoàn tiền lệch kỳ sao kê” / “refunds and statement posting dates” | Tình huống hoàn tiền/chuyển nội bộ lệch kỳ, mở rộng bài đối chiếu bằng ví dụ kiểm tra được | Có nguồn phù hợp, ví dụ tự tính lại; không trùng nội dung bài gốc |
| “phí định kỳ tăng”, “kiểm tra subscription” / “review recurring fee increases”, “subscription review checklist” | Checklist xác minh biến động phí và nghĩa vụ; không gán bất thường thành gian lận | Phương pháp áp dụng thủ công, không claim TiHoMo tự phát hiện/hủy dịch vụ |
| “AI quản lý chi tiêu dùng dữ liệu gì” / “what financial data does an AI assistant need” | Cách đọc một đề xuất AI: nguồn, thiếu dữ liệu, quyền duyệt và câu hỏi về consent | Nội dung giáo dục tách khỏi chính sách chưa duyệt; không hứa độ chính xác hay bảo mật sản phẩm |
| “MCP API webhook khác nhau tài chính cá nhân” / “MCP API webhooks for personal finance” | Giải thích ranh giới truy vấn, tác vụ và sự kiện cho nhóm tích hợp | Giải thích khái niệm có nguồn; tutorial kết nối TiHoMo chỉ sau khi có runtime và quyền thực được kiểm chứng |
| “kịch bản ngân sách nếu chi thêm” / “what-if budget with irregular income” | Bài tập phân biệt khoản thực tế/dự kiến/giả định, cho thấy hệ quả của thiếu dữ liệu | Phép tính xác định và giới hạn rõ; không khuyến nghị đầu tư cá nhân hoặc bảo đảm đủ tiền |

Ưu tiên ứng viên theo câu hỏi thật chưa được bài hiện có giải quyết và khả năng kiểm chứng, không theo số bài cần xuất bản. Không sinh hàng loạt trang ngân hàng/tài sản/từ khóa AI, không gắn link tới bài chưa tồn tại. Giữ bài hiện tại và bản dịch đầy đủ; CTA tiếp tục dẫn tới nội dung/định hướng, không chuyển sang thu lead.

### Chuẩn hữu ích và YMYL

[Google Search Central — Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) là nguồn nguyên tắc: viết cho người đọc có công việc cụ thể, thể hiện nguồn và lý do tin cậy, không chạy theo chủ đề đang nổi chỉ để kéo search. Nội dung có thể ảnh hưởng ổn định tài chính cần mức cẩn trọng tương ứng. E-E-A-T không phải một ranking factor riêng hoặc “chứng chỉ SEO”.

- Mỗi bài phải giải quyết được câu hỏi đã hứa, có giá trị độc lập, ví dụ ghi rõ minh họa và phép tính kiểm tra được. Phân biệt phương pháp thủ công với tính năng TiHoMo chưa có.
- Dẫn nguồn gốc đã đọc; giữ giới hạn quốc gia, đơn vị tiền tệ và ngữ cảnh khi dịch. Không biến hướng dẫn của nước khác thành quyền hay thời hạn pháp lý tại Việt Nam.
- Chỉ ghi người viết/reviewer và năng lực thật được phép công bố; không tạo danh tính/chứng nhận để làm tăng độ tin cậy. Ngày cập nhật phản ánh thay đổi nội dung thực, không đổi ngày vì muốn trông mới.
- Nội dung giáo dục không phải tư vấn tài chính/đầu tư cá nhân, không bảo đảm lợi nhuận, khả năng chi trả hoặc phát hiện gian lận. Cảnh báo không thay thế việc sửa nội dung sai hoặc nguy hiểm.
- Không coi độ dài, keyword density, số bài, rich result hay thứ hạng là thước đo mặc định của chất lượng. Có thể dùng AI hỗ trợ biên tập nhưng cần review nguồn, số học và claim; không tạo nội dung hàng loạt chỉ để chiếm truy vấn.

### Gate SEO local và production

**Local:** [brief](../../plans/reports/brainstorm-261011-2028-tihomo-prelaunch-landingpage.md) sở hữu contract route/locale/metadata/fragment; [check-dist](../../scripts/check-dist.mjs) và [báo cáo nghiệm thu](../../plans/reports/jade-flow-local-acceptance.md) là tuyến tới kiểm tra và kết quả có phạm vi. Đọc được HTML và nội dung đúng ở local không chứng minh đã index, có traffic hoặc ranking.

**Trước production:** cần quyền publish, domain thật, review claim và nội dung VI/EN; xác minh canonical/hreflang, sitemap/robots và khả năng crawl trên artifact/deployment thực. Không tạo URL giả hoặc dùng local preview làm bằng chứng production. Đây là gate riêng, không tự mở deploy, thu dữ liệu hay analytics.

**Sau khi được phép public:** có thể đề xuất đánh giá truy vấn, impressions/click theo cụm bằng nguồn search được cấp quyền và review người đọc xem bài có giải quyết công việc không. Việc mở nguồn đo cần phê duyệt riêng; chưa thu số liệu ở đây. Không có signup nên không đặt chuyển đổi đăng ký làm kết quả hiện tại. Dùng câu hỏi/phản hồi thực để sửa giả thuyết, không suy từ thứ hạng sang hiệu quả AI, traction app hay willingness-to-pay.

## Quyết định tiếp theo thuộc ai

Chủ sản phẩm giữ quyết định công việc thử đầu tiên, phạm vi app và quyền công bố claim. Người phụ trách kỹ thuật/chính sách được chỉ định sau phải thẩm định nguồn dữ liệu, provider, quyền, tiêu chí đánh giá và chi phí trước khi dùng dữ liệu thật hoặc mở quyền ghi. Chưa xác định các lựa chọn này không chặn deliverable chiến lược/site, nhưng chặn việc quảng cáo AI đang hoạt động, nhận dữ liệu hoặc phát hành app dựa trên tài liệu này.
