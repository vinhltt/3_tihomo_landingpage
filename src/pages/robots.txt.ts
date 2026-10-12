import type { APIRoute } from 'astro';
import { publicPath } from '../lib/locale';

// REP applies only when this endpoint is mounted at the origin /robots.txt.
export const GET: APIRoute = ({ site }) => new Response(
  `User-agent: *\nAllow: /\nSitemap: ${new URL(publicPath('/sitemap.xml'), site).href}\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
