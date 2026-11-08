import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Img from "../components/ui/Img";
import { PageHero, CtaBanner } from "../components/ui/Sections";
import { experiences } from "../data/experiences";
import { getDestination } from "../data/destinations";
import { publishedPackages } from "../data/packages";

export default function Experiences() {
  return (
    <>
      <PageHero
        image="safari-jeep"
        eyebrow="Travel experiences"
        title="Sri Lanka travel experiences for every kind of traveller"
        text="Culture, wildlife, beaches, romance, family time or adventure — choose the experiences that matter to you and we'll build the route around them."
        crumbs={[{ label: "Home", to: "/" }, { label: "Experiences" }]}
      />

      <nav aria-label="Experiences" className="container-narrow mt-10">
        <ul className="flex flex-wrap gap-2">
          {experiences.map((x) => (
            <li key={x.slug}>
              <a href={`#${x.slug}`} className="inline-block rounded-full bg-panel px-4 py-2 text-sm font-medium text-ink hover:bg-panel-strong">{x.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-narrow mt-6 space-y-6">
        {experiences.map((x, i) => {
          const tours = publishedPackages.filter((p) => p.experiences.includes(x.slug)).slice(0, 2);
          return (
            <section key={x.slug} id={x.slug} className="scroll-mt-24 grid items-center gap-8 rounded-panel border border-line bg-white p-4 sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-8 shadow-sm" aria-labelledby={`${x.slug}-h`}>
              <div className={`overflow-hidden rounded-card ${i % 2 ? "lg:order-2" : ""}`}>
                <Img name={x.image} sizes="(min-width: 1024px) 520px, 100vw" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <h2 id={`${x.slug}-h`} className="text-2xl font-semibold text-ink sm:text-3xl">{x.name}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{x.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {x.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-ink"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {h}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-ink-muted">
                  Where to go:{" "}
                  {x.destinations.map((s, j) => {
                    const d = getDestination(s);
                    return d ? (
                      <span key={s}>
                        {j > 0 && ", "}
                        <Link to={`/destinations/${s}`} className="font-medium text-brand hover:underline">{d.name}</Link>
                      </span>
                    ) : null;
                  })}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {tours.map((t) => (
                    <Link key={t.slug} to={`/tour-packages/${t.slug}`} className="inline-flex items-center gap-1 rounded-full bg-panel px-3.5 py-2 text-sm font-medium text-navy-900 hover:bg-brand-light transition-colors">
                      {t.title} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                  <Link to={`/plan-your-trip`} className="btn btn-primary btn-sm">Plan this experience</Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner />
    </>
  );
}
