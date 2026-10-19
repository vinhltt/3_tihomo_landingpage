# Quy tắc sub-workspace landingpage

## Phạm vi

- Sở hữu homepage công khai và các landing page của TiHoMo phục vụ SEO và quảng cáo.
- Tách biệt với ứng dụng quản lý tài chính dành cho người dùng đăng nhập tại `src/fe/nuxt`.
- Không sở hữu nghiệp vụ tài chính, xác thực hoặc dữ liệu người dùng của các backend service.

## Cấu hình thực thi

- Nhánh production/default của repository là `main`; giữ `develop` làm nhánh tích hợp.
- Khi nằm trong workspace TiHoMo, sử dụng spec và project memory tại workspace root.
- Stack: Astro 5 (render tĩnh) + Markdown, TypeScript, npm. Lệnh dev/build/preview và kiểm tra hợp đồng sau build được khai báo trong `package.json` và `.specify/.specify.json`.
- Chưa có lint hay bộ test riêng; `npm run build` gồm `astro check`, `astro build` và `scripts/check-dist.mjs`.
- Site không thu dữ liệu: không form, analytics, quảng cáo hay nhúng bên thứ ba. Không đưa credential hoặc token quảng cáo, analytics hay deploy vào repository.
