---
type: brainstorm
status: ready-for-planning
created: 2026-10-12
scope: github-pages-ci-cd
deployment_status: not-started
---

# Brainstorm — GitHub Pages CI/CD cho TiHoMo landingpage

Brief triển khai cho maintainer và coding agent. Đây là contract chuẩn bị deploy, không phải bằng chứng đã public repo, bật Pages hoặc publish website.

## 1. Quyết định và ranh giới hiện tại

Người dùng yêu cầu tự deploy khi merge vào `main` và đã chọn **chuyển repository hiện tại thành public**. Dùng GitHub Pages của chính repository; không tạo repository publish riêng, không đổi hosting và không cần PAT riêng.

Hướng đề xuất kế thừa brainstorm trong phiên này: GitHub Actions chính thức, hai job build/deploy và artifact `dist/`; giữ `develop` làm nhánh tích hợp, thêm `main` làm production. Domain GitHub mặc định được dùng cho lần publish này; chưa cấu hình custom domain.

Chỉ có việc tạo brief và liên kết điều hướng tài liệu được thực hiện ở bước brainstorm. Việc đổi visibility, tạo nhánh, cấu hình protection/Pages, commit, push và publish thuộc bước triển khai sau brief này. Không tự merge PR hoặc bypass protection.

Không tiếp tục điều tra hoặc phục hồi các plan cũ trong phạm vi này. Brief này độc lập với những tài liệu cũ đang thiếu, không giả định chúng đã được khôi phục.

## 2. Brainstorm contract

### Outcome

PR nhắm vào `main` có CI kiểm tra bản build. Sau merge, commit thực tế trên `main` được build và, nếu đạt kiểm tra, tự deploy lên GitHub Pages bằng artifact của chính lần chạy đó.

Website public dự kiến: `https://vinhltt.github.io/3_tihomo_landingpage/`. Đây là URL mục tiêu, chưa phải deployment đang hoạt động.

### Constraints

- Giữ Astro 5, npm và output static; không thêm server, adapter SSR hoặc Docker.
- Giữ EN mặc định, VI dưới `/vi/`, slug bài tiếng Anh dùng chung, theme và animation hiện có. Publish landingpage không được đổi claim của ứng dụng tài chính thành đã phát hành.
- Pipeline gọi build script trong [package.json](../../package.json), không dựng một chuỗi kiểm tra thay thế hoặc bỏ `check-dist` để build thành công.
- Chỉ artifact website từ `dist/` được upload lên Pages. Không upload source, docs, plans, node_modules, dotenv hoặc credential vào artifact.
- Không thêm form, tracker, analytics hoặc cơ chế lưu dữ liệu vào mã site. Hosting vẫn tuân theo chính sách log của GitHub; không hứa toàn bộ hạ tầng không ghi dữ liệu truy cập.
- Repo public sẽ công khai source, docs và lịch sử Git, dù artifact Pages chỉ chứa `dist/`. Phải rà soát dữ liệu nhạy cảm trước khi đổi visibility; không coi chuyển lại private là thu hồi được nội dung đã lộ.
- Chỉ nhánh production được deploy; PR và nhánh tích hợp không có quyền publish. Quyền ghi Pages/OIDC giới hạn ở job deploy.
- Không đổi những thay đổi đang có trong working tree hoặc staging ngoài phạm vi triển khai được duyệt.

### Non-goals

- Deploy backend, ứng dụng quản lý tài chính, auth hoặc payment.
- Preview riêng cho từng PR, môi trường staging public hoặc repository publish thứ hai.
- Custom domain, DNS, signup, analytics, nội dung mới hoặc redesign UI.
- Khôi phục plan cũ, dọn toàn bộ docs, thêm alias URL cũ hoặc đổi slug bài.

### Acceptance criteria

1. PR vào `main` chạy CI; type/content/build/link/asset contract lỗi thì check thất bại và không có deployment.
2. Merge PR hợp lệ tạo workflow trên commit của `main`; deploy chỉ chạy sau build thành công và sử dụng đúng artifact của cùng lần chạy, không build lại.
3. Build thất bại trên `main` không chạy job deploy, không thay bản đang publish.
4. Đủ mười route nội dung VI/EN hiện hành; tất cả mở trực tiếp và reload được dưới base path của repository. EN/VI chuyển tới đúng trang tương đương, không mất hoặc lặp base prefix.
5. CSS, font tự host, favicon và script UI tải được dưới base path; không có 404 do tham chiếu nhầm root của `vinhltt.github.io`.
6. Browser smoke desktop/mobile chứng minh theme Sáng/Tối/Hệ thống, chuyển locale, menu anchor và header vẫn hoạt động tại base path thực. Không phát sinh lỗi console hoặc request tracking từ mã site.
7. Gate publish trong [docs navigation](../../docs/README.md) được đáp ứng: URL production thật, canonical/hreflang theo route tương đương, sitemap/robots hợp lệ; chỉ đưa route public của landingpage vào metadata, không dùng localhost hoặc domain ví dụ.
8. GitHub Pages được cấu hình Source = GitHub Actions; environment `github-pages` chỉ cho `main`; protection yêu cầu PR và CI thành công, áp dụng cả admin để không có đường direct push bỏ qua gate sau bootstrap.
9. Nghiệm thu có URL workflow/deployment và quan sát site public thực; build local không được ghi thành bằng chứng deployment.
10. Có đường rollback bằng PR revert vào `main`; build/deploy lại qua cùng pipeline, không force-push hoặc chỉnh artifact bằng tay.

## 3. Evidence snapshot — 2026-10-12

Phần này là quan sát có thời điểm, không phải inventory evergreen.

- GitHub API của `vinhltt/3_tihomo_landingpage`: `private: true`, `default_branch: develop`, `has_pages: false`; branch API chỉ trả `develop`, Actions API trả không có workflow. Visibility public là lựa chọn của người dùng, chưa phải trạng thái đã áp dụng.
- Baseline `npm run build` đã chạy trong phiên này: Astro check không có errors/warnings/hints, build mười trang và `check-dist` thành công. Chưa chạy CI trên GitHub, chưa nghiệm thu URL public hoặc Node 22 trong runner.
- [Astro config](../../astro.config.mjs) dùng output static, directory build và trailing slash; chưa có `site` hoặc `base`.
- [Locale helpers](../../src/lib/locale.ts), [layout chung](../../src/layouts/Base.astro), [font CSS](../../src/styles/global.css) và [nội dung bài](../../src/content/blog/) có đường dẫn từ domain root. Thử resolve `/theme.js` tại URL mục tiêu cho ra `https://vinhltt.github.io/theme.js`, không phải đường dẫn trong repository.
- [Post-build checker](../../scripts/check-dist.mjs) cũng giả định root `/` và hiện cấm canonical/alternate/sitemap/robots theo contract local-only. Không thể chỉ thêm workflow rồi giữ checker và URL như cũ.
- [README](../../README.md) và [docs navigation](../../docs/README.md) đang ghi chưa publish và yêu cầu gate publish riêng. Chúng chỉ đổi trạng thái sau khi có bằng chứng tương ứng.

## 4. Trade-offs

| Phương án | Lợi ích | Giả định load-bearing | Điều kiện thất bại trước |
|---|---|---|---|
| A. Workflow explicit, dùng Pages Actions chính thức — đề xuất | Từng bước và quyền dễ kiểm tra; reuse nguyên build command, không sinh commit artifact | Maintainer muốn kiểm soát rõ toolchain và pipeline nhỏ | Khi đổi package manager/runtime mà setup/cache trong YAML chưa được cập nhật |
| B. `withastro/action` | YAML ngắn; được Astro khuyến nghị | Ghim phiên bản và dùng đúng build command đầy đủ của repo | Khi dựa vào mặc định action rồi toolchain/build behavior thay đổi |
| C. Commit artifact sang `gh-pages` | Có lịch sử artifact trong Git | Có nhu cầu thực sự quản lý nhánh output sinh tự động | Quyền ghi nhánh hoặc publishing source/Jekyll lệch cấu hình; thêm lịch sử build không cần thiết |

Chọn A: project đã có build gate trong `package.json`, nên workflow explicit đáp ứng yêu cầu mà không cần một lớp đóng gói build hoặc nhánh artifact.

### Better approaches

None — recommended direction is the requested one. GitHub Pages phù hợp với output static đã được build; chưa có yêu cầu runtime server hoặc preview PR để biện minh cho việc đổi hosting. Phương án A chỉ làm rõ cơ chế triển khai yêu cầu hiện tại.

## 5. Thiết kế đề xuất cho triển khai

### Branch và trigger

- Tạo `main` từ baseline được maintainer duyệt, không vô tình publish snapshot remote cũ thiếu code đang phát triển. Giữ nguyên `develop`; không rename hoặc xóa nhánh tích hợp.
- Đề xuất dùng `main` làm default branch khi bật production, để PR mặc định hướng tới nhánh được bảo vệ; đây chưa phải thay đổi GitHub settings đã thực hiện.
- CI: `pull_request` nhắm vào `main`. CD: `push` lên `main`. Không dùng PR `closed` làm trigger deployment; commit trên `main` là nguồn production, bao gồm merge/squash/rebase merge.
- Sau bootstrap, protection yêu cầu PR, build check thành công và cập nhật với base branch; không bắt buộc thêm reviewer thứ hai cho maintainer làm việc một mình.
- Không dùng `pull_request_target` để build code PR với quyền ghi; không thêm trigger dispatch hoặc cơ chế rollback ngoài PR revert trong phạm vi tối thiểu này.

### Workflow và artifact

File đề xuất: `.github/workflows/pages.yml` — chưa tồn tại tại thời điểm viết brief.

- Job build: Ubuntu, Node 22, npm cache theo lockfile, `npm ci`, build script hiện hành. Chọn Node 22 vì phù hợp engines đang khai báo, không yêu cầu nâng Astro.
- PR chỉ build/check. Chỉ lần chạy trên `main` configure Pages và upload `dist/` bằng `actions/upload-pages-artifact`.
- Job deploy phụ thuộc job build; dùng `actions/deploy-pages` và environment `github-pages`, xuất URL deployment từ action.
- Build dùng `contents: read`; chỉ deploy có `pages: write` và `id-token: write`. Dùng token/OIDC do GitHub cấp cho workflow; không tạo PAT hoặc secret deploy riêng.
- Chọn và ghim phiên bản action chính thức còn được hỗ trợ tại lúc triển khai, không dùng nhánh `master`/`latest` làm dependency trôi nổi.
- Concurrency cho các lần chạy deploy cùng site: không có hai deployment đồng thời, không hủy deployment đang chạy. Không giả định queue có thứ tự FIFO; không rerun workflow của commit cũ để rollback.
- Artifact không cần nhánh `gh-pages`; cấu hình Pages Source = GitHub Actions.

### Base path và publish gate

- Origin mục tiêu: `https://vinhltt.github.io`; base mục tiêu: `/3_tihomo_landingpage/`. Chuẩn hóa cách ghép URL từ cấu hình Astro, không hard-code prefix riêng ở từng caller.
- Cập nhật mọi link nội bộ, link locale, script/favicon, URL font và Markdown theo base; giữ fragment-only link cho anchor cùng trang. Không sửa chuỗi trên `dist/` sau build.
- Locale detection/equivalent route phải làm việc trên content pathname sau khi bỏ base đúng một lần; không dùng `startsWith('/vi/')` trực tiếp trên pathname đã có prefix repository.
- Checker phân biệt deployment URL với vị trí file trong `dist/`: base prefix thuộc URL public, không được mặc định coi đó là một thư mục artifact phải lồng thêm. Chứng minh bằng artifact thật.
- Chuyển contract local-only sang publish-aware có URL thật; giữ nghiêm kiểm tra nội dung/locale/link/asset và không tracking. Metadata production không phải lý do bỏ các guard còn hiệu lực.
- Thực hiện canonical/hreflang, sitemap và robots tối thiểu theo gate publish đã có; không mở rộng sang structured data, ranking, analytics hoặc SEO campaign.
- Local dev/preview phải có hướng dẫn URL đúng cấu hình base mới; không giữ một cấu hình root và một cấu hình production lệch nhau chỉ để bỏ qua lỗi.

## 6. Handoff sang plan và implementation

Trình tự phụ thuộc để bước plan chi tiết hóa, không phải các bước đã hoàn tất:

1. Rà soát dữ liệu nhạy cảm trong source/docs/plans và lịch sử Git trước public; phân biệt rõ rủi ro source public với artifact public. Không tự xóa lịch sử hoặc đổi visibility nếu phát hiện vấn đề cần quyết định mới.
2. Sửa base-aware routing/assets/Markdown, metadata publish và post-build contract; chứng minh build + preview đúng base path. Cập nhật owning docs khi hợp đồng local-only đổi.
3. Tạo workflow chính thức; xác minh điều kiện PR/main, artifact, permissions và concurrency. Đưa workflow cùng code publish-ready vào baseline được duyệt.
4. Theo scope triển khai được phép: public repo, thiết lập `main`, default branch/protection, Pages Source và environment. Không commit/push/merge hoặc đổi settings chỉ vì brief này tồn tại.
5. Nghiệm thu một PR có CI, merge theo flow được duyệt, kiểm tra deployment và browser tại URL public. Ghi evidence thật và cập nhật trạng thái docs; rollback theo PR revert khi cần.

Các owner cần plan khảo sát trước sửa: config Astro; locale/layout/components dùng URL; CSS và Markdown; checker; workflow mới; README/docs navigation. Không tạo roadmap, governance hoặc test framework mới để hoàn thành pipeline này.

Khi tiếp tục, truyền đầy đủ Outcome, Constraints, Non-goals, Acceptance criteria, Trade-offs, Better approaches và các nguồn evidence sang `ak-plan`, sau đó `ak-cook`. Không tự thêm flag `--yagni` hoặc `--ask`.

## 7. Rủi ro và rollback

- **Exposure:** public repo là quyết định đã chọn nhưng cần preflight dữ liệu/lịch sử. Artifact sạch không chứng minh lịch sử source sạch; đổi lại private không đảo ngược việc đã công khai.
- **Broken subpath:** base sai có thể làm trang render HTML nhưng thiếu CSS/script/font hoặc locale link sai. Checker + preview dưới base thật và smoke public là gate, không chỉ HTTP 200 homepage.
- **Contract drift:** checker đang local-only; sửa có chủ đích để xác minh production, không bỏ guard nhằm làm CI xanh.
- **Bootstrap:** `main` hiện chưa tồn tại, working tree có công việc đang phát triển. Review baseline trước lần publish đầu; không tự stage/reset những thay đổi ngoài scope.
- **Provider:** Actions xanh không thay thế quan sát website public; thời gian propagation/caching có thể khiến browser chưa thấy artifact mới ngay.
- **Rollback website:** PR revert trên `main`, chạy lại cùng build/deploy gate. Không force-push, bypass protection hoặc publish artifact cũ bằng cách rerun tùy tiện.
- **Rollback visibility:** không phải biện pháp thu hồi dữ liệu đã lộ; xử lý riêng nếu preflight tìm thấy secret hoặc thông tin không được công khai.

## 8. Nguồn chính thức

- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) — artifact, deploy job, permissions và environment.
- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) — Source = GitHub Actions và website public.
- [GitHub plans](https://docs.github.com/en/get-started/learning-about-github/githubs-plans) — Pages trên repository public với GitHub Free.
- [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) — site/base và các phương án deploy Astro.
- [Astro base reference](https://docs.astro.build/en/reference/configuration-reference/#base) — `import.meta.env.BASE_URL` và URL asset cần base prefix.
- [GitHub protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) — PR/status checks và áp dụng protection cho admin.
