---
phase: 1
title: "Phase 1: Public-safety và baseline"
status: pending
priority: P1
effort: ""
dependencies: []
---

# Phase 1: Public-safety và baseline

## Goal

Chứng minh candidate source và lịch sử được phép công khai, xác định baseline hiện hành trước mọi thay đổi visibility hoặc nhánh production.

## Context Links

- [Brief được duyệt](../reports/brainstorm-261012-1722-github-pages-cicd.md#2-brainstorm-contract).
- [Evidence hiện tại](./reports/codebase-evidence.md).
- [README](../../README.md) và [navigation](../../docs/README.md).

## Overview / Key Insights

Repo còn private; chỉ có develop, không workflow/Pages. Checkout có 39 staged files, 2 unstaged files và docs/plans/config untracked. Snapshot remote không thể mặc định là toàn bộ site đang phát triển. Public source/history và public artifact là hai bề mặt exposure khác nhau.

## Requirements

- Giữ nguyên staging, working tree và thay đổi ngoài scope; không dùng `git add .`, reset, clean hoặc stash để tạo baseline.
- Rà soát mọi file sẽ được commit và toàn bộ refs/history sẽ được public, gồm source, docs, plans, config, binary và URL/log/credential references.
- Phát hiện secret, personal data hoặc tài liệu chưa được phép public thì dừng promotion. Rotation/removal/history rewrite cần quyết định riêng; chuyển lại private không thu hồi exposure.
- Quyết định public trong brief được giữ nguyên; phase này là kiểm tra điều kiện an toàn, không hỏi lại lựa chọn hosting/visibility.

## Architecture

Candidate inventory + Git history → automated secret scan + manual disclosure review → báo cáo đã redacted → baseline manifest. Đây là gate cho phase 2 và phase 4, không phải deploy step.

## Related Code Files / Ownership

- Read-only: candidate tree, index và Git refs của project tại `D:/1_workspace/0_personal/3_tihomo/src/landingpage`.
- Create: `D:/1_workspace/0_personal/3_tihomo/src/landingpage/plans/261012-1035-github-pages-cicd/reports/public-safety-preflight.md`.
- Create: `D:/1_workspace/0_personal/3_tihomo/src/landingpage/plans/261012-1035-github-pages-cicd/reports/production-baseline.md`.
- Không sửa/xóa source/history ở phase này; không lưu raw scanner report vào repo.

## Implementation Steps

1. Khi execution được yêu cầu, đọc skill security phù hợp; đọc lại `git status --short --branch`, `git diff --cached --stat`, `git diff --stat`, `git ls-files` và candidate untracked files. Ghi danh mục inclusion/exclusion và HEAD/ref SHAs, không in nội dung nhạy cảm ra chat.
2. Fetch refs chỉ khi scope execution cho phép network/git fetch; xác định các refs/history remote thực tế. Scan working candidate riêng với scan Git history; kết quả scan artifact không thay được hai việc này.
3. Dùng secret scanner của workflow security, xác minh help/version trước chạy. Nếu cần cài tool, không commit config/lockfile chỉ để cài scanner. Lưu báo cáo raw ở vị trí tạm ngoài repository; chế độ redaction phải bật. Không coi một regex hoặc absence trong .gitignore là bằng chứng sạch.
4. Review thủ công source/docs/plans/config và các file lịch sử có thể chứa thông tin nội bộ, dữ liệu cá nhân, access endpoint, bản dump hoặc credential source. Không tải token/secret lên external judge/service. Báo cáo tracked chỉ ghi path/category/disposition, không secret value, private data hoặc raw logs.
5. Phân loại findings: secret thực cần xử lý; thông tin vận hành cần quyền disclosure; false positive có bằng chứng. Nếu có blocker, giữ repo private và ghi chính xác điều kiện clearing; không rewrite lịch sử tự động.
6. Ghi baseline manifest: nguồn site đang staged/untracked nào cần đưa vào release, phần nào ngoài scope giữ nguyên, verification sẽ áp dụng trên commit tree nào. Không tự commit những thay đổi của người dùng. Khi chuẩn bị commit/push ở phase 4, maintainer duyệt manifest và diff cuối cùng; record approved SHA sau commit.
7. Chỉ qua gate khi scanner/history coverage, manual disclosure review và baseline inventory đều có bằng chứng. Nếu candidate hoặc refs thay đổi sau preflight, scan lại phần mới và cập nhật coverage trước public.

## Todo

- [x] P1.1 — Lập candidate/history inventory và manifest, không thay staging.
- [x] P1.2 — Hoàn tất secret scan và manual disclosure review, xử lý hoặc ghi blocker đã redacted.
- [x] P1.3 — Ghi public-safety gate và baseline inclusion/exclusion để phase 4 duyệt commit.

## Success Criteria / Verification

Read-only commands từ project root:

```bash
git status --short --branch
git diff --cached --stat
git diff --stat
git ls-files
gh api repos/vinhltt/3_tihomo_landingpage --jq '{private,default_branch,has_pages,permissions}'
gh api repos/vinhltt/3_tihomo_landingpage/branches --jq 'map({name,protected})'
```

Pass khi report nêu scanner/version, refs/candidate đã bao phủ, manual review, findings dispositions và không còn exposure blocker. Chưa ghi “public”, “published” hoặc “deployment passed”. Report phải tách baseline dự kiến với SHA đã được maintainer duyệt sau này. Acceptance criteria 8–9 có gate tiền đề tại phase này, chưa được nghiệm thu.

## Risk Assessment / Security

- Scanner không bắt được mọi confidential content: manual review là bắt buộc.
- Refs/candidate mới sau scan: invalidate coverage liên quan, scan lại trước public.
- Token không có admin hoặc GitHub policy cấm public: phase 4 dừng settings mutation và ghi prerequisite; không đổi hosting hoặc tạo PAT thay thế.
- Không đưa scanner evidence raw vào docs public; report có đường dẫn nhạy cảm phải redacted phù hợp.

## Next Steps / Rollback

Sau gate, phase 2 sửa contract site local. Không có visibility hoặc Git mutation cần rollback tại phase này. Dừng trước public nếu gate không đạt.
