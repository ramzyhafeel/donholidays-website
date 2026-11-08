import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { X } from "lucide-react";
import { navLinks, site } from "../../data/site";
import SearchBox from "../ui/SearchBox";
import { createWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";
import { WhatsAppGlyph } from "../ui/Icon";

export default function MobileMenu({ open, onClose }) {
  const panel = useRef(null);
  const wa = createWhatsAppLink(whatsappMessages.general);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector("button")?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-50 xl:hidden ${open ? "visible" : "invisible"}`}
      aria-hidden={!open}
      inert={!open}
    >
      <div
        className={`absolute inset-0 bg-navy-950/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <img src={site.logoTrimmed} alt={`${site.name} logo`} width="901" height="439" className="h-8 w-auto" />
          <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-panel text-navy-900 hover:bg-brand-light transition-colors" aria-label="Close menu">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <SearchBox onNavigate={onClose} />
          <nav aria-label="Mobile" className="mt-5">
            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 font-display text-lg transition-colors ${
                        isActive ? "bg-brand-light text-navy-900 font-semibold border-l-4 border-brand" : "text-ink hover:bg-panel"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                  {l.children && (
                    <ul className="mb-1 ml-4 border-l-2 border-line pl-3">
                      {l.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to} onClick={onClose} className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-brand-light hover:text-navy-900 transition-colors">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="space-y-2 border-t border-line p-5">
          <Link to="/plan-your-trip" onClick={onClose} className="btn btn-primary w-full">
            Plan your trip
          </Link>
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
              <WhatsAppGlyph className="h-4 w-4" /> Chat on WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
