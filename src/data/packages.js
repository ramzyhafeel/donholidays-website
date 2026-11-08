/**
 * Tour packages / itineraries.
 *
 * status:
 *   "published" — shown on the site and in the sitemap
 *   "draft"     — hidden everywhere (use while waiting for client approval)
 *
 * The itineraries below are SAMPLE ROUTES written for DON HOLIDAYS. They are
 * labelled on the site as customisable sample itineraries. Prices, inclusions
 * and exclusions are intentionally left empty until the client confirms them —
 * the UI only shows those blocks when they contain data.
 *
 * price: null or { from: 1250, currency: "USD", basis: "per person, sharing" }
 */
export const packages = [
  {
    id: "dh-001",
    slug: "cultural-triangle-and-kandy",
    status: "published",
    sample: true,
    title: "Cultural Triangle & Kandy",
    days: 5,
    nights: 4,
    image: "sigiriya-aerial",
    gallery: ["kandy", "elephants-river"],
    summary:
      "Ancient rock fortresses, cave temples and the royal city of Kandy in one compact route — ideal for a first taste of Sri Lanka.",
    overview:
      "This short circuit focuses on Sri Lanka's most famous heritage sites. You will climb Sigiriya, explore the painted caves of Dambulla and spend time in Kandy, with optional additions such as Polonnaruwa or an elephant safari in Minneriya.",
    destinations: ["sigiriya", "kandy"],
    route: ["Airport", "Sigiriya", "Dambulla", "Kandy", "Colombo"],
    experiences: ["cultural-tours", "family-holidays"],
    highlights: [
      "Climb Sigiriya Rock Fortress",
      "Dambulla Cave Temple",
      "Temple of the Sacred Tooth Relic, Kandy",
      "Royal Botanical Gardens, Peradeniya",
    ],
    itinerary: [
      { day: 1, title: "Arrive and travel to the Cultural Triangle", description: "Meet on arrival and travel north towards Sigiriya. Settle in and enjoy a relaxed evening.", overnight: "Sigiriya area" },
      { day: 2, title: "Sigiriya Rock Fortress", description: "An early climb of Sigiriya before the heat of the day. Afternoon free, or watch sunset from Pidurangala Rock. Optional: jeep safari in Minneriya or Kaudulla.", overnight: "Sigiriya area" },
      { day: 3, title: "Dambulla to Kandy", description: "Visit the Dambulla Cave Temple, then continue to Kandy with an optional stop at a spice garden. Evening visit to the Temple of the Tooth.", overnight: "Kandy" },
      { day: 4, title: "Kandy and Peradeniya", description: "Explore the Royal Botanical Gardens at Peradeniya, walk around Kandy Lake and enjoy a Kandyan dance performance.", overnight: "Kandy" },
      { day: 5, title: "Departure", description: "Travel back towards Colombo or the airport for your onward journey.", overnight: null },
    ],
    optional: ["Polonnaruwa ancient city", "Minneriya or Kaudulla jeep safari", "Village cooking experience"],
    inclusions: [],
    exclusions: [],
    seasonNote: "Runs year-round. Elephant gatherings in Minneriya are usually best from around July to October.",
    price: null,
    seo: {
      title: "5-Day Cultural Triangle & Kandy Tour | Sri Lanka | DON HOLIDAYS",
      description:
        "A 5-day Sigiriya and Kandy tour package: climb Lion Rock, visit Dambulla's cave temples and explore Kandy. Tailor this Sri Lanka itinerary with DON HOLIDAYS.",
    },
  },
  {
    id: "dh-002",
    slug: "hill-country-by-train",
    status: "published",
    sample: true,
    title: "Hill Country by Train",
    days: 4,
    nights: 3,
    image: "ella-train",
    gallery: ["nuwara-eliya", "ella-bridge"],
    summary:
      "Tea estates, waterfalls and the famous train ride to Ella — a cool, green escape into Sri Lanka's highlands.",
    overview:
      "Follow the railway into the hills. This route links Kandy, Nuwara Eliya and Ella, with a tea factory visit, Horton Plains at dawn and time to hike and relax in Ella. Train tickets are subject to availability, so we recommend planning early.",
    destinations: ["kandy", "nuwara-eliya", "ella"],
    route: ["Kandy", "Nuwara Eliya", "Ella"],
    experiences: ["honeymoon-tours", "adventure-tours"],
    highlights: ["Tea factory visit and tasting", "Horton Plains and World's End", "Scenic train journey to Ella", "Nine Arch Bridge and Little Adam's Peak"],
    itinerary: [
      { day: 1, title: "Kandy to Nuwara Eliya", description: "Drive up into tea country, stopping at waterfalls and a tea factory for a tour and tasting.", overnight: "Nuwara Eliya" },
      { day: 2, title: "Horton Plains", description: "Early start for the World's End and Baker's Falls trail in Horton Plains National Park. Afternoon around Gregory Lake.", overnight: "Nuwara Eliya" },
      { day: 3, title: "Train to Ella", description: "Board the train for one of the most scenic stretches of the hill-country line. Evening in Ella village.", overnight: "Ella" },
      { day: 4, title: "Ella highlights", description: "Sunrise walk up Little Adam's Peak and a visit to the Nine Arch Bridge before continuing your journey.", overnight: null },
    ],
    optional: ["Ella Rock hike", "Ravana Falls", "Extend to Udawalawe or Yala"],
    inclusions: [],
    exclusions: [],
    seasonNote: "Year-round. Hill-country mornings are usually clearest; rain showers are possible in any season.",
    price: null,
    seo: {
      title: "4-Day Sri Lanka Hill Country Train Tour | Ella & Nuwara Eliya | DON HOLIDAYS",
      description:
        "Ride the scenic train to Ella on this 4-day hill country itinerary with tea estates, Horton Plains and Nuwara Eliya. Customise it with DON HOLIDAYS.",
    },
  },
  {
    id: "dh-003",
    slug: "classic-sri-lanka-round-tour",
    status: "published",
    sample: true,
    title: "Classic Sri Lanka Round Tour",
    days: 10,
    nights: 9,
    image: "tea-hills",
    gallery: ["sigiriya-aerial", "yala", "galle"],
    summary:
      "The island's highlights in ten days: heritage, tea country, a wildlife safari and the south coast.",
    overview:
      "A well-paced first trip that covers the classic loop: the Cultural Triangle, Kandy, the hill country by train, a safari in Yala and a relaxing finish around Galle and the south coast.",
    destinations: ["sigiriya", "kandy", "nuwara-eliya", "ella", "yala", "galle", "mirissa"],
    route: ["Airport", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Mirissa", "Galle"],
    experiences: ["cultural-tours", "wildlife-safaris", "beach-holidays", "tailor-made-holidays"],
    highlights: ["Sigiriya and Dambulla", "Temple of the Tooth, Kandy", "Train ride to Ella", "Yala jeep safari", "Galle Fort ramparts"],
    itinerary: [
      { day: 1, title: "Arrival to Sigiriya", description: "Travel north from the airport to the Cultural Triangle.", overnight: "Sigiriya area" },
      { day: 2, title: "Sigiriya and Dambulla", description: "Climb Sigiriya in the morning and visit the Dambulla Cave Temple in the afternoon.", overnight: "Sigiriya area" },
      { day: 3, title: "To Kandy", description: "Drive to Kandy via a spice garden. Evening at the Temple of the Tooth.", overnight: "Kandy" },
      { day: 4, title: "Kandy to Nuwara Eliya", description: "Peradeniya Gardens, then up into tea country with a tea factory visit.", overnight: "Nuwara Eliya" },
      { day: 5, title: "Train to Ella", description: "Take the scenic train through the hills to Ella.", overnight: "Ella" },
      { day: 6, title: "Ella to Yala", description: "Nine Arch Bridge in the morning, then travel south past Ravana Falls towards Yala.", overnight: "Yala area" },
      { day: 7, title: "Yala safari to the coast", description: "Early-morning jeep safari, then continue to the south coast.", overnight: "Mirissa" },
      { day: 8, title: "Beach day", description: "Free time on the beach, with optional whale watching in season.", overnight: "Mirissa" },
      { day: 9, title: "Galle Fort", description: "Explore Galle Fort and walk the ramparts at sunset.", overnight: "Galle area" },
      { day: 10, title: "Departure", description: "Transfer along the coastal expressway to the airport.", overnight: null },
    ],
    optional: ["Minneriya elephant safari", "Whale watching (Nov–Apr)", "Colombo city tour"],
    inclusions: [],
    exclusions: [],
    seasonNote: "Best from December to April for the south coast. Yala Block 1 usually closes for several weeks around September–October.",
    price: null,
    seo: {
      title: "10-Day Sri Lanka Round Tour Package | Classic Itinerary | DON HOLIDAYS",
      description:
        "A 10-day Sri Lanka round tour covering Sigiriya, Kandy, the Ella train, a Yala safari and Galle. A classic itinerary you can tailor with DON HOLIDAYS.",
    },
  },
  {
    id: "dh-004",
    slug: "wildlife-and-south-coast",
    status: "published",
    sample: true,
    title: "Wildlife & South Coast",
    days: 6,
    nights: 5,
    image: "yala",
    gallery: ["udawalawe", "safari-jeep", "coconut-hill"],
    summary:
      "Elephants in Udawalawe, leopards in Yala and lazy days on the southern beaches.",
    overview:
      "Built for wildlife lovers, this route pairs two very different national parks with the south coast. It works well on its own or as an extension to a hill-country trip.",
    destinations: ["udawalawe", "yala", "mirissa", "galle"],
    route: ["Udawalawe", "Yala", "Mirissa", "Galle"],
    experiences: ["wildlife-safaris", "family-holidays", "beach-holidays"],
    highlights: ["Udawalawe elephant safari", "Elephant Transit Home", "Yala jeep safari", "Mirissa beach and Galle Fort"],
    itinerary: [
      { day: 1, title: "Udawalawe", description: "Arrive in Udawalawe and enjoy an afternoon jeep safari among the elephant herds.", overnight: "Udawalawe" },
      { day: 2, title: "Elephant Transit Home to Yala", description: "Watch feeding time at the Elephant Transit Home, then travel to the Yala area.", overnight: "Yala area" },
      { day: 3, title: "Yala safari", description: "A full morning safari in Yala, with the afternoon to rest.", overnight: "Yala area" },
      { day: 4, title: "To the south coast", description: "Travel west along the coast to Mirissa.", overnight: "Mirissa" },
      { day: 5, title: "Beach and whales", description: "Optional whale-watching trip in season, or a day on the beach.", overnight: "Mirissa" },
      { day: 6, title: "Galle and departure", description: "Visit Galle Fort before continuing to Colombo or the airport.", overnight: null },
    ],
    optional: ["Second Yala safari", "Surf lesson in Weligama", "Turtle hatchery visit"],
    inclusions: [],
    exclusions: [],
    seasonNote: "South coast best from December to April. Yala Block 1 usually closes for several weeks around September–October.",
    price: null,
    seo: {
      title: "6-Day Sri Lanka Wildlife Safari & Beach Tour | DON HOLIDAYS",
      description:
        "Combine Udawalawe and Yala safaris with Mirissa and Galle on this 6-day Sri Lanka wildlife and beach itinerary from DON HOLIDAYS.",
    },
  },
  {
    id: "dh-005",
    slug: "sri-lanka-honeymoon-escape",
    status: "published",
    sample: true,
    title: "Sri Lanka Honeymoon Escape",
    days: 8,
    nights: 7,
    image: "coconut-hill",
    gallery: ["ella-bridge-aerial", "galle", "nuwara-eliya"],
    summary:
      "Misty tea hills, a scenic train for two and slow days by the Indian Ocean.",
    overview:
      "A gently paced route for couples with fewer hotel changes and plenty of free time. Start in Kandy, head into tea country and Ella, then finish with several nights on the south coast.",
    destinations: ["kandy", "nuwara-eliya", "ella", "mirissa", "galle"],
    route: ["Kandy", "Nuwara Eliya", "Ella", "Mirissa", "Galle"],
    experiences: ["honeymoon-tours", "beach-holidays"],
    highlights: ["Tea-country stay", "Train ride to Ella", "Sunset at Coconut Tree Hill", "Galle Fort at golden hour"],
    itinerary: [
      { day: 1, title: "Arrive in Kandy", description: "Travel to Kandy and settle in. Evening at leisure by the lake.", overnight: "Kandy" },
      { day: 2, title: "Into tea country", description: "Drive into the hills with a tea estate visit along the way.", overnight: "Nuwara Eliya" },
      { day: 3, title: "Train to Ella", description: "The scenic train journey to Ella, then a relaxed evening.", overnight: "Ella" },
      { day: 4, title: "Ella at your pace", description: "Little Adam's Peak, the Nine Arch Bridge or simply a slow day with a view.", overnight: "Ella" },
      { day: 5, title: "To the coast", description: "Travel south to the beach, with an optional safari stop on the way.", overnight: "Mirissa" },
      { day: 6, title: "Beach day", description: "Free day. Sunset at Coconut Tree Hill.", overnight: "Mirissa" },
      { day: 7, title: "Galle Fort", description: "Explore Galle Fort's lanes and cafés and walk the ramparts at sunset.", overnight: "Galle area" },
      { day: 8, title: "Departure", description: "Transfer to the airport.", overnight: null },
    ],
    optional: ["Private dinner by the beach", "Spa treatments", "Whale watching (Nov–Apr)"],
    inclusions: [],
    exclusions: [],
    seasonNote: "South coast best from December to April. From May to September we can switch the beach stay to the east coast.",
    price: null,
    seo: {
      title: "Sri Lanka Honeymoon Package | 8-Day Hills & Beach Itinerary | DON HOLIDAYS",
      description:
        "An 8-day Sri Lanka honeymoon itinerary through Kandy, the tea hills and Ella to Mirissa and Galle. Plan your honeymoon tour with DON HOLIDAYS.",
    },
  },
  {
    id: "dh-006",
    slug: "east-coast-and-cultural-triangle",
    status: "published",
    sample: true,
    title: "East Coast & Cultural Triangle",
    days: 7,
    nights: 6,
    image: "trincomalee",
    gallery: ["beach-boats", "sigiriya-aerial"],
    summary:
      "Sigiriya and ancient cities followed by calm east-coast beaches — perfect for travel between May and September.",
    overview:
      "When the south-west coast has its monsoon, the east coast is usually at its best. This route combines heritage sites in the Cultural Triangle with beach time and snorkelling around Trincomalee.",
    destinations: ["sigiriya", "trincomalee"],
    route: ["Airport", "Sigiriya", "Polonnaruwa", "Trincomalee"],
    experiences: ["beach-holidays", "cultural-tours"],
    highlights: ["Sigiriya Rock Fortress", "Polonnaruwa ancient city", "Pigeon Island snorkelling", "Nilaveli and Uppuveli beaches"],
    itinerary: [
      { day: 1, title: "Arrive to Sigiriya", description: "Travel north from the airport to the Cultural Triangle.", overnight: "Sigiriya area" },
      { day: 2, title: "Sigiriya and Dambulla", description: "Climb Sigiriya and visit the Dambulla Cave Temple.", overnight: "Sigiriya area" },
      { day: 3, title: "Polonnaruwa", description: "Cycle or drive through the ruins of the medieval capital. Optional evening elephant safari.", overnight: "Sigiriya area" },
      { day: 4, title: "To Trincomalee", description: "Travel to the east coast and visit Koneswaram Temple.", overnight: "Trincomalee" },
      { day: 5, title: "Pigeon Island", description: "Boat trip and snorkelling at Pigeon Island National Park.", overnight: "Trincomalee" },
      { day: 6, title: "Beach day", description: "Free day on Nilaveli or Uppuveli beach.", overnight: "Trincomalee" },
      { day: 7, title: "Departure", description: "Travel back to Colombo or the airport.", overnight: null },
    ],
    optional: ["Whale watching (seasonal)", "Anuradhapura sacred city", "Minneriya elephant safari"],
    inclusions: [],
    exclusions: [],
    seasonNote: "Designed for roughly May to September, when the east coast is usually calm and sunny.",
    price: null,
    seo: {
      title: "7-Day Sri Lanka East Coast & Cultural Tour | Trincomalee | DON HOLIDAYS",
      description:
        "Combine Sigiriya and Polonnaruwa with Trincomalee's beaches and Pigeon Island on a 7-day summer itinerary. Tailor it with DON HOLIDAYS.",
    },
  },
];

export const publishedPackages = packages.filter((p) => p.status === "published");
export const getPackage = (slug) => publishedPackages.find((p) => p.slug === slug);
export default publishedPackages;
