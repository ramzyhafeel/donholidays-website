import { useId, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { destinations } from "../../data/destinations";
import { publishedPackages } from "../../data/packages";
import { experiences } from "../../data/experiences";

const index = [
  ...destinations.map((d) => ({ label: d.name, hint: d.region, to: `/destinations/${d.slug}`, terms: `${d.name} ${d.region} ${d.category}` })),
  ...publishedPackages.map((p) => ({ label: p.title, hint: `${p.days} days`, to: `/tour-packages/${p.slug}`, terms: `${p.title} ${p.route.join(" ")}` })),
  ...experiences.map((e) => ({ label: e.name, hint: "Experience", to: `/experiences#${e.slug}`, terms: `${e.name} ${e.short}` })),
];

/** Site search over destinations, tours and experiences (no backend needed). */
export default function SearchBox({ className = "", onNavigate, placeholder = "Search a destination or tour…" }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const listId = useId();
  const wrap = useRef(null);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    return index.filter((i) => i.terms.toLowerCase().includes(term)).slice(0, 6);
  }, [q]);

  const go = (to) => {
    setQ("");
    setOpen(false);
    onNavigate?.();
    navigate(to);
  };

  return (
    <div
      ref={wrap}
      className={`relative ${className}`}
      onBlur={(e) => { if (!wrap.current?.contains(e.relatedTarget)) setOpen(false); }}
    >
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          go(results[0]?.to || "/tour-packages");
        }}
      >
        <label className="sr-only" htmlFor={`${listId}-input`}>Search destinations and tours</label>
        <input
          id={`${listId}-input`}
          type="search"
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
          placeholder={placeholder}
          autoComplete="off"
          aria-controls={listId}
          aria-expanded={open && results.length > 0}
          className="h-10 w-full rounded-full border border-transparent bg-panel pl-4 pr-10 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:ring-1 focus:ring-brand focus:bg-white focus:outline-none"
        />
        <button type="submit" className="absolute right-1 top-1 grid h-8 w-8 place-items-center rounded-full text-ink-soft hover:text-navy-900" aria-label="Search">
          <Search className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>

      {open && q.trim().length >= 2 && (
        <div id={listId} className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-navy-950/10">
          {results.length ? (
            <ul>
              {results.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    onClick={(e) => { e.preventDefault(); go(r.to); }}
                    className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-panel focus:bg-panel focus:outline-none"
                  >
                    <span className="font-medium text-ink">{r.label}</span>
                    <span className="shrink-0 text-xs text-ink-muted">{r.hint}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-ink-soft" role="status">
              No matches. <Link to="/plan-your-trip" onClick={(e) => { e.preventDefault(); go("/plan-your-trip"); }} className="font-semibold text-brand underline">Ask us to plan it</Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
