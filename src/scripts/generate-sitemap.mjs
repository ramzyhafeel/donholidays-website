/**
 * Sitemap and robots.txt builders, used by prerender.mjs at build time.
 * Routes come from src/data/seo.js (allRoutes), so new destinations and
 * published packages are added automatically.
 */
const xmlEscape = (s) =>
  String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

export function buildSitemap(routes, domain, lastmod = new Date().toISOString().slice(0, 10)) {
  const base = domain.replace(/\/$/, "");
  const urls = routes
    .filter((r) => r.sitemap !== false)
    .map(
      (r) => `  <url>
    <loc>${xmlEscape(r.path === "/" ? `${base}/` : `${base}${r.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function buildRobots(domain, indexable) {
  const base = domain.replace(/\/$/, "");
  if (!indexable) {
    return "# Non-production build: keep this deployment out of search results.\nUser-agent: *\nDisallow: /\n";
  }
  return `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;
}
