import { defineConfig } from 'astro/config';

// Wrap Markdown tables so wide ones scroll inside a keyboard-focusable region
// instead of breaking words mid-token or overflowing the page on narrow screens.
// Each region is labelled with its index and the nearest preceding heading so labels are unique.
function rehypeScrollTables() {
  return (tree, file) => {
    const isEnglish = /(?:^|\/)en\//.test((file.path ?? '').replace(/\\/g, '/'));
    const tableLabel = isEnglish ? 'Table' : 'Bảng';
    let count = 0;
    let heading = '';
    const text = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(text).join(''));
    const wrap = (node) => {
      node.children = (node.children ?? []).map((child) => {
        if (child.type !== 'element') return child;
        if (/^h[1-6]$/.test(child.tagName)) heading = text(child);
        if (child.tagName !== 'table') {
          wrap(child);
          return child;
        }
        return {
          type: 'element',
          tagName: 'div',
          properties: {
            className: ['table-scroll'],
            tabIndex: 0,
            role: 'region',
            ariaLabel: `${tableLabel} ${++count}${heading ? `: ${heading}` : ''}`,
          },
          children: [child],
        };
      });
    };
    wrap(tree);
  };
}

export default defineConfig({
  site: 'https://vinhltt.github.io',
  base: '/3_tihomo_landingpage/',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['vi', 'en'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  build: { format: 'directory' },
  server: { port: 4321 },
  markdown: { rehypePlugins: [rehypeScrollTables] },
});
