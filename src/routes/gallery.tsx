import { asset } from "@/lib/asset";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import campus01 from "@/assets/gallery/campus-01.jpg.asset.json";
import campus02 from "@/assets/gallery/campus-02.jpg.asset.json";
import campus03 from "@/assets/gallery/campus-03.jpg.asset.json";
import campus04 from "@/assets/gallery/campus-04.jpg.asset.json";
import campus05 from "@/assets/gallery/campus-05.jpg.asset.json";
import campus06 from "@/assets/gallery/campus-06.jpg.asset.json";
import campus07 from "@/assets/gallery/campus-07.jpg.asset.json";
import campus08 from "@/assets/gallery/campus-08.jpg.asset.json";
import campus09 from "@/assets/gallery/campus-09.jpg.asset.json";
import events01 from "@/assets/gallery/events-01.jpg.asset.json";
import events02 from "@/assets/gallery/events-02.jpg.asset.json";
import events03 from "@/assets/gallery/events-03.jpg.asset.json";
import labBio01 from "@/assets/gallery/lab-bio-01.jpg.asset.json";
import labBio02 from "@/assets/gallery/lab-bio-02.jpg.asset.json";
import labBio03 from "@/assets/gallery/lab-bio-03.jpg.asset.json";
import labBio04 from "@/assets/gallery/lab-bio-04.jpg.asset.json";
import labChem01 from "@/assets/gallery/lab-chem-01.jpg.asset.json";
import labChem02 from "@/assets/gallery/lab-chem-02.jpg.asset.json";
import labChem03 from "@/assets/gallery/lab-chem-03.jpg.asset.json";
import labChem04 from "@/assets/gallery/lab-chem-04.jpg.asset.json";
import labChem05 from "@/assets/gallery/lab-chem-05.jpg.asset.json";
import labLibrary01 from "@/assets/gallery/lab-library-01.jpg.asset.json";
import labLibrary02 from "@/assets/gallery/lab-library-02.jpg.asset.json";
import labPhysics01 from "@/assets/gallery/lab-physics-01.jpg.asset.json";
import labPhysics02 from "@/assets/gallery/lab-physics-02.jpg.asset.json";
import labPhysics03 from "@/assets/gallery/lab-physics-03.jpg.asset.json";
import labPhysics04 from "@/assets/gallery/lab-physics-04.jpg.asset.json";
import labTech01 from "@/assets/gallery/lab-tech-01.jpg.asset.json";
import sports01 from "@/assets/gallery/sports-01.jpg.asset.json";
import sports02 from "@/assets/gallery/sports-02.jpg.asset.json";
import sports03 from "@/assets/gallery/sports-03.jpg.asset.json";
import sports04 from "@/assets/gallery/sports-04.jpg.asset.json";
import sports05 from "@/assets/gallery/sports-05.jpg.asset.json";
import sports06 from "@/assets/gallery/sports-06.jpg.asset.json";
import sports07 from "@/assets/gallery/sports-07.jpg.asset.json";
import sports08 from "@/assets/gallery/sports-08.jpg.asset.json";
import sports09 from "@/assets/gallery/sports-09.jpg.asset.json";

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

type Cat = "Campus" | "Sports" | "Labs" | "Events";
const filters: ("All" | Cat)[] = ["All", "Campus", "Sports", "Labs", "Events"];

type GalleryItem = {
  id: number;
  cat: Cat;
  caption: string;
  src: string;
  alt: string;
};

const items: GalleryItem[] = [
  { id: 1, cat: "Campus", caption: "School building and green campus lawn", src: asset(campus01), alt: "Disha Public School building with a large green lawn" },
  { id: 2, cat: "Campus", caption: "Panoramic view of the senior school block", src: asset(campus02), alt: "High-angle view of the Disha Public School campus building" },
  { id: 3, cat: "Campus", caption: "Disha Kindergarten entrance", src: asset(campus03), alt: "Entrance to the Disha Kindergarten building" },
  { id: 4, cat: "Campus", caption: "Learning corridor and classrooms", src: asset(campus04), alt: "Wide school corridor lined with classroom doors" },
  { id: 5, cat: "Campus", caption: "Kindergarten sports courtyard", src: asset(campus05), alt: "Staff near a badminton net in front of the kindergarten building" },
  { id: 6, cat: "Campus", caption: "Open lawn beside the main building", src: asset(campus06), alt: "Wide shot of the school building and lawn under a blue sky" },
  { id: 7, cat: "Campus", caption: "Kindergarten learning wing", src: asset(campus07), alt: "View of the school kindergarten area building" },
  { id: 8, cat: "Campus", caption: "Outdoor play court", src: asset(campus08), alt: "Staff standing near the school badminton net" },
  { id: 9, cat: "Campus", caption: "Health and care room", src: asset(campus09), alt: "Staff members in the school medical room" },
  { id: 10, cat: "Labs", caption: "Library mentoring session", src: asset(labLibrary01), alt: "Three staff members in the school library" },
  { id: 11, cat: "Labs", caption: "Chemistry laboratory", src: asset(labChem02), alt: "Wide shot of the chemistry laboratory" },
  { id: 12, cat: "Labs", caption: "Physics demonstration", src: asset(labPhysics01), alt: "Staff member demonstrating physics laboratory equipment" },
  { id: 13, cat: "Labs", caption: "Science practical setup", src: asset(labChem01), alt: "Science lab with beakers and equipment" },
  { id: 14, cat: "Labs", caption: "Biology models and specimens", src: asset(labBio01), alt: "Biology lab with anatomical heart and eye models" },
  { id: 15, cat: "Labs", caption: "Chemical apparatus practice", src: asset(labChem03), alt: "Laboratory with chemical apparatus" },
  { id: 16, cat: "Labs", caption: "Measurement and observation tools", src: asset(labTech01), alt: "Science lab with measuring instruments" },
  { id: 17, cat: "Labs", caption: "Library study area", src: asset(labLibrary02), alt: "Library study area with long benches" },
  { id: 18, cat: "Labs", caption: "Biology microscope station", src: asset(labBio02), alt: "Lab with biology models and microscope" },
  { id: 19, cat: "Labs", caption: "Anatomy learning charts", src: asset(labBio03), alt: "Science lab with human anatomy charts" },
  { id: 20, cat: "Labs", caption: "Physics lab review", src: asset(labPhysics02), alt: "Staff examining documents in a physics lab" },
  { id: 21, cat: "Labs", caption: "Student experiment showcase", src: asset(labChem04), alt: "Group of students performing a science experiment" },
  { id: 22, cat: "Labs", caption: "Physics equipment inspection", src: asset(labPhysics03), alt: "Staff members in a physics lab checking equipment" },
  { id: 23, cat: "Labs", caption: "Biology model explanation", src: asset(labBio04), alt: "Staff member explaining anatomy models in biology lab" },
  { id: 24, cat: "Labs", caption: "Advanced chemistry workspace", src: asset(labChem05), alt: "Chemistry lab with windows and equipment" },
  { id: 25, cat: "Labs", caption: "Physics faculty guidance", src: asset(labPhysics04), alt: "Staff member in a white coat in the physics lab" },
  { id: 26, cat: "Sports", caption: "Badminton court preparation", src: asset(sports01), alt: "Staff standing near an outdoor badminton net" },
  { id: 27, cat: "Sports", caption: "Volleyball practice", src: asset(sports02), alt: "Students playing volleyball on a school court" },
  { id: 28, cat: "Sports", caption: "Badminton on the grass court", src: asset(sports03), alt: "Students playing badminton on a grass court" },
  { id: 29, cat: "Sports", caption: "Sports activity observation", src: asset(sports04), alt: "Staff members observing a sports activity" },
  { id: 30, cat: "Sports", caption: "Badminton coaching moment", src: asset(sports05), alt: "Close-up of staff on the badminton court" },
  { id: 31, cat: "Sports", caption: "Field sports competition", src: asset(sports06), alt: "Students playing kabaddi or field sports" },
  { id: 32, cat: "Sports", caption: "Grass-field sports event", src: asset(sports07), alt: "Students participating in a sports event on a grass field" },
  { id: 33, cat: "Sports", caption: "Team challenge on the field", src: asset(sports08), alt: "Students in a field sports competition" },
  { id: 34, cat: "Sports", caption: "Volleyball before school murals", src: asset(sports09), alt: "Students playing volleyball in front of school murals" },
  { id: 35, cat: "Events", caption: "Examination hall readiness", src: asset(events01), alt: "Large exam hall with rows of desks" },
  { id: 36, cat: "Events", caption: "Outdoor student activity", src: asset(events02), alt: "Students sitting on grass during a school field event" },
  { id: 37, cat: "Events", caption: "Guest welcome ceremony", src: asset(events03), alt: "Students presenting a bouquet of flowers to guests" },
];

function Tile({ item, onOpen, aspect, priority }: { item: GalleryItem; onOpen: () => void; aspect: string; priority: boolean }) {
  return (
    <button
      onClick={onOpen}
      className={["group relative overflow-hidden rounded-2xl w-full text-left bg-muted shadow-[0_10px_40px_-25px_rgba(11,37,69,0.4)] hover:shadow-luxe transition-all duration-500", aspect].join(" ")}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
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
              <Tile item={it} aspect={aspects[idx % aspects.length]} priority={idx < 6} onOpen={() => setOpenIdx(idx)} />
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
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-royal shadow-luxe">
                <img src={it.src} alt={it.alt} className="absolute inset-0 h-full w-full object-contain" />
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
