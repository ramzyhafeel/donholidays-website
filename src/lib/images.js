/**
 * Optimised photo library. Every key maps to WebP files generated in
 * /public/images/optimized/<key>-<width>.webp (640 + 1280, hero also 1920/2560).
 * To add or replace a photo: export WebP versions with the same naming pattern
 * and add the key + alt text here.
 */
const BASE = "/images/optimized";

export const photos = {
  "hero-sigiriya": { alt: "Aerial view of Sigiriya Rock Fortress rising above the forest", widths: [640, 1280, 1920, 2560], ratio: 1.82 },
  "sigiriya-aerial": { alt: "Sigiriya Lion Rock surrounded by green jungle in Sri Lanka", ratio: 1.82 },
  kandy: { alt: "Temple of the Sacred Tooth Relic beside Kandy Lake at sunset", ratio: 1.34 },
  "kandy-temple": { alt: "White walls and golden roof of the Temple of the Tooth in Kandy", ratio: 1.5 },
  "ella-bridge": { alt: "Blue train crossing the Nine Arch Bridge in Ella", ratio: 1.34 },
  "ella-train": { alt: "Blue train winding through green hills near Ella", ratio: 1.36 },
  "ella-bridge-aerial": { alt: "Aerial view of the Nine Arch Bridge surrounded by jungle", widths: [640, 1280, 1920], ratio: 1.5 },
  "nuwara-eliya": { alt: "Tea estate and colonial bungalow in the misty hills of Nuwara Eliya", ratio: 1 },
  "tea-hills": { alt: "Rolling tea plantations in Sri Lanka's hill country", widths: [640, 1280, 1920], ratio: 1.78 },
  galle: { alt: "Galle Fort lighthouse and ramparts on the southern coast at sunset", ratio: 1.34 },
  mirissa: { alt: "Beach restaurants on Mirissa beach at dusk", ratio: 1.5 },
  "south-coast-aerial": { alt: "Aerial view of a rocky headland on Sri Lanka's south coast", widths: [640, 1280, 1920], ratio: 1.78 },
  yala: { alt: "Sri Lankan leopard walking through grass in Yala National Park", widths: [640, 1280, 1920], ratio: 1.5 },
  udawalawe: { alt: "Herd of wild elephants grazing in Udawalawe National Park", ratio: 1.5 },
  trincomalee: { alt: "Koneswaram Temple on Swami Rock in Trincomalee", ratio: 1.5 },
  "elephants-river": { alt: "Elephants bathing in a river in Sri Lanka", widths: [640, 1280, 1920], ratio: 1.78 },
  "coconut-hill": { alt: "Palm trees on Coconut Tree Hill overlooking the Indian Ocean near Mirissa", widths: [640, 1280, 1920], ratio: 1.5 },
  unawatuna: { alt: "Golden curve of Unawatuna beach from above", ratio: 1.34 },
  surf: { alt: "Surfers riding a wave off Sri Lanka's south coast", ratio: 1.57 },
  "safari-jeep": { alt: "Wild elephant walking past a safari jeep", ratio: 1.5 },
  "beach-boats": { alt: "Aerial view of colourful fishing boats on a Sri Lankan beach", widths: [640, 1280, 1920], ratio: 1.33 },
  highlands: { alt: "Green mountain ranges of Sri Lanka's central highlands", ratio: 1.95 },
  "coast-cliffs": { alt: "Turquoise sea meeting rocky cliffs along the Sri Lankan coast", ratio: 1.78 },
  "elephant-herd": { alt: "Elephant herd crossing open grassland at dusk", ratio: 1.96 },
  "surfer-beach": { alt: "Surfer carrying a board along a rocky Sri Lankan beach", ratio: 1.5 },

  // DON HOLIDAYS vehicles (public/images/optimized/vehicles)
  "suv-rush": { alt: "White Toyota Rush SUV parked on a stone driveway", ratio: 1.79, dir: "/images/optimized/vehicles" },
  "van-flat-roof": { alt: "White Toyota HiAce van parked outside a garden gate", ratio: 1.79, dir: "/images/optimized/vehicles" },
  "van-high-roof": { alt: "White high-roof Toyota HiAce van in a tropical garden", ratio: 1.79, dir: "/images/optimized/vehicles" },
};

/** Returns { src, srcSet, alt, width, height } for an <img>. */
export function photo(key, { alt } = {}) {
  const p = photos[key];
  if (!p) throw new Error(`Unknown photo key: ${key}`);
  const widths = p.widths || [640, 1280];
  const mid = widths.includes(1280) ? 1280 : widths[widths.length - 1];
  const dir = p.dir || BASE;
  return {
    src: `${dir}/${key}-${mid}.webp`,
    srcSet: widths.map((w) => `${dir}/${key}-${w}.webp ${w}w`).join(", "),
    alt: alt ?? p.alt,
    width: 1280,
    height: Math.round(1280 / p.ratio),
  };
}

export const photoUrl = (key, w = 1280) => `${photos[key]?.dir || BASE}/${key}-${w}.webp`;
