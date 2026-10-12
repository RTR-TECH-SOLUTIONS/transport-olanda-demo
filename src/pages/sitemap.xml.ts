import type { APIRoute } from 'astro';
import { caleRuta, tari } from '../data';

export const GET: APIRoute = ({ site }) => {
  const cai = ['/', ...tari.flatMap((t) => [caleRuta('persoane', t.slug), caleRuta('colete', t.slug)])];
  const intrari = cai.map((cale) => `  <url><loc>${new URL(cale, site).href}</loc></url>`).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${intrari}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
