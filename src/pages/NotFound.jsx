import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { DestinationCard } from "../components/ui/Cards";
import { destinations } from "../data/destinations";

export default function NotFound() {
  return (
    <div className="container-narrow pt-16 text-center">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-light text-navy-900 ring-1 ring-brand/30">
        <Compass className="h-8 w-8 text-brand" aria-hidden="true" />
      </span>
      <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">Error 404</p>
      <h1 className="mt-2 text-4xl font-semibold text-ink sm:text-5xl">This path isn't on our map</h1>
      <p className="mx-auto mt-4 max-w-lg text-ink-soft">The page you're looking for may have moved. Try one of these instead, or head back to the homepage.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary">Back to home</Link>
        <Link to="/tour-packages" className="btn btn-outline">Tour packages</Link>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-4 text-left lg:grid-cols-4">
        {destinations.slice(0, 4).map((d) => <DestinationCard key={d.slug} d={d} />)}
      </div>
    </div>
  );
}
