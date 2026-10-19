# Evidence phục vụ kế hoạch CI/CD

Snapshot 2026-10-12. Đây là bằng chứng của phiên lập kế hoạch, không phải chứng nhận publish-safety hoặc deployment.

## Quan sát thực tế

- `gh api repos/vinhltt/3_tihomo_landingpage`: `private=true`, `default_branch=develop`, `has_pages=false`; token hiện có quyền admin/maintain/push. Quyền quan sát được không đồng nghĩa ủy quyền thay đổi settings.
- Branch API chỉ có `develop`, `protected=false`; Actions API `total_count=0`. `.github/` chưa tồn tại trong checkout.
- `git status --short --branch`: `develop...origin/develop`, 39 file staged, 2 unstaged, 3 nhóm untracked (`config.yml`, `docs/`, `plans/`). Không stage/reset/commit/push trong phiên plan.
- `node --version`: v20.19.5. `npm run build`: exit 0, Astro check 20 files, 0 errors/warnings/hints; 10 pages built; `check-dist OK: 10 routes, equivalent VI/EN guides, local assets, theme-only controls and no collection`. Chưa chứng minh runner Node 22 hoặc URL production.
- Không chạy browser, secret scan hoặc deploy trong phiên plan.

## Owner và contract

| Nguồn | Bằng chứng | Tác động triển khai |
|---|---|---|
| `package.json:6-13,15-20` | Node engines hỗ trợ 22; Astro 5.18.2; build = check + build + checker | Giữ nguyên build command; CI npm ci/Node22 |
| `astro.config.mjs:38-49` | static, directory, trailingSlash always, EN mặc định, port 4321; thiếu site/base | Thêm origin/base thật, giữ routing/Markdown table plugin |
| `src/lib/locale.ts:3-6,20-22` | localePaths và articlePath là root-relative | Base-aware URL construction, không thêm alias |
| `src/layouts/Base.astro:16-28,42-44,58,107-118` | pathname detection/locale links/root scripts và favicon | Strip base đúng một lần; migrate head và tương đương VI/EN |
| `src/components/HomePage.astro:4,13,47-48,117,343-344` | Caller localePaths + articlePath | Giữ CTA/link bài và prelaunch claim |
| `src/components/BlogHub.astro:4,11,52,65,87` | Caller localePaths + articlePath | Giữ breadcrumb/hub/section links |
| `src/components/BlogArticle.astro:4,13,51-53,86,94,98` | Caller localePaths + articlePath | Giữ related guides và homepage anchors |
| `src/styles/global.css:1-53` | Sáu @font-face từ /fonts/ | Kiểm tra output Vite/base; tránh prefix lần hai |
| `src/content/blog/{en,vi}/*.md` | Sáu file có liên kết sibling root-relative | Chuyển link sibling sang relative, giữ slug/content |
| `src/content.config.ts:5-25` | Collection theo locale, ba slug, metadata sources/updated | Sitemap từ collection, không duplicate danh mục route production |
| `src/lib/blog.ts:4-18` và `src/pages/{,vi/}blog/[slug].astro:4-13` | getCollection → getLocalizedPosts → getStaticPaths | Giữ build params slug, không chèn base vào params |
| `public/theme.js:9-11,33-40` | Theme query carry qua locale, clean query bằng history | Giữ behavior, canonical không query/hash, browser kiểm tra thực |
| `scripts/check-dist.mjs:8-16,74-108` | expected routes và asset mapping root-only | Tách content route/public URL/artifact path |
| `scripts/check-dist.mjs:161-205,224-249` | Chỉ hai UI scripts; cấm canonical/alternate/sitemap/robots; local asset/no tracking | Publish-aware metadata contract, không bỏ guard |
| `scripts/check-dist.mjs:256-379` | Prelaunch/status/bilingual/article/table/source parity | Giữ các product contract còn hiệu lực |
| `README.md:18,20-45,62-66` | Chưa publish, local root URL, theme/no-data/slug invariants | Docs publish-ready trước; published chỉ sau live evidence |
| `docs/README.md:31-41` | Gate production metadata riêng và brief deploy | Update nhỏ đúng navigation owner |
| `.gitignore:1-10` | Ignores tools/node_modules/dist/.astro, chưa có dotenv pattern | Gate kiểm tra candidate/history; không coi ignore là scan |

## Exported helpers

`xd://lsp` references cho `localePaths` và `articlePath` đều trả `No language server found for this action`. Fallback grep có bốn module caller: `Base.astro`, `HomePage.astro`, `BlogHub.astro`, `BlogArticle.astro` cho localePaths; ba component trang cho articlePath. Không có re-export/caller khác trong `src` theo kết quả search. Khi triển khai, chạy lại references nếu server khả dụng.

## Route contract

Năm content path EN: `/`, `/blog/`, `/blog/managing-income-and-expenses-across-multiple-accounts/`, `/blog/statement-reconciliation-checklist/`, `/blog/recurring-payments-and-budgeting/`. Năm VI tương đương thêm `/vi`; base public `/3_tihomo_landingpage/` chỉ được prepend một lần. `dist/` giữ route files ở root artifact, không lồng thư mục repository.

## Phạm vi giữ nguyên

HOLD SCOPE: option A explicit official Actions, chính repository chuyển public sau preflight, `develop` giữ nguyên, `main` production/default, PR CI + push main CD. Không PR previews, analytics, custom domain, PAT, SSR, Docker, test framework hoặc phục hồi plan cũ. Bốn phase cần thiết do exposure approval, local contract, workflow và remote bootstrap có các gate khác nhau; không thiết kế parallel implementation.
