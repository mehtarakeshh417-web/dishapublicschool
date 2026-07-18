import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Disha Public School" },
      { name: "description", content: "Moments from campus life, sports, cultural events and academic labs at Disha Public School, Ferozepur." },
      { property: "og:title", content: "Gallery — Disha Public School" },
      { property: "og:description", content: "Moments from campus life, sports, culture and labs." },
    ],
  }),
  component: Gallery,
});

type Cat = "Campus" | "Sports" | "Cultural" | "Labs" | "Events";
const filters: ("All" | Cat)[] = ["All", "Campus", "Sports", "Cultural", "Labs", "Events"];

const captions: Record<Cat, string[]> = {
  Campus: ["Main entrance at dawn", "Central courtyard", "Library reading room", "Green lawns", "Assembly hall", "Cafeteria commons", "Learning corridors", "Rooftop garden"],
  Sports: ["Annual sports day", "Cricket practice", "Basketball championship", "Athletics finals", "Yoga session", "Football tournament", "Kabaddi finals", "Table tennis"],
  Cultural: ["Founder's Day gala", "Annual dance recital", "Music concert evening", "Punjabi Virasat Day", "Drama production", "Diwali celebration", "Republic Day parade", "Talent night"],
  Labs: ["Physics lab experiments", "Chemistry titrations", "Biology microscopy", "Computer science lab", "Robotics workshop", "Language lab", "Math resource centre", "STEM makerspace"],
  Events: ["Investiture ceremony", "Alumni homecoming", "Parent-teacher meet", "Convocation 2025", "Science fair", "Art exhibition", "Model UN summit", "Graduation ball"],
};

const palettes: Record<Cat, [string, string]> = {
  Campus: ["#0B2545", "#134074"],
  Sports: ["#134074", "#D4AF37"],
  Cultural: ["#0B2545", "#EEB902"],
  Labs: ["#134074", "#0B2545"],
  Events: ["#0B2545", "#D4AF37"],
};

const items = (() => {
  const arr: { id: number; cat: Cat; caption: string; a: string; b: string }[] = [];
  const cats: Cat[] = ["Campus", "Sports", "Cultural", "Labs", "Events"];
  for (let i = 0; i < 40; i++) {
    const cat = cats[i % cats.length];
    const cap = captions[cat][Math.floor(i / cats.length) % captions[cat].length];
    const [a, b] = palettes[cat];
    arr.push({ id: i, cat, caption: cap, a, b });
  }
  return arr;
})();

function Tile({ item, onOpen, aspect }: { item: typeof items[number]; onOpen: () => void; aspect: string }) {
  return (
    <button
      onClick={onOpen}
      className={["group relative overflow-hidden rounded-2xl w-full text-left shadow-[0_10px_40px_-25px_rgba(11,37,69,0.4)] hover:shadow-luxe transition-all duration-500", aspect].join(" ")}
      style={{ background: `linear-gradient(135deg, ${item.a}, ${item.b})` }}
    >
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 55%), radial-gradient(circle at 80% 80%, rgba(212,175,55,0.25), transparent 55%)" }} />
      <div className="absolute inset-0 grid place-items-center text-white/20 group-hover:text-white/30 transition-colors">
        <ImageIcon size={44} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-royal/90 via-royal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
        <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{item.cat}</div>
        <div className="mt-1 font-serif text-lg leading-tight">{item.caption}</div>
      </div>
      <div className="absolute top-3 left-3 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">{item.cat}</div>
    </button>
  );
}

function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const visible = useMemo(() => filter === "All" ? items : items.filter((i) => i.cat === filter), [filter]);

  const close = () => setOpenIdx(null);
  const prev = () => setOpenIdx((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
  const next = () => setOpenIdx((i) => (i === null ? null : (i + 1) % visible.length));

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  });

  // Masonry-ish varied aspects
  const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]"];

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Life, in frames."
        subtitle="A curated glimpse of everyday moments and milestones — from morning assemblies to championship trophies."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={[
                "rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all",
                filter === f
                  ? "bg-royal text-white shadow-luxe"
                  : "bg-white border border-royal/10 text-royal/70 hover:text-royal",
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {visible.map((it, idx) => (
            <div key={it.id} className="animate-fade">
              <Tile item={it} aspect={aspects[idx % aspects.length]} onOpen={() => setOpenIdx(idx)} />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {openIdx !== null && (() => {
        const it = visible[openIdx];
        return (
          <div className="fixed inset-0 z-[70] bg-royal/95 backdrop-blur-xl grid place-items-center p-4 md:p-10 animate-fade">
            <button onClick={close} aria-label="Close" className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-gold hover:text-royal text-white grid place-items-center transition"><X size={20} /></button>
            <button onClick={prev} aria-label="Previous" className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-gold hover:text-royal text-white grid place-items-center transition"><ChevronLeft size={22} /></button>
            <button onClick={next} aria-label="Next" className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-gold hover:text-royal text-white grid place-items-center transition"><ChevronRight size={22} /></button>
            <div className="w-full max-w-5xl">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-luxe" style={{ background: `linear-gradient(135deg, ${it.a}, ${it.b})` }}>
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(212,175,55,0.3), transparent 55%)" }} />
                <div className="absolute inset-0 grid place-items-center text-white/30"><ImageIcon size={90} /></div>
              </div>
              <div className="mt-6 flex items-center justify-between text-white">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.cat}</div>
                  <div className="mt-1 font-serif text-2xl">{it.caption}</div>
                </div>
                <div className="text-xs text-white/60">{openIdx + 1} / {visible.length}</div>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}
