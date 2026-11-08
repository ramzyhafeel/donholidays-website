import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Img from "../components/ui/Img";
import Icon, { WhatsAppGlyph } from "../components/ui/Icon";
import { PageHero, CtaBanner } from "../components/ui/Sections";
import { services } from "../data/services";
import { createWhatsAppLink } from "../lib/whatsapp";

export default function Services() {
  return (
    <>
      <PageHero
        image="ella-bridge-aerial"
        eyebrow="Our services"
        title="Sri Lanka travel services, from airport to adventure"
        text="Airport transfers, tailor-made tours, hotel-to-hotel transfers and private holidays for families and groups — book one service or combine them for your whole trip."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      {/* Quick overview cards */}
      <section className="container-narrow mt-12" aria-label="Service overview">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="flex h-full flex-col rounded-card bg-navy-900 border border-line/20 p-5 text-white transition-colors hover:bg-navy-800 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-navy-950 shadow-sm">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold leading-snug">{s.name}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">{s.short}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold">
                  Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Detailed sections */}
      <div className="container-narrow mt-16 space-y-6">
        {services.map((s, i) => {
          const wa = createWhatsAppLink(s.message);
          return (
            <section
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-24 items-center gap-8 rounded-panel border border-line bg-white p-4 sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-8 shadow-sm"
              aria-labelledby={`${s.slug}-h`}
            >
              <div className={`overflow-hidden rounded-card bg-panel-strong ${i % 2 ? "lg:order-2" : ""}`}>
                <Img name={s.image} sizes="(min-width: 1024px) 520px, 100vw" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-light text-navy-900 ring-1 ring-brand/30">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h2 id={`${s.slug}-h`} className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">{s.name}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-ink-muted"><span className="font-semibold text-ink">Ideal for:</span> {s.idealFor}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to={`/plan-your-trip?service=${encodeURIComponent(s.name)}`} className="btn btn-primary btn-sm">Enquire now</Link>
                  {wa && (
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      <WhatsAppGlyph className="h-4 w-4" /> WhatsApp
                    </a>
                  )}
                  {(s.slug === "airport-transfers" || s.slug === "hotel-to-hotel-transfers") && (
                    <Link to="/transportation" className="inline-flex items-center gap-1 px-2 text-sm font-semibold text-navy-900 hover:text-brand">
                      See our vehicles <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                  {s.slug === "customized-tour-planning" && (
                    <Link to="/tour-packages" className="inline-flex items-center gap-1 px-2 text-sm font-semibold text-navy-900 hover:text-brand">
                      Sample itineraries <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner heading="Not sure which service you need?" text="Tell us about your trip and we'll recommend the simplest way to arrange it." />
    </>
  );
}
