/**
 * Travel styles shown on /experiences and across the site.
 * `destinations` are slugs from destinations.js.
 */
export const experiences = [
  {
    slug: "cultural-tours",
    name: "Cultural Tours",
    icon: "Landmark",
    image: "kandy-temple",
    short: "Ancient cities, cave temples and living traditions.",
    description:
      "Sri Lanka's Cultural Triangle holds royal capitals, rock temples and sacred cities spanning more than two thousand years. A cultural tour links Sigiriya, Dambulla, Polonnaruwa, Anuradhapura and Kandy at a comfortable pace, with time for village life, local food and festivals.",
    highlights: ["Sigiriya Rock Fortress", "Dambulla Cave Temple", "Temple of the Tooth, Kandy", "Galle Fort"],
    destinations: ["sigiriya", "kandy", "galle", "trincomalee"],
  },
  {
    slug: "wildlife-safaris",
    name: "Wildlife Safaris",
    icon: "PawPrint",
    image: "safari-jeep",
    short: "Leopards, elephants and birdlife in national parks.",
    description:
      "Few islands pack in as much wildlife as Sri Lanka. Jeep safaris in Yala, Udawalawe, Minneriya and Wilpattu offer chances to see leopards, wild elephants, sloth bears and hundreds of bird species, while the south coast adds seasonal whale watching.",
    highlights: ["Yala leopard safaris", "Udawalawe elephant herds", "Minneriya elephant gathering (seasonal)", "Whale watching off Mirissa (seasonal)"],
    destinations: ["yala", "udawalawe", "sigiriya", "mirissa"],
  },
  {
    slug: "beach-holidays",
    name: "Beach Holidays",
    icon: "Waves",
    image: "unawatuna",
    short: "Golden bays on two coasts with opposite seasons.",
    description:
      "Thanks to two monsoons, there is almost always a coast in season. The south and west coasts are generally best from December to April, and the east coast from around May to September — so we match your beach stay to your travel dates.",
    highlights: ["Mirissa and Unawatuna", "Galle Fort", "Trincomalee, Nilaveli and Uppuveli", "Snorkelling and surf lessons"],
    destinations: ["mirissa", "galle", "trincomalee"],
  },
  {
    slug: "honeymoon-tours",
    name: "Honeymoon Tours",
    icon: "Heart",
    image: "coconut-hill",
    short: "Hill-country views and quiet beaches for two.",
    description:
      "A Sri Lanka honeymoon often combines cool tea-country escapes with a slower finish on the coast. We plan routes with fewer long drives, scenic train journeys and beach time timed to the right season.",
    highlights: ["Scenic train to Ella", "Tea-country stays", "Sunsets at Galle Fort", "Beach days on the south or east coast"],
    destinations: ["ella", "nuwara-eliya", "galle", "mirissa"],
  },
  {
    slug: "family-holidays",
    name: "Family Holidays",
    icon: "Users",
    image: "elephants-river",
    short: "Elephants, easy adventures and shorter drives.",
    description:
      "Family trips work best with realistic driving times, a mix of activity and downtime, and experiences that children remember — elephant safaris, train rides, spice gardens and beaches. We shape the route around your family's ages and pace.",
    highlights: ["Elephant safaris", "Train rides in the hill country", "Spice and tea gardens", "Beach time with calm seas in season"],
    destinations: ["udawalawe", "kandy", "sigiriya", "yala"],
  },
  {
    slug: "adventure-tours",
    name: "Adventure Tours",
    icon: "Mountain",
    image: "surf",
    short: "Hikes, surf, rafting and sunrise climbs.",
    description:
      "For active travellers, Sri Lanka offers sunrise hikes, waterfall walks, surf breaks and white-water rafting. Ella, Horton Plains, Kitulgala and the south coast give plenty of options at every fitness level.",
    highlights: ["Little Adam's Peak and Ella Rock", "Horton Plains and World's End", "Surf lessons in Weligama", "White-water rafting in Kitulgala"],
    destinations: ["ella", "nuwara-eliya", "mirissa"],
  },
  {
    slug: "tailor-made-holidays",
    name: "Tailor-Made Holidays",
    icon: "Route",
    image: "tea-hills",
    short: "Your dates, your interests, your pace.",
    description:
      "Every DON HOLIDAYS trip can be tailored. Tell us when you are travelling, who is coming and what you enjoy, and we will suggest a route, the right number of nights in each place and the experiences worth adding.",
    highlights: ["Route planned around your dates", "Accommodation style of your choice", "Flexible day-by-day plan", "One point of contact while you plan"],
    destinations: ["sigiriya", "kandy", "ella", "galle"],
  },
];

export const getExperience = (slug) => experiences.find((e) => e.slug === slug);
export default experiences;
