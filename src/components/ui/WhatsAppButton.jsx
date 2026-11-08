import { createWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";
import { WhatsAppGlyph } from "./Icon";

/** Floating WhatsApp button — renders only when a verified number is configured. */
export default function WhatsAppButton() {
  const href = createWhatsAppLink(whatsappMessages.general);
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DON HOLIDAYS on WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}
