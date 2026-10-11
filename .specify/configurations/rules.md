# Quy tắc sub-workspace landingpage

## Phạm vi

- Sở hữu homepage công khai và các landing page của TiHoMo phục vụ SEO và quảng cáo.
- Tách biệt với ứng dụng quản lý tài chính dành cho người dùng đăng nhập tại `src/fe/nuxt`.
- Không sở hữu nghiệp vụ tài chính, xác thực hoặc dữ liệu người dùng của các backend service.

## Cấu hình khởi tạo

- Nhánh chính của repository là `develop`.
- Khi nằm trong workspace TiHoMo, sử dụng spec và project memory tại workspace root.
- Framework, package manager, công cụ kiểm thử và lệnh build/lint/test chưa được lựa chọn; chỉ cập nhật metadata và commands khi có cấu hình thực tế.
- Không đưa credential hoặc token quảng cáo, analytics hay deploy vào repository.
