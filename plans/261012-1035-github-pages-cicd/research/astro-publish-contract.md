# Astro 5 publish contract — research đã đối chiếu

Researcher: AstroPublishResearch. Status: DONE_WITH_CONCERNS. Không sửa source hoặc chạy verification của implementation.

## Quyết định đưa vào plan

1. Explicit `site=https://vinhltt.github.io`, `base=/3_tihomo_landingpage/`, static/directory/trailingSlash always; same base ở dev/preview/CI. BASE_URL đã trailing slash theo Astro.
2. Extend locale helper; strip base theo leading boundary đúng một lần. Authored links/scripts/favicon không tự rewrite toàn bộ bởi base. Markdown sibling-relative là phương án nhỏ nhất. Vite xử lý global.css nên kiểm tra emitted font URLs trước khi sửa source.
3. Metadata dùng production site, không local origin; self canonical và reciprocal EN/VI theo identity/slug. Sitemap static endpoint dùng route helpers + collection hiện có, không dependency mới hoặc XML inventory copy. Robots endpoint syntax-valid tại project base và sitemap HTML link.
4. `configure-pages@v5` gọi Pages metadata API; `contents:read` riêng không đảm bảo Pages access. Đặt configure-pages trong deploy job có pages:write, sau build, enablement:false; không gọi trên PR/build, không auto-enable Pages hoặc PAT.
5. `robots.txt` tại project subpath không phải REP location. Authoritative policy ở origin `/robots.txt`; snapshot đọc thật `https://vinhltt.github.io/robots.txt` trả HTTP404. `gh api repos/vinhltt/vinhltt.github.io` trả 404, không xác nhận repo origin site có tồn tại/được truy cập. 404 root robots = không có crawl restrictions; kiểm tra lại khi public. Không tạo repository khác để giải quyết một requirement không được yêu cầu.

## Nguồn chính thức

- [Astro 5 base/site](https://v5.docs.astro.build/en/reference/configuration-reference/#base)
- [Astro 5 GitHub Pages](https://v5.docs.astro.build/en/guides/deploy/github/)
- [Astro 5 static endpoints](https://v5.docs.astro.build/en/guides/endpoints/#static-file-endpoints)
- [Astro 5 public scripts](https://v5.docs.astro.build/en/guides/client-side-scripts/#load-external-scripts)
- [Vite 6 public base path](https://v6.vite.dev/guide/build.html#public-base-path)
- [Google localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google robots location](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec#file-location-and-range-of-validity)
- [RFC9309 retrieval](https://www.rfc-editor.org/rfc/rfc9309.html#section-2.3)
- [configure-pages v5 manifest](https://github.com/actions/configure-pages/blob/v5/action.yml)
- [configure-pages API client](https://github.com/actions/configure-pages/blob/v5/src/api-client.js)
- [GitHub custom Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

Artifact layout expected: content files ở dist root, base là public mount. Đây là expectation từ docs, cần chứng minh emitted artifact trong phase 2; chưa có base-aware build trong phiên plan.
