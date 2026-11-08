/**
 * Services shown on /services, the homepage and the footer.
 * `image` = key from src/lib/images.js. Icons are lucide-react names (see Icon.jsx).
 * Keep descriptions factual — confirm anything specific (vehicle types, hours,
 * inclusions) before adding it here.
 */
export const services = [
  {
    slug: "airport-transfers",
    name: "Airport Transfers",
    icon: "PlaneLanding",
    image: "van-high-roof",
    short: "Private pickups and drop-offs at Bandaranaike International Airport (CMB).",
    description:
      "Start and end your holiday without the stress of finding a taxi. We arrange private transfers between Bandaranaike International Airport and your hotel anywhere on the island, timed to your flight.",
    points: [
      "Arrival and departure transfers to or from any part of Sri Lanka",
      "Vehicle chosen to fit your group and luggage",
      "Timed around your flight details",
      "Can be combined with a tour or hotel-to-hotel transfers",
    ],
    idealFor: "Arrivals, departures and late-night flights",
    message: "Hello DON HOLIDAYS, I would like to book a private airport transfer.",
  },
  {
    slug: "customized-tour-planning",
    name: "Customized Tour Planning",
    icon: "Route",
    image: "tea-hills",
    short: "A private itinerary built around your dates, interests and pace.",
    description:
      "Tell us how many days you have and what you enjoy — culture, wildlife, tea country, beaches — and we will plan a realistic route with the right number of nights in each place, then refine it with you until it is right.",
    points: [
      "Route planned around your travel dates and the season",
      "Choose your hotel style and pace",
      "Add safaris, train journeys and experiences",
      "Start from a sample itinerary or from scratch",
    ],
    idealFor: "First-time visitors and anyone who wants a tailor-made trip",
    message: "Hello DON HOLIDAYS, I would like help planning a customized Sri Lanka tour.",
  },
  {
    slug: "hotel-to-hotel-transfers",
    name: "Hotel-to-Hotel Point Transfers",
    icon: "ArrowLeftRight",
    image: "van-flat-roof",
    short: "Comfortable private transfers between hotels and destinations.",
    description:
      "Already booked your hotels? We can simply take care of the driving. Book a private transfer between any two points — hotel to hotel, city to beach, or station to hotel — with stops along the way if you like.",
    points: [
      "Point-to-point transfers anywhere on the island",
      "Optional sightseeing stops along the route",
      "Vehicle sized for your group and luggage",
      "Book a single transfer or several for your trip",
    ],
    idealFor: "Independent travellers who have their own hotels",
    message: "Hello DON HOLIDAYS, I would like to book a hotel-to-hotel transfer.",
  },
  {
    slug: "private-family-group-holidays",
    name: "Private Family & Group Holidays",
    icon: "Users",
    image: "elephants-river",
    short: "Private holidays for families, friends and groups of every size.",
    description:
      "Travelling with children, parents or a group of friends? We plan private holidays with realistic driving times, the right vehicle for your group and a mix of experiences that work for everyone.",
    points: [
      "Private vehicle just for your family or group",
      "Pace and activities suited to all ages",
      "Larger vans for bigger groups",
      "Elephant safaris, train rides, beaches and more",
    ],
    idealFor: "Families, friends and multi-generation groups",
    message: "Hello DON HOLIDAYS, I would like to plan a private family / group holiday in Sri Lanka.",
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
export default services;
