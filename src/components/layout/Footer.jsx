import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Globe, Mail, Phone, MapPin, Clock } from "lucide-react";
import { site, socialLinks, formatAddress } from "../../data/site";
import { destinations } from "../../data/destinations";
import { services } from "../../data/services";
import { createWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";
import { WhatsAppGlyph } from "../ui/Icon";

const socialIcon = { facebook: Facebook, instagram: Instagram, youtube: Youtube };

function Col({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-white/80">{children}</ul>
    </div>
  );
}

const FLink = ({ to, children }) => (
  <li>
    <Link to={to} className="transition-colors hover:text-brand hover:underline">{children}</Link>
  </li>
);

export default function Footer() {
  const socials = socialLinks();
  const wa = createWhatsAppLink(whatsappMessages.general);
  const address = formatAddress();
  const { phone, email, hours } = site.contact;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-navy-900 text-white border-t border-brand/20">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
        <div>
          <Link to="/" className="inline-block rounded-2xl bg-white px-4 py-3 shadow-md" aria-label={`${site.name} — home`}>
            <img src={site.logoTrimmed} alt={`${site.name} logo`} width="901" height="439" loading="lazy" className="h-10 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">{site.description}</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-2">
              {socials.map(({ network, url }) => {
                const I = socialIcon[network] || Globe;
                return (
                  <li key={network}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${site.name} on ${network}`} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-brand hover:text-navy-950 transition-colors">
                      <I className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <Col title="Services">
          {services.map((sv) => (
            <FLink key={sv.slug} to={`/services#${sv.slug}`}>{sv.name}</FLink>
          ))}
          <FLink to="/transportation">Transportation</FLink>
        </Col>

        <Col title="Explore">
          <FLink to="/tour-packages">Tour packages</FLink>
          <FLink to="/destinations">Destinations</FLink>
          <FLink to="/experiences">Travel experiences</FLink>
          <FLink to="/gallery">Gallery</FLink>
          {destinations.slice(0, 3).map((d) => (
            <FLink key={d.slug} to={`/destinations/${d.slug}`}>{d.name}</FLink>
          ))}
        </Col>

        <Col title="Company">
          <FLink to="/about">About us</FLink>
          <FLink to="/reviews">Reviews</FLink>
          <FLink to="/plan-your-trip">Plan your trip</FLink>
          <FLink to="/contact">Contact</FLink>
          {phone && (
            <li className="flex items-start gap-2 pt-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-brand hover:underline">{phone}</a></li>
          )}
          {email && (
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><a href={`mailto:${email}`} className="break-all hover:text-brand hover:underline">{email}</a></li>
          )}
          {wa && (
            <li className="flex items-start gap-2"><WhatsAppGlyph className="mt-0.5 h-4 w-4 shrink-0 text-brand" /><a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:underline">WhatsApp us</a></li>
          )}
          {address && (
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><span>{address}</span></li>
          )}
          {hours && (
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><span>{hours}</span></li>
          )}
        </Col>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link to="/privacy-policy" className="hover:text-brand hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-brand hover:underline">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
