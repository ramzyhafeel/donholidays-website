import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { PageHero, CtaBanner } from "../components/ui/Sections";
import { guestMoments } from "../data/guestMoments";
import { photos } from "../lib/images";
import { vehicles } from "../data/vehicles";

/*
 * Gallery = guest photos + destination photography + vehicles.
 * Add guest photos in src/data/guestMoments.js; destination photos come from
 * the photo library in src/lib/images.js (the keys listed below).
 */
const placeKeys = [
  "sigiriya-aerial", "kandy", "ella-bridge", "nuwara-eliya", "tea-hills", "galle", "coconut-hill", "mirissa",
  "yala", "udawalawe", "trincomalee", "elephants-river", "unawatuna", "surf", "safari-jeep", "beach-boats",
  "ella-train", "south-coast-aerial", "highlands", "elephant-herd",
];

const items = [
  ...guestMoments.map((g) => ({ id: g.file, cat: "guests", src: g.src, full: g.src.replace("/optimized/guest/", "/guest/"), alt: g.alt, h: 480 })),
  ...placeKeys.map((k) => ({ id: k, cat: "destinations", src: `/images/optimized/${k}-640.webp`, full: `/images/optimized/${k}-1280.webp`, alt: photos[k].alt, h: Math.round(640 / photos[k].ratio) })),
  ...vehicles.map((v) => ({ id: v.slug, cat: "vehicles", src: `/images/optimized/vehicles/${v.image}-640.webp`, full: `/images/optimized/vehicles/${v.image}-1280.webp`, alt: v.alt, h: 358 })),
];

const filters = [
  { id: "all", label: "All photos" },
  { id: "guests", label: "Our guests" },
  { id: "destinations", label: "Destinations" },
  { id: "vehicles", label: "Vehicles" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(-1);
  const list = filter === "all" ? items : items.filter((i) => i.cat === filter);
  const closeBtn = useRef(null);
  const lastTrigger = useRef(null);

  const close = useCallback(() => {
    setOpen(-1);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d) => setOpen((o) => (o + d + list.length) % list.length), [list.length]);

  useEffect(() => {
    if (open < 0) return;
    closeBtn.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open >= 0 ? list[open] : null;

  return (
    <>
      <PageHero
        image="coconut-hill"
        eyebrow="Gallery"
        title="Sri Lanka through our lens"
        text="Moments shared by DON HOLIDAYS guests, the places we travel to and the vehicles that take you there."
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <section className="container-narrow mt-12" aria-label="Photo gallery">
        <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === f.id ? "bg-brand text-navy-950 font-semibold shadow-xs" : "bg-panel text-ink hover:bg-panel-strong"}`}
            >
              {f.label}
              <span className={`ml-1.5 text-xs ${filter === f.id ? "text-navy-950/70" : "text-ink-muted"}`}>
                {f.id === "all" ? items.length : items.filter((i) => i.cat === f.id).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="mt-8 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
          {list.map((it, i) => (
            <li key={it.id} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={(e) => { lastTrigger.current = e.currentTarget; setOpen(i); }}
                className="group relative block w-full overflow-hidden rounded-card bg-panel-strong"
                aria-label={`View larger: ${it.alt}`}
              >
                <img src={it.src} alt={it.alt} loading="lazy" decoding="async" width="640" height={it.h} className="h-auto w-full transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-navy-900 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 hover:text-brand">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {current && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <figure className="relative max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={current.full} alt={current.alt} className="max-h-[80vh] w-auto rounded-card object-contain shadow-2xl" />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {current.alt} <span className="text-white/50">· {open + 1} / {list.length}</span>
            </figcaption>
          </figure>
          <button ref={closeBtn} type="button" onClick={close} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-brand hover:text-navy-950 transition-colors" aria-label="Close photo viewer">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-brand hover:text-navy-950 transition-colors sm:left-6" aria-label="Previous photo">
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-brand hover:text-navy-950 transition-colors sm:right-6" aria-label="Next photo">
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}

      <CtaBanner heading="Ready to make your own memories?" text="Tell us what you'd love to see and we'll plan a Sri Lanka holiday around it." />
    </>
  );
}
