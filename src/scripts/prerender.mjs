/**
 * Prerenders every public route to static HTML after `vite build`.
 *
 *   1. vite build                                   -> dist/ (browser bundle)
 *   2. vite build --ssr src/entry-server.jsx --outDir dist-ssr
 *   3. node src/scripts/prerender.mjs               -> dist/<route>/index.html,
 *                                                      dist/404.html, sitemap.xml, robots.txt
 *
 * Indexing: production builds are indexable. Set SITE_NOINDEX=true, or deploy
 * a Vercel preview (VERCEL_ENV=preview), to emit noindex tags and a blocking
 * robots.txt so staging copies never appear in search results.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { buildSitemap, buildRobots } from "./generate-sitemap.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, allRoutes, getSeoForPath, site } = await import(pathToFileURL(ssrEntry).href);

const vercelEnv = process.env.VERCEL_ENV;
const indexable = process.env.SITE_NOINDEX !== "true" && (!vercelEnv || vercelEnv === "production");

const esc = (s = "") =>
  String(s).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function headFor(url) {
  const m = getSeoForPath(url);
  const robots = indexable ? m.robots : "noindex, nofollow";
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${esc(robots)}"${indexable ? "" : " data-site-noindex"} />`,
    m.canonical && `<link rel="canonical" href="${esc(m.canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:locale" content="${esc(site.locale)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    m.canonical && `<meta property="og:url" content="${esc(m.canonical)}" />`,
    `<meta property="og:image" content="${esc(m.ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${esc(m.ogImage)}" />`,
    site.googleSiteVerification && `<meta name="google-site-verification" content="${esc(site.googleSiteVerification)}" />`,
    m.jsonLd &&
      `<script type="application/ld+json" id="route-jsonld">${JSON.stringify(m.jsonLd).replaceAll("<", "\\u003c")}</script>`,
  ];
  return tags.filter(Boolean).join("\n    ");
}

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const headRe = /<!--app-head-->[\s\S]*?<!--\/app-head-->/;
if (!headRe.test(template) || !template.includes("<!--app-html-->")) {
  throw new Error("index.html is missing the <!--app-head--> / <!--app-html--> markers");
}

function writePage(url, outFile) {
  const html = template.replace(headRe, headFor(url)).replace("<!--app-html-->", render(url));
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, "utf8");
}

const routes = allRoutes();
for (const r of routes) {
  const out = r.path === "/" ? path.join(dist, "index.html") : path.join(dist, r.path.slice(1), "index.html");
  writePage(r.path, out);
}
writePage("/404", path.join(dist, "404.html"));

fs.writeFileSync(path.join(dist, "sitemap.xml"), buildSitemap(routes, site.domain), "utf8");
fs.writeFileSync(path.join(dist, "robots.txt"), buildRobots(site.domain, indexable), "utf8");

console.log(`Prerendered ${routes.length} routes (${routes.filter((r) => r.sitemap !== false).length} in sitemap) + 404.html (${indexable ? "indexable" : "noindex"}).`);
