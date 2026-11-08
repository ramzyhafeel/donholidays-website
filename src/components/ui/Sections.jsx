import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus, Minus } from "lucide-react";
import Img from "./Img";
import { finalCta } from "../../data/home";

export function SectionHeader({ eyebrow, title, text, align = "left", as: Tag = "h2", className = "" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className={`section-title ${eyebrow ? "mt-3" : ""}`}>{title}</Tag>
      {text && <p className="mt-4 text-base leading-relaxed text-ink-soft">{text}</p>}
    </div>
  );
}

export function Breadcrumbs({ items, light = false }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1 text-xs font-medium ${light ? "text-white/80" : "text-ink-muted"}`}>
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />}
            {it.to ? (
              <Link to={it.to} className={light ? "hover:text-brand" : "hover:text-brand"}>{it.label}</Link>
            ) : (
              <span aria-current="page" className={light ? "text-white" : "text-ink"}>{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Rounded image banner used at the top of inner pages. */
export function PageHero({ image, eyebrow, title, text, crumbs, children }) {
  return (
    <section className="container-x pt-4 sm:pt-6">
      <div className="relative isolate overflow-hidden rounded-panel bg-navy-900">
        <Img name={image} priority sizes="(min-width: 1216px) 1152px, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950/85 via-navy-950/55 to-navy-950/10" />
        <div className="flex min-h-[19rem] flex-col justify-end px-6 py-8 sm:min-h-[22rem] sm:px-10 sm:py-10 lg:min-h-[24rem] lg:px-14">
          {crumbs && <Breadcrumbs items={crumbs} light />}
          {eyebrow && <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>}
          <h1 className="mt-2 max-w-3xl text-[2rem] font-semibold leading-[1.1] text-white sm:text-5xl">{title}</h1>
          {text && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{text}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

export function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-line rounded-card border border-line bg-white">
      {items.map((f, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-medium text-ink sm:px-6"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-panel text-navy-900">
                  {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                </span>
              </button>
            </h3>
            <div id={id} hidden={!isOpen} className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6">
              {f.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Closing call-to-action banner. */
export function CtaBanner({ heading = finalCta.heading, text = finalCta.text, cta = finalCta.cta, image = "coast-cliffs" }) {
  return (
    <section className="container-x mt-24" aria-labelledby="cta-heading">
      <div className="relative isolate overflow-hidden rounded-panel bg-navy-900 border border-brand/20 px-6 py-14 text-center sm:px-12 sm:py-20 shadow-xl shadow-navy-950/15">
        <Img name={image} sizes="(min-width: 1216px) 1152px, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950/90 via-navy-900/85 to-navy-950/95" />
        <h2 id="cta-heading" className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl font-display">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to={cta.to} className="btn btn-primary">{cta.label}</Link>
          <Link to="/tour-packages" className="btn btn-outline-light">Browse tour packages</Link>
        </div>
      </div>
    </section>
  );
}
