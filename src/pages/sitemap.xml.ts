import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { articlePath, localePaths } from '../lib/locale';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');
  const paths = [
    ...Object.values(localePaths).flatMap(({ home, blog }) => [home, blog]),
    ...posts.map(({ data }) => articlePath(data.locale, data.slug)),
  ];
  const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
  })[character]!);
  const urls = paths.map((path) => `<url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
