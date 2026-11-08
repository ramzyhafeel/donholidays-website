/**
 * DON HOLIDAYS vehicles shown on /transportation.
 * Photos: public/images/optimized/vehicles/<image>-640.webp and -1280.webp.
 *
 * PLEASE CONFIRM the passenger numbers and features below — they are typical
 * for these models, not checked against your actual vehicles.
 */
export const vehicles = [
  {
    slug: "toyota-rush",
    name: "Toyota Rush SUV",
    type: "SUV",
    image: "suv-rush",
    alt: "White Toyota Rush SUV parked on a stone driveway",
    passengers: "1–3 travellers",
    luggage: "Medium luggage capacity",
    idealFor: "Couples, solo travellers and small families",
    features: ["Comfortable SUV ride", "Good ground clearance for rural roads", "Ideal for airport and hotel transfers"],
  },
  {
    slug: "toyota-hiace-flat-roof",
    name: "Toyota HiAce Van",
    type: "Van",
    image: "van-flat-roof",
    alt: "White Toyota HiAce van parked outside a garden gate",
    passengers: "Up to 6 travellers",
    luggage: "Large luggage capacity",
    idealFor: "Families and small groups",
    features: ["Spacious seating", "Sliding side door for easy access", "Room for suitcases and bags"],
  },
  {
    slug: "toyota-hiace-high-roof",
    name: "Toyota HiAce High-Roof Van",
    type: "Van",
    image: "van-high-roof",
    alt: "White high-roof Toyota HiAce van parked in a tropical garden",
    passengers: "Up to 10 travellers",
    luggage: "Extra-large luggage capacity",
    idealFor: "Larger families and groups",
    features: ["High roof with extra headroom", "Comfortable for long journeys", "Plenty of space for group luggage"],
  },
];

export const vehiclePhoto = (v, w = 1280) => `/images/optimized/vehicles/${v.image}-${w}.webp`;
export default vehicles;
