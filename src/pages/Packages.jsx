import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero, CtaBanner, FAQAccordion } from "../components/ui/Sections";
import { PackageCard } from "../components/ui/Cards";
import { publishedPackages } from "../data/packages";
import { experiences } from "../data/experiences";
import { faqs } from "../data/faqs";

const lengths = [
  { id: "all", label: "Any length", test: () => true },
  { id: "short", label: "Up to 5 days", test: (p) => p.days <= 5 },
  { id: "mid", label: "6–8 days", test: (p) => p.days >= 6 && p.days <= 8 },
  { id: "long", label: "9+ days", test: (p) => p.days >= 9 },
];

export default function Packages() {
  const [len, setLen] = useState("all");
  const [style, setStyle] = useState("all");
  const lenTest = lengths.find((l) => l.id === len).test;
  const list = publishedPackages.filter((p) => lenTest(p) && (style === "all" || p.experiences.includes(style)));
  const styles = experiences.filter((x) => publishedPackages.some((p) => p.experiences.includes(x.slug)));

  return (
    <>
      <PageHero
        image="ella-train"
        eyebrow="Tour packages"
        title="Sri Lanka tour packages & sample itineraries"
        text="Start with one of our sample routes, then make it yours — change the length, swap destinations, choose your hotel style and add the experiences you care about."
        crumbs={[{ label: "Home", to: "/" }, { label: "Tour Packages" }]}
      />

      <section className="container-narrow mt-12" aria-label="Filter tours">
        <div className="flex flex-col gap-4 rounded-card bg-panel p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label="Trip length" className="flex flex-wrap gap-2">
            {lengths.map((l) => (
              <button key={l.id} type="button" aria-pressed={len === l.id} onClick={() => setLen(l.id)}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${len === l.id ? "bg-brand text-navy-950 font-semibold shadow-xs" : "bg-white text-ink-soft hover:text-ink"}`}>
                {l.label}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm font-medium text-ink">
            Travel style
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="field !min-h-10 !w-auto !rounded-full !py-1.5 text-sm">
              <option value="all">All styles</option>
              {styles.map((x) => <option key={x.slug} value={x.slug}>{x.name}</option>)}
            </select>
          </label>
        </div>

        <p className="mt-6 text-sm text-ink-muted" aria-live="polite">{list.length} itinerar{list.length === 1 ? "y" : "ies"}</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PackageCard key={p.slug} p={p} />)}
        </div>
        {list.length === 0 && (
          <p className="mt-6 rounded-card border border-dashed border-line p-8 text-center text-ink-soft">
            No sample itinerary matches that combination yet — <Link to="/plan-your-trip" className="font-semibold text-brand underline">ask us to build one for you</Link>.
          </p>
        )}
      </section>

      <section className="container-narrow mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]" aria-labelledby="pkg-faq">
        <div>
          <h2 id="pkg-faq" className="section-title">How our itineraries work</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            The routes on this page show what is realistic in a given number of days. Prices depend on your dates, group size and hotel style, so every trip is quoted individually and your personalised quote sets out what is and isn't included.
          </p>
        </div>
        <FAQAccordion items={faqs.slice(0, 3)} />
      </section>

      <CtaBanner heading="Prefer a trip built from scratch?" text="Share your dates and interests and we'll design a Sri Lanka itinerary around you." />
    </>
  );
}
