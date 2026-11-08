import { Link } from "react-router-dom";
import { Users, Luggage, Check, ArrowRight } from "lucide-react";
import Img from "../components/ui/Img";
import Icon, { WhatsAppGlyph } from "../components/ui/Icon";
import { PageHero, CtaBanner, SectionHeader } from "../components/ui/Sections";
import { vehicles } from "../data/vehicles";
import { services } from "../data/services";
import { createWhatsAppLink } from "../lib/whatsapp";

const transportServices = services.filter((s) =>
  ["airport-transfers", "hotel-to-hotel-transfers", "private-family-group-holidays"].includes(s.slug)
);

export default function Transportation() {
  return (
    <>
      <PageHero
        image="van-high-roof"
        eyebrow="Transportation"
        title="Private vehicles for every Sri Lanka journey"
        text="From a comfortable SUV for two to a high-roof van for the whole group — choose the vehicle that fits your party and luggage for airport transfers, hotel-to-hotel journeys and full tours."
        crumbs={[{ label: "Home", to: "/" }, { label: "Transportation" }]}
      />

      <section className="container-narrow mt-14" aria-labelledby="fleet-h">
        <SectionHeader eyebrow="Our vehicles" title={<span id="fleet-h">Choose your vehicle</span>} />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => {
            const wa = createWhatsAppLink(`Hello DON HOLIDAYS, I would like to book the ${v.name}. Could you share availability and rates?`);
            return (
              <article key={v.slug} className="flex flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow hover:shadow-xl hover:shadow-navy-950/10">
                <div className="relative aspect-[16/10] overflow-hidden bg-panel-strong">
                  <Img name={v.image} alt={v.alt} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy-900">{v.type}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-ink">{v.name}</h3>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-panel p-3">
                      <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted"><Users className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> Seats</dt>
                      <dd className="mt-1 font-medium text-ink">{v.passengers}</dd>
                    </div>
                    <div className="rounded-xl bg-panel p-3">
                      <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted"><Luggage className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> Luggage</dt>
                      <dd className="mt-1 font-medium text-ink">{v.luggage}</dd>
                    </div>
                  </dl>
                  <ul className="mt-4 space-y-1.5">
                    {v.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-ink-soft"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {f}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-ink-muted"><span className="font-semibold text-ink">Ideal for:</span> {v.idealFor}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    <Link to={`/plan-your-trip?vehicle=${encodeURIComponent(v.name)}`} className="btn btn-primary btn-sm">Book this vehicle</Link>
                    {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm"><WhatsAppGlyph className="h-4 w-4" /> WhatsApp</a>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-ink-muted">Not sure which vehicle fits? Tell us how many people and suitcases you have and we'll recommend one.</p>
      </section>

      <section className="container-narrow mt-20" aria-labelledby="transport-svc-h">
        <div className="rounded-panel bg-panel px-5 py-10 sm:px-10 lg:px-14 lg:py-14 border border-line">
          <h2 id="transport-svc-h" className="section-title">Use our vehicles for</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {transportServices.map((s) => (
              <li key={s.slug} className="flex gap-4 rounded-card bg-navy-900 border border-line/20 p-3 pr-5 text-white shadow-sm">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-brand text-navy-950 shadow-sm"><Icon name={s.icon} className="h-7 w-7" strokeWidth={1.6} /></span>
                <div className="py-1">
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-white/85">{s.short}</p>
                  <Link to={`/services#${s.slug}`} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
                    Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner heading="Need a transfer or transport for your tour?" text="Send us your route and travel dates and we'll arrange the right vehicle." cta={{ label: "Request a quote", to: "/plan-your-trip" }} />
    </>
  );
}
