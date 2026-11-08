import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Pause, Play } from "lucide-react";
import Img from "../ui/Img";
import { hero, heroSlides, heroSlideSeconds } from "../../data/home";

const pans = ["hero-pan-a", "hero-pan-b", "hero-pan-c"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  // Highest slide that has been shown — the next one after it is preloaded,
  // so photos download one at a time instead of all on page load.
  const [reached, setReached] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const section = useRef(null);
  const count = heroSlides.length;

  const goTo = (i) => {
    const next = (i + count) % count;
    setIndex(next);
    setReached((r) => Math.max(r, next));
  };

  // Pause when the hero is off-screen, the tab is hidden, or the visitor prefers reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const update = () => setPaused(reduce.matches || !visible || document.hidden);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; update(); }, { threshold: 0.2 });
    if (section.current) io.observe(section.current);
    document.addEventListener("visibilitychange", update);
    reduce.addEventListener?.("change", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
      reduce.removeEventListener?.("change", update);
    };
  }, []);

  const stopped = paused || userPaused;
  useEffect(() => {
    if (stopped || count < 2) return;
    const t = setTimeout(() => {
      setIndex((i) => {
        const next = (i + 1) % count;
        setReached((r) => Math.max(r, next));
        return next;
      });
    }, heroSlideSeconds * 1000);
    return () => clearTimeout(t);
  }, [index, stopped, count]);

  const current = heroSlides[index];

  return (
    <section ref={section} className="container-x pt-3 sm:pt-5" aria-labelledby="hero-heading" aria-roledescription="carousel">
      <div className={`relative isolate overflow-hidden rounded-panel bg-navy-900 ${stopped ? "hero-paused" : ""}`}>
        {/* Slides */}
        <div className="absolute inset-0 -z-10" aria-live="off">
          {heroSlides.map((s, i) => {
            if (i > reached + 1 && i !== 0) return null;
            const active = i === index;
            return (
              <div
                key={s.image}
                className={`absolute inset-0 overflow-hidden transition-opacity duration-[1800ms] ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
                aria-hidden={!active}
              >
                <Img
                  name={s.image}
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : "low"}
                  sizes="(min-width: 1216px) 1152px, 100vw"
                  alt={active ? undefined : ""}
                  style={{ objectPosition: s.focus }}
                  className={`h-full w-full object-cover will-change-transform ${pans[i % pans.length]}`}
                />
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950/50 via-navy-950/25 to-navy-950/75" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950/45 via-transparent to-transparent" />

        <div className="flex min-h-[34rem] flex-col justify-center px-5 pb-20 pt-14 sm:min-h-[36rem] sm:px-10 lg:min-h-[38rem] lg:px-14">
          <div className="mx-auto w-full max-w-[64rem] animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/25 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" /> {hero.eyebrow}
            </p>

            <h1 id="hero-heading" className="mt-5 text-white">
              <span className="block font-display text-xl font-medium text-white/90 sm:text-2xl">Discover</span>
              <span className="block font-display text-[clamp(3.4rem,14.5vw,11.5rem)] font-bold leading-[0.86] tracking-[-0.035em] [text-shadow:0_6px_40px_rgba(4,27,54,0.45)]">
                {hero.bigWord}
              </span>
              <span className="mt-3 block font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand [text-shadow:0_2px_12px_rgba(4,27,54,0.6)] sm:-mt-1 sm:text-right sm:text-base">
                with Don Holidays
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{hero.text}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to={hero.primaryCta.to} className="btn btn-primary">
                {hero.primaryCta.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to={hero.secondaryCta.to} className="btn btn-outline-light">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Caption + controls */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 sm:px-10 lg:px-14">
          <p key={current.image} className="animate-fade-up flex items-center gap-2 text-sm text-white" aria-live="polite">
            <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
            <span className="font-semibold">{current.place}</span>
            <span className="hidden text-white/70 xs:inline">· {current.region}</span>
          </p>

          {count > 1 && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 sm:gap-1.5">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.image}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show slide ${i + 1}: ${s.place}`}
                    aria-current={i === index ? "true" : undefined}
                    className="group relative h-6 w-4 sm:w-8"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/35 group-hover:bg-white/60">
                      {i === index && (
                        <span
                          key={`${index}-${stopped}`}
                          className={`absolute inset-0 rounded-full bg-brand ${stopped ? "" : "hero-progress"}`}
                          style={stopped ? undefined : { animationDuration: `${heroSlideSeconds}s` }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/25"
                aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              >
                {userPaused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
