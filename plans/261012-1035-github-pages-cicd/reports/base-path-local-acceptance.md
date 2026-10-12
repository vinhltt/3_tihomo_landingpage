# Base-path local acceptance — 2026-10-12

**PASS local working tree; không phải commit-tree, CI runner hoặc deployment evidence.** Runtime Node 20.19.5, npm 10.8.2, Astro 5.18.2. Preview `http://127.0.0.1:4321/3_tihomo_landingpage/`.

## Build và artifact

`npm run build`: exit 0; Astro check 22 files, zero errors/warnings/hints; mười HTML pages; publish-aware checker pass. `dist/` có content routes ở root, không có wrapper `dist/3_tihomo_landingpage/`.

Additional isolated clean-install smoke: official portable Node **22.23.3** checksum verified, executable và npm child shell version observed 22.23.3; explicit Node22 `npm ci` + `npm run build` đều exit 0, zero Astro diagnostics, ten routes/checker pass. Probe đầu phát hiện Windows case-insensitive PATH lựa chọn executable không đúng; corrected environment và dùng executable path rõ trước ghi Node22 proof. Không đổi Node installation hoặc node_modules của user worktree. Ubuntu GitHub runner vẫn chưa exercised.

Vite rebase font URLs đúng project base, nên sáu font declarations source không đổi. HTTP smoke mọi 23 artifact files trả 200, gồm sáu WOFF2, CSS, favicon, hai UI scripts, sitemap và robots. Fonts runtime loaded 400/600/700; VI tải cả Latin/Vietnamese subsets. Browser performance resource URLs đều trong local project base, không external asset.

## Browser smoke

Managed Chromium, desktop 1440×1000 và mobile viewport 390×844 (emulation, không real device).

- Direct-open + reload đủ mười routes ở cả desktop/mobile; không page horizontal overflow. Bảng mobile cuộn riêng: region 356px, content 620px.
- Năm equivalent EN↔VI pairs đã click round trip, một base prefix, đúng article slug. Navigation matrix dùng reduced motion để tránh click vào snapshot khi native cross-document transition đang chạy.
- Canonical từng route dùng production origin, self-referential; hai hreflang EN/VI reciprocal. Theme carry query được script remove; canonical không query/hash.
- Desktop Light/Dark/System; mobile System→Light→Dark→System. Dark được giữ khi đổi locale; reload và content navigation reset System. System live OS background light `rgb(246, 249, 247)` / dark `rgb(16, 31, 26)`.
- Manual theme với normal motion thực sự chuyển Dark/Light rồi kết thúc transition; reduced-motion đổi tức thì. Không thay source theme/navigation.
- Sticky header desktop bottom 95px, platform target 118.75px; mobile bottom 121px, FAQ target 145.36px. Logo homepage dùng `#main`.
- JavaScript disabled: theme controls ẩn, mobile locale article link hoạt động, native link tới homepage `#platform` hoạt động; target 283.63px dưới header 121px; theme theo OS dark.
- Browser error/console-error collections rỗng. Một số probe ban đầu bị timeout do navigation/transition timing và browser helper semantics; rerun bằng actual DOM observation/reduced-motion hoàn tất. Không sửa UI hoặc bỏ guard để né lỗi.

Screenshots đã xem trực tiếp:

- [Desktop VI light](base-path-desktop-light.webp)
- [Mobile EN dark](base-path-mobile-dark.webp)

## Negative checker proof

Independent copied artifact trong task-owned ignored temporary directory; real acceptance dist không bị sửa.

| Mutation | Observed rejection (exit 1) |
|---|---|
| Favicon mất prefix | URL escapes the site base |
| Favicon doubled prefix | doubled site base |
| Favicon trỏ file không có | missing local asset |
| VI alternate nhầm hub | incorrect vi alternate |
| Sitemap thêm URL thứ 11 | exactly the ten canonical |
| External stylesheet dùng font relative sai context | missing local asset |

Clean copied artifact sau mỗi restoration pass exit 0; temporary probe directory removed. Existing product/status/article/source/table/no-form/no-tracking/no-storage gates giữ nguyên.

## Robots / remote limits

Project robots syntax-valid, Allow + absolute Sitemap. Origin `https://vinhltt.github.io/robots.txt` kiểm tra lại trả HTTP404: không crawl restriction theo REP tại thời điểm quan sát; phải recheck khi public. Project robots không phải authoritative root policy.

Chưa chạy GitHub Node22 CI, chưa public source/Pages hoặc verify production HTTPS. README/docs chỉ ghi publish-ready. Hai historical Jade Flow brief/acceptance references được thừa kế đang thiếu trong checkout; không phục hồi hoặc fabricate trong scope CI/CD.

## Dependency audit observation

Fresh npm ci báo ba vulnerable packages: Astro 5.18.2 (critical), sharp 0.34.5 (high), esbuild 0.27.7 (low). Đây là dependencies có sẵn trong lockfile, không phải do cutover. Không chạy `npm audit fix --force` hoặc upgrade Astro trái HOLD SCOPE.

- [Critical AVIF optimization](https://github.com/advisories/GHSA-26w7-cxv4-gfx2) cần xử lý untrusted AVIF bằng Sharp. Site không Image/Picture/astro:assets, file ảnh nhập hoặc optimizer runtime; SVG inline/favicon được publish nguyên, không decode bằng Sharp.
- [Sharp librsvg](https://github.com/advisories/GHSA-wq5f-xc86-pv6w) và các image-codec advisories không có processing entry point trong source/artifact hiện hành.
- [SSR Host-header fetch](https://github.com/advisories/GHSA-2pvr-wf23-7pc7) cần Astro SSR/custom adapter; [slot XSS](https://github.com/advisories/GHSA-8hv8-536x-4wqp) cần hydrated client component với untrusted slot name. Config static, không adapter/client islands hoặc user-controlled render properties.
- [esbuild Windows servedir](https://github.com/advisories/GHSA-g7r4-m6w7-qqqr) chỉ ảnh hưởng esbuild serving API, không static Pages artifact. Không cấu hình esbuild serve trong project.

Không phát hiện reachable public Pages exploit từ những advisory prerequisites; **không claim dependencies đã patched hoặc audit sạch**. Giữ toolchain đã duyệt; không mở Astro dev/image/SSR cho dữ liệu không đáng tin. Nếu mở các surface này hoặc muốn dependency remediation, cần scope nâng cấp/thẩm định riêng.

## Resource cleanup

Preview service task-owned `tihomo-pages-preview`, PID 12992, port 4321, project current worktree: stopped. Ba task-owned tabs desktop/mobile/no-JS: closed. Scanner/validator nằm ngoài project dependencies; không commit runtime scaffolds.
