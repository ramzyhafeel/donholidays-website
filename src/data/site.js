/**
 * DON HOLIDAYS — central business configuration.
 *
 * Every component reads company details from here. Fields set to an empty
 * string are PENDING: the site hides them (or shows a neutral fallback)
 * until a verified value is added. Never fill these with guesses.
 */
export const site = {
  name: "DON HOLIDAYS",
  shortName: "Don Holidays",
  legalName: "DON HOLIDAYS", // PENDING: confirm registered business name
  tagline: "Sri Lanka holidays, thoughtfully planned",
  description:
    "DON HOLIDAYS is a Sri Lanka travel agency planning private, tailor-made holidays across the island — from the Cultural Triangle and hill country to wildlife parks and tropical beaches.",
  domain: "https://donholidays.lk",
  logo: "/don-logo.png",
  logoTrimmed: "/don-logo-trimmed.png",
  logoWhite: "/don-logo-white.png",
  mark: "/don-mark.png",
  ogImage: "/images/og-don-holidays.jpg",
  themeColor: "#041B36",
  locale: "en_US",
  country: "Sri Lanka",

  contact: {
    // PENDING — add the verified numbers/emails. Format examples:
    // phone: "+94 77 123 4567", whatsapp: "94771234567", email: "hello@donholidays.lk"
    phone: "",
    whatsapp: "", // digits only, international format, no "+"
    email: "",
    hours: "", // e.g. "Mon–Sat, 8:30am–6:00pm (Sri Lanka time)"
  },

  address: {
    // PENDING — leave empty until the client confirms a public address.
    street: "",
    locality: "",
    region: "",
    postalCode: "",
    country: "LK",
  },

  social: {
    // PENDING — paste full profile URLs. Empty values are not rendered.
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    tripadvisor: "",
  },

  /** Google Search Console HTML-tag token (content value only). PENDING. */
  googleSiteVerification: "",
};

export const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Airport Transfers", to: "/services#airport-transfers" },
      { label: "Customized Tour Planning", to: "/services#customized-tour-planning" },
      { label: "Hotel-to-Hotel Point Transfers", to: "/services#hotel-to-hotel-transfers" },
      { label: "Private Family & Group Holidays", to: "/services#private-family-group-holidays" },
    ],
  },
  { label: "Tour Packages", to: "/tour-packages" },
  { label: "Destinations", to: "/destinations" },
  { label: "Gallery", to: "/gallery" },
  { label: "Transportation", to: "/transportation" },
  { label: "About Us", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact Us", to: "/contact" },
];

export const hasContact = (key) => Boolean(site.contact[key]);
export const socialLinks = () =>
  Object.entries(site.social)
    .filter(([, url]) => Boolean(url))
    .map(([network, url]) => ({ network, url }));

export const formatAddress = () => {
  const a = site.address;
  return [a.street, a.locality, a.region, a.postalCode].filter(Boolean).join(", ");
};

export default site;
