import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-white/40 shadow-[0_4px_30px_-10px_rgba(11,37,69,0.15)]"
          : "backdrop-blur-md bg-white/40 border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 min-w-0 group">
            <div className="h-12 w-12 shrink-0 rounded-full ring-1 ring-gold/40 bg-white grid place-items-center overflow-hidden shadow-sm">
              <img src="https://res.cloudinary.com/dnqht9dkd/image/upload/v1784721230/disha_logo_xvzbhe.png" alt="Disha Public School logo" className="h-11 w-11 object-contain" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="font-serif text-[17px] font-semibold text-royal truncate">Disha Public School</span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium">The Right Direction</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={[
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-royal" : "text-royal/70 hover:text-royal",
                  ].join(" ")}
                >
                  {l.label}
                  <span
                    className={[
                      "absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500",
                      active ? "w-8 opacity-100" : "w-0 opacity-0",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-royal px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-navy transition shadow-luxe"
            >
              Enquire
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 ring-1 ring-royal/10 text-royal"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/40 bg-white/90 backdrop-blur-xl animate-fade">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col">
            {links.map((l) => {
              const active = l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={[
                    "py-3 border-b border-royal/5 text-base font-medium",
                    active ? "text-royal" : "text-royal/70",
                  ].join(" ")}
                >
                  <span className="mr-2 text-gold">{active ? "—" : ""}</span>
                  {l.label}
                </Link>
              );
            })}
            <Link to="/contact" className="mt-4 inline-flex justify-center rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white">
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
