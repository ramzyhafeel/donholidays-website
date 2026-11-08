import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, Facebook, Instagram, Youtube, Globe } from "lucide-react";
import Icon from "../ui/Icon";
import Img from "../ui/Img";
import { DestinationCard, PackageCard } from "../ui/Cards";
import { SectionHeader } from "../ui/Sections";
import { intro, islandFacts, features, bookingSteps, whySriLanka } from "../../data/home";
import { destinations } from "../../data/destinations";
import { publishedPackages } from "../../data/packages";
import { experiences } from "../../data/experiences";
import { guestMoments } from "../../data/guestMoments";
import { services } from "../../data/services";
import { vehicles } from "../../data/vehicles";
import { site, socialLinks } from "../../data/site";

const socialIcon = { facebook: Facebook, instagram: Instagram, youtube: Youtube };

/* ---------------------------------------------------------------- Intro */
export function IntroSection() {
  const socials = socialLinks();
  return (
    <section className="container-narrow mt-20 grid gap-12 lg:mt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16" aria-labelledby="intro-heading">
      <div>
        <h2 id="intro-heading" className="section-title max-w-xl">{intro.heading}</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">{intro.text}</p>
        {socials.length > 0 && (
          <ul className="mt-6 flex gap-3" aria-label={`${site.name} on social media`}>
            {socials.map(({ network, url }) => {
              const I = socialIcon[network] || Globe;
              return (
                <li key={network}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={network} className="text-ink hover:text-brand transition-colors">
                    <I className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        <ul className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
          {islandFacts.map((f) => (
            <li key={f.label} className="flex flex-col items-center text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-navy-950 shadow-sm">
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">{f.value}</p>
              <p className="mt-1 text-[0.72rem] leading-snug text-ink-soft sm:text-xs">{f.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-[0.7rem] text-ink-muted sm:text-left">Sri Lanka at a glance</p>
      </div>

      <ul className="grid gap-4 self-center">
        {features.map((f) => (
          <li key={f.title} className="flex gap-4 rounded-card bg-navy-900 border border-line/20 p-3 pr-5 text-white shadow-sm">
            <span className="grid h-[4.5rem] w-[4.5rem] shrink-0 place-items-center rounded-xl bg-brand text-navy-950 shadow-sm">
              <Icon name={f.icon} className="h-8 w-8" strokeWidth={1.6} />
            </span>
            <div className="py-1">
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-white/85">{f.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------- Top destinations */
export function TopDestinations() {
  const track = useRef(null);
  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 260), behavior: "smooth" });
  };

  return (
    <section className="container-x mt-20 lg:mt-24" aria-labelledby="dest-heading">
      <div className="rounded-panel bg-panel px-5 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 id="dest-heading" className="section-title">Top destinations</h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft md:text-right">
            From ancient rock fortresses to misty tea country and leopard-filled national parks — discover where your Sri Lanka journey could take you.
          </p>
        </div>

        <div
          ref={track}
          className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:-mx-10 sm:scroll-px-10 sm:px-10 lg:-mx-14 lg:scroll-px-14 lg:px-14"
          tabIndex={0}
          aria-label="Destinations carousel"
        >
          {destinations.map((d) => (
            <DestinationCard key={d.slug} d={d} className="w-[72%] shrink-0 snap-start xs:w-[56%] sm:w-[42%] md:w-[31%] lg:w-[calc(25%-0.75rem)]" />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Link to="/destinations" className="btn btn-primary btn-sm">View all destinations</Link>
          <div className="flex gap-2">
            <button type="button" onClick={() => scroll(-1)} className="grid h-9 w-9 place-items-center rounded-full border border-ink/40 text-ink hover:bg-white hover:border-brand hover:text-brand transition-colors" aria-label="Previous destinations">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scroll(1)} className="grid h-9 w-9 place-items-center rounded-full border border-ink/40 text-ink hover:bg-white hover:border-brand hover:text-brand transition-colors" aria-label="Next destinations">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Tour packages */
export function TourPackagesTeaser() {
  const featured = publishedPackages.slice(0, 2);
  return (
    <section className="container-narrow mt-20 lg:mt-24" aria-labelledby="pkg-heading">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="flex min-h-[16rem] flex-col rounded-card bg-navy-900 border border-line/20 p-6 text-white sm:p-8 md:col-span-2 lg:col-span-1 shadow-sm">
          <h2 id="pkg-heading" className="text-2xl font-semibold sm:text-3xl">Tour packages</h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/90">
            Sample Sri Lanka itineraries from 4 to 10 days — every one can be shortened, extended or reshaped around you.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 text-xs">
            {publishedPackages.map((p) => (
              <li key={p.slug}>
                <Link to={`/tour-packages/${p.slug}`} className="inline-block rounded-full bg-white/15 px-3 py-1.5 hover:bg-brand hover:text-navy-950 transition-colors">{p.title}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <Link to="/tour-packages" className="btn btn-primary btn-sm">Browse all packages</Link>
          </div>
        </div>
        {featured.map((p) => (
          <PackageCard key={p.slug} p={p} variant="overlay" />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Services */
export function ServicesSection() {
  return (
    <section className="container-narrow mt-20 lg:mt-24" aria-labelledby="svc-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow="Our services" title={<span id="svc-heading">Everything you need for your trip</span>} />
        <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-brand">
          All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((sv) => (
          <li key={sv.slug}>
            <Link to={`/services#${sv.slug}`} className="group flex h-full flex-col overflow-hidden rounded-card bg-navy-900 border border-line/20 text-white transition-colors hover:bg-navy-800 shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Img name={sv.image} alt="" sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-xl bg-brand text-navy-950 shadow-sm">
                  <Icon name={sv.icon} className="h-5 w-5" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug">{sv.name}</h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-white/85">{sv.short}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 grid items-center gap-6 rounded-card bg-panel p-5 sm:p-6 md:grid-cols-[1fr_auto]">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-6">
            {vehicles.map((v) => (
              <Img key={v.slug} name={v.image} alt="" sizes="96px" className="h-14 w-20 rounded-xl border-2 border-panel object-cover sm:h-16 sm:w-24" />
            ))}
          </div>
          <div>
            <h3 className="font-semibold text-ink">Private vehicles for every group size</h3>
            <p className="mt-0.5 text-sm text-ink-soft">SUV and vans for airport transfers, hotel-to-hotel journeys and tours.</p>
          </div>
        </div>
        <Link to="/transportation" className="btn btn-primary btn-sm justify-self-start md:justify-self-end">View our vehicles</Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- 1-2-3 steps */
export function BookingSteps() {
  return (
    <section className="container-narrow mt-20 lg:mt-24" aria-labelledby="steps-heading">
      <h2 id="steps-heading" className="section-title">Planning made as easy as 1-2-3</h2>
      <ol className="mt-8 grid gap-6 sm:grid-cols-3">
        {bookingSteps.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="flex items-center gap-3">
              <span className="relative grid h-12 w-12 shrink-0 place-items-center text-navy-900">
                <span className="absolute inset-0 rounded-xl border-2 border-dashed border-brand/40" aria-hidden="true" />
                <Icon name={s.icon} className="h-5 w-5 text-brand" />
              </span>
              <h3 className="text-lg font-semibold text-ink">
                <span className="mr-1 text-brand font-bold">{i + 1}.</span> {s.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------- Why visit */
export function WhySriLanka() {
  return (
    <section className="container-narrow mt-20 lg:mt-28" aria-labelledby="why-heading">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div className="grid grid-cols-2 gap-3 lg:sticky lg:top-24">
          <Img name="ella-bridge" sizes="(min-width: 1024px) 260px, 45vw" className="aspect-[3/4] w-full rounded-card object-cover" />
          <div className="grid gap-3">
            <Img name="tea-hills" sizes="(min-width: 1024px) 260px, 45vw" className="aspect-square w-full rounded-card object-cover" />
            <Img name="beach-boats" sizes="(min-width: 1024px) 260px, 45vw" className="aspect-[4/3] w-full rounded-card object-cover" />
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="Why visit Sri Lanka"
            title="One island, endlessly varied"
            text="In a single trip you can climb a 5th-century fortress, ride a blue train through tea estates, look for leopards and end on a palm-fringed beach — all within a few hours' drive of each other."
            className="!max-w-none"
          />
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {whySriLanka.map((w) => (
              <li key={w.title} className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-light text-navy-900 ring-1 ring-brand/30">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Experiences */
export function ExperiencesGrid({ headingLevel = "h2", showHeader = true }) {
  const H3 = headingLevel === "h2" ? "h3" : "h2";
  return (
    <section className="container-narrow mt-20 lg:mt-28" aria-labelledby={showHeader ? "exp-heading" : undefined}>
      {showHeader && (
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Travel experiences" title={<span id="exp-heading">Choose how you want to travel</span>} />
          <Link to="/experiences" className="inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-brand">
            All experiences <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      )}
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {experiences.map((x, i) => (
          <li key={x.slug} className={i === 0 ? "col-span-2 row-span-2" : i >= 5 ? "lg:col-span-2" : ""}>
            <Link to={`/experiences#${x.slug}`} className="group relative block h-full min-h-[11rem] overflow-hidden rounded-card bg-panel-strong sm:min-h-[13rem]">
              <Img name={x.image} alt="" sizes={i === 0 ? "(min-width: 1024px) 540px, 100vw" : "(min-width: 1024px) 270px, 50vw"} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 text-white">
                <div>
                  <H3 className={`font-semibold leading-tight ${i === 0 ? "text-2xl" : "text-base sm:text-lg"}`}>{x.name}</H3>
                  <p className={`mt-1 text-white/80 ${i === 0 ? "text-sm" : "hidden text-xs sm:block"}`}>{x.short}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 opacity-80" aria-hidden="true" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------- Guest moments */
export function GuestMoments({ limit = 9 }) {
  const items = guestMoments.slice(0, limit);
  if (!items.length) return null;
  return (
    <section className="container-narrow mt-20 lg:mt-28" aria-labelledby="moments-heading">
      <SectionHeader
        eyebrow="On the road"
        title={<span id="moments-heading">Moments with our guests</span>}
        text="Airport welcomes, waterfall stops, beach days and mountain viewpoints — a few snapshots shared from DON HOLIDAYS journeys around Sri Lanka."
      />
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((m, i) => (
          <li key={m.file} className={`overflow-hidden rounded-card bg-panel-strong ${i === 0 ? "col-span-2 sm:row-span-2" : ""}`}>
            <img
              src={m.src}
              alt={m.alt}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
