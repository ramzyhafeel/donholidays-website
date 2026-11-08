import { useEffect } from "react";
import { getSeoForPath } from "../../data/seo";
import { site } from "../../data/site";

/**
 * Keeps <head> in sync during client-side navigation. The same data is
 * rendered into static HTML at build time by src/scripts/prerender.mjs.
 */
function upsert(selector, create, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

const meta = (key, value, attr = "name") => {
  if (!value) return;
  upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  }, { content: value });
};

export default function Seo({ path }) {
  useEffect(() => {
    const data = getSeoForPath(path);
    // A build for a non-production environment marks itself as noindex; keep it.
    const siteNoindex = document.head.querySelector("meta[data-site-noindex]");
    const robots = siteNoindex ? "noindex, nofollow" : data.robots;

    document.title = data.title;
    meta("description", data.description);
    meta("robots", robots);

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (data.canonical) {
      upsert('link[rel="canonical"]', () => {
        const l = document.createElement("link");
        l.rel = "canonical";
        return l;
      }, { href: data.canonical });
    } else if (canonical) {
      canonical.remove();
    }

    meta("og:title", data.title, "property");
    meta("og:description", data.description, "property");
    meta("og:url", data.canonical || site.domain, "property");
    meta("og:image", data.ogImage, "property");
    meta("og:site_name", site.name, "property");
    meta("twitter:title", data.title);
    meta("twitter:description", data.description);
    meta("twitter:image", data.ogImage);

    const ld = document.getElementById("route-jsonld");
    if (data.jsonLd) {
      const s = ld || Object.assign(document.createElement("script"), { id: "route-jsonld", type: "application/ld+json" });
      s.textContent = JSON.stringify(data.jsonLd);
      if (!ld) document.head.appendChild(s);
    } else if (ld) {
      ld.remove();
    }
  }, [path]);

  return null;
}
