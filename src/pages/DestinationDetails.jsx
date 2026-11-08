import { Link, useParams } from "react-router-dom";
import { Check, CalendarDays, Users } from "lucide-react";
import Img from "../components/ui/Img";
import { PageHero, CtaBanner } from "../components/ui/Sections";
import { DestinationCard, PackageCard } from "../components/ui/Cards";
import { destinations, getDestination } from "../data/destinations";
import { publishedPackages } from "../data/packages";
import { getExperience } from "../data/experiences";
import { createWhatsAppLink, whatsappMessages } from "../lib/whatsapp";
import { WhatsAppGlyph } from "../components/ui/Icon";
import NotFound from "./NotFound";

export default function DestinationDetails() {
  const { slug } = useParams();
  const d = getDestination(slug);
  if (!d) return <NotFound />;

  const tours = publishedPackages.filter((p) => p.destinations.includes(d.slug)).slice(0, 3);
  const nearby = destinations.filter((x) => x.slug !== d.slug && (x.category === d.category || x.region === d.region)).slice(0, 4);
  const more = nearby.length >= 2 ? nearby : destinations.filter((x) => x.slug !== d.slug).slice(0, 4);
  const wa = createWhatsAppLink(whatsappMessages.destination(d.name));

  return (
    <>
      <PageHero
        image={d.image}
        eyebrow={d.region}
        title={`${d.name}: ${d.tagline}`}
        crumbs={[{ label: "Home", to: "/" }, { label: "Destinations", to: "/destinations" }, { label: d.name }]}
      />

      <div className="container-narrow mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <article>
          <div className="prose-don text-[1.02rem]">
            {d.intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>

          <h2 className="mt-10 text-2xl font-semibold text-ink">Things to do in {d.name}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {d.highlights.map((h) => (
              <li key={h} className="flex gap-3 rounded-xl bg-panel p-4 text-sm text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {h}
              </li>
            ))}
          </ul>

          {d.gallery?.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-3">
              {d.gallery.slice(0, 2).map((g) => (
                <Img key={g} name={g} sizes="(min-width: 1024px) 340px, 50vw" className="aspect-[4/3] w-full rounded-card object-cover" />
              ))}
            </div>
          )}
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-card border border-line bg-white p-6 shadow-xs">
            <h2 className="flex items-center gap-2 text-base font-semibold text-ink"><CalendarDays className="h-5 w-5 text-brand" aria-hidden="true" /> When to visit</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.bestTime}</p>
            <h2 className="mt-6 flex items-center gap-2 text-base font-semibold text-ink"><Users className="h-5 w-5 text-brand" aria-hidden="true" /> Ideal for</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {d.idealFor.map((x) => <li key={x} className="rounded-full bg-panel px-3 py-1 text-xs text-ink-soft">{x}</li>)}
            </ul>
            <h2 className="mt-6 text-base font-semibold text-ink">Related experiences</h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              {d.experiences.map((slug) => {
                const x = getExperience(slug);
                return x ? <li key={slug}><Link to={`/experiences#${slug}`} className="font-medium text-brand hover:underline">{x.name}</Link></li> : null;
              })}
            </ul>
          </div>
          <div className="rounded-card bg-navy-900 border border-brand/20 p-6 text-white shadow-lg">
            <h2 className="text-lg font-semibold text-white">Add {d.name} to your trip</h2>
            <p className="mt-2 text-sm text-white/80">We'll suggest how many nights to spend here and how it fits with the rest of your route.</p>
            <div className="mt-5 flex flex-col gap-2">
              <Link to="/plan-your-trip" className="btn btn-primary">Plan my trip</Link>
              {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><WhatsAppGlyph className="h-4 w-4" /> Ask on WhatsApp</a>}
            </div>
          </div>
        </aside>
      </div>

      {tours.length > 0 && (
        <section className="container-narrow mt-20" aria-labelledby="dest-tours">
          <h2 id="dest-tours" className="section-title">Itineraries that include {d.name}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((p) => <PackageCard key={p.slug} p={p} />)}
          </div>
        </section>
      )}

      <section className="container-narrow mt-20" aria-labelledby="dest-more">
        <h2 id="dest-more" className="section-title">Explore more of Sri Lanka</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {more.map((x) => <DestinationCard key={x.slug} d={x} />)}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
