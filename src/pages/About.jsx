import { Link } from "react-router-dom";
import Img from "../components/ui/Img";
import Icon from "../components/ui/Icon";
import { PageHero, CtaBanner, SectionHeader } from "../components/ui/Sections";
import { GuestMoments } from "../components/home/HomeSections";
import { features, bookingSteps } from "../data/home";
import { site } from "../data/site";

export default function About() {
  return (
    <>
      <PageHero
        image="tea-hills"
        eyebrow="About us"
        title="About DON HOLIDAYS"
        text="A Sri Lanka travel agency focused on private, tailor-made holidays — planned around your dates, your interests and the way you like to travel."
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <section className="container-narrow mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16" aria-labelledby="story-h">
        <div>
          <SectionHeader eyebrow="Who we are" title={<span id="story-h">Helping you experience the real Sri Lanka</span>} />
          <div className="prose-don mt-5">
            <p>
              {site.name} plans holidays across Sri Lanka for travellers who want more than a checklist. We combine the island's headline sights — Sigiriya, Kandy, the hill-country railway, Yala and Galle — with the quieter moments that make a trip memorable: a tea-estate morning, a village lunch, an extra night somewhere beautiful.
            </p>
            <p>
              Every trip starts with a conversation. You tell us when you are travelling, who is coming and what you enjoy; we suggest a route that makes sense on the map and in the weather, then refine it with you until it feels right.
            </p>
            <p>
              Browse our <Link to="/destinations">destinations</Link> and <Link to="/tour-packages">sample itineraries</Link> for ideas, or go straight to <Link to="/plan-your-trip">planning your trip</Link>.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Img name="kandy" sizes="(min-width: 1024px) 270px, 50vw" className="aspect-[3/4] w-full rounded-card object-cover" />
          <Img name="coconut-hill" sizes="(min-width: 1024px) 270px, 50vw" className="mt-10 aspect-[3/4] w-full rounded-card object-cover" />
        </div>
      </section>

      <section className="container-narrow mt-20" aria-labelledby="how-h">
        <SectionHeader eyebrow="How we work" title={<span id="how-h">What you can expect when you plan with us</span>} />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className="rounded-card bg-navy-900 border border-line/20 p-6 text-white shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-navy-950 shadow-sm"><Icon name={f.icon} className="h-6 w-6" /></span>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{f.text}</p>
            </li>
          ))}
        </ul>
        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {bookingSteps.map((s, i) => (
            <li key={s.title} className="rounded-card bg-panel border border-line/60 p-6">
              <p className="font-display text-3xl font-semibold text-brand">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <GuestMoments />
      <CtaBanner />
    </>
  );
}
