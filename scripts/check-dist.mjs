// Post-build contracts for the ten-route bilingual prelaunch site.
// Run standalone with `node scripts/check-dist.mjs`; browser checks own visual/theme behavior.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, isAbsolute } from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import config from '../astro.config.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const origin = new URL(config.site).origin;
const base = config.base;
const publicRoute = (route) => `${base}${route.slice(1)}`;
const publicUrl = (route) => new URL(publicRoute(route), origin).href;
const slugs = ['managing-income-and-expenses-across-multiple-accounts', 'statement-reconciliation-checklist', 'recurring-payments-and-budgeting'];
const enRoutes = ['/', '/blog/', ...slugs.map((slug) => `/blog/${slug}/`)];
const routes = [...enRoutes, ...enRoutes.map((route) => `/vi${route}`)];
const localeOf = (route) => route.startsWith('/vi/') ? 'vi' : 'en';
const homeOf = (locale) => locale === 'vi' ? '/vi/' : '/';
const equivalent = (route, locale) => `${locale === 'vi' ? '/vi' : ''}${route.replace(/^\/vi(?=\/)/, '')}`;
const file = (route) => join(dist, route, 'index.html');
const walk = (directory) => readdirSync(directory).flatMap((name) => {
  const path = join(directory, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
const assetRoute = (path) => '/' + relative(dist, path).replaceAll('\\', '/');
const decode = (value) => value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp|ndash|mdash|hellip);/gi, (_, entity) => {
  if (entity[0] === '#') return String.fromCodePoint(parseInt(entity.slice(entity[1].toLowerCase() === 'x' ? 2 : 1), entity[1].toLowerCase() === 'x' ? 16 : 10));
  return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ', ndash: '–', mdash: '—', hellip: '…' }[entity.toLowerCase()];
});
const text = (html) => decode(html.replace(/<!--[^]*?-->/g, '').replace(/<(script|style)\b[^]*?<\/\1\s*>/gi, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const tokens = (value) => value.trim().split(/\s+/).filter(Boolean);
const hasClass = (node, name) => tokens(node.attrs.class || '').includes(name);
const isInside = (node, parent) => node.start > parent.start && node.end <= parent.end;
const descendants = (page, parent, tag) => page.nodes.filter((node) => isInside(node, parent) && (!tag || node.tag === tag));
const contents = (page, node) => text(page.html.slice(node.innerStart, node.innerEnd));
const elements = (page, tag) => page.nodes.filter((node) => node.tag === tag);
const byId = (page, id) => page.nodes.find((node) => node.attrs.id === id);
const vietnamese = /[ăâđêôơưĂÂĐÊÔƠƯ\u1ea0-\u1ef9]/u;
const tracker = /google-analytics|googletagmanager|gtag\s*\(|facebook\.net|hotjar|plausible|doubleclick|clarity\.ms/i;
const fakeDomain = /(?:^|\.)(?:example\.(?:com|org|net)|localhost|invalid|test)$|^(?:127\.0\.0\.1|0\.0\.0\.0)$/i;
assert.equal(new URL(config.site).protocol, 'https:', 'production site must use HTTPS');
assert.ok(!fakeDomain.test(new URL(config.site).hostname), 'production site must use a real origin');
assert.match(base, /^\/(?:[^/?#]+\/)*$/, 'site base must have leading and trailing slashes');

// A small structural reader for generated HTML, not regexes tied to Astro's attribute order.
// Raw script/style bodies are single tokens so JS operators cannot masquerade as tags.
function parse(html, route) {
  const nodes = [];
  const stack = [];
  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
  const tagPattern = /<!--[^]*?-->|<![^>]*>|<(script|style)\b(?:"[^"]*"|'[^']*'|[^'">])*?>[^]*?<\/\1\s*>|<\/?[a-z][\w:-]*\b(?:"[^"]*"|'[^']*'|[^'">])*>/gi;
  for (const match of html.matchAll(tagPattern)) {
    const raw = match[0];
    if (raw.startsWith('<!')) continue;
    const tag = raw.match(/^<\/?([\w:-]+)/)[1].toLowerCase();
    if (raw.startsWith('</')) {
      const index = stack.findLastIndex((node) => node.tag === tag);
      assert.ok(index >= 0, `${route}: unmatched closing ${tag}`);
      for (const node of stack.splice(index)) {
        node.innerEnd = match.index;
        node.end = match.index + raw.length;
      }
      continue;
    }
    const opening = raw.match(/^<(?:"[^"]*"|'[^']*'|[^'">])*>/)[0];
    const attrs = {};
    for (const attr of opening.slice(tag.length + 1, -1).matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      const name = attr[1].toLowerCase();
      assert.ok(!Object.hasOwn(attrs, name), `${route}: duplicate ${name} attribute`);
      attrs[name] = decode(attr[2] ?? attr[3] ?? attr[4] ?? '');
    }
    const node = { tag, attrs, parent: stack.at(-1), start: match.index, innerStart: match.index + opening.length, innerEnd: match.index + opening.length, end: match.index + raw.length };
    nodes.push(node);
    if (match[1]) node.innerEnd = match.index + raw.toLowerCase().lastIndexOf(`</${tag}`);
    else if (!voidTags.has(tag) && !/\/\s*>$/.test(opening)) stack.push(node);
  }
  assert.equal(stack.length, 0, `${route}: unclosed HTML elements`);
  return { html, route, locale: localeOf(route), nodes };
}

assert.ok(existsSync(dist), 'dist is missing; build the site before running check-dist');
const files = walk(dist);
const htmlFiles = files.filter((path) => path.endsWith('.html'));
const builtRoutes = htmlFiles.map((path) => assetRoute(path).replace(/index\.html$/, ''));
assert.deepEqual([...builtRoutes].sort(), [...routes].sort(), 'build must contain exactly the ten accepted content routes');
const pages = new Map(routes.map((route) => [route, parse(readFileSync(file(route), 'utf8'), route)]));
const titles = new Set();
const descriptions = new Set();
const headlines = new Set();

function contentRoute(url, label) {
  assert.equal(url.origin, origin, `${label}: URL must stay on the site origin`);
  const pathname = decodeURIComponent(url.pathname);
  assert.ok(pathname.startsWith(base), `${label}: URL escapes the site base ${url.pathname}`);
  const route = `/${pathname.slice(base.length)}`;
  assert.ok(base === '/' || !route.startsWith(base), `${label}: doubled site base ${url.pathname}`);
  const diskPath = relative(dist, join(dist, route));
  assert.ok(!diskPath.startsWith('..') && !isAbsolute(diskPath), `${label}: URL escapes the artifact`);
  return route;
}

function localAsset(value, base, label) {
  assert.ok(value && !/^[a-z][\w+.-]*:|^\/\//i.test(value), `${label}: only local assets are allowed (${value})`);
  const url = new URL(value, new URL(base, origin));
  const path = join(dist, contentRoute(url, label));
  assert.ok(existsSync(path) && statSync(path).isFile(), `${label}: missing local asset ${value}`);
}

function resolveLink(page, node) {
  const href = node.attrs.href;
  const localeChoice = node.attrs['data-locale-choice'] ?? node.attrs['data-locale-cycle'];
  assert.ok(href && href.trim() === href, `${page.route}: empty or padded link`);
  const url = new URL(href, publicUrl(page.route));
  if (/^https?:\/\//i.test(href) || href.startsWith('//')) {
    assert.equal(url.protocol, 'https:', `${page.route}: external references must use HTTPS`);
    assert.ok(!fakeDomain.test(url.hostname) && !/tihomo/i.test(url.hostname), `${page.route}: invented production/example URL ${href}`);
    assert.ok(!url.username && !url.password, `${page.route}: credentials in reference URL`);
    assert.ok(localeChoice === undefined, `${page.route}: locale link must be local`);
    return url;
  }
  assert.equal(url.origin, origin, `${page.route}: unsupported link ${href}`);
  assert.ok(!/^[a-z][\w+.-]*:/i.test(href), `${page.route}: absolute local/collection URL ${href}`);
  assert.equal(url.search, '', `${page.route}: unexpected navigation query ${href}`);
  const pathname = contentRoute(url, page.route);
  const targetRoute = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const target = pages.get(targetRoute);
  assert.ok(target, `${page.route}: navigation outside the ten routes: ${href}`);
  if (url.hash) assert.ok(byId(target, decodeURIComponent(url.hash.slice(1))), `${page.route}: missing fragment ${href}`);
  if (localeChoice === undefined) assert.equal(target.locale, page.locale, `${page.route}: navigation changes locale: ${href}`);
  return url;
}

for (const page of pages.values()) {
  const { route, locale } = page;
  const htmlRoots = elements(page, 'html');
  assert.equal(htmlRoots.length, 1, `${route}: need one html element`);
  assert.equal(htmlRoots[0].attrs.lang, locale, `${route}: incorrect document language`);
  assert.equal(elements(page, 'main').length, 1, `${route}: need one main landmark`);
  const titleNodes = elements(page, 'title').filter((node) => node.parent?.tag === 'head');
  const descriptionNodes = elements(page, 'meta').filter((node) => node.attrs.name?.toLowerCase() === 'description');
  const h1s = elements(page, 'h1');
  assert.equal(titleNodes.length, 1, `${route}: need one page title`);
  assert.equal(descriptionNodes.length, 1, `${route}: need one description`);
  assert.equal(h1s.length, 1, `${route}: need exactly one h1`);
  const title = contents(page, titleNodes[0]);
  const description = descriptionNodes[0].attrs.content?.trim();
  const headline = contents(page, h1s[0]);
  for (const [value, seen, name] of [[title, titles, 'title'], [description, descriptions, 'description'], [headline, headlines, 'h1']]) {
    assert.ok(value && !seen.has(value), `${route}: empty or duplicate ${name}`);
    seen.add(value);
  }
  assert.ok(contents(page, elements(page, 'main')[0]).length > 300, `${route}: missing substantive rendered main content`);
  const ids = page.nodes.filter((node) => node.attrs.id !== undefined).map((node) => node.attrs.id);
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate fragment IDs`);
  assert.ok(!ids.includes(''), `${route}: empty fragment ID`);

  const headLinks = elements(page, 'link').filter((node) => node.parent?.tag === 'head');
  const linksByRel = (rel) => headLinks.filter((node) => tokens(node.attrs.rel || '').includes(rel));
  const canonicals = linksByRel('canonical');
  assert.equal(canonicals.length, 1, `${route}: need one canonical`);
  assert.equal(canonicals[0].attrs.href, publicUrl(route), `${route}: canonical must identify this production page`);
  const alternates = linksByRel('alternate');
  assert.equal(alternates.length, 2, `${route}: need exactly EN/VI alternates`);
  for (const language of ['en', 'vi']) {
    const localized = alternates.filter((node) => node.attrs.hreflang === language);
    assert.equal(localized.length, 1, `${route}: need one ${language} alternate`);
    assert.equal(localized[0].attrs.href, publicUrl(equivalent(route, language)), `${route}: incorrect ${language} alternate`);
  }
  const sitemaps = linksByRel('sitemap');
  assert.equal(sitemaps.length, 1, `${route}: need one sitemap discovery link`);
  assert.equal(sitemaps[0].attrs.href, publicUrl('/sitemap.xml'), `${route}: incorrect sitemap URL`);
  assert.equal(sitemaps[0].attrs.type, 'application/xml', `${route}: incorrect sitemap type`);

  const buttons = elements(page, 'button');
  assert.equal(buttons.length, 4, `${route}: only three desktop theme choices and one mobile theme cycle are permitted`);
  for (const choice of ['light', 'dark', 'system']) {
    const matches = buttons.filter((node) => node.attrs['data-theme-choice'] === choice);
    assert.equal(matches.length, 1, `${route}: missing or duplicate ${choice} theme button`);
    const button = matches[0];
    assert.equal(button.attrs.type, 'button', `${route}: theme must not submit a form`);
    assert.equal(button.attrs['aria-pressed'], String(choice === 'system'), `${route}: initial ${choice} selection must default to OS`);
    assert.ok(contents(page, button) || button.attrs['aria-label'], `${route}: unnamed theme control`);
    // Controls may start hidden until theme.js installs their handlers.
    assert.ok(!Object.hasOwn(button.attrs, 'disabled') && button.attrs.tabindex !== '-1', `${route}: inaccessible theme control`);
  }
  const themeCycles = buttons.filter((node) => Object.hasOwn(node.attrs, 'data-theme-cycle'));
  assert.equal(themeCycles.length, 1, `${route}: need one mobile theme cycle`);
  const themeCycle = themeCycles[0];
  assert.equal(themeCycle.attrs.type, 'button', `${route}: mobile theme must not submit a form`);
  assert.equal(themeCycle.attrs['data-theme-mode'], 'system', `${route}: mobile theme must default to OS`);
  assert.ok(themeCycle.attrs['aria-label'], `${route}: mobile theme needs an accessible state/action label`);
  assert.ok(!Object.hasOwn(themeCycle.attrs, 'disabled') && themeCycle.attrs.tabindex !== '-1', `${route}: inaccessible mobile theme control`);
  for (const mode of ['system', 'light', 'dark']) {
    assert.ok(themeCycle.attrs[`data-label-${mode}`], `${route}: missing mobile ${mode} state/action label`);
  }
  assert.ok(!Object.hasOwn(htmlRoots[0].attrs, 'data-theme'), `${route}: initial HTML must defer to the OS theme`);
  const scripts = elements(page, 'script');
  assert.deepEqual(scripts.map((script) => script.attrs.src).sort(), [publicRoute('/navigation.js'), publicRoute('/theme.js')], `${route}: only the theme and header-offset scripts are permitted`);
  for (const script of scripts) {
    assert.equal(page.html.slice(script.innerStart, script.innerEnd).trim(), '', `${route}: inline script is forbidden`);
    assert.ok(!script.attrs.type || ['module', 'text/javascript', 'application/javascript'].includes(script.attrs.type), `${route}: UI script must be executable JavaScript`);
  }

  const localeLinks = page.nodes.filter((node) => Object.hasOwn(node.attrs, 'data-locale-choice'));
  assert.equal(localeLinks.length, 2, `${route}: need the two equivalent locale links`);
  for (const language of ['vi', 'en']) {
    const links = localeLinks.filter((node) => node.attrs['data-locale-choice'] === language);
    assert.equal(links.length, 1, `${route}: missing or duplicate ${language} locale link`);
    assert.equal(links[0].tag, 'a', `${route}: locale choice must work without JavaScript`);
    assert.equal(links[0].attrs.href, publicRoute(equivalent(route, language)), `${route}: locale choice loses current page`);
    assert.ok(contents(page, links[0]) || links[0].attrs['aria-label'], `${route}: unnamed locale link`);
  }
  const localeCycles = page.nodes.filter((node) => Object.hasOwn(node.attrs, 'data-locale-cycle'));
  assert.equal(localeCycles.length, 1, `${route}: need one mobile locale link`);
  const localeCycle = localeCycles[0];
  const otherLocale = locale === 'vi' ? 'en' : 'vi';
  assert.equal(localeCycle.tag, 'a', `${route}: mobile locale must work without JavaScript`);
  assert.equal(localeCycle.attrs['data-locale-cycle'], otherLocale, `${route}: mobile locale must switch languages`);
  assert.equal(localeCycle.attrs.href, publicRoute(equivalent(route, otherLocale)), `${route}: mobile locale loses current page`);
  assert.ok(localeCycle.attrs['aria-label'], `${route}: mobile locale needs an accessible state/action label`);

  assert.ok(!tracker.test(page.html), `${route}: tracker found`);
  assert.ok(!/lorem ipsum|\bTODO\b|\bTBD\b|placeholder|đang cập nhật/i.test(text(page.html)), `${route}: placeholder content`);
  for (const node of page.nodes) {
    assert.ok(!['form', 'input', 'textarea', 'select', 'iframe', 'embed', 'object', 'base'].includes(node.tag), `${route}: forbidden collection/embed element ${node.tag}`);
    assert.ok(!node.attrs.role || node.attrs.role !== 'button' || node.tag === 'button', `${route}: unexpected custom button`);
    if (Object.hasOwn(node.attrs, 'data-theme-choice')) assert.ok(buttons.includes(node), `${route}: unexpected theme control`);
    if (Object.hasOwn(node.attrs, 'data-theme-cycle')) assert.equal(node, themeCycle, `${route}: unexpected theme cycle control`);
    if (node.attrs.contenteditable !== undefined) assert.equal(node.attrs.contenteditable, 'false', `${route}: editable collection surface`);
    for (const name of Object.keys(node.attrs)) assert.ok(!/^on/i.test(name) && !['action', 'formaction', 'ping', 'srcdoc'].includes(name), `${route}: forbidden active attribute ${name}`);
    if (node.tag === 'link') {
      const rel = tokens((node.attrs.rel || '').toLowerCase());
      assert.ok(!rel.some((value) => ['dns-prefetch', 'preconnect', 'prerender', 'prefetch'].includes(value)), `${route}: speculative request is forbidden`);
    }
    if (node.tag === 'meta') {
      assert.ok(!node.attrs['http-equiv'] || node.attrs['http-equiv'].toLowerCase() !== 'refresh', `${route}: unexpected redirect`);
      assert.ok(!/^(?:https?:)?\/\//i.test(node.attrs.content || ''), `${route}: unsupported URL metadata`);
    }
    if (node.tag === 'a' && node.attrs.href !== undefined) resolveLink(page, node);
    const documentUrl = publicUrl(route);
    if (node.tag === 'link' && node.attrs.href !== undefined && !tokens(node.attrs.rel || '').some((rel) => ['canonical', 'alternate', 'sitemap'].includes(rel))) localAsset(node.attrs.href, documentUrl, `${route} link`);
    for (const name of ['src', 'poster']) if (node.attrs[name] !== undefined) localAsset(node.attrs[name], documentUrl, `${route} ${node.tag}`);
    if (node.attrs.srcset) for (const candidate of node.attrs.srcset.split(',')) localAsset(candidate.trim().split(/\s+/)[0], documentUrl, `${route} srcset`);
    for (const name of ['href', 'xlink:href']) {
      if (node.attrs[name] !== undefined && ['image', 'use'].includes(node.tag) && !node.attrs[name].startsWith('#')) localAsset(node.attrs[name], documentUrl, `${route} SVG`);
    }
    if (node.attrs.style) checkCss(node.attrs.style, documentUrl);
    if (node.tag === 'style') checkCss(page.html.slice(node.innerStart, node.innerEnd), documentUrl);
    if (node.tag === 'a') assert.ok(!/dùng ngay|đăng ký nhận tin|sign up|join (?:the )?waitlist|request (?:early|private) access|start (?:now|free)|try (?:it )?now/i.test(contents(page, node)), `${route}: forbidden access/collection CTA`);
  }
  if (locale === 'en') {
    const rendered = [text(page.html), title, description, ...page.nodes.flatMap((node) => ['aria-label', 'alt', 'title', 'data-label-system', 'data-label-light', 'data-label-dark'].map((name) => node.attrs[name] || ''))].join(' ');
    assert.ok(!vietnamese.test(rendered.normalize('NFC')), `${route}: untranslated Vietnamese UI/content`);
  }
  // Navigation and footer must expose the educational hub in the current locale.
  for (const tag of ['nav', 'footer']) {
    assert.ok(elements(page, tag).some((landmark) => descendants(page, landmark, 'a').some((node) => node.attrs.href === publicRoute(`${homeOf(locale)}blog/`))), `${route}: ${tag} needs same-locale hub navigation`);
  }
}

// Metadata must describe exactly the public content routes, not source or assets.
assert.deepEqual(files.filter((path) => /(?:^|\/)(?:sitemap[^/]*\.(?:xml|txt)(?:\.gz)?|robots\.txt)$/i.test(assetRoute(path))).map(assetRoute).sort(), ['/robots.txt', '/sitemap.xml'], 'only the sitemap and project robots endpoints may ship');
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const urlset = sitemap.match(/^<\?xml version="1\.0" encoding="UTF-8"\?>\s*<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">([^]*?)<\/urlset>\s*$/);
assert.ok(urlset, 'sitemap must be a valid minimal XML urlset');
const locations = [...urlset[1].matchAll(/<url><loc>([^<]+)<\/loc><\/url>/g)];
assert.equal(urlset[1].replace(/<url><loc>[^<]+<\/loc><\/url>/g, '').trim(), '', 'unexpected sitemap fields or markup');
assert.deepEqual(locations.map((match) => decode(match[1])).sort(), routes.map(publicUrl).sort(), 'sitemap must contain exactly the ten canonical production URLs');
assert.equal(readFileSync(join(dist, 'robots.txt'), 'utf8'), `User-agent: *\nAllow: /\nSitemap: ${publicUrl('/sitemap.xml')}\n`, 'project robots must allow crawling and identify the production sitemap');

// No hidden extra scripts, external fonts/CSS or persistence/networking.
const scriptFiles = files.filter((path) => /\.(?:[cm]?js)$/i.test(path));
assert.deepEqual(scriptFiles.map(assetRoute).sort(), ['/navigation.js', '/theme.js'], 'only the theme and header-offset JavaScript assets may ship');
for (const name of ['theme.js', 'navigation.js']) {
  const source = readFileSync(join(dist, name), 'utf8');
  const script = source.replace(/\/\*[^]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  assert.ok(script.trim(), `${name} must not be empty`);
  assert.ok(!tracker.test(script), `${name}: tracking mechanism`);
  assert.ok(!/\b(?:fetch|XMLHttpRequest|WebSocket|WebTransport|EventSource|sendBeacon|Worker|SharedWorker|serviceWorker|importScripts|localStorage|sessionStorage|indexedDB|cookieStore|cookie|caches|CacheStorage|geolocation|RTCPeerConnection|Image|Audio)\b|https?:\/\/|wss?:\/\//i.test(script), `${name}: network, tracking or persistence mechanism`);
  assert.ok(!/\b(?:import|export|eval|Function|require|atob)\b|createElement\s*\(|document\s*\.\s*(?:write|writeln)|\.(?:innerHTML|outerHTML)\s*=|\b(?:location|window\.open)\b/.test(script), `${name}: dynamic code, content injection or navigation is outside UI scope`);
}

function checkCss(css, base) {
  assert.ok(!/@import\b|expression\s*\(|-moz-binding|(?:^|[;{])\s*behavior\s*:/i.test(css), `${base}: external/active CSS dependency`);
  for (const match of css.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*?))\s*\)/gi)) {
    const value = (match[1] ?? match[2] ?? match[3]).trim();
    if (!value.startsWith('#')) localAsset(value, base, `${base} CSS`);
  }
}
const cssFiles = files.filter((path) => path.endsWith('.css'));
assert.ok(cssFiles.length > 0, 'build must contain a stylesheet');
const styles = cssFiles.map((path) => {
  const css = readFileSync(path, 'utf8');
  checkCss(css, publicUrl(assetRoute(path)));
  return css;
}).join('\n');
const fontFaces = [...styles.matchAll(/@font-face\s*\{([^}]+)\}/gi)].map((match) => match[1]);
for (const weight of [400, 600, 700]) {
  assert.ok(fontFaces.some((face) => /font-family\s*:\s*["']?Be Vietnam Pro["']?\s*(?:;|$)/i.test(face) && new RegExp(`font-weight\\s*:\\s*${weight}\\s*[;}]`).test(`${face}}`) && /url\(/i.test(face)), `missing locally hosted Be Vietnam Pro weight ${weight}`);
}

// Section structure and feature-status boundaries are product contracts; editorial wording may change.
const statusKeys = ['have', 'partial', 'direction', 'idea'];
const sectionCounts = { platform: 5, direction: 3, extensions: 6 };
const homeSignatures = [];
for (const locale of ['vi', 'en']) {
  const page = pages.get(homeOf(locale));
  const ordered = ['hero-title', 'problem', 'platform', 'ai-native', 'direction', 'extensions', 'vision', 'faq', 'cta-title'].map((id) => byId(page, id));
  assert.ok(ordered.every(Boolean) && ordered.every((node, index) => index === 0 || node.start > ordered[index - 1].start), `${page.route}: required homepage section order`);
  const hero = text(page.html.slice(elements(page, 'main')[0].innerStart, byId(page, 'problem').start));
  assert.match(hero, locale === 'vi' ? /chưa (?:được )?(?:phát hành|công bố|ra mắt)/i : /not (?:yet )?(?:public(?:ly available)?|released|available)|unreleased/i, `${page.route}: hero needs prelaunch disclosure`);
  assert.match(hero, locale === 'vi' ? /đang phát triển/i : /in development|being developed|developing/i, `${page.route}: hero must describe development, not availability`);
  assert.match(text(page.html), locale === 'vi' ? /Minh họa/ : /Illustration/i, `${page.route}: illustration disclosure`);
  const links = elements(page, 'a').filter((node) => node.start > elements(page, 'main')[0].innerStart && node.start < byId(page, 'problem').start);
  assert.ok(links.some((node) => new URL(node.attrs.href, publicUrl(page.route)).pathname === publicRoute(page.route) && new URL(node.attrs.href, publicUrl(page.route)).hash === '#direction' && contents(page, node)), `${page.route}: primary direction CTA`);
  assert.ok(links.some((node) => node.attrs.href === publicRoute(`${page.route}blog/`) && contents(page, node)), `${page.route}: educational CTA`);
  const signature = [];
  for (const [id, count] of Object.entries(sectionCounts)) {
    const section = byId(page, id);
    const cards = descendants(page, section, 'article');
    assert.equal(cards.length, count, `${page.route}: preserve all ${id} feature cards`);
    const statuses = cards.map((card) => {
      const badges = descendants(page, card).filter((node) => hasClass(node, 'badge'));
      assert.equal(badges.length, 1, `${page.route}: feature needs exactly one status badge`);
      const keys = statusKeys.filter((key) => hasClass(badges[0], key));
      assert.equal(keys.length, 1, `${page.route}: unknown/ambiguous feature status`);
      assert.ok(id === 'platform' ? ['have', 'partial'].includes(keys[0]) : ['direction', 'idea'].includes(keys[0]), `${page.route}: feature promoted beyond evidence boundary`);
      if (['have', 'partial'].includes(keys[0])) assert.match(contents(page, badges[0]), locale === 'vi' ? /chưa (?:được )?(?:phát hành|công bố|ra mắt)/i : /not (?:yet )?(?:public(?:ly available)?|released|available)|unreleased/i, `${page.route}: existing foundation is not public`);
      return keys[0];
    });
    signature.push(statuses);
  }
  for (const id of ['ai-native', 'vision']) {
    const section = byId(page, id);
    const headings = descendants(page, section, 'h2');
    assert.equal(headings.length, 1, `${page.route}: ${id} needs one section heading`);
    const badges = descendants(page, section).filter((node) => hasClass(node, 'badge'));
    assert.equal(badges.length, 1, `${page.route}: ${id} needs a proposed-direction status`);
    assert.ok(hasClass(badges[0], 'direction'), `${page.route}: ${id} must not imply an operational capability`);
    const cards = descendants(page, section, 'article');
    assert.equal(cards.length, 3, `${page.route}: preserve the three ${id} narrative pillars`);
    signature.push({ section: id, cards: cards.length });
  }
  const faq = byId(page, 'faq');
  const questions = descendants(page, faq, 'details');
  // Retain the original nine topics and add AI-native meaning and agent authority.
  // A minimum plus bilingual parity allows further questions without pinning copy.
  assert.ok(questions.length >= 11, `${page.route}: preserve original FAQ topics and AI disclosure questions`);
  for (const question of questions) {
    const summaries = descendants(page, question, 'summary');
    assert.equal(summaries.length, 1, `${page.route}: FAQ needs one question`);
  }
  homeSignatures.push({ sections: signature, faqCount: questions.length });
}
assert.deepEqual(homeSignatures[1], homeSignatures[0], 'translated homepages must retain section, feature-status and FAQ parity');

// Full guides: compare article bodies, not navigation padding or Vietnamese syllable counts.
const articleSignatures = new Map();
for (const locale of ['vi', 'en']) {
  const home = homeOf(locale);
  const articleRoutes = slugs.map((slug) => `${home}blog/${slug}/`);
  const hub = pages.get(`${home}blog/`);
  assert.ok(contents(hub, elements(hub, 'main')[0]).length >= 600, `${hub.route}: hub needs guide descriptions, not only titles`);
  for (const route of articleRoutes) assert.ok(elements(hub, 'a').some((node) => node.attrs.href === publicRoute(route) && contents(hub, node)), `${hub.route}: missing named guide link ${route}`);
  for (const route of articleRoutes) {
    const page = pages.get(route);
    const main = elements(page, 'main')[0];
    const body = contents(page, main);
    const dates = descendants(page, main, 'time');
    assert.ok(dates.length > 0, `${route}: missing updated date`);
    for (const date of dates) {
      const value = date.attrs.datetime;
      assert.match(value || '', /^\d{4}-\d{2}-\d{2}$/, `${route}: updated date must be an ISO calendar date`);
      const parsed = new Date(`${value}T00:00:00Z`);
      assert.ok(Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value && parsed.getTime() <= Date.now(), `${route}: invalid/future updated date`);
      assert.ok(contents(page, date), `${route}: date must be visible`);
    }
    const headings = descendants(page, main).filter((node) => /^h[2-6]$/.test(node.tag));
    assert.ok(headings.some((node) => locale === 'vi' ? /nguồn tham khảo/i.test(contents(page, node)) : /sources|references/i.test(contents(page, node))), `${route}: missing localized source heading`);
    const sources = descendants(page, main, 'a').filter((node) => /^https:\/\//i.test(node.attrs.href || ''));
    assert.ok(sources.length > 0, `${route}: guide requires external educational references`);
    for (const source of sources) {
      const rel = tokens(source.attrs.rel || '');
      assert.ok(rel.includes('noopener') && rel.includes('noreferrer') && contents(page, source), `${route}: source needs safe relationship and visible label`);
    }
    const links = descendants(page, main, 'a');
    for (const sibling of articleRoutes.filter((value) => value !== route)) assert.ok(links.some((node) => new URL(node.attrs.href, publicUrl(route)).href === publicUrl(sibling)), `${route}: missing sibling ${sibling}`);
    assert.ok(links.some((node) => {
      const target = new URL(node.attrs.href, publicUrl(route));
      return target.origin === origin && target.pathname === publicRoute(home) && target.hash && byId(pages.get(home), decodeURIComponent(target.hash.slice(1)));
    }), `${route}: missing same-locale link to a relevant homepage section`);
    const tables = descendants(page, main, 'table');
    const tableLabels = [];
    for (const table of tables) {
      let wrapper = table.parent;
      while (wrapper && wrapper !== main && !hasClass(wrapper, 'table-scroll') && wrapper.attrs.role !== 'region') wrapper = wrapper.parent;
      assert.ok(wrapper && wrapper !== main, `${route}: table needs an independent scroll region`);
      assert.ok(wrapper.attrs['aria-label']?.trim(), `${route}: table scroll region needs a label`);
      assert.equal(wrapper.attrs.tabindex, '0', `${route}: table scroll region must support keyboard scrolling`);
      tableLabels.push(wrapper.attrs['aria-label']);
    }
    assert.equal(new Set(tableLabels).size, tables.length, `${route}: table regions need distinct labels`);
    const wordCount = tokens(body).length;
    // VI whitespace tokens count syllables; EN uses words. Structural and source parity
    // below prevents a shorter summary passing merely by clearing this lower EN floor.
    assert.ok(wordCount >= (locale === 'vi' ? 850 : 500), `${route}: article body too thin (${wordCount} tokens)`);
    assert.ok(headings.length >= 5, `${route}: expected a complete structured guide`);
    articleSignatures.set(route, {
      wordCount,
      headings: headings.map((node) => node.tag),
      tables: tables.map((table) => descendants(page, table, 'tr').map((row) => descendants(page, row).filter((node) => ['th', 'td'].includes(node.tag)).length)),
      sources: [...new Set(sources.map((node) => node.attrs.href))].sort(),
    });
    if (locale === 'en') {
      const original = articleSignatures.get(equivalent(route, 'vi'));
      const translated = articleSignatures.get(route);
      assert.ok(wordCount >= original.wordCount * 0.5, `${route}: translation is much shorter than its VI guide`);
      for (const key of ['headings', 'tables', 'sources']) assert.deepEqual(translated[key], original[key], `${route}: translation must retain ${key} parity`);
      assert.match(body, /\bVND\b/, `${route}: preserve and identify Vietnamese-currency examples`);
    }
  }
}
for (const locale of ['vi', 'en']) assert.ok([...articleSignatures].some(([route, value]) => localeOf(route) === locale && value.tables.length > 0), `${locale}: table checks must not be vacuous`);

console.log(`check-dist OK: ${routes.length} routes under ${base}, canonical/hreflang/sitemap/robots, equivalent VI/EN guides, local assets, theme-only controls and no collection`);
