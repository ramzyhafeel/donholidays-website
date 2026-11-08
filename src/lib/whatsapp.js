import { site } from "../data/site";

/** True once a verified WhatsApp number is set in src/data/site.js */
export const whatsappEnabled = () => /^\d{8,15}$/.test(site.contact.whatsapp || "");

/**
 * Builds a WhatsApp click-to-chat link. Returns null when no verified number
 * is configured, so callers can hide or replace the button.
 */
export function createWhatsAppLink(message = "") {
  if (!whatsappEnabled()) return null;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsapp}${encoded ? `?text=${encoded}` : ""}`;
}

export const whatsappMessages = {
  general: `Hello ${site.name}, I'm planning a holiday in Sri Lanka and would like some help with ideas and a quote.`,
  tour: (tourName) =>
    `Hello ${site.name}, I would like to enquire about the "${tourName}" itinerary. Could you please share more details?`,
  destination: (name) =>
    `Hello ${site.name}, I'd like to include ${name} in my Sri Lanka trip. Could you suggest an itinerary?`,
  experience: (name) =>
    `Hello ${site.name}, I'm interested in ${name.toLowerCase()} in Sri Lanka. Could you help me plan this?`,
};

/** Formats a plan-your-trip form submission as a readable message. */
export function enquiryToMessage(data) {
  const row = (label, value) => (value ? `${label}: ${value}` : null);
  const lines = [
    `Hello ${site.name}, I'd like to plan a trip to Sri Lanka.`,
    "",
    row("Name", data.name),
    row("Email", data.email),
    row("Phone/WhatsApp", data.phone),
    row("Service", data.service),
    row("Interested in", data.tour),
    row("Arrival date", data.arrival),
    row("Trip length", data.duration),
    row("Travellers", data.travellers),
    row("Interests", data.interests?.length ? data.interests.join(", ") : ""),
    data.message ? "" : null,
    row("Message", data.message),
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export default createWhatsAppLink;
