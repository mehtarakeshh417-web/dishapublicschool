import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BookOpen, Beaker, Cpu, Globe, HeartHandshake, Palette, Download, FileText, Calendar, ClipboardList, Check } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Disha Public School" },
      { name: "description", content: "A CISCE-aligned curriculum from Kindergarten through Senior Secondary. Smart labs, holistic programs and downloadable resources." },
      { property: "og:title", content: "Academics — Disha Public School" },
      { property: "og:description", content: "CISCE-aligned curriculum, smart labs and holistic programs." },
    ],
  }),
  component: Academics,
});

const tiers = {
  Kindergarten: {
    tag: "Ages 3-5",
    title: "The First Steps",
    body: "A joyful, play-based introduction to structured learning — where curiosity is celebrated and habits of the heart are formed.",
    highlights: ["Play-based literacy & numeracy", "Music, movement & storytelling", "Individualised learning plans", "Parent-teacher partnerships"],
  },
  Primary: {
    tag: "Grades 1-5",
    title: "Foundations of Thinking",
    body: "A rigorous yet nurturing environment where children discover the joy of reading, questioning and independent thought.",
    highlights: ["Reading & writing workshops", "Concrete-to-abstract mathematics", "Environmental studies & values", "Sports & performing arts"],
  },
  Secondary: {
    tag: "Grades 6-10",
    title: "Building the Scholar",
    body: "Rigorous CISCE preparation combined with leadership, service and creative pursuits that shape the whole learner.",
    highlights: ["ICSE-aligned coursework", "Smart labs — Science, Math & Language", "Model UN, debates & olympiads", "Career discovery workshops"],
  },
  "Senior Secondary": {
    tag: "Grades 11-12",
    title: "Preparing for the World",
    body: "Streams in Science, Commerce and Humanities — with personalised counselling for university admissions and life beyond.",
    highlights: ["ISC-aligned streams", "One-on-one university counselling", "Research & capstone projects", "Internship & mentorship linkages"],
  },
} as const;

type Tier = keyof typeof tiers;

const features = [
  { icon: Cpu, title: "Smart Learning Labs", body: "Computer-aided classrooms that make every lesson interactive and inquiry-led." },
  { icon: Beaker, title: "Science & Math Studios", body: "Dedicated hands-on laboratories from Grade 6 upwards for experimentation and discovery." },
  { icon: BookOpen, title: "Reading Culture", body: "A curated library and daily reading rituals that grow lifelong readers." },
  { icon: Globe, title: "Global Awareness", body: "Model UN, cultural exchanges and language enrichment build a worldly perspective." },
  { icon: HeartHandshake, title: "Character & Wellness", body: "Structured mindfulness, values curriculum and counselling for emotional flourishing." },
  { icon: Palette, title: "Arts & Athletics", body: "Music, dance, theatre and 12+ sports disciplines — every child finds their spark." },
];

const downloads = [
  { icon: Calendar, title: "Academic Calendar 2026-27", size: "1.2 MB · PDF" },
  { icon: FileText, title: "Curriculum & Syllabus Overview", size: "3.8 MB · PDF" },
  { icon: ClipboardList, title: "Admissions Prospectus", size: "5.1 MB · PDF" },
  { icon: FileText, title: "School Handbook & Policies", size: "2.4 MB · PDF" },
];

function DownloadRow({ item }: { item: typeof downloads[number] }) {
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const start = () => {
    if (state !== "idle") return;
    setState("loading");
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        const n = p + Math.random() * 18;
        if (n >= 100) { clearInterval(id); setState("done"); return 100; }
        return n;
      });
    }, 180);
  };
  return (
    <div className="group flex items-center gap-5 rounded-2xl border border-royal/5 bg-white p-5 md:p-6 hover:shadow-luxe transition-all">
      <div className="h-12 w-12 shrink-0 rounded-xl bg-royal-gradient grid place-items-center text-gold">
        <item.icon size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-royal truncate">{item.title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{item.size}</div>
        {state !== "idle" && (
          <div className="mt-3 h-1 w-full rounded-full bg-royal/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gold to-navy transition-all duration-200" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
      <button
        onClick={start}
        className={["shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition",
          state === "done" ? "bg-gold text-royal" : "bg-royal text-white hover:bg-navy",
        ].join(" ")}
      >
        {state === "done" ? <><Check size={14} /> Ready</> : state === "loading" ? "Downloading…" : <><Download size={14} /> Get</>}
      </button>
    </div>
  );
}

function Academics() {
  const [active, setActive] = useState<Tier>("Kindergarten");
  const t = tiers[active];
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="A curriculum crafted with care."
        subtitle="Rigorous, inquiry-driven, and refined over two decades — our academic program grows with every child, from the first alphabet to the university admissions letter."
      />

      {/* TIERS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {(Object.keys(tiers) as Tier[]).map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={[
                "rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all",
                active === k
                  ? "bg-royal text-white shadow-luxe"
                  : "bg-white border border-royal/10 text-royal/70 hover:text-royal",
              ].join(" ")}
            >
              {k}
            </button>
          ))}
        </div>

        <div key={active} className="mt-14 grid lg:grid-cols-2 gap-10 items-center animate-fade">
          <div className="relative aspect-[5/4] rounded-3xl bg-royal-gradient overflow-hidden shadow-luxe">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.25), transparent 55%)" }} />
            <div className="absolute inset-0 grid place-items-center">
              <BookOpen size={140} className="text-gold/30" />
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{t.tag}</div>
              <div className="font-serif text-3xl mt-1">{active}</div>
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">{t.tag}</div>
            <h3 className="mt-3 font-serif text-4xl text-royal">{t.title}</h3>
            <div className="mt-4 h-px w-16 bg-gold" />
            <p className="mt-6 text-muted-foreground leading-relaxed">{t.body}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-royal">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-gold/15 grid place-items-center text-gold"><Check size={14} /></div>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-soft py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Academic Features</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">Where excellence is engineered.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="rounded-2xl bg-white border border-royal/5 p-8 h-full hover:shadow-luxe hover:-translate-y-1 transition-all duration-500">
                  <div className="h-12 w-12 rounded-xl bg-royal-gradient grid place-items-center text-gold"><f.icon size={20} /></div>
                  <div className="mt-6 font-serif text-2xl text-royal">{f.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Download Center</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">Everything you'll need.</h2>
          <p className="mt-4 text-muted-foreground">Official documents for parents, prospective families and our school community.</p>
        </div>
        <div className="mt-12 space-y-4">
          {downloads.map((d) => (<DownloadRow key={d.title} item={d} />))}
        </div>
      </section>
    </>
  );
}
