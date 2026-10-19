---
source_epic: "epic-1"
artifact_type: "discovery"
status: draft
created: "2026-10-11T18:16:10+07:00"
---

# Discovery Manifest

> Bối cảnh cấp epic, không phải authority sản phẩm. Dashboard: [index.md](./index.md). Discovery không tạo yêu cầu, đặc tả, kế hoạch triển khai, code hoặc tracker record.

## Artifact Manifest

| Artifact | Mục đích | Cách đội landingpage sử dụng |
|---|---|---|
| [problem.md](./discovery/problem.md) | Vấn đề, định vị, lựa chọn thông điệp và giới hạn claim | Đọc bản nháp hero/CTA và các điều không được hứa |
| [personas.md](./discovery/personas.md) | Persona giả thuyết, jobs-to-be-done và giả định | Ưu tiên lợi ích cho người dùng cá nhân; công nghệ là lớp phụ |
| [mvp-scope.md](./discovery/mvp-scope.md) | Danh mục feature, trạng thái source, đề xuất thêm, cutline và SEO | Nguồn handoff chính cho section feature, roadmap, FAQ và cụm bài SEO |

## Summary

- **Epic:** `epic-1` — định vị và danh mục năng lực TiHoMo để handoff đội landingpage/SEO trước khi public app.
- **Brief:** tổng hợp thu–chi hằng ngày; AI đối chiếu sao kê và kiểm tra automation; cảnh báo sai lệch/phí bất thường/vượt ngân sách; kế hoạch chi tiêu; báo cáo tùy chỉnh; MISA; đầu tư vàng/coin/chứng khoán; public MCP; outbound hook/n8n; tầm nhìn tài chính cá nhân toàn diện. Có thêm candidate về provenance, phê duyệt AI, phân loại, subscription, mục tiêu, sức khỏe automation, quyền dữ liệu và tài sản ròng.
- **Depth:** deep, suy ra từ brief có nhiều nhóm feature và mục đích handoff rõ; không có depth mode/flag mới.
- **Định vị khuyến nghị:** “Tự động hóa việc ghi chép. Giữ quyền kiểm soát tài chính của bạn.” Giả thuyết khác biệt: kiểm soát dữ liệu sau automation, không phải chatbot tài chính tổng quát.
- **Bằng chứng nền:** transactions/accounts, nhập Excel, recurring/expected và forecast có source; ngân sách/hũ/chi tiêu chung có backend. Những bằng chứng này không xác nhận public readiness.
- **Khoảng cách quan trọng:** chưa tìm thấy luồng AI reconciliation, MCP server, MISA connector, outbound hook, portfolio đa tài sản hoặc custom report builder trong phạm vi khảo sát. Cảnh báo ngân sách mới xác minh query/detection, chưa delivery/linkage end-to-end. Module nợ mới xác minh model, khác mô tả rộng trong memory.
- **Lát cắt site đề xuất:** homepage trung thực về trạng thái, nội dung giáo dục hữu ích và CTA nhận tin trước public; không chuyển mọi feature thành phạm vi release đầu.
- **Handoff:** đủ bối cảnh để đội landingpage chuẩn bị nội dung. Claim public, persona ưu tiên và kênh tiếp nhận đăng ký vẫn cần chủ sản phẩm duyệt.
- **Interview alignment:** disabled; không có `--interview`, không ghi là đã đồng thuận qua phỏng vấn.
- **Constitution:** đường dẫn cấu hình `.specify/memory/constitution.md` không tồn tại; alignment **NOT CHECKED**. Đã dùng các typed domain overview hiện có và source, không sửa memory.
- **Verification boundary:** khảo sát chỉ đọc source/memory và kiểm tra bộ Markdown; không chạy ứng dụng để xác minh tính năng sản phẩm. Không tạo hay sửa site.

## Product-level signals

**Chỉ là candidate checklist:** cần con người review trước khi đề xuất cập nhật qua `/tdk-constitution --update`. Không phải authority, không cập nhật constitution hoặc typed memory trong discovery.

- [ ] **Bối cảnh nhu cầu candidate:** giảm công nhập liệu vẫn cần cơ chế kiểm tra dữ liệu thiếu/trùng/sai sau automation; chưa phải kết luận nghiên cứu thị trường.
- [ ] **Đối tượng candidate:** cá nhân cần kiểm soát dòng tiền là trọng tâm đề xuất, power user n8n/AI là nhóm phụ; chưa được interview xác nhận.
- [ ] **Ràng buộc sản phẩm candidate:** người dùng giữ quyền với dữ liệu và thay đổi quan trọng do agent đề xuất; chính sách chi tiết chưa được chốt.
- [ ] **Định hướng hệ sinh thái candidate:** HTTP API, MCP và outbound hook phục vụ các kiểu kết nối khác nhau; hướng triển khai chưa phải cam kết tương thích/public.
- [ ] **Mô hình kinh doanh/khác biệt thị trường:** chưa đề xuất fact bền vững; không có pricing, volume, competitor ranking hoặc claim độc quyền để đưa vào authority.

## Ready For Epic PRD

Checklist **advisory, không chặn handoff**. Discovery hoàn tất về cấu trúc dù các mục cần review còn mở; `/tdk-epic-prd` không phụ thuộc số mục được đánh dấu.

- [ ] Problem context đã được chủ sản phẩm review: vấn đề, người dùng, ràng buộc và định vị.
- [ ] Persona context đã được review: nhóm ưu tiên và jobs-to-be-done.
- [ ] MVP cutline đã được review: tách nội dung prelaunch, scope public đầu đề xuất và tầm nhìn mở rộng; có Must/Should/Could/Won't.
- [ ] Open questions đã được triage: CTA/kênh đăng ký, phạm vi đối chiếu, quyền automation và thứ tự module; các điểm bỏ qua có lý do.
- [x] Discovery không mint mã yêu cầu, không tạo spec/plan/code/work item/tracker record.

**Readiness:** có thể handoff nội dung và chuyển sang PRD ở mức draft; chưa đủ cơ sở quảng cáo toàn bộ roadmap như feature sẵn dùng.

**Next command:** `/tdk-epic-prd epic-1`. Nếu cần kiểm tra lại cách hiểu trước PRD: `/tdk-discovery epic-1 --interview`. Feature nhỏ, rõ nên bắt đầu ở `/tdk-specify`, không dùng discovery như predecessor trực tiếp.
