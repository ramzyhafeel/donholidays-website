import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { navLinks, site } from "../../data/site";
import SearchBox from "../ui/SearchBox";
import MobileMenu from "./MobileMenu";

export function Logo({ className = "h-10 w-auto" }) {
  return (
    <img
      src={site.logoTrimmed}
      alt={`${site.name} logo`}
      width="901"
      height="439"
      className={className}
      decoding="async"
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_1px_0_0_var(--color-line),0_8px_24px_-16px_rgba(4,27,54,0.18)]" : ""}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-navy-950 font-semibold">
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center gap-4 lg:h-[4.5rem]">
        <Link to="/" className="shrink-0" aria-label={`${site.name} — home`}>
          <Logo className="h-10 w-auto sm:h-12" />
        </Link>

        <nav aria-label="Main" className="ml-2 hidden xl:block">
          <ul className="flex items-center">
            {navLinks.map((l) => (
              <li key={l.to} className={l.children ? "group relative" : ""}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-0.5 rounded-full px-2.5 py-2 text-[0.875rem] font-medium transition-colors ${
                      isActive ? "text-navy-900 font-semibold" : "text-ink-soft hover:text-navy-900"
                    }`
                  }
                  aria-haspopup={l.children ? "true" : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative">
                        {l.label}
                        {isActive && <span className="absolute -bottom-1.5 left-0 right-0 mx-auto h-0.5 w-4 rounded-full bg-brand" />}
                      </span>
                      {l.children && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />}
                    </>
                  )}
                </NavLink>
                {l.children && (
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="w-72 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-navy-950/10">
                      {l.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-panel focus:bg-panel focus:outline-none">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <SearchBox className="hidden w-60 2xl:block" />
          <Link to="/plan-your-trip" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Plan your trip
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full bg-panel text-navy-900 xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
    <MobileMenu open={open} onClose={close} />
    </>
  );
}
