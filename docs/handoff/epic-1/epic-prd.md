---
source_epic: "epic-1"
artifact_type: "epic-prd"
status: draft
created: "2026-10-11T18:26:29+07:00"
---

# Epic PRD Manifest

> Product alignment cấp epic, tracker-neutral. Dashboard: [index.md](./index.md). Chỉ child `spec.md` mới mint yêu cầu; PRD không triển khai site/app hoặc cập nhật product memory.

## Source Discovery

- [Discovery manifest](./discovery.md)
- [Problem, định vị và giới hạn claim](./discovery/problem.md)
- [Persona và jobs-to-be-done](./discovery/personas.md)
- [Feature inventory, MVP cutline và handoff SEO](./discovery/mvp-scope.md)

Bộ discovery được giữ nguyên. Các giả thuyết vẫn được đánh dấu; chọn workflow PRD không thay thế việc duyệt persona, cutline hay marketing claim.

## Artifact Map

| Artifact | Purpose |
|---|---|
| [prd.md](./epic-prd/prd.md) | Objective, outcomes, scope site prelaunch, appetite, assumptions và no-gos |
| [slice-map.md](./epic-prd/slice-map.md) | Ba slug slice candidate: homepage, nhận tin và nhóm nội dung giáo dục |
| [open-questions.md](./epic-prd/open-questions.md) | Một blocker về CTA/tiếp nhận; câu hỏi không blocking và evidence còn thiếu |

**Phạm vi:** landingpage/SEO trước public. Feature app được giữ đầy đủ trong danh mục discovery và nội dung có trạng thái; không chuyển thành scope xây AI/MISA/MCP/đầu tư/hook/report builder.

**Interview alignment:** disabled. **Constitution alignment:** NOT CHECKED theo discovery vì thiếu file tại đường dẫn cấu hình.

## Readiness Gate

**NOT READY** cho epic HLD hoặc breakdown: còn **1 Blocking Question** tại [open-questions.md](./epic-prd/open-questions.md#blocking-questions).

Blocker: CTA prelaunch thực hiện nhận tin/private access/không thu đăng ký, và nếu thu thì kênh nhận, người quản lý, mục đích dùng dữ liệu là gì? Chưa có quyết định hoặc cơ chế tiếp nhận thật được xác nhận; không tự tạo form thành công giả.

- [x] Discovery source đã được đọc làm context, không coi là requirement authority.
- [ ] MVP appetite đã được chủ sản phẩm review; hiện là đề xuất draft.
- [x] Slice map có ba outcome hữu hạn, không có catch-all; ít nhất một slice không phụ thuộc mọi slice khác.
- [ ] Blocking Questions trống — hiện còn 1.
- [ ] Ready cho thiết kế/breakdown và sau đó tạo child spec seeds.

Bộ draft đủ để đội landingpage review narrative/content và để chủ sản phẩm giải quyết blocker. Gate PRD khác checklist advisory của discovery: khi Blocking Questions còn mở, PRD không tự nhận ready cho downstream design.

## Next Commands

**Recommended hiện tại:** `/tdk-epic-prd epic-1 --interview` để xác nhận phạm vi và giải quyết câu hỏi CTA/tiếp nhận trên các artifact hiện có.

Sau khi Blocking Questions trống: `/tdk-epic-hld epic-1`.

Chỉ sau thiết kế/breakdown tạo child seeds mới dùng `/tdk-specify` với child ID hợp lệ. Slice-map hiện tại là candidate seed text; không mint ID hoặc tạo child artifact trong PRD.

Không tạo requirement IDs, tracker record, spec, plan, phase, HLD, task breakdown, source code hay product-memory update trong workflow này.
