# TiHoMo Landing Page

Repository dành cho homepage công khai và các landing page của TiHoMo, phục vụ SEO và chiến dịch quảng cáo. Đây là sub-workspace riêng, tách khỏi ứng dụng quản lý tài chính tại `src/fe/nuxt`.

[Tài liệu dự án](docs/README.md) — tuyến đọc phạm vi, nguồn sản phẩm và bộ handoff prelaunch.

[Chiến lược sản phẩm AI-native](docs/product/ai-native-strategy.md) — định hướng đã chọn, giả thuyết workflow, roadmap theo bằng chứng và luận điểm SEO/đầu tư; không phải authority triển khai app.

## Trạng thái

- Repository: https://github.com/vinhltt/3_tihomo_landingpage (public).
- Production/default: `main`; giữ `develop` làm nhánh tích hợp.
- Git submodule trong workspace TiHoMo: `src/landingpage`.
- Tên sub-workspace TDK: `landingpage`.
- Cấu hình riêng: [.specify/.specify.json](.specify/.specify.json).
- Quy tắc phạm vi: [.specify/configurations/rules.md](.specify/configurations/rules.md).

Site prelaunch tĩnh **D · Jade Flow**, Astro 5 + Markdown, đủ **VI/EN** và **Sáng/Tối/Hệ thống**. Website đã deploy bằng GitHub Pages Source GitHub Actions; domain production là `https://tihomo.vinhltt.com/`, không có prefix tên repository. [Domain riêng và HTTPS](#domain-riêng-và-https) sở hữu cutover/DNS/TLS; nghiệm thu public phải kiểm tra lại sau bản build dùng domain mới. [Plan CI/CD](plans/261012-1035-github-pages-cicd/plan.md) và [remote execution receipt](plans/261012-1035-github-pages-cicd/reports/github-pages-public-acceptance.md) là lịch sử bootstrap, không xác nhận thay đổi domain về sau. Ứng dụng tài chính vẫn chưa phát hành công khai; các khả năng AI là định hướng chưa triển khai/chưa kiểm chứng.

## Chạy local

Cần Node.js 20.3+ hoặc 22+ và npm. Astro được ghim ở 5.18.x vì Astro 6/7 yêu cầu Node 22.12+.

```bash
npm ci
npm run dev       # mở http://localhost:4321/
npm run build     # astro check + astro build + scripts/check-dist.mjs
npm run preview   # mở http://localhost:4321/
```

[`astro.config.mjs`](astro.config.mjs) sở hữu origin/base chung cho dev, preview và CI; domain production dùng base `/`, không có override riêng. EN nằm tại `/`, VI tại `/vi/`; `dist/` không lồng thư mục tên repository. [`scripts/check-dist.mjs`](scripts/check-dist.mjs) đọc config và giữ hợp đồng nội dung/locale/asset/theme/product/privacy, canonical/hreflang cùng sitemap/robots production. Chưa có lint hoặc bộ test riêng; browser smoke bổ sung bằng chứng runtime, không được thay bằng build.

Theme mặc định theo OS và cập nhật khi OS đổi. Đổi VI↔EN giữ lựa chọn Sáng/Tối/Hệ thống theo [contract theme](plans/reports/brainstorm-261011-2028-tihomo-prelaunch-landingpage.md#theme-và-tương-tác), để đổi ngôn ngữ không làm đổi giao diện. Reload hoặc chuyển sang trang nội dung khác vẫn trở về Hệ thống. Không cookie, localStorage hay sessionStorage. Khi JavaScript tắt, theme theo OS và nội dung/link vẫn hoạt động; các control theme được ẩn. VI/EN là link tĩnh, không tự nhận diện ngôn ngữ trình duyệt.

Mobile (≤700px): ngôn ngữ và theme là hai control gọn bên phải logo; không dùng segmented toggle. Control ngôn ngữ hiển thị locale hiện tại và mở đúng trang ở locale còn lại. Nút biểu tượng theme chuyển lần lượt Hệ thống → Sáng → Tối → Hệ thống, có nhãn truy cập được nêu trạng thái và hành động tiếp theo. Vùng chạm tối thiểu 44×44px; glyph theme 18px. Desktop giữ nguyên hai link VI/EN và ba lựa chọn theme trực tiếp. Trạng thái theme đồng bộ khi đổi kích thước viewport; thứ tự bàn phím mobile theo vị trí hiển thị.

Đổi theme thủ công dùng same-document View Transition để fade snapshot toàn trang, gồm header, trong 300ms; không interpolate riêng màu chữ/nền. Chọn liên tiếp hủy hiệu ứng trước và giữ lựa chọn mới nhất. Reduced-motion hoặc browser thiếu API thì theme đổi tức thì; chế độ Hệ thống vẫn phản hồi thay đổi OS trực tiếp.

Header được ghim bằng `position: sticky` trên mọi trang, giữ chỗ trong layout để không đẩy nội dung lên dưới header. Link section cuộn mượt bằng CSS, trở về cuộn tức thì nếu bật giảm chuyển động. [`public/navigation.js`](public/navigation.js) sở hữu bù anchor offset khi đổi viewport/font; khi JS tắt, offset CSS bảo thủ vẫn giữ đích cuộn dưới header.

Ba link section nằm liền nhau: Nền tảng → Định hướng → Hỏi đáp. Hướng dẫn là link trang riêng ở cuối, có pill, đường phân cách và mũi tên. Khi đang ở homepage, logo và Home trong footer dẫn tới `#main` để cuộn lên đầu mà không reload. Khi đổi trang, CSS native View Transitions crossfade nội dung 300ms và giữ header ổn định; reduced-motion tắt hiệu ứng. Browser chưa hỗ trợ cross-document View Transitions vẫn điều hướng link bình thường; không thêm SPA/router hay script.

Footer giữ Hướng dẫn quản lý tài chính ở cuối, sau Hỏi đáp, tương ứng vị trí link Hướng dẫn trong header.

Fragment homepage dùng tiếng Anh ở cả VI/EN: `#problem`, `#platform`, `#ai-native`, `#direction`, `#extensions`, `#vision`, `#faq` và `#main`. Nhãn giao diện vẫn theo locale. Menu, CTA, hub và link liên quan từ Markdown dùng các fragment này. Slug URL bài dùng tiếng Anh ở cả hai locale theo [bảng route hiện hành](plans/reports/brainstorm-261011-2028-tihomo-prelaunch-landingpage.md); không giữ alias URL tiếng Việt cũ.

## Cấu trúc

| Đường dẫn | Vai trò |
|---|---|
| `src/pages/` | EN mặc định tại `/` và `/blog/`; các route VI dưới `src/pages/vi/` phục vụ `/vi/`, dùng các component trang chung |
| `src/components/HomePage.astro`, `BlogHub.astro`, `BlogArticle.astro` | Toàn bộ markup homepage, hub và bài ở cả hai locale |
| `src/content/blog/vi/*.md`, `src/content/blog/en/*.md` | Ba bài đầy đủ mỗi locale; `locale` và `slug` ổn định cùng metadata, nguồn và ghi chú TiHoMo (xem `src/content.config.ts`) |
| `src/lib/home-content.ts`, `src/lib/locale.ts`, `src/lib/blog.ts` | Copy VI/EN, URL/ngày theo locale và collection bài |
| `src/layouts/Base.astro`, `src/styles/global.css` | Điều hướng/locale/theme dùng chung, semantic tokens Jade Flow và layout responsive |
| `src/components/StatusBadge.astro` | Bốn nhãn trạng thái đã dịch, không nâng claim |
| `public/theme.js`, `public/navigation.js`, `public/fonts/` | Theme và chuyển locale không lưu trữ, offset header responsive và Be Vietnam Pro Latin/Vietnamese tự host (400/600/700, OFL) |
| `scripts/check-dist.mjs` | Kiểm tra hợp đồng sau build |

## Sửa nội dung

- Sửa bài trong `src/content/blog/vi/` và `en/`; hai bản cùng `slug` tiếng Anh, dịch đầy đủ cả bảng, caption, nguồn và cảnh báo quốc gia. Mỗi bài cần nguồn thật đã đọc và ngày cập nhật thực tế; ví dụ ghi rõ là minh họa. ID nội bộ gồm locale để không ghi đè bài ngôn ngữ khác. Nếu thêm bài, cập nhật contract route trong `scripts/check-dist.mjs`.
- Copy homepage ở `src/lib/home-content.ts`; nhãn feature dùng `StatusBadge` với `locale`. Không nâng “định hướng” thành “sẵn dùng”, không sao chép nội dung rút gọn/link đọc thử của prototype vào site.
- Sơ đồ/biểu đồ homepage là HTML + CSS render sẵn (không JS, không ảnh): chữ nằm trong DOM, nhãn đi qua `home-content.ts`, màu qua token Jade Flow và luôn kèm chữ hoặc kiểu viền (viền đứt = một phần/định hướng). Mỗi figure có figcaption bắt đầu bằng “Minh họa”/“Illustration”. Số liệu chỉ lấy từ ví dụ minh họa có trong bài (biểu đồ 321.000 đ lấy từ bước 3 của bài Đối chiếu sao kê, tổng tự tính trong `HomePage.astro`); không thanh %, không ngày tháng.
- Giọng biên tập ở cả VI/EN: chuyên nghiệp, rõ ràng và trung tính; tránh khẩu ngữ hoặc pha trộn thuật ngữ không cần thiết. VI ưu tiên “ghi chép/nhập liệu thủ công”, “tổng hợp dữ liệu”, “sổ theo dõi”, “chưa phát hành công khai”; EN ưu tiên manual bookkeeping/data entry, consolidate records, ledger, not publicly available. Không đổi mức xác nhận tính năng, phương pháp, phép tính, nguồn hay cảnh báo quốc gia để làm câu chữ thuyết phục hơn.
- Không thêm form, analytics, quảng cáo hay nhúng bên thứ ba. [`Base.astro`](src/layouts/Base.astro) và [metadata endpoints](src/pages/) sở hữu canonical/hreflang/sitemap/robots theo config production. Với base `/`, `robots.txt` được xuất tại origin root và có hiệu lực REP; phải kiểm tra endpoint public sau deployment. Hosting GitHub có chính sách log riêng; không diễn giải “site không tracking” thành “hạ tầng không ghi truy cập”.

## CI/CD GitHub Pages

[`pages.yml`](.github/workflows/pages.yml) sở hữu triggers, toolchain, permissions, concurrency và artifact contract; workflow đã nằm trên main. Pipeline dùng build command hiện hành: PR kiểm tra build, maintainer merge vào main mới build/upload/deploy artifact của cùng run. [Workflow review](plans/261012-1035-github-pages-cicd/reports/workflow-contract-review.md) ghi bằng chứng bootstrap; CI xanh không tự chứng minh giao diện public hoặc cutover domain đã đạt.

### Bootstrap và quyền thực thi

Trước public source/history, maintainer duyệt [disclosure preflight](plans/261012-1035-github-pages-cicd/reports/public-safety-preflight.md), [baseline A/B](plans/261012-1035-github-pages-cicd/reports/production-baseline.md) và final diff; scan lại phần mới. Public repo công khai cả tài liệu và lịch sử, không chỉ artifact website. Không coi chuyển lại private là thu hồi exposure.

[Production bootstrap gate](plans/261012-1035-github-pages-cicd/phase-04-production-bootstrap-acceptance.md) sở hữu trình tự: seed A không workflow → PR-only/admin protection → PR B thêm workflow → observe và enforce exact build check/Actions App → selected-main environment và Pages Source GitHub Actions → maintainer merge. Không seed workflow vào main để tránh publication trước protection; không tự merge hoặc bypass gate. Giữ develop và không cập nhật parent gitlink trong thao tác này.

### Quan sát CI và production

Khi kiểm tra PR/build/deploy của repository này, dùng GitHub Actions làm nguồn build/deploy logs, GitHub Settings làm nguồn protection/Pages/environment và URL HTTPS làm bằng chứng artifact thực. Cần quyền repo để đọc và admin đã được maintainer cấp để đổi settings; `gh auth` dùng credential quản lý bởi CLI, không thêm PAT/secret vào workflow hoặc tài liệu. Thiếu quyền thì dừng settings mutation, không nới pipeline.

```bash
gh run list --repo vinhltt/3_tihomo_landingpage --workflow pages.yml --branch main --event push --limit 10 --json databaseId,headSha,event,status,conclusion,url
```

Chọn run ID từ kết quả, rồi dùng `gh run view <run-id> --repo vinhltt/3_tihomo_landingpage --log` để đọc phạm vi run cần điều tra; không public raw logs nếu có dữ liệu nhạy cảm. Run phải có event push và head SHA đúng main merge; xác minh build, same-run `github-pages` artifact, deployment SHA/URL rồi nghiệm thu đủ route/assets/metadata/theme tại URL public. Workflow/check xanh không tự chứng minh browser hoặc indexability. API báo lỗi/quyền thay đổi thì xác minh account/repo/settings theo gate bootstrap, không đoán rằng repo đã deploy.

Native concurrency không bảo đảm FIFO hoặc newest-SHA; không rerun old-SHA run để publish lại. PR và develop không có đường publish qua workflow này.

### Domain riêng và HTTPS

- GitHub repository Settings → Pages giữ Custom domain `tihomo.vinhltt.com`, Source GitHub Actions. Workflow này không cần `public/CNAME`; file CNAME không quyết định custom domain của Actions publishing.
- Cloudflare zone `vinhltt.com`: CNAME `tihomo` → `vinhltt.github.io`, DNS only. TXT xác minh quyền sở hữu domain giữ nguyên; không thay record/tunnel của domain gốc.
- DNS-only cho phép GitHub kiểm tra CNAME và cấp chứng chỉ trực tiếp. Proxy Cloudflare che CNAME bằng IP edge; không bật proxy để xử lý lỗi DNS/TLS. Khi GitHub báo đang provision certificate, giữ cấu hình và chờ hoàn tất rồi bật Enforce HTTPS.
- Origin/base trong Astro và domain trên GitHub phải cùng route contract. Chuyển từ project URL sang domain riêng cần bỏ prefix repository và deploy bản build mới qua PR/CI/maintainer merge; đổi DNS không viết lại CSS/script/link của artifact cũ.
- Không bật Cloudflare Web Analytics/automatic beacon injection cho site này: HTML public không được thêm tracking trái contract. DNS-only không đi qua HTTP proxy Cloudflare.
- Sau main deployment, kiểm tra đủ mười route, CSS/script/font, VI↔EN, theme, canonical/hreflang, `/sitemap.xml` và `/robots.txt` trên HTTPS domain mới. Không gọi TLS hoặc public UI đã đạt chỉ vì DNS/PR CI xanh.
- Domain rollback cần coordinated PR khôi phục origin/base phù hợp URL GitHub cùng Pages/DNS settings; không chỉ revert content config khi domain vẫn giữ nguyên.

Nguồn vận hành: [GitHub custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain), [domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), [Cloudflare proxy status](https://developers.cloudflare.com/dns/proxy-status/).

### Rollback nội dung

Chọn content revision đã publish thành công, tạo PR revert phần nội dung lỗi vào main và **giữ workflow/build-check contract đang hoạt động**; CI → maintainer merge → build/deploy SHA mới qua cùng pipeline. Không revert toàn bộ PR bootstrap B vì sẽ xóa workflow duy nhất; A không workflow chưa từng là successful public revision. Lỗi first launch chưa có bản public trước đó cần corrective PR giữ CI/CD. Không force push, upload artifact bằng tay, rerun artifact cũ hoặc tắt protection.

## Làm việc trong workspace TiHoMo

Từ root của `3_tihomo`, tải submodule bằng:

```bash
git submodule update --init src/landingpage
```

Cấu hình workspace root đăng ký `landingpage` và quản lý tài liệu tích hợp tại `.specify/configurations/sub-workspaces/landingpage/`. Spec và project memory tiếp tục được quản lý ở workspace root.

Commit và push thay đổi trong repository này trước; sau đó cập nhật gitlink `src/landingpage` trong repository root.

