import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import Img from "./Img";

/** Tall image card used in "Top Destinations" (matches the reference UI). */
export function DestinationCard({ d, className = "" }) {
  return (
    <Link
      to={`/destinations/${d.slug}`}
      className={`group relative block aspect-[4/5] overflow-hidden rounded-card bg-panel-strong ${className}`}
    >
      <Img name={d.image} sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 78vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent" />
      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-semibold text-navy-900 backdrop-blur">
        {d.category}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className="text-lg font-semibold leading-tight">{d.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/80">{d.tagline}</p>
        <p className="mt-2 flex items-center gap-1 text-[0.7rem] text-white/75">
          <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> {d.region}
        </p>
      </div>
    </Link>
  );
}

/** Package card with image, duration, route and CTA. */
export function PackageCard({ p, variant = "default" }) {
  if (variant === "overlay") {
    return (
      <Link to={`/tour-packages/${p.slug}`} className="group relative block h-full min-h-[18rem] overflow-hidden rounded-card bg-panel-strong">
        <Img name={p.image} sizes="(min-width: 1024px) 300px, 90vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-navy-950/10" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-navy-900">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {p.days} days
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/80">{p.summary}</p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow hover:shadow-xl hover:shadow-navy-950/10">
      <Link to={`/tour-packages/${p.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-panel-strong" tabIndex={-1} aria-hidden="true">
        <Img name={p.image} alt="" sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy-900">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {p.days} days · {p.nights} nights
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold leading-snug text-ink">
          <Link to={`/tour-packages/${p.slug}`} className="hover:text-brand transition-colors">{p.title}</Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
        <p className="mt-4 flex items-start gap-1.5 text-xs font-medium text-ink-muted">
          <MapPin className="mt-px h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
          {p.route.join(" → ")}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.highlights.slice(0, 3).map((h) => (
            <li key={h} className="rounded-full bg-panel px-2.5 py-1 text-[0.72rem] text-ink-soft border border-line/40">{h}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          {p.price ? (
            <p className="text-sm text-ink-soft">From <span className="font-display text-lg font-semibold text-navy-900">{p.price.currency} {p.price.from.toLocaleString()}</span></p>
          ) : (
            <p className="text-xs font-medium text-ink-muted">{p.sample ? "Sample itinerary · fully customisable" : "Price on request"}</p>
          )}
          <Link to={`/tour-packages/${p.slug}`} className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-semibold text-navy-900 hover:text-brand transition-colors" aria-label={`View ${p.title} itinerary`}>
            View tour <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
