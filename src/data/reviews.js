/**
 * Guest reviews shown on /reviews (and on the homepage once added).
 *
 * Only add GENUINE reviews from real DON HOLIDAYS guests, ideally copied from a
 * public source (Google, TripAdvisor) with the guest's permission. While this
 * list is empty, the Reviews page shows an invitation to leave a review and is
 * kept out of search results.
 *
 * Example entry:
 * {
 *   name: "Anna K.",            // as shown publicly
 *   country: "Germany",          // optional
 *   date: "2026-10",             // year-month of the trip or review
 *   rating: 5,                   // 1–5
 *   title: "Wonderful family trip",
 *   text: "Full review text…",
 *   source: "Google",            // Google / TripAdvisor / WhatsApp / Email
 *   sourceUrl: "https://…",      // optional link to the original review
 * }
 */
export const reviews = [];

/** Public review profiles — links render only when set. */
export const reviewProfiles = {
  google: "", // e.g. Google Business "write a review" link
  tripadvisor: "",
};

export default reviews;
