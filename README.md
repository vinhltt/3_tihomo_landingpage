# TiHoMo Landing Page

Repository dành cho homepage công khai và các landing page của TiHoMo, phục vụ SEO và chiến dịch quảng cáo. Đây là sub-workspace riêng, tách khỏi ứng dụng quản lý tài chính tại `src/fe/nuxt`.

## Trạng thái khởi tạo

- Repository: https://github.com/vinhltt/3_tihomo_landingpage (private).
- Nhánh chính: `develop`.
- Git submodule trong workspace TiHoMo: `src/landingpage`.
- Tên sub-workspace TDK: `landingpage`.
- Cấu hình riêng: [.specify/.specify.json](.specify/.specify.json).
- Quy tắc phạm vi: [.specify/configurations/rules.md](.specify/configurations/rules.md).

Lần khởi tạo này chỉ thiết lập repository, submodule và cấu hình. Chưa chọn framework, cài dependency, dựng giao diện, triển khai SEO, gắn quảng cáo hoặc cấu hình deploy. Chưa có lệnh chạy, build, lint hay test.

## Làm việc trong workspace TiHoMo

Từ root của `3_tihomo`, tải submodule bằng:

```bash
git submodule update --init src/landingpage
```

Cấu hình workspace root đăng ký `landingpage` và quản lý tài liệu tích hợp tại `.specify/configurations/sub-workspaces/landingpage/`. Spec và project memory tiếp tục được quản lý ở workspace root.

Commit và push thay đổi trong repository này trước; sau đó cập nhật gitlink `src/landingpage` trong repository root.
