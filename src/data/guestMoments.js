/**
 * Guest photos supplied by DON HOLIDAYS (public/images/guest, optimised copies
 * in public/images/optimized/guest). Only publish photos the guests have
 * agreed to share. Remove an entry to hide a photo.
 */
const dir = "/images/optimized/guest";

export const guestMoments = [
  { file: "02_waterfall_viewing_group.webp", alt: "Travellers admiring a waterfall in the hill country" },
  { file: "04_beach_selfie_group.webp", alt: "A family group taking a selfie on a Sri Lankan beach" },
  { file: "08_zipline_adventure_group.webp", alt: "Guests ready for a zipline adventure" },
  { file: "16_airport_arrival_greeting.webp", alt: "Guests welcomed at the airport on arrival in Sri Lanka" },
  { file: "07_mountain_viewpoint.webp", alt: "Guest enjoying a mountain viewpoint" },
  { file: "06_beach_family_group.webp", alt: "Family group on the beach" },
  { file: "03_mountain_road_group.webp", alt: "Travellers on a hill-country road" },
  { file: "15_sri_lanka_arrival_guests.webp", alt: "Guests under the Welcome to Sri Lanka sign at the airport" },
  { file: "10_guesthouse_friends.webp", alt: "Friends at a guesthouse during their tour" },
  { file: "09_city_cafe_group.webp", alt: "Guests together outside a café" },
  { file: "11_waterfall_ladies_group.webp", alt: "Group of travellers at a waterfall viewpoint" },
  { file: "18_family_with_tour_van.webp", alt: "A family beside their tour van" },
  { file: "01_airport_pickup_group.webp", alt: "Group of friends at their airport pickup" },
  { file: "05_airport_ticket_office_selfie.webp", alt: "Guests taking a selfie at the airport" },
  { file: "12_airport_friends_group.webp", alt: "Friends together at the airport" },
  { file: "13_waterfall_gentlemen_group.webp", alt: "Group of travellers at a waterfall" },
  { file: "14_mountain_hike_group.webp", alt: "Hikers on a rocky mountain summit" },
  { file: "17_large_waterfall_group.webp", alt: "Large group posing in front of a waterfall" },
].map((m) => ({ ...m, src: `${dir}/${m.file}` }));

export default guestMoments;
