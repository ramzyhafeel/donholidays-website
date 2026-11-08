import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import Img from "../components/ui/Img";
import { PageHero, CtaBanner } from "../components/ui/Sections";
import { destinations } from "../data/destinations";

const groups = [
  { title: "Heritage & culture", match: ["Heritage", "Coast & Heritage"] },
  { title: "Hill country", match: ["Hill Country"] },
  { title: "Wildlife", match: ["Wildlife"] },
  { title: "Beaches", match: ["Beach"] },
];

export default function Destinations() {
  return (
    <>
      <PageHero
        image="highlands"
        eyebrow="Destinations"
        title="Sri Lanka destinations worth the journey"
        text="Sri Lanka is compact, but each region feels different — ancient cities in the dry north, cool tea country in the centre, wildlife in the south-east and beaches on every coast."
        crumbs={[{ label: "Home", to: "/" }, { label: "Destinations" }]}
      />

      <div className="container-narrow mt-14">
        <nav aria-label="Destination types" className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <a key={g.title} href={`#${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="rounded-full bg-panel px-4 py-2 text-sm font-medium text-ink hover:bg-panel-strong">
              {g.title}
            </a>
          ))}
        </nav>

        {groups.map((g) => {
          const items = destinations.filter((d) => g.match.includes(d.category));
          if (!items.length) return null;
          const id = g.title.toLowerCase().replace(/[^a-z]+/g, "-");
          return (
            <section key={g.title} id={id} className="mt-14 scroll-mt-24" aria-labelledby={`${id}-h`}>
              <h2 id={`${id}-h`} className="section-title">{g.title}</h2>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((d) => (
                  <li key={d.slug}>
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow hover:shadow-xl hover:shadow-navy-950/10">
                      <div className="aspect-[4/3] overflow-hidden bg-panel-strong">
                        <Img name={d.image} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="flex items-center gap-1 text-xs font-medium text-ink-muted"><MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> {d.region}</p>
                        <h3 className="mt-2 text-xl font-semibold text-ink">
                          <Link to={`/destinations/${d.slug}`} className="after:absolute after:inset-0 hover:text-brand transition-colors">{d.name}</Link>
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.summary}</p>
                        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-navy-900 group-hover:text-brand transition-colors">
                          Explore {d.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <CtaBanner heading="Not sure where to start?" text="Tell us how long you have and what you enjoy, and we'll suggest a route that links the right destinations in the right order." />
    </>
  );
}
