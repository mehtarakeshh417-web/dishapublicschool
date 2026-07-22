import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/disha-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-royal-gradient text-white/85">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-white grid place-items-center overflow-hidden ring-1 ring-gold/40">
              <img src={logo.url} alt="Disha Public School" className="h-12 w-12 object-contain" />
            </div>
            <div>
              <div className="font-serif text-xl text-white">Disha Public School</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold">The Right Direction to Education</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            A CISCE-affiliated co-educational institution nurturing leaders since 2018.
            Rooted in Ferozepur, Punjab — devoted to academic excellence, character and community.
          </p>
        </div>

        <div>
          <div className="font-serif text-lg text-gold-soft">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/academics", l: "Academics" },
              { to: "/gallery", l: "Gallery" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}><Link to={i.to} className="hover:text-white transition">{i.l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-serif text-lg text-gold-soft">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 text-gold mt-0.5" /><span>Village Bagge Ke Pippal, PO Sherkhan, Ghall Khurd, Ferozepur, Punjab 152002</span></li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0 text-gold mt-0.5" /><span className="flex flex-wrap gap-x-1"><a href="tel:+919646100047" className="hover:text-white">+91 96461 00047</a><span className="text-white/40">·</span><a href="tel:+917526842244" className="hover:text-white">+91 75268 42244</a></span></li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0 text-gold mt-0.5" /><a href="mailto:disha0045272@gmail.com" className="hover:text-white break-all">disha0045272@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Disha Public School. All rights reserved.</div>
          <div>Affiliated to CISCE New Delhi · Affiliation No. PU248</div>
        </div>
      </div>
    </footer>
  );
}
