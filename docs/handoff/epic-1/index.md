---
source_epic: "epic-1"
artifact_type: "epic-prd"
status: draft
created: "2026-10-11T18:16:10+07:00"
---

# epic-1 — TiHoMo prelaunch landingpage context

<!-- AUTO-GEN:BEGIN epic-dashboard -->

## Current Stage

**Epic PRD — draft product alignment.** Manifest hiện tại: [epic-prd.md](./epic-prd.md). Discovery nguồn: [discovery.md](./discovery.md).

Mục đích: handoff danh mục feature và định vị cho đội landingpage/SEO trước public; không triển khai site hoặc app.

## Stage Manifest Links

| Stage | Manifest | Trạng thái |
|---|---|---|
| Discovery | [discovery.md](./discovery.md) | Đã tạo bộ context; chưa interview |
| Epic PRD | [epic-prd.md](./epic-prd.md) | Đã tạo draft; còn 1 blocking question |
| Epic HLD | Chưa tạo | Chưa thực hiện |
| Task breakdown | Chưa tạo | Chưa thực hiện |

## Readiness

- Discovery handoff được giữ nguyên: [định vị/hero/CTA](./discovery/problem.md), [persona](./discovery/personas.md), [feature status/cutline/SEO](./discovery/mvp-scope.md).
- PRD: [product alignment](./epic-prd/prd.md), [ba slice candidate](./epic-prd/slice-map.md), [câu hỏi và evidence](./epic-prd/open-questions.md).
- **NOT READY** cho epic HLD/breakdown vì còn **1 Blocking Question**: CTA prelaunch và cơ chế tiếp nhận thật/mục đích dùng dữ liệu chưa được chốt.
- Draft dùng được để review nội dung; không tự nhận các feature app sẵn dùng hoặc biến roadmap thành scope triển khai landingpage.
- Checklist discovery là advisory; readiness gate PRD không ready khi còn Blocking Questions.
- Interview alignment: **disabled**. Constitution alignment: **NOT CHECKED** theo discovery vì thiếu file tại đường dẫn cấu hình.

## Authority Boundary

Discovery chỉ tạo bối cảnh. Chỉ **child `spec.md`**, qua `/tdk-specify`, mới mint yêu cầu. PRD/HLD/task breakdown của epic cũng không sở hữu mã yêu cầu.

Product-level signals trong discovery là candidate; product authority thuộc constitution và typed memory qua workflow phù hợp. Không tạo tracker issue, kế hoạch triển khai hay code ở đây.

## Next Command

**Recommended:** `/tdk-epic-prd epic-1 --interview`

Sau khi Blocking Questions trống: `/tdk-epic-hld epic-1`.

Chỉ dùng child `/tdk-specify` sau khi downstream breakdown tạo seeds/child ID. Slice text trong PRD chưa tạo child spec hoặc yêu cầu.

<!-- AUTO-GEN:END epic-dashboard -->
