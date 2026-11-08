import { useSyncExternalStore } from "react";
import { useSearchParams } from "react-router-dom";
import { Check } from "lucide-react";
import { PageHero } from "../components/ui/Sections";
import EnquiryForm from "../components/contact/EnquiryForm";
import { bookingSteps } from "../data/home";
import { publishedPackages } from "../data/packages";
import { services } from "../data/services";
import { vehicles } from "../data/vehicles";

const noop = () => () => {};

export default function PlanYourTrip() {
  // Pages are prerendered without a query string, so read ?tour= / ?service= /
  // ?vehicle= only after hydration and then remount the form with them.
  const hydrated = useSyncExternalStore(noop, () => true, () => false);
  const [searchParams] = useSearchParams();
  const params = hydrated ? searchParams : new URLSearchParams();
  const requested = params.get("tour") || "";
  const tour = publishedPackages.some((p) => p.title === requested) ? requested : "";
  const reqService = params.get("service") || "";
  const service = services.some((s) => s.name === reqService) ? reqService : "";
  const reqVehicle = vehicles.find((v) => v.name === params.get("vehicle"));
  const message = reqVehicle ? `I'd like to book the ${reqVehicle.name}.` : "";

  return (
    <>
      <PageHero
        image="ella-bridge-aerial"
        eyebrow="Plan your trip"
        title="Plan your Sri Lanka trip"
        text="Tell us your dates, who's travelling and what you'd love to experience. We'll come back with a suggested route that you can adjust until it's perfect."
        crumbs={[{ label: "Home", to: "/" }, { label: "Plan Your Trip" }]}
      />

      <div className="container-narrow mt-14 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <section className="rounded-panel border border-line bg-white p-5 sm:p-8 shadow-sm" aria-labelledby="plan-form-h">
          <h2 id="plan-form-h" className="text-2xl font-semibold text-ink">Your trip details</h2>
          <p className="mt-2 text-sm text-ink-soft">Fields marked * are required. Everything else helps us tailor our reply.</p>
          <div className="mt-6">
            <EnquiryForm key={`${hydrated}|${tour}|${service}|${message}`} defaultTour={tour} defaultService={service} defaultMessage={message} />
          </div>
        </section>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-lg font-semibold text-ink">What happens next</h2>
          <ol className="mt-5 space-y-5">
            {bookingSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-display text-sm font-bold text-navy-950 shadow-xs">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-card bg-panel p-5 border border-line/60">
            <h3 className="font-semibold text-ink">Helpful to include</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {["Arrival and departure dates (even approximate)", "Ages of children, if any", "Preferred hotel style or budget", "Must-see places or special occasions"].map((t) => (
                <li key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {t}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
