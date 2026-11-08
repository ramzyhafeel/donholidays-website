import { site, socialLinks, formatAddress } from "./site";
import { destinations, getDestination } from "./destinations";
import { publishedPackages, getPackage } from "./packages";
import { reviews } from "./reviews";

/**
 * Page-level SEO. Used by the <Seo> component in the browser and by the
 * prerender script at build time, so search engines receive complete HTML.
 */

export const absoluteUrl = (path = "/") => {
  const base = site.domain.replace(/\/$/, "");
  if (/^https?:\/\//.test(path)) return path;
  const clean = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${base}${clean}`;
};

const ORG_ID = `${absoluteUrl("/")}#organization`;
const WEBSITE_ID = `${absoluteUrl("/")}#website`;

/** Organization / TravelAgency — only verified fields are included. */
export function organizationSchema() {
  const org = {
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: site.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.ogImage),
    description: site.description,
    areaServed: { "@type": "Country", name: "Sri Lanka" },
  };
  if (site.contact.phone) org.telephone = site.contact.phone;
  if (site.contact.email) org.email = site.contact.email;
  if (formatAddress()) {
    org.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street || undefined,
      addressLocality: site.address.locality || undefined,
      addressRegion: site.address.region || undefined,
      postalCode: site.address.postalCode || undefined,
      addressCountry: site.address.country,
    };
  }
  const same = socialLinks().map((s) => s.url);
  if (same.length) org.sameAs = same;
  return org;
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: absoluteUrl("/"),
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes.filter(Boolean) });

const staticPages = {
  "/": {
    title: "Sri Lanka Tour Packages & Travel Agency | DON HOLIDAYS",
    description:
      "Discover Sri Lanka with DON HOLIDAYS. Explore cultural journeys, wildlife safaris, beaches and tailor-made tour experiences. Plan your holiday today.",
    changefreq: "weekly",
    priority: "1.0",
  },
  "/about": {
    title: "About DON HOLIDAYS | Sri Lanka Travel Agency",
    description:
      "Meet DON HOLIDAYS, a Sri Lanka travel agency planning private, tailor-made holidays across the island's heritage sites, hill country, national parks and beaches.",
    crumb: "About Us",
    priority: "0.7",
  },
  "/tour-packages": {
    title: "Sri Lanka Tour Packages & Itineraries | DON HOLIDAYS",
    description:
      "Browse Sri Lanka tour packages from 4 to 10 days — cultural tours, hill-country train journeys, wildlife safaris, honeymoons and beach holidays, all fully customisable.",
    crumb: "Tour Packages",
    priority: "0.9",
  },
  "/destinations": {
    title: "Top Sri Lanka Destinations to Visit | DON HOLIDAYS",
    description:
      "Explore Sri Lanka's top destinations — Sigiriya, Kandy, Ella, Nuwara Eliya, Galle, Mirissa, Yala, Udawalawe and Trincomalee — and plan the right route for your trip.",
    crumb: "Destinations",
    priority: "0.9",
  },
  "/services": {
    title: "Sri Lanka Travel Services: Airport Transfers & Private Tours | DON HOLIDAYS",
    description:
      "Airport transfers, customized tour planning, hotel-to-hotel transfers and private family & group holidays in Sri Lanka with DON HOLIDAYS.",
    crumb: "Services",
    priority: "0.9",
  },
  "/transportation": {
    title: "Private Vehicles & Transfers in Sri Lanka | DON HOLIDAYS",
    description:
      "Choose a private SUV or van for your Sri Lanka airport transfer, hotel-to-hotel journey or tour. See the DON HOLIDAYS vehicles and request a quote.",
    crumb: "Transportation",
    priority: "0.8",
  },
  "/gallery": {
    title: "Sri Lanka Travel Photo Gallery | DON HOLIDAYS",
    description:
      "Photos from DON HOLIDAYS guests, Sri Lanka's top destinations and our vehicles — beaches, tea country, wildlife, heritage sites and more.",
    crumb: "Gallery",
    priority: "0.6",
  },
  "/reviews": {
    title: "Guest Reviews | DON HOLIDAYS Sri Lanka",
    description: "Read reviews from travellers who explored Sri Lanka with DON HOLIDAYS, and share your own experience.",
    crumb: "Reviews",
    priority: "0.6",
    // Kept out of search results until genuine reviews are added in src/data/reviews.js.
    ...(reviews.length === 0 ? { robots: "noindex, follow", sitemap: false } : {}),
  },
  "/experiences": {
    title: "Sri Lanka Travel Experiences: Culture, Safaris & Beaches | DON HOLIDAYS",
    description:
      "Cultural tours, wildlife safaris, beach holidays, honeymoons, family trips and adventure tours in Sri Lanka — choose your travel style and we will tailor the route.",
    crumb: "Experiences",
    priority: "0.8",
  },
  "/contact": {
    title: "Contact DON HOLIDAYS | Sri Lanka Holiday Enquiries",
    description:
      "Get in touch with DON HOLIDAYS to plan a private, tailor-made Sri Lanka holiday. Send us your dates and interests and we will help you plan the route.",
    crumb: "Contact",
    priority: "0.7",
  },
  "/plan-your-trip": {
    title: "Plan Your Sri Lanka Trip | Custom Tour Enquiry | DON HOLIDAYS",
    description:
      "Tell us your travel dates, group size and interests and DON HOLIDAYS will plan a customised Sri Lanka itinerary around you.",
    crumb: "Plan Your Trip",
    priority: "0.8",
  },
  "/privacy-policy": {
    title: "Privacy Policy | DON HOLIDAYS",
    description: "How DON HOLIDAYS handles the personal information you share when you contact us or send a travel enquiry.",
    crumb: "Privacy Policy",
    priority: "0.3",
    changefreq: "yearly",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | DON HOLIDAYS",
    description: "Terms of use for the DON HOLIDAYS website and general information about how our travel quotes and bookings work.",
    crumb: "Terms & Conditions",
    priority: "0.3",
    changefreq: "yearly",
  },
};

const notFound = {
  title: "Page Not Found | DON HOLIDAYS",
  description: "Sorry, we couldn't find that page. Explore Sri Lanka destinations and tour packages with DON HOLIDAYS.",
  robots: "noindex, follow",
  canonical: null,
};

/** Every public route (prerendered); `sitemap: false` routes are left out of sitemap.xml. */
export function allRoutes() {
  return [
    ...Object.entries(staticPages).map(([path, p]) => ({ path, priority: p.priority || "0.7", changefreq: p.changefreq || "monthly", sitemap: p.sitemap !== false })),
    ...destinations.map((d) => ({ path: `/destinations/${d.slug}`, priority: "0.8", changefreq: "monthly" })),
    ...publishedPackages.map((p) => ({ path: `/tour-packages/${p.slug}`, priority: "0.8", changefreq: "monthly" })),
  ];
}

export function getSeoForPath(rawPath = "/") {
  const path = rawPath === "/" ? "/" : rawPath.replace(/\/+$/, "") || "/";
  const base = { ogImage: absoluteUrl(site.ogImage), robots: "index, follow" };

  if (staticPages[path]) {
    const p = staticPages[path];
    const nodes = path === "/" ? [organizationSchema(), websiteSchema()] : [
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: p.crumb, path }]),
    ];
    return { ...base, ...p, canonical: absoluteUrl(path), jsonLd: graph(...nodes) };
  }

  const dest = path.match(/^\/destinations\/([^/]+)$/);
  if (dest) {
    const d = getDestination(dest[1]);
    if (!d) return { ...base, ...notFound };
    const url = absoluteUrl(path);
    return {
      ...base,
      title: d.seo.title,
      description: d.seo.description,
      canonical: url,
      ogImage: absoluteUrl(`/images/optimized/${d.image}-1280.webp`),
      jsonLd: graph(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: d.name, path },
        ]),
        {
          "@type": "TouristDestination",
          name: `${d.name}, Sri Lanka`,
          description: d.summary,
          url,
          image: absoluteUrl(`/images/optimized/${d.image}-1280.webp`),
          containedInPlace: { "@type": "Country", name: "Sri Lanka" },
        },
      ),
    };
  }

  const pkg = path.match(/^\/tour-packages\/([^/]+)$/);
  if (pkg) {
    const p = getPackage(pkg[1]);
    if (!p) return { ...base, ...notFound };
    return {
      ...base,
      title: p.seo.title,
      description: p.seo.description,
      canonical: absoluteUrl(path),
      ogImage: absoluteUrl(`/images/optimized/${p.image}-1280.webp`),
      jsonLd: graph(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tour Packages", path: "/tour-packages" },
          { name: p.title, path },
        ]),
      ),
    };
  }

  return { ...base, ...notFound };
}

export const seoDefaults = staticPages["/"];
