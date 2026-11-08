# DON HOLIDAYS — donholidays.lk

Sri Lanka travel agency website built with React 19, Vite 7, Tailwind CSS 4 and React Router 7.
Every public page is prerendered to static HTML at build time for SEO, then hydrated in the browser.

## Commands

```bash
npm install
npm run dev       # local development (http://localhost:5173)
npm run build     # client build + SSR build + prerender -> dist/
npm run preview   # serve dist/ locally
npm run lint
```

`npm run build` runs three steps:

1. `vite build` — browser bundle into `dist/`
2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr` — build-time renderer
3. `node src/scripts/prerender.mjs` — writes `dist/<route>/index.html`, `dist/404.html`, `sitemap.xml` and `robots.txt`

Set `SITE_NOINDEX=true` (or deploy a Vercel preview) to produce a `noindex` build with a blocking robots.txt.

## Where to edit things

| What | File |
|---|---|
| Company name, phone, WhatsApp, email, address, social links, Search Console token | `src/data/site.js` |
| Homepage text (hero, intro, features, steps, final CTA) | `src/data/home.js` |
| Tour packages / itineraries / prices | `src/data/packages.js` |
| Destinations | `src/data/destinations.js` |
| Services (Airport Transfers, Tour Planning, Hotel Transfers, Family & Group) | `src/data/services.js` |
| Vehicles (Transportation page) | `src/data/vehicles.js` -> photos in `public/images/optimized/vehicles/` |
| Guest reviews (Reviews page) | `src/data/reviews.js` |
| Menu links | `navLinks` in `src/data/site.js` |
| Travel experiences | `src/data/experiences.js` |
| FAQs | `src/data/faqs.js` |
| Guest photos (homepage, Gallery) | `src/data/guestMoments.js` |
| Page titles & meta descriptions | `src/data/seo.js` (destinations/packages use their own `seo` field) |
| Photo library (keys + alt text) | `src/lib/images.js` -> files in `public/images/optimized/` |
| Brand colours, fonts, radii, buttons | `src/index.css` (`@theme` block) |

Empty contact fields in `site.js` are treated as *pending* and hidden on the site. Add verified values to
switch on the WhatsApp button, contact details, footer links and structured data automatically.
