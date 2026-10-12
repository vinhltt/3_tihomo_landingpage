---
phase: 2
title: "Phase 2: Site publish-ready dưới base path"
status: pending
priority: P1
effort: ""
dependencies: [1]
---

# Phase 2: Site publish-ready dưới base path

## Goal

Build và preview đủ mười trang VI/EN dưới `/3_tihomo_landingpage/`, với metadata production thật và checker vẫn giữ đầy đủ product/no-data gates.

## Context Links

- [Brief và acceptance 4–7](../reports/brainstorm-261012-1722-github-pages-cicd.md).
- [Owner/caller evidence](./reports/codebase-evidence.md).
- [Astro 5 site/base](https://v5.docs.astro.build/en/reference/configuration-reference/#base), [static endpoints](https://v5.docs.astro.build/en/guides/endpoints/#static-file-endpoints), [Vite CSS base](https://v6.vite.dev/guide/build.html#public-base-path).
- [Robots phạm vi origin](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec#file-location-and-range-of-validity).

## Overview / Key Insights

`localePaths` có bốn module caller: Base, HomePage, BlogHub, BlogArticle. `articlePath` có ba component caller: HomePage, BlogHub, BlogArticle. Sáu bài Markdown có sibling links root-relative. Layout nhập global.css qua Vite; không hard-code prefix vào CSS trước khi kiểm tra output bundler. LSP references hiện không có server; dùng inventory grep có evidence và thử lại LSP khi triển khai.

## Requirements

- Origin `https://vinhltt.github.io`, base `/3_tihomo_landingpage/`, EN mặc định, `/vi/`, ba slug tiếng Anh hiện hành, static/directory/trailing slash và table-scroll plugin giữ nguyên.
- Không đổi nội dung, claim ứng dụng chưa phát hành, theme/animation/no-persistence/no-tracking, hoặc thêm old-URL aliases.
- Cùng config base ở dev/preview/CI; không root-only development override, không sửa chuỗi trên dist sau build.
- Canonical tự tham chiếu, reciprocal hreflang EN/VI theo đúng trang tương đương; sitemap có đúng mười URL nội dung, không assets/docs/plans/metadata endpoints.
- Robots project và effective origin policy phải được phân biệt; không tạo user-site repository hoặc custom domain ngoài scope.

## Architecture

Astro config sở hữu origin/base. Locale helper xây public path từ content path một lần; layout nhận content pathname bằng strip đúng base boundary. Sitemap lấy homepage/hub từ localePaths và bài từ collection hiện có. Checker lấy site/base từ config Astro, giữ independent expected content-route contract để không tự xác nhận lỗi của production helper.

Canonical/hreflang dùng production origin, không `Astro.url.origin` của localhost preview, không query hoặc fragment. Navigation vẫn giữ fragment và theme-query behavior hiện hành.

## Related Code Files / Ownership

Tất cả đường dẫn dưới `D:/1_workspace/0_personal/3_tihomo/src/landingpage/`:

| Action | Files | Thay đổi |
|---|---|---|
| Modify | `astro.config.mjs` | site/base thật, bỏ comment local-only obsolete; giữ plugin hiện có |
| Modify | `src/lib/locale.ts` | Base-aware paths, strip-base và equivalent-route helpers; giữ API date formatting |
| Modify | `src/layouts/Base.astro` | Migrate pathname/navigation/assets và canonical/hreflang/sitemap head |
| Review/migrate if needed | `src/components/HomePage.astro`, `BlogHub.astro`, `BlogArticle.astro` | Toàn bộ caller localePaths/articlePath; giữ contract API nếu đủ |
| Review; modify only if output requires | `src/styles/global.css:1-53` | Sáu font URLs; để Vite rebase, tránh double-prefix |
| Modify | `src/content/blog/en/checklist-doi-chieu-sao-ke.md`, `khoan-dinh-ky-va-ngan-sach.md`, `quan-ly-thu-chi-nhieu-tai-khoan.md` | Sibling Markdown href sang `../<slug>/` |
| Modify | `src/content/blog/vi/checklist-doi-chieu-sao-ke.md`, `khoan-dinh-ky-va-ngan-sach.md`, `quan-ly-thu-chi-nhieu-tai-khoan.md` | Cùng relative-link treatment, giữ locale |
| Create | `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` | Build-time static endpoints, không SSR/adapter/dependency mới |
| Modify | `scripts/check-dist.mjs` | Publish-aware route/asset/metadata guards |
| Modify | `README.md`, `docs/README.md` | Local URL mới và publish-ready contract, chưa claim deployed |
| Create | `plans/261012-1035-github-pages-cicd/reports/base-path-local-acceptance.md` | Build/preview/browser evidence của phase |

Không sửa getStaticPaths params hoặc content schema để chèn base. `public/theme.js`, `public/navigation.js` và assets không cần đổi behavior; kiểm tra consumer thực trước khi quyết định sửa.

## Implementation Steps

1. Add site/base vào Astro config. Giữ output, i18n, port và table-scroll plugin. Checker có thể import default config từ `../astro.config.mjs` để đọc site/base; không tạo manifest/copy prefix thứ hai.
2. Extend locale helper với rõ input contract: content path không base → public path; public pathname trong base → content pathname. Strip theo boundary một lần, không regex replace global hoặc coi `/3_tihomo_landingpage-other/` là trong base. localePaths trả public paths; articlePath ghép blog path đã based, không prefix lại.
3. Migrate Base và ba component caller trong inventory. Detect locale trên content pathname; equivalent mapping giữ slug; logo/home là `#main` khi đúng homepage. Theme/mobile/desktop locale links dùng cùng equivalent function; href script/favicon dùng BASE_URL helper và giữ script init order/is:inline.
4. Chuyển sibling links trong cả sáu Markdown files sang `../<shared-English-slug>/`; kiểm tra cả rendered links/reference-style/raw HTML nếu có. Relative targets không phụ thuộc tên repo. Giữ same-page `#fragment` và external HTTPS references.
5. Build lần đầu để kiểm tra font CSS được Vite rebase từ public fonts. Nếu output đã đúng base, để nguyên font source. Nếu không, sửa owning font references qua cơ chế asset pipeline/stylesheet-relative thực và verify lại; không hard-code prefix riêng vào sáu declarations.
6. Add canonical + hreflang EN/VI self/reciprocal + rel=sitemap trong Base. Các URL dùng site config và equivalent based paths, không query/theme/hash. Canonical VI không được trỏ EN. Không thêm structured data, OG campaign hoặc indexing promises.
7. Create static sitemap endpoint dùng Astro APIRoute/Response và getLocalizedPosts/getCollection hiện có. Home/hub lấy localePaths; bài lấy articlePath từ collection. Escape XML; giữ đúng set mười canonical URLs; không fabricated lastmod/priority/changefreq.
8. Create static robots endpoint từ origin/base config, payload tối thiểu allow crawling + absolute Sitemap. File này ở project subpath chỉ là informational/syntax-valid, không crawler-authoritative: REP chỉ đọc `/robots.txt` ở origin. Add sitemap HTML link để không dựa vào subpath robots discovery. Snapshot origin `/robots.txt` hiện 404; theo REP đây là không có crawl restrictions, phải kiểm tra lại lúc nghiệm thu. Nếu root policy chặn project, stop acceptance và cần scope/owner decision riêng, không tự tạo repo user-site.
9. Update checker: content routes vẫn là mười HTML paths tại dist root; public URLs prepend base. Resolve HTML attributes/inline CSS theo public document URL; resolve url(...) của external CSS theo public stylesheet URL (base + dist-relative CSS path), giữ hai caller categories hiện có. Chỉ sau URL resolution mới enforce same origin/base boundary và remove base đúng một lần trước filesystem lookup. Reject root escape/double-prefix và missing fragment/locale equivalent. Metadata XML/TXT không tăng HTML content-route count.
10. Replace local-only bans bằng positive assertions: mỗi page đúng canonical/hreflang/sitemap link; sitemap URLs đúng expected public route set, không fake origin/query/hash; robots đúng payload/site/base. Canonical/alternate/sitemap link không đi qua localAsset như CSS/favicon. Giữ nguyên type/content/article/source/table/status/local-asset/no-form/no-tracking/no-storage guards còn hiệu lực; không relax để build xanh.
11. Run full build và preview đúng base; chứng minh artifact root thật, không `dist/3_tihomo_landingpage/` wrapper. Dùng throwaway isolated artifact mutations để chứng minh checker reject missing prefix, doubled prefix, broken asset, wrong locale alternate và extra sitemap URL; không sửa dist nghiệm thu trực tiếp hoặc thêm test framework.
12. Browser smoke toàn bộ direct URLs + reload, locale round trips; desktop/mobile theme, OS change, reduced-motion, anchors/sticky header, JS-off navigation. Canonical không chứa theme query. Capture console/network/font loading và screenshot desktop/mobile. Stop processes/tabs đã start, remove throwaway files sau proof.
13. Update README local commands/URL và docs gate thành publish-ready, còn private/not deployed cho tới phase 4 evidence. Không sửa các historical brief để coi local proof là public proof.

## Todo

- [x] P2.1 — Migrate config, locale/layout/component callers, assets và sáu Markdown link owners.
- [x] P2.2 — Thêm canonical/hreflang/sitemap/robots và publish-aware checker, giữ product/privacy gates.
- [x] P2.3 — Prove build, artifact layout, checker rejection cases và desktop/mobile browser tại base; cập nhật owning docs.

## Success Criteria / Verification

```bash
npm run build
node scripts/check-dist.mjs
npm run preview -- --host 127.0.0.1 --port 4321
```

Reuse project process đang chạy nếu phù hợp; check port trước start, không chọn port khác để tránh collision. Browser root `http://localhost:4321/3_tihomo_landingpage/`.

| Case | Pass condition |
|---|---|
| Ten routes | Direct + reload EN/VI home/hub/six article URLs; exact HTML route set |
| Locale | Từng equivalent pair round trip, đúng slug, một base prefix |
| Assets | CSS/favicon/theme/navigation/sáu fonts tải đúng, không root 404/third-party |
| Themes | Light/Dark/System; OS live, locale carry; reload/content navigation reset System như cũ |
| Header/menu | Logo/Home same-page anchor, section anchors dưới sticky header, mobile controls và reduced-motion |
| Metadata | Self canonical và reciprocal EN/VI; sitemap đúng set; syntax-valid project robots; effective root separately checked |
| Guard rejection | Isolated malformed artifact cases fail, clean real build vẫn pass |
| Privacy/product | Không form/tracking/storage/claim app released hoặc console errors |

Acceptance 4–7 được chứng minh local ở phase này; production equivalent phải kiểm tra lại phase 4. Node 22 runner chưa được chứng minh bởi build local Node 20.

## Risk Assessment / Security

- Prefix double/escape: independent checker + direct navigation catches.
- Font build path khác assumption: quyết định theo emitted CSS/real requests, không sửa source mù.
- Subpath robots không phải root policy: không ghi crawl-policy acceptance từ HTTP 200 project robots; origin 404 hiện tại không đảm bảo tương lai.
- Metadata tạo external fetch speculative: chỉ canonical/hreflang/sitemap metadata, không thêm preconnect/prefetch/tracker.

## Next Steps / Rollback

Phase 3 chỉ bắt đầu khi local contract pass. Khi rollback code, revert scoped patch, không reset những thay đổi người dùng; chưa có site public cần rollback.
