/**
 * Homepage copy. Edit text here without touching the components.
 * Icons are lucide-react icon names (https://lucide.dev/icons).
 */
export const hero = {
  eyebrow: "Sri Lanka travel agency",
  bigWord: "SRI LANKA",
  heading: "Discover Sri Lanka with DON HOLIDAYS",
  text: "Explore breathtaking landscapes, ancient heritage, incredible wildlife and tropical beaches with thoughtfully planned Sri Lankan travel experiences.",
  primaryCta: { label: "Plan My Trip", to: "/plan-your-trip" },
  secondaryCta: { label: "Explore Tours", to: "/tour-packages" },
};

/**
 * Hero slideshow — photos crossfade with a slow cinematic zoom.
 * `image` = key from src/lib/images.js, `place` = caption shown in the corner,
 * `focus` = CSS object-position so the subject stays in frame.
 * The first slide loads with the page; the rest load one at a time.
 */
export const heroSlides = [
  { image: "hero-sigiriya", place: "Sigiriya", region: "Cultural Triangle", focus: "50% 60%" },
  { image: "tea-hills", place: "Tea country", region: "Central Highlands", focus: "50% 55%" },
  { image: "coconut-hill", place: "Coconut Tree Hill", region: "Mirissa", focus: "50% 40%" },
  { image: "yala", place: "Yala National Park", region: "Southern Province", focus: "60% 50%" },
  { image: "ella-bridge-aerial", place: "Nine Arch Bridge", region: "Ella", focus: "50% 50%" },
  { image: "elephants-river", place: "Wild elephants", region: "Sri Lanka", focus: "50% 55%" },
  { image: "south-coast-aerial", place: "South coast", region: "Southern Province", focus: "50% 50%" },
];

/** Seconds each slide stays on screen. */
export const heroSlideSeconds = 7;

export const intro = {
  heading: "Why travellers plan their Sri Lanka holiday with DON HOLIDAYS",
  text: "From misty tea country and ancient rock fortresses to leopard safaris and palm-lined beaches, we help you see the best of Sri Lanka at a pace that suits you — with a private, tailor-made itinerary built around your dates and interests.",
};

/** Facts about Sri Lanka (not company claims) shown under the intro. */
export const islandFacts = [
  { icon: "Landmark", value: "8", label: "UNESCO World Heritage Sites" },
  { icon: "Waves", value: "2", label: "Coasts with opposite beach seasons" },
  { icon: "MapPin", value: "1,340 km", label: "Of tropical coastline" },
];

/** Service themes — keep these factual and confirmable by the client. */
export const features = [
  {
    icon: "Map",
    title: "Local knowledge",
    text: "Routes shaped by people who know the island — realistic drive times, the right season for each coast and the places worth an extra night.",
  },
  {
    icon: "CalendarCheck",
    title: "Tailor-made planning",
    text: "Every itinerary is a starting point. Change destinations, hotel style, pace or length until it feels like your trip.",
  },
  {
    icon: "MessageCircle",
    title: "One point of contact",
    text: "Plan everything in one conversation — route, accommodation style and experiences — and get clear answers before you book.",
  },
];

export const whySriLanka = [
  { icon: "Landmark", title: "Cultural heritage", text: "Royal cities, rock temples and sacred sites across more than two thousand years of history." },
  { icon: "Waves", title: "Tropical beaches", text: "Golden bays on the south, west and east coasts — with a coast in season most of the year." },
  { icon: "PawPrint", title: "Wildlife safaris", text: "Leopards in Yala, elephant herds in Udawalawe and Minneriya, and whales off the south coast." },
  { icon: "Mountain", title: "Hill-country scenery", text: "Waterfalls, cloud forest and viewpoints across the cool central highlands." },
  { icon: "Leaf", title: "Tea plantations", text: "Visit working estates and taste Ceylon tea where it is grown." },
  { icon: "TrainFront", title: "Scenic train journeys", text: "The line from Kandy to Ella winds through tea estates, tunnels and the famous Nine Arch Bridge." },
  { icon: "UtensilsCrossed", title: "Cuisine and culture", text: "Rice and curry, hoppers, kottu and fresh seafood — plus festivals, dance and warm hospitality." },
];

export const bookingSteps = [
  { icon: "MapPin", title: "Pick your destinations", text: "Browse destinations and sample itineraries, or tell us what you would love to see." },
  { icon: "SlidersHorizontal", title: "Customise your tour", text: "We suggest a route and pace for your dates. Adjust it until it is exactly right." },
  { icon: "PlaneTakeoff", title: "Confirm and travel", text: "Confirm your final itinerary and get ready to enjoy Sri Lanka." },
];

export const finalCta = {
  heading: "Your Sri Lankan adventure starts here",
  text: "Tell us about your dream holiday and let DON HOLIDAYS help you plan the journey.",
  cta: { label: "Plan Your Holiday", to: "/plan-your-trip" },
};
