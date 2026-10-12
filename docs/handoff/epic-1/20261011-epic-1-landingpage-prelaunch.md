---
handoff_version: 1
generated_at: 2026-10-11T18:40:00.287+07:00
kind: feature
title: TiHoMo — handoff landingpage và SEO trước public
source_task: epic-1
source_issue: null
intended_recipient: landingpage team
target_project: TiHoMo landingpage
---

# HANDOFF: TiHoMo — handoff landingpage và SEO trước public

## Mission and current status

Mục tiêu: bàn giao một brief tự chứa để đội landingpage chuẩn bị site giới thiệu TiHoMo và nội dung SEO trước khi app public. Không yêu cầu đội này hoàn thiện các module app.

Người cần: cá nhân muốn giảm ghi chép thủ công và kiểm soát dòng tiền; nhóm phụ là người dùng n8n/AI agent. Persona là đề xuất chưa được phỏng vấn.

Vấn đề: giảm nhập tay không đủ nếu dữ liệu automation bị thiếu, trùng hoặc sai mà người dùng không biết. Giá trị hướng tới: tự động hóa việc ghi chép, giữ quyền kiểm soát và giúp kiểm tra dữ liệu tài chính.

Use case: người đọc tìm thấy bài hướng dẫn hoặc homepage, hiểu giá trị và trạng thái sản phẩm, xem feature/FAQ, rồi chọn nhận tin nếu có luồng tiếp nhận thật.

Done: Discovery và PRD draft đã được tạo, có danh mục feature phân lớp, bản nháp copy và hướng SEO. Chủ sản phẩm yêu cầu dừng mở rộng workflow để handoff. Remaining: đội nhận xác minh bối cảnh, review content/claim và chốt CTA trước publish form. Đây là proposal/content brief, không phải scope xây app đã duyệt. Deadline và chỉ tiêu số: Not captured in this session.

## Scope and guardrails

Nguồn và artifact host: TiHoMo workspace root. Consumer: TiHoMo landingpage, code pointer đã biết là `src/landingpage/`. Người nhận: landingpage team. `epic-1` chỉ là provenance; không phân công, tạo ticket hoặc dispatch bằng handoff này. Source issue: Not captured in this session.

In scope đề xuất: homepage prelaunch, feature status/roadmap trung thực, FAQ, vài nội dung giáo dục SEO có giá trị độc lập và CTA phù hợp trước public.

Non-goals: xây AI reconciliation, MCP, MISA connector, portfolio, outbound hook hoặc custom report builder; public app; pricing/chiến dịch quảng cáo; chọn framework/deploy trong packet này.

### Đánh giá kết quả đề xuất từ PRD
- Người đọc hiểu app chưa public và phân biệt nền tảng có source với định hướng/ý tưởng.
- Nội dung và hình ảnh không nâng roadmap thành tính năng sẵn dùng; mockup ghi là minh họa.
- Bài giáo dục có ích độc lập, có nguồn/ngày cập nhật phù hợp; không hứa ranking.
- Nếu nhận đăng ký, phản hồi đúng kết quả tiếp nhận thật và nói rõ mục đích dùng dữ liệu; không form thành công giả.

Đây là outcome/guardrail để review, không acceptance được formal hóa hoặc scope đã phê duyệt. Không thu sao kê, token, thông tin đăng nhập ngân hàng hoặc dữ liệu tài chính nhạy cảm trên form quan tâm. Không tuyên bố AI chính xác tuyệt đối, đảm bảo lợi nhuận, chứng nhận bảo mật, đối tác hay số người dùng chưa có bằng chứng.

## Current state

Live-observed lúc 2026-10-11T18:37:30+07:00: cấu hình root xác nhận TiHoMo có sub-workspace `landingpage` tại `src/landingpage/`; các đoạn nguồn discovery và câu hỏi CTA đã được đọc trong capture này.

Existing source observation trong phiên trước capture: README landingpage mô tả repository mới khởi tạo, chưa có site/framework/deploy. Recipient phải kiểm tra lại, không coi snapshot này là trạng thái checkout của mình.

User-reported, unverified: app chưa public; mục tiêu hiện tại là handoff cho đội landingpage chạy nội dung SEO trước public.

| Repository/host liên quan | Pointer tương đối | Branch | HEAD | Dirty/untracked state |
|---|---|---|---|---|
| TiHoMo artifact host | `.specify/feature/epic-1/` | Not captured in this session | Not captured in this session | Not captured in this session |
| TiHoMo landingpage | `src/landingpage/` | Not captured in this session | Not captured in this session | Not captured in this session |

Không chạy Git probe vì đây là handoff nội dung, không tiếp tục code. Các thay đổi artifact đã biết được liệt kê ở Work performed; trạng thái commit/transfer: Not captured in this session. Packet không mang theo code hay các file chưa commit và không đảm bảo recipient có các pointer trong checkout của họ.

## Decisions and rationale

### Narrative đề xuất
- H1: **Tự động hóa việc ghi chép. Giữ quyền kiểm soát tài chính của bạn.**
- Mô tả: **TiHoMo đang phát triển nền tảng quản lý thu–chi, tài khoản và giao dịch định kỳ, với định hướng đối chiếu sao kê, cảnh báo sai lệch và kết nối AI agent/automation.**
- CTA đề xuất: **Đăng ký nhận tin ra mắt**. Chỉ dùng private access khi có chương trình thật. CTA phụ: **Xem định hướng tính năng**.
- Lợi ích người dùng trước công nghệ; n8n/MCP/API là lớp thông tin phụ. Không dùng “Dùng ngay” khi chưa public.
- Rationale: app thu–chi thuần chưa thể hiện ý định automation; hero thuần MCP quá kỹ thuật. Chọn câu chuyện automation có kiểm soát như đề xuất, chưa xác nhận hiệu quả thị trường.

### Feature summary để viết site
“Có source” không đồng nghĩa đã kiểm chứng end-to-end hoặc sẵn dùng công khai. Kết quả khảo sát chỉ áp dụng các backend finance/import/identity và Nuxt liên quan trong TiHoMo.

| Nhóm feature | Trạng thái nguồn đã ghi nhận | Cách truyền đạt |
|---|---|---|
| Thu–chi hằng ngày, nhiều tài khoản | Có source backend/Nuxt | Nền tảng hiện có, app chưa public; không hứa đồng bộ ngân hàng |
| Nhập Excel và HTTP extraction cho cách gửi file n8n | Có source endpoint/batch import | Giảm nhập lại; không nói AI đọc mọi PDF/sao kê hoặc connector n8n đầy đủ |
| Giao dịch định kỳ, khoản dự kiến và forecast | Có source và UI liên quan | Nhìn trước nghĩa vụ theo dữ liệu khai báo, không phải AI dự báo |
| AI đối chiếu sao kê và tracking thiếu/trùng/sai | Định hướng chủ sản phẩm; chưa tìm thấy implementation tương ứng | Điểm khác biệt muốn phát triển, không phải demo đã chạy |
| Cảnh báo automation sai so với sao kê | Định hướng chủ sản phẩm | Cần nguồn đối chiếu và giải thích sai lệch; không hứa không bao giờ bỏ sót |
| Phát hiện chi tiêu/phí bất thường | Định hướng chủ sản phẩm | Khoản cần kiểm tra, không kết luận gian lận |
| Ngân sách và cảnh báo vượt chi tiêu | Backend/query threshold và over-budget có source; chưa thấy linkage/UI/delivery đầy đủ | Không claim email/push/cảnh báo tự động đã hoạt động end-to-end |
| Lập kế hoạch chi tiêu | Có nền recurring/expected/forecast, chưa phải kế hoạch toàn diện | Mô tả nền tảng và định hướng mở rộng |
| Đồng bộ bên thứ ba như sổ thu chi MISA | Mới thấy bool SyncMisa, chưa thấy connector | Định hướng; không logo đối tác/tích hợp sẵn dùng hoặc hứa hai chiều |
| Đầu tư vàng, coin, chứng khoán | Mới thấy enum, chưa thấy portfolio service/UI | Theo dõi danh mục/giá vốn/lãi lỗ là định hướng; không đặt lệnh/custody/realtime mặc định |
| Public MCP cho AI agent | Có API-key foundation, chưa thấy product MCP server | API key không bằng MCP; không quảng cáo đã có quyền/tool đầy đủ |
| Hook kích hoạt n8n/automation bên thứ ba | Chưa thấy outbound hook tương ứng | Webhook push khác HTTP API pull và MCP; message bus nội bộ không phải public hook |
| Custom report | Chưa thấy report builder | Filter/forecast/dashboard template không chứng minh báo cáo tùy chỉnh |
| Tài chính cá nhân toàn diện với automation/AI agent | Tầm nhìn chủ sản phẩm | Đích dài hạn, không phải phạm vi phải xong trước public |

Nền khác: backend 6 hũ và chi tiêu chung có source nhưng chưa xác minh UI tương ứng; nợ mới xác minh model, không quảng cáo module nợ hoàn chỉnh. Dashboard Sales template không phải bằng chứng báo cáo tài chính cá nhân.

Nhãn đề xuất: **Nền tảng hiện có — chưa public**, **Định hướng phát triển**, **Ý tưởng đang tìm hiểu**.

### Candidate bổ sung, chưa được chọn thành roadmap cam kết
Inbox kiểm tra nguồn dữ liệu/sai lệch; preview và phê duyệt thao tác AI; gợi ý phân loại và rule sửa được; subscription/tăng phí định kỳ; mục tiêu tiết kiệm và kịch bản dòng tiền; trung tâm sức khỏe automation và ngắt kết nối; export/backup/xóa và lựa chọn việc gửi dữ liệu cho AI; tổng tài sản ròng.

### Hướng nội dung site và SEO
Bố cục đề xuất: hero → vấn đề → nền tảng hiện có → định hướng đối chiếu/automation → nhóm mở rộng → FAQ/minh bạch → CTA. Kịch bản đối chiếu minh họa phải gắn nhãn định hướng, không giả demo runtime.

Cụm bài brainstorm: quản lý thu–chi/nhiều tài khoản; checklist đối chiếu sao kê và thiếu/trùng; ngân sách/6 hũ/nghĩa vụ định kỳ; review phí/subscription; automation và sự khác nhau giữa API/MCP/webhook; kế hoạch/báo cáo cá nhân. Tutorial TiHoMo chỉ publish sau khi luồng thực được kiểm chứng. Chủ đề đầu tư là nhóm mở rộng cần ưu tiên riêng.

Chọn ít bài sâu thay vì hàng loạt feature page mỏng. Keyword chưa có dữ liệu volume/cạnh tranh. Trước publish, đội site xác minh khả năng render/index, metadata/canonical, sitemap/robots và điều hướng; không index dữ liệu private. Không hứa ranking/rich result. Các hướng này là content guidance, chưa triển khai SEO kỹ thuật.

## Work performed

Existing work trong phiên, trước capture:
- Tạo `.specify/feature/epic-1/discovery.md` và ba detail files: `discovery/problem.md`, `discovery/personas.md`, `discovery/mvp-scope.md`.
- Tạo `.specify/feature/epic-1/epic-prd.md` và ba detail files: `epic-prd/prd.md`, `epic-prd/slice-map.md`, `epic-prd/open-questions.md`.
- Tạo rồi cập nhật `.specify/feature/epic-1/index.md` sang PRD draft; giữ nguyên bốn discovery artifacts.
- Khảo sát chỉ đọc source/memory và chạy validation artifact bằng Python qua functions.eval.

Không tạo code, child spec, plan, HLD, task breakdown, tracker issue hoặc product-memory update. Capture hiện tại chỉ đóng gói một packet; không gửi cho team, publish hoặc dispatch.

Redactions applied: 0.

## Verification

Existing command results trước capture; thời điểm thực thi chi tiết: Not captured in this session.
- Python qua functions.eval kiểm tra Discovery contract: PASS; đúng 5 file, 28 heading bắt buộc, 12 local links hợp lệ, 12 nhóm brief, không output thừa. Không xác minh runtime app.
- Python qua functions.eval kiểm tra PRD contract/gate: PASS; đúng 4 PRD files, 25 heading, 49 links và 36 anchors hợp lệ, 3 slug slice; 1 blocker và NOT READY; bốn discovery files không đổi, nội dung dashboard ngoài vùng generated được bảo toàn.

Live-observed trong capture: Bun đã provisioned, có Bun.markdown.render và Bun.markdown.html; bundled exporter có sẵn. Đây là kiểm tra prerequisite capture, không test ứng dụng.

Không chạy build/test/lint, reproduction mới, UI smoke hoặc audit bảo mật trong capture. Site/app readiness, hiệu quả SEO và integrations bên thứ ba chưa được kiểm chứng bởi các kiểm tra Markdown trên.

## Open risks and blockers

- **Blocker còn mở — owner: chủ sản phẩm phối hợp landingpage team:** CTA là nhận tin/private access/không thu đăng ký? Nếu thu, nơi nhận thật, người quản lý và mục đích dùng dữ liệu là gì? Chốt trước khi publish form. Không chọn provider hay báo thành công giả để lấp chỗ trống.
- **Readiness:** PRD còn 1 blocker nên NOT READY cho epic HLD/breakdown. Điều này không chặn handoff hoặc việc chuẩn bị content/layout; không tự coi seed đã ready hay bắt team chạy tiếp workflow epic.
- **Review trước publish:** persona, copy, screenshot và nhãn feature cần chủ sản phẩm duyệt; có source không bằng public readiness.
- **Risk:** roadmap bị hiểu thành tính năng sẵn dùng, lời hứa accuracy AI/đối tác/giá realtime hoặc trust claim chưa có evidence.
- **Assumption:** cá nhân tiếng Việt là target đầu, power user phụ; confidence medium, chưa interview. Nhu cầu SEO/đăng ký chưa có số liệu kiểm chứng.
- **Governance:** constitution alignment NOT CHECKED do thiếu file tại đường dẫn cấu hình; không tự bổ sung authority trong packet.
- **Transfer:** các pointer là nguồn trong workspace gửi; recipient có thể chưa có file/local changes. Packet tự chứa summary, không chuyển repo hay file không commit.

Giá, ngày public, ngân sách marketing, framework/provider đã được duyệt: Not captured in this session.

## Exact next actions

1. **First safe step**: Đội nhận xác minh đúng consumer TiHoMo landingpage, tình trạng site/app hiện tại, nguồn tài liệu có thể truy cập và các giả định/nhãn feature trước khi dùng brief; không coi snapshot là code hoặc approval đã được chuyển sang checkout của mình.
2. Review narrative, nhóm người dùng và claim với chủ sản phẩm; giữ các feature tương lai dưới nhãn định hướng. Có thể bắt đầu content/layout từ summary này, không cần mở rộng thêm HLD/spec chỉ để handoff.
3. Chốt CTA và nơi tiếp nhận/mục đích dùng dữ liệu trước publish form; nếu chưa chốt thì không giả một luồng nhận đăng ký hoạt động.
4. Chọn nhóm bài giáo dục nhỏ, soạn homepage/FAQ và đánh dấu mockup đúng bản chất; đội nhận tự chọn workflow thông thường của dự án khi cần triển khai.
5. Trước public site, xác minh claim, nội dung/indexability và hành vi CTA thực tế. Không suy ra mọi module app cần hoàn thành từ danh mục định hướng.

## Source pointers

Các pointer tương đối dưới đây đã được xác minh trong workspace nguồn trong phiên; không đảm bảo có ở checkout người nhận. Nội dung trọng yếu đã được tóm tắt trong packet để có thể gửi riêng một file.

- `.specify/feature/epic-1/index.md` — dashboard, current stage và readiness.
- `.specify/feature/epic-1/discovery/mvp-scope.md` — danh mục feature, evidence/giới hạn claim, đề xuất thêm và SEO; đoạn trạng thái đã đọc lại trong capture.
- `.specify/feature/epic-1/discovery/problem.md` — định vị, hero/CTA, constraints; đoạn copy đã đọc lại trong capture.
- `.specify/feature/epic-1/discovery/personas.md` — persona giả thuyết và jobs-to-be-done; context từ discovery trong phiên.
- `.specify/feature/epic-1/epic-prd/prd.md` — product alignment tham khảo, không cần chạy tiếp workflow để dùng summary.
- `.specify/feature/epic-1/epic-prd/slice-map.md` — ba slice candidate: homepage, nhận tin, learning hub; không phải work item đã tạo.
- `.specify/feature/epic-1/epic-prd/open-questions.md` — blocker CTA/tiếp nhận; đoạn blocker đã đọc lại trong capture.
- `src/landingpage/README.md` — source observation trước capture về repository mới khởi tạo; cần recipient xác minh lại.

Source tracker issue hoặc tài liệu thị trường/volume có nguồn: Not captured in this session.
