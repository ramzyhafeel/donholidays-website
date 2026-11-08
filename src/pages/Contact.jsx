import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "../components/ui/Sections";
import EnquiryForm from "../components/contact/EnquiryForm";
import { WhatsAppGlyph } from "../components/ui/Icon";
import { site, formatAddress } from "../data/site";
import { createWhatsAppLink, whatsappMessages } from "../lib/whatsapp";

export default function Contact() {
  const { phone, email, hours } = site.contact;
  const wa = createWhatsAppLink(whatsappMessages.general);
  const address = formatAddress();
  const rows = [
    wa && { icon: WhatsAppGlyph, label: "WhatsApp", value: "Chat with us", href: wa, external: true },
    phone && { icon: Phone, label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    email && { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    address && { icon: MapPin, label: "Address", value: address },
    hours && { icon: Clock, label: "Hours", value: hours },
  ].filter(Boolean);

  return (
    <>
      <PageHero
        image="galle"
        eyebrow="Contact"
        title="Contact DON HOLIDAYS"
        text="Questions about a route, the best time to travel or a tour you've seen on this site? Send us a message and we'll help you plan."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <div className="container-narrow mt-14 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <aside>
          <h2 className="section-title">Get in touch</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            The more you tell us — dates, number of travellers, places you'd love to see — the more useful our first reply will be.
          </p>
          {rows.length > 0 ? (
            <ul className="mt-8 space-y-3">
              {rows.map((r) => {
                const I = r.icon;
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-navy-950"><I className="h-5 w-5" aria-hidden="true" /></span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">{r.label}</span>
                      <span className="block break-words font-medium text-ink">{r.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={r.label}>
                    {r.href ? (
                      <a href={r.href} {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex items-center gap-4 rounded-card bg-panel p-4 hover:bg-panel-strong">{inner}</a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-card bg-panel p-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-8 flex items-start gap-3 rounded-card bg-panel p-5 text-sm text-ink-soft">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              Our direct phone, WhatsApp and email details will be listed here shortly.
            </p>
          )}
        </aside>

        <section className="rounded-panel border border-line bg-white p-5 sm:p-8 shadow-sm" aria-labelledby="form-h">
          <h2 id="form-h" className="text-2xl font-semibold text-ink">Send an enquiry</h2>
          <p className="mt-2 text-sm text-ink-soft">Fields marked * are required.</p>
          <div className="mt-6">
            <EnquiryForm compact />
          </div>
        </section>
      </div>
    </>
  );
}
