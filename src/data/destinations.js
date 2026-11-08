/**
 * Destinations. Each entry powers a card, a /destinations/<slug> page,
 * the sitemap and the page's SEO tags.
 * `image` and `gallery` use keys from src/lib/images.js.
 */
export const destinations = [
  {
    slug: "sigiriya",
    name: "Sigiriya",
    region: "Cultural Triangle",
    category: "Heritage",
    image: "sigiriya-aerial",
    gallery: ["hero-sigiriya", "elephants-river"],
    tagline: "The Lion Rock and the heart of the Cultural Triangle",
    summary:
      "A 5th-century rock fortress rising sharply from the plains, with frescoes, royal water gardens and sweeping views from the summit.",
    intro: [
      "Sigiriya is the image many travellers carry of Sri Lanka before they arrive: a sheer granite column rising roughly 180 metres above flat forest, crowned by the foundations of a royal palace. King Kashyapa built his capital here in the late 5th century, and the site was inscribed as a UNESCO World Heritage Site in 1982.",
      "The climb passes symmetrical water gardens, the famous painted maidens in a sheltered gallery, the polished Mirror Wall and the giant stone paws of the Lion Gate before reaching the summit. Sigiriya also makes an easy base for the Dambulla cave temples, Polonnaruwa's ruins and elephant safaris in Minneriya or Kaudulla.",
    ],
    highlights: [
      "Climb Sigiriya Rock Fortress early, before the midday heat",
      "See the 5th-century frescoes and the Lion's Paw terrace",
      "Watch sunrise or sunset over Sigiriya from Pidurangala Rock",
      "Visit the Dambulla Cave Temple, a short drive away",
      "Add a jeep safari in Minneriya or Kaudulla National Park",
    ],
    bestTime:
      "Visitable year-round. The climb is most comfortable early in the morning; the drier months are usually from around February to September.",
    idealFor: ["First-time visitors", "History lovers", "Families with older children"],
    experiences: ["cultural-tours", "wildlife-safaris", "family-holidays"],
    seo: {
      title: "Sigiriya Tours | Visit Lion Rock & the Cultural Triangle | DON HOLIDAYS",
      description:
        "Plan a Sigiriya tour with DON HOLIDAYS: climb Lion Rock, see the ancient frescoes, and combine Dambulla, Polonnaruwa and elephant safaris in one itinerary.",
    },
  },
  {
    slug: "kandy",
    name: "Kandy",
    region: "Central Province",
    category: "Heritage",
    image: "kandy",
    gallery: ["kandy-temple"],
    tagline: "Sri Lanka's last royal capital, set around a tranquil lake",
    summary:
      "Home of the Temple of the Sacred Tooth Relic, Kandy Lake and the Royal Botanical Gardens at Peradeniya.",
    intro: [
      "Kandy was the seat of the island's last independent kingdom until 1815, and it remains Sri Lanka's cultural and spiritual heart. The Temple of the Sacred Tooth Relic — Sri Dalada Maligawa — sits beside Kandy Lake and draws pilgrims every day; the whole Sacred City is a UNESCO World Heritage Site.",
      "Beyond the temple, travellers enjoy the Royal Botanical Gardens at Peradeniya, viewpoints over the city, Kandyan dance performances and nearby spice gardens. Kandy is also where many visitors board the scenic train into the tea country towards Nuwara Eliya and Ella.",
    ],
    highlights: [
      "Visit the Temple of the Sacred Tooth Relic",
      "Walk around Kandy Lake in the late afternoon",
      "Explore the Royal Botanical Gardens, Peradeniya",
      "Watch a traditional Kandyan dance performance",
      "Start the hill-country train journey from Kandy or nearby Peradeniya",
    ],
    bestTime:
      "Good year-round. The Esala Perahera festival usually takes place in July or August — book well ahead if you want to see it.",
    idealFor: ["Culture and history", "Couples", "Families"],
    experiences: ["cultural-tours", "honeymoon-tours", "family-holidays"],
    seo: {
      title: "Kandy Tours | Temple of the Tooth & Hill Capital | DON HOLIDAYS",
      description:
        "Discover Kandy with DON HOLIDAYS: the Temple of the Sacred Tooth Relic, Kandy Lake, Peradeniya Gardens and the start of Sri Lanka's scenic hill-country train.",
    },
  },
  {
    slug: "ella",
    name: "Ella",
    region: "Uva Province",
    category: "Hill Country",
    image: "ella-bridge",
    gallery: ["ella-bridge-aerial", "ella-train"],
    tagline: "Mountain views, easy hikes and the Nine Arch Bridge",
    summary:
      "A relaxed hill-country village known for the Nine Arch Bridge, Little Adam's Peak and one of the world's most scenic train rides.",
    intro: [
      "Ella sits around 1,000 metres above sea level on the eastern edge of the hill country, surrounded by tea estates and forested ridges. It is the end point of the famous train journey from Kandy and Nuwara Eliya, where the line threads through tunnels and over bridges with views down the Ella Gap.",
      "Days here are slow and scenic: an early walk to the Nine Arch Bridge to watch a train cross, a short hike up Little Adam's Peak, the longer climb to Ella Rock, or a visit to Ravana Falls. In the evening the village's cafés make it easy to stay an extra night.",
    ],
    highlights: [
      "Photograph a train crossing the Nine Arch Bridge",
      "Hike Little Adam's Peak for sunrise views",
      "Ride the hill-country train from Kandy or Nuwara Eliya",
      "Tour a working tea estate and factory",
      "Visit Ravana Falls on the road south",
    ],
    bestTime:
      "Enjoyable year-round; mornings are usually the clearest. Hill-country weather changes quickly, so pack a light rain layer.",
    idealFor: ["Walkers", "Couples", "Photographers"],
    experiences: ["adventure-tours", "honeymoon-tours"],
    seo: {
      title: "Ella Tours | Nine Arch Bridge & Hill Country Train | DON HOLIDAYS",
      description:
        "Plan your Ella visit with DON HOLIDAYS: the Nine Arch Bridge, Little Adam's Peak, Ella Rock and the scenic Kandy to Ella train through Sri Lanka's tea country.",
    },
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    region: "Central Province",
    category: "Hill Country",
    image: "nuwara-eliya",
    gallery: ["tea-hills", "highlands"],
    tagline: "Cool air, tea estates and colonial-era charm",
    summary:
      "Sri Lanka's highest town, surrounded by tea plantations, waterfalls and the cloud forest of Horton Plains.",
    intro: [
      "At close to 1,900 metres, Nuwara Eliya is noticeably cooler than the rest of the island. Its colonial bungalows, rose gardens and racecourse earned it the nickname \"Little England\", while the slopes around it are covered with some of Sri Lanka's most celebrated tea estates.",
      "Visitors come to tour tea factories and taste fresh Ceylon tea, stroll around Gregory Lake, and set out at dawn for Horton Plains National Park, where a walking trail leads to the World's End escarpment and Baker's Falls.",
    ],
    highlights: [
      "Tour a tea factory and taste fresh Ceylon tea",
      "Walk to World's End in Horton Plains National Park",
      "Relax by Gregory Lake",
      "See waterfalls on the drive up from Kandy",
      "Board the hill-country train towards Ella",
    ],
    bestTime:
      "Visitable year-round. Evenings can be chilly, and Horton Plains is best visited early in the morning before mist rolls in.",
    idealFor: ["Tea lovers", "Couples", "Nature walkers"],
    experiences: ["honeymoon-tours", "adventure-tours", "family-holidays"],
    seo: {
      title: "Nuwara Eliya Tours | Tea Country & Horton Plains | DON HOLIDAYS",
      description:
        "Explore Nuwara Eliya with DON HOLIDAYS: tea estates and factories, Gregory Lake and the World's End trail at Horton Plains in Sri Lanka's cool hill country.",
    },
  },
  {
    slug: "galle",
    name: "Galle",
    region: "Southern Province",
    category: "Coast & Heritage",
    image: "galle",
    gallery: ["unawatuna", "coast-cliffs"],
    tagline: "A living colonial fort on the edge of the Indian Ocean",
    summary:
      "Walk the ramparts of Galle Fort, a UNESCO-listed old town of churches, boutiques and cafés, close to Unawatuna's beaches.",
    intro: [
      "Galle Fort was first fortified by the Portuguese in the late 16th century and rebuilt by the Dutch from the 17th century onwards. Today it is a lived-in old town of narrow streets, churches, galleries, cafés and small hotels, inscribed as a UNESCO World Heritage Site.",
      "A walk around the ramparts at sunset, past the lighthouse and Flag Rock, is a highlight of any south-coast trip. Galle combines naturally with the beaches of Unawatuna and Jungle Beach and with whale watching further along the coast at Mirissa.",
    ],
    highlights: [
      "Walk the Galle Fort ramparts at sunset",
      "Explore the lighthouse, churches and old Dutch streets",
      "Swim and snorkel around Unawatuna and Jungle Beach",
      "Browse local boutiques, galleries and cafés",
      "Combine with Mirissa and the south-coast beaches",
    ],
    bestTime:
      "The south-west coast is usually at its best from around December to April, when the sea is calmer.",
    idealFor: ["Couples", "Culture lovers", "Beach holidays"],
    experiences: ["beach-holidays", "cultural-tours", "honeymoon-tours"],
    seo: {
      title: "Galle Fort Tours | Sri Lanka's South Coast | DON HOLIDAYS",
      description:
        "Visit Galle with DON HOLIDAYS: walk the UNESCO-listed Galle Fort, enjoy Unawatuna's beaches and plan an easy south-coast holiday in Sri Lanka.",
    },
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    region: "Southern Province",
    category: "Beach",
    image: "coconut-hill",
    gallery: ["mirissa", "surf", "south-coast-aerial"],
    tagline: "Palm-fringed bays, whale watching and surf",
    summary:
      "A laid-back beach town with whale-watching trips, Coconut Tree Hill and gentle surf breaks nearby at Weligama.",
    intro: [
      "Mirissa's crescent beach is lined with palms and small restaurants, and it has become one of the south coast's most popular places to unwind. A short walk leads to Coconut Tree Hill and Parrot Rock, both lovely at sunset.",
      "Between roughly November and April, boats leave Mirissa harbour on whale-watching trips, with blue whales among the species often seen offshore. Nearby Weligama's sandy bay is a friendly place to take a first surf lesson.",
    ],
    highlights: [
      "Join a seasonal whale-watching trip from Mirissa harbour",
      "Watch the sunset from Coconut Tree Hill",
      "Take a beginner surf lesson in Weligama Bay",
      "Enjoy fresh seafood on the beach",
      "Visit Galle Fort, around an hour away",
    ],
    bestTime:
      "Beach and whale-watching season is roughly November to April. From May to October the south-west monsoon brings rougher seas.",
    idealFor: ["Beach lovers", "Couples", "Surfers"],
    experiences: ["beach-holidays", "honeymoon-tours", "adventure-tours"],
    seo: {
      title: "Mirissa Beach Holidays & Whale Watching | DON HOLIDAYS",
      description:
        "Plan a Mirissa beach holiday with DON HOLIDAYS: seasonal whale watching, Coconut Tree Hill, Weligama surf lessons and easy trips to Galle Fort.",
    },
  },
  {
    slug: "yala",
    name: "Yala",
    region: "Southern & Uva Provinces",
    category: "Wildlife",
    image: "yala",
    gallery: ["safari-jeep", "elephant-herd"],
    tagline: "Leopards, elephants and wild coastal scrubland",
    summary:
      "Sri Lanka's best-known national park, famous for leopard sightings, elephants, sloth bears and rich birdlife.",
    intro: [
      "Yala National Park stretches across dry scrub, lagoons and rocky outcrops in the island's south-east. Its Block 1 area is known for a high density of leopards, and jeep safaris here also regularly encounter elephants, crocodiles, water buffalo, deer and a remarkable variety of birds.",
      "Safaris usually run in the early morning or late afternoon, when animals are most active. Many travellers stay near Tissamaharama or Kirinda and combine Yala with Udawalawe's elephants and the beaches of the south coast.",
    ],
    highlights: [
      "Morning or afternoon jeep safari in Yala National Park",
      "Look for leopards, elephants and sloth bears",
      "Spot peacocks, painted storks and migratory birds",
      "Visit the ancient Sithulpawwa rock temple nearby",
      "Combine with Udawalawe and the south coast",
    ],
    bestTime:
      "Yala is visited year-round, but Block 1 usually closes for several weeks around September–October. We confirm park dates when planning your trip.",
    idealFor: ["Wildlife lovers", "Families", "Photographers"],
    experiences: ["wildlife-safaris", "family-holidays"],
    seo: {
      title: "Yala Safari Tours | Leopards & Wildlife in Sri Lanka | DON HOLIDAYS",
      description:
        "Book a Yala safari tour with DON HOLIDAYS: jeep safaris to look for leopards, elephants and sloth bears, combined with Udawalawe and Sri Lanka's south coast.",
    },
  },
  {
    slug: "udawalawe",
    name: "Udawalawe",
    region: "Sabaragamuwa & Uva Provinces",
    category: "Wildlife",
    image: "udawalawe",
    gallery: ["elephants-river", "elephant-herd"],
    tagline: "Open grasslands and reliable elephant sightings",
    summary:
      "A national park built around a large reservoir, known for herds of wild elephants and the nearby Elephant Transit Home.",
    intro: [
      "Udawalawe National Park surrounds a large reservoir on the southern edge of the hill country. Its open grassland makes wild elephants easy to see, and herds of all sizes are a regular sight on jeep safaris.",
      "Close to the park, the Elephant Transit Home cares for orphaned calves before releasing them into the wild, and visitors can watch the scheduled feeding times from a viewing area. Udawalawe sits conveniently between Ella and the south coast.",
    ],
    highlights: [
      "Jeep safari among herds of wild elephants",
      "Visit the Elephant Transit Home at feeding time",
      "Spot water buffalo, crocodiles and eagles",
      "Break the journey between Ella and the south coast",
    ],
    bestTime:
      "Good for safaris throughout the year. Early-morning and late-afternoon safaris are cooler and often better for sightings.",
    idealFor: ["Families", "Wildlife lovers", "First-time safari goers"],
    experiences: ["wildlife-safaris", "family-holidays"],
    seo: {
      title: "Udawalawe Elephant Safari | Sri Lanka Wildlife | DON HOLIDAYS",
      description:
        "See wild elephants on an Udawalawe safari with DON HOLIDAYS, visit the Elephant Transit Home and plan an easy route between Ella and the south coast.",
    },
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    region: "Eastern Province",
    category: "Beach",
    image: "trincomalee",
    gallery: ["beach-boats", "coast-cliffs"],
    tagline: "East-coast beaches, coral and a clifftop temple",
    summary:
      "Quiet beaches at Nilaveli and Uppuveli, snorkelling at Pigeon Island and the clifftop Koneswaram Temple.",
    intro: [
      "Trincomalee sits on one of the world's great natural harbours on Sri Lanka's east coast. The Koneswaram Temple, perched on Swami Rock above the sea, is one of the island's most important Hindu shrines and has spectacular ocean views.",
      "North of town, the long beaches of Uppuveli and Nilaveli are calm and uncrowded in season, and boats run out to Pigeon Island National Park for snorkelling among reef fish and corals. Trincomalee pairs well with the Cultural Triangle, around three hours away by road.",
    ],
    highlights: [
      "Visit Koneswaram Temple on Swami Rock",
      "Snorkel at Pigeon Island National Park",
      "Relax on Nilaveli and Uppuveli beaches",
      "Seasonal whale and dolphin watching",
      "Combine with Sigiriya and the Cultural Triangle",
    ],
    bestTime:
      "The east coast is usually at its best from around May to September, when the south-west coast has its rainy season.",
    idealFor: ["Beach lovers", "Snorkellers", "Summer travellers"],
    experiences: ["beach-holidays", "cultural-tours"],
    seo: {
      title: "Trincomalee Beach Holidays | Sri Lanka East Coast | DON HOLIDAYS",
      description:
        "Plan a Trincomalee holiday with DON HOLIDAYS: Nilaveli and Uppuveli beaches, snorkelling at Pigeon Island and the clifftop Koneswaram Temple.",
    },
  },
];

export const getDestination = (slug) => destinations.find((d) => d.slug === slug);

export default destinations;
