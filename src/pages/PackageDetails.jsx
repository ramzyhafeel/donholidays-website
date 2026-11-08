import { Link, useParams } from "react-router-dom";
import { Clock, MapPin, Check, X, Info, Moon } from "lucide-react";
import Img from "../components/ui/Img";
import { PageHero, CtaBanner } from "../components/ui/Sections";
import { PackageCard } from "../components/ui/Cards";
import { getPackage, publishedPackages } from "../data/packages";
import { getDestination } from "../data/destinations";
import { createWhatsAppLink, whatsappMessages } from "../lib/whatsapp";
import { WhatsAppGlyph } from "../components/ui/Icon";
import NotFound from "./NotFound";

export default function PackageDetails() {
  const { slug } = useParams();
  const p = getPackage(slug);
  if (!p) return <NotFound />;

  const wa = createWhatsAppLink(whatsappMessages.tour(p.title));
  const related = publishedPackages.filter((x) => x.slug !== p.slug && x.experiences.some((e) => p.experiences.includes(e))).slice(0, 3);
  const planLink = `/plan-your-trip?tour=${encodeURIComponent(p.title)}`;

  return (
    <>
      <PageHero
        image={p.image}
        eyebrow={`${p.days} days · ${p.nights} nights`}
        title={p.title}
        text={p.summary}
        crumbs={[{ label: "Home", to: "/" }, { label: "Tour Packages", to: "/tour-packages" }, { label: p.title }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={planLink} className="btn btn-light">Enquire about this tour</Link>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><WhatsAppGlyph className="h-4 w-4" /> WhatsApp</a>}
        </div>
      </PageHero>

      <div className="container-narrow mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <article>
          {p.sample && (
            <p className="flex items-start gap-2 rounded-xl bg-brand-light border border-brand/25 p-4 text-sm text-navy-900">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              This is a sample itinerary. Dates, pace, hotels and activities are all adjustable, and your quote will confirm exactly what is included.
            </p>
          )}

          <h2 className="mt-8 text-2xl font-semibold text-ink">Tour overview</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{p.overview}</p>

          <h3 className="mt-8 text-lg font-semibold text-ink">Highlights</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 rounded-xl bg-panel p-4 text-sm text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {h}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-ink">Day-by-day itinerary</h2>
          <ol className="relative mt-6 space-y-6 border-l-2 border-dashed border-brand/35 pl-7">
            {p.itinerary.map((day) => (
              <li key={day.day} className="relative">
                <span className="absolute -left-[2.6rem] top-0 grid h-9 w-9 place-items-center rounded-full bg-brand font-display text-sm font-bold text-navy-950 shadow-xs">
                  {day.day}
                </span>
                <h3 className="text-lg font-semibold text-ink">Day {day.day}: {day.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{day.description}</p>
                {day.overnight && (
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-panel px-3 py-1 text-xs font-medium text-ink-soft">
                    <Moon className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> Overnight: {day.overnight}
                  </p>
                )}
              </li>
            ))}
          </ol>

          {p.optional?.length > 0 && (
            <>
              <h3 className="mt-10 text-lg font-semibold text-ink">Optional additions</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.optional.map((o) => <li key={o} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft">{o}</li>)}
              </ul>
            </>
          )}

          {(p.inclusions.length > 0 || p.exclusions.length > 0) && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {p.inclusions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-ink">Included</h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                    {p.inclusions.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />{i}</li>)}
                  </ul>
                </div>
              )}
              {p.exclusions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-ink">Not included</h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                    {p.exclusions.map((i) => <li key={i} className="flex gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />{i}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}

          {p.gallery?.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {p.gallery.slice(0, 3).map((g, i) => (
                <Img key={g} name={g} sizes="(min-width: 1024px) 230px, 33vw" className={`aspect-[4/3] w-full rounded-card object-cover ${i === 2 ? "hidden sm:block" : ""}`} />
              ))}
            </div>
          )}
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-card border border-line bg-white p-6 shadow-xs">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="flex items-center gap-2 font-semibold text-ink"><Clock className="h-4 w-4 text-brand" aria-hidden="true" /> Duration</dt>
                <dd className="mt-1 text-ink-soft">{p.days} days / {p.nights} nights</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-semibold text-ink"><MapPin className="h-4 w-4 text-brand" aria-hidden="true" /> Route</dt>
                <dd className="mt-1 text-ink-soft">{p.route.join(" → ")}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Destinations covered</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {p.destinations.map((s) => {
                    const d = getDestination(s);
                    return d ? <Link key={s} to={`/destinations/${s}`} className="rounded-full bg-panel px-2.5 py-1 text-xs font-medium text-navy-900 hover:bg-brand-light transition-colors">{d.name}</Link> : null;
                  })}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Season</dt>
                <dd className="mt-1 text-ink-soft">{p.seasonNote}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Price</dt>
                <dd className="mt-1 text-ink-soft">
                  {p.price ? `From ${p.price.currency} ${p.price.from.toLocaleString()} ${p.price.basis || ""}` : "Quoted for your dates, group size and hotel style"}
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-card bg-navy-900 border border-brand/20 p-6 text-white shadow-lg">
            <h2 className="text-lg font-semibold text-white">Interested in this tour?</h2>
            <p className="mt-2 text-sm text-white/80">Send us your dates and we'll tailor {p.title} to you.</p>
            <div className="mt-5 flex flex-col gap-2">
              <Link to={planLink} className="btn btn-primary">Enquire now</Link>
              {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><WhatsAppGlyph className="h-4 w-4" /> Ask on WhatsApp</a>}
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="container-narrow mt-20" aria-labelledby="related-tours">
          <h2 id="related-tours" className="section-title">You might also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((x) => <PackageCard key={x.slug} p={x} />)}
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
