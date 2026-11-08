import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { Send, Check, Info } from "lucide-react";
import { site } from "../../data/site";
import { experiences } from "../../data/experiences";
import { publishedPackages } from "../../data/packages";
import { services } from "../../data/services";
import { createWhatsAppLink, enquiryToMessage, whatsappEnabled } from "../../lib/whatsapp";
import { WhatsAppGlyph } from "../ui/Icon";

const durations = ["Up to 5 days", "6–8 days", "9–12 days", "13+ days", "Not sure yet"];
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

/**
 * Trip enquiry form. There is no server backend in this project, so the form
 * hands the enquiry to WhatsApp (preferred) or the visitor's email app,
 * whichever is configured in src/data/site.js. It never pretends to "send".
 */
export default function EnquiryForm({ compact = false, defaultTour = "", defaultService = "", defaultMessage = "" }) {
  const uid = useId();
  const [data, setData] = useState({
    name: "", email: "", phone: "", arrival: "", duration: "", travellers: "2",
    service: defaultService, tour: defaultTour, interests: [], message: defaultMessage, consent: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "whatsapp" | "email" | "unavailable"

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
  const toggleInterest = (name) =>
    setData((d) => ({ ...d, interests: d.interests.includes(name) ? d.interests.filter((i) => i !== name) : [...d.interests, name] }));

  const canWhatsApp = whatsappEnabled();
  const canEmail = Boolean(site.contact.email);

  function validate() {
    const e = {};
    if (!data.name.trim()) e.name = "Please enter your name.";
    if (!data.email.trim() || !emailOk(data.email.trim())) e.email = "Please enter a valid email address.";
    if (data.travellers && (Number(data.travellers) < 1 || Number(data.travellers) > 60)) e.travellers = "Enter a number between 1 and 60.";
    if (!data.consent) e.consent = "Please confirm so we can reply to your enquiry.";
    return e;
  }

  function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = ev.currentTarget.querySelector(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      return;
    }
    const msg = enquiryToMessage({ ...data, travellers: data.travellers ? `${data.travellers}` : "" });
    if (canWhatsApp) {
      window.open(createWhatsAppLink(msg), "_blank", "noopener,noreferrer");
      setStatus("whatsapp");
    } else if (canEmail) {
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(`Trip enquiry — ${data.name}`)}&body=${encodeURIComponent(msg)}`;
      setStatus("email");
    } else {
      setStatus("unavailable");
    }
  }

  const err = (k) => errors[k] && (
    <p id={`${uid}-${k}-err`} className="mt-1.5 text-xs font-medium text-[#b42318]">{errors[k]}</p>
  );
  const fieldProps = (k) => ({
    id: `${uid}-${k}`,
    name: k,
    value: data[k],
    onChange: set(k),
    "aria-invalid": errors[k] ? "true" : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor={`${uid}-name`}>Full name *</label>
          <input className="field" autoComplete="name" {...fieldProps("name")} />
          {err("name")}
        </div>
        <div>
          <label className="field-label" htmlFor={`${uid}-email`}>Email *</label>
          <input className="field" type="email" autoComplete="email" {...fieldProps("email")} />
          {err("email")}
        </div>
        <div>
          <label className="field-label" htmlFor={`${uid}-phone`}>Phone / WhatsApp</label>
          <input className="field" type="tel" autoComplete="tel" placeholder="Include country code" {...fieldProps("phone")} />
        </div>
        <div>
          <label className="field-label" htmlFor={`${uid}-travellers`}>Number of travellers</label>
          <input className="field" type="number" min="1" max="60" inputMode="numeric" {...fieldProps("travellers")} />
          {err("travellers")}
        </div>
        {!compact && (
          <>
            <div>
              <label className="field-label" htmlFor={`${uid}-arrival`}>Arrival date</label>
              <input className="field" type="date" {...fieldProps("arrival")} />
            </div>
            <div>
              <label className="field-label" htmlFor={`${uid}-duration`}>Trip length</label>
              <select className="field" {...fieldProps("duration")}>
                <option value="">Select…</option>
                {durations.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
          </>
        )}
        <div>
          <label className="field-label" htmlFor={`${uid}-service`}>Service</label>
          <select className="field" {...fieldProps("service")}>
            <option value="">Not sure / full holiday</option>
            {services.map((sv) => <option key={sv.slug} value={sv.name}>{sv.name}</option>)}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor={`${uid}-tour`}>Itinerary you're interested in</label>
          <select className="field" {...fieldProps("tour")}>
            <option value="">A tailor-made trip</option>
            {publishedPackages.map((p) => <option key={p.slug} value={p.title}>{p.title} ({p.days} days)</option>)}
          </select>
        </div>
      </div>

      {!compact && (
        <fieldset>
          <legend className="field-label">Travel interests</legend>
          <div className="mt-1 flex flex-wrap gap-2">
            {experiences.map((x) => {
              const on = data.interests.includes(x.name);
              return (
                <label key={x.slug} className={`cursor-pointer rounded-full border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand ${on ? "border-brand bg-brand text-navy-950 font-semibold shadow-xs" : "border-line bg-white text-ink-soft hover:border-brand"}`}>
                  <input type="checkbox" className="sr-only" checked={on} onChange={() => toggleInterest(x.name)} />
                  {x.name}
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      <div>
        <label className="field-label" htmlFor={`${uid}-message`}>Tell us about your trip</label>
        <textarea className="field min-h-32" rows={compact ? 4 : 5} placeholder="Places you'd love to see, hotel style, special occasions…" {...fieldProps("message")} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input type="checkbox" name="consent" checked={data.consent} onChange={set("consent")} className="mt-0.5 h-5 w-5 shrink-0 accent-brand" aria-invalid={errors.consent ? "true" : undefined} aria-describedby={errors.consent ? `${uid}-consent-err` : undefined} />
          <span>I agree that {site.name} may use these details to reply to my enquiry, as described in the <Link to="/privacy-policy" className="font-semibold text-brand underline underline-offset-2">privacy policy</Link>.</span>
        </label>
        {err("consent")}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary">
          {canWhatsApp ? <WhatsAppGlyph className="h-4 w-4" /> : <Send className="h-4 w-4" aria-hidden="true" />}
          {canWhatsApp ? "Send enquiry via WhatsApp" : canEmail ? "Send enquiry by email" : "Send enquiry"}
        </button>
        <p className="text-xs text-ink-muted">
          {canWhatsApp ? "Opens WhatsApp with your details filled in." : canEmail ? "Opens your email app with your details filled in." : ""}
        </p>
      </div>

      <div aria-live="polite">
        {status === "whatsapp" && (
          <p className="flex items-start gap-2 rounded-xl bg-brand-light border border-brand/20 p-4 text-sm text-navy-900"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> WhatsApp has opened in a new tab with your enquiry. Press send there to reach us.</p>
        )}
        {status === "email" && (
          <p className="flex items-start gap-2 rounded-xl bg-brand-light border border-brand/20 p-4 text-sm text-navy-900"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> Your email app should now be open with your enquiry. Press send there to reach us.</p>
        )}
        {status === "unavailable" && (
          <p className="flex items-start gap-2 rounded-xl bg-panel p-4 text-sm text-ink"><Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> Online enquiries are not connected yet, so nothing has been sent. Please check back soon — our contact details will be published here shortly.</p>
        )}
      </div>
    </form>
  );
}
