# Public-safety preflight — 2026-10-12

## Kết quả và ranh giới

Technical preflight PASS. Maintainer đã duyệt source/docs/history disclosure và baseline, commit/push + bootstrap settings + PR negative CI probe; hai `.specify` updates được đưa vào baseline. Không tự merge. Repository tại thời điểm approval vẫn private/develop, Pages chưa bật; remote receipts sẽ được ghi riêng sau thao tác thực.

## Coverage

- HEAD, develop, origin/develop và origin/HEAD: `f6d8581937706587da1a66fac040766b7f054d3d`.
- `git ls-remote --heads --tags origin`: chỉ develop tại cùng SHA; không refs remote mới cần fetch. Checkout không shallow; history có một commit, ba file `.specify/.specify.json`, `.specify/configurations/rules.md`, `README.md`.
- Candidate: 67 file tracked/untracked không bị ignore; gồm source, sáu bài, fonts/license, lockfile, config, docs, plans và journals. Các generated/tool directories bị ignore không thuộc release candidate.
- Gitleaks **8.30.1**, official Windows x64 archive checksum verified against official release checksums. Directory scan: 437,603 bytes, exit 0, zero findings. Git scan `--log-opts="--all --full-history"`: một commit, 2,544 bytes, exit 0, zero findings.
- Default rules, `--ignore-gitleaks-allow`, `--redact=100`; raw reports và scanner ở temporary directory ngoài repo, không commit scanner/config/dependency.
- User index SHA256 trước implementation: `c0e96c524ffb1beceb8db0f1d31eb258f872faf9668e3d95f6f6c89e31fa5e3d`. Không stage/reset/stash/commit.
- Current implementation scan: 76 candidate files, 532,043 bytes, exit 0, zero findings; gồm hai metadata endpoints, workflow, new reports và hai browser screenshots. Remote heads/tags recheck vẫn chỉ develop tại initial SHA; existing history coverage không đổi.
- User index SHA256 kiểm tra sau implementation vẫn khớp snapshot ban đầu. Không commit/push, giữ staging và hai `.specify` user changes.
- Dependency audit warnings không phải secret finding; [reachability/disposition](base-path-local-acceptance.md#dependency-audit-observation) được nêu riêng, không gọi audit sạch.
- Final local gate scan sau journal/handoff updates: 77 files, 536,572 bytes, exit 0, zero findings. Approved A/B commit trees vẫn cần scan trước push/public; technical scan không thay thế business approval đã được ghi ở baseline.

## Manual disclosure review

| Surface | Evidence / disposition |
|---|---|
| Git history / author metadata | Đọc toàn bộ initial diff; public GitHub noreply identity, repository/workspace pointers; không credential hoặc dữ liệu khách hàng |
| Site source, UI scripts, Markdown | Static educational content, illustrative finance examples; theme/header scripts không network/storage. Không file sao kê thật, account credential, dump hoặc customer dataset trong inventory |
| Fonts | Sáu WOFF2 và OFL license; binary assets của typography, không user upload |
| `docs/handoff/epic-1/` | Đã đọc packet, manifest và detail files. Có private-app source pointers, capability gaps, persona/CTA draft; không transcript hoặc identity khách hàng. **Disclosure cần được maintainer chấp thuận khi public source** |
| `docs/product/ai-native-strategy.md` | Chứa chiến lược chưa phát hành, investor/SEO hypotheses và roadmap; không pricing/customer data thực. **Public-source approval phải bao gồm tài liệu này** |
| `plans/` | Deployment design, operational GitHub URLs, local machine paths và snapshots; không secret scanner output/token. Machine paths ở plan cũ có thể lộ cấu trúc máy; cần acknowledgement trước public, không tự sửa historical records |
| `config.yml` | Agent/model/provider routing, không credential; local tool configuration, đề xuất exclude khỏi commits A/B |
| `.specify/` | Historical workspace setup đã review; hai user modifications giữ nguyên, không tự commit |

Zero scanner findings không chứng minh mọi thông tin đều được phép công khai. Không có technical secret blocker được phát hiện; **business/operational disclosure approval vẫn là mandatory remote gate**. Không rotation, history rewrite hoặc visibility mutation.

## Baseline

[Candidate A/B inclusion/exclusion](production-baseline.md). Working-tree proof không được gán thành commit-tree hoặc public deployment proof. Fresh incremental scan và maintainer approval bắt buộc trước phase 4.
