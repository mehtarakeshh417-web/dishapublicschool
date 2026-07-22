import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BookOpen, Beaker, Cpu, Globe, HeartHandshake, Palette, Download, FileText, Calendar, ClipboardList, Check, GraduationCap, Trophy, Users, Sparkles, ArrowRight, Quote } from "lucide-react";

import campus01 from "@/assets/gallery/campus-01.jpg.asset.json";
import campus02 from "@/assets/gallery/campus-02.jpg.asset.json";
import campus03 from "@/assets/gallery/campus-03.jpg.asset.json";
import campus05 from "@/assets/gallery/campus-05.jpg.asset.json";
import campus07 from "@/assets/gallery/campus-07.jpg.asset.json";
import campus08 from "@/assets/gallery/campus-08.jpg.asset.json";
import campus09 from "@/assets/gallery/campus-09.jpg.asset.json";
import labBio01 from "@/assets/gallery/lab-bio-01.jpg.asset.json";
import labBio02 from "@/assets/gallery/lab-bio-02.jpg.asset.json";
import labChem01 from "@/assets/gallery/lab-chem-01.jpg.asset.json";
import labChem02 from "@/assets/gallery/lab-chem-02.jpg.asset.json";
import labChem04 from "@/assets/gallery/lab-chem-04.jpg.asset.json";
import labPhysics01 from "@/assets/gallery/lab-physics-01.jpg.asset.json";
import labPhysics02 from "@/assets/gallery/lab-physics-02.jpg.asset.json";
import labLibrary01 from "@/assets/gallery/lab-library-01.jpg.asset.json";
import labLibrary02 from "@/assets/gallery/lab-library-02.jpg.asset.json";
import events01 from "@/assets/gallery/events-01.jpg.asset.json";
import events03 from "@/assets/gallery/events-03.jpg.asset.json";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Disha Public School" },
      { name: "description", content: "A CISCE-aligned curriculum from Kindergarten through Senior Secondary. Smart labs, holistic programs and downloadable resources." },
      { property: "og:title", content: "Academics — Disha Public School" },
      { property: "og:description", content: "CISCE-aligned curriculum, smart labs and holistic programs." },
      { property: "og:image", content: campus02.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: campus02.url },
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
    image: campus07.url,
    stats: [{ k: "1:12", v: "Teacher Ratio" }, { k: "6", v: "Learning Zones" }],
  },
  Primary: {
    tag: "Grades 1-5",
    title: "Foundations of Thinking",
    body: "A rigorous yet nurturing environment where children discover the joy of reading, questioning and independent thought.",
    highlights: ["Reading & writing workshops", "Concrete-to-abstract mathematics", "Environmental studies & values", "Sports & performing arts"],
    image: labLibrary01.url,
    stats: [{ k: "1:18", v: "Teacher Ratio" }, { k: "12+", v: "Co-curriculars" }],
  },
  Secondary: {
    tag: "Grades 6-10",
    title: "Building the Scholar",
    body: "Rigorous CISCE preparation combined with leadership, service and creative pursuits that shape the whole learner.",
    highlights: ["ICSE-aligned coursework", "Smart labs — Science, Math & Language", "Model UN, debates & olympiads", "Career discovery workshops"],
    image: labChem01.url,
    stats: [{ k: "98%", v: "ICSE Pass Rate" }, { k: "24", v: "Elective Choices" }],
  },
  "Senior Secondary": {
    tag: "Grades 11-12",
    title: "Preparing for the World",
    body: "Streams in Science, Commerce and Humanities — with personalised counselling for university admissions and life beyond.",
    highlights: ["ISC-aligned streams", "One-on-one university counselling", "Research & capstone projects", "Internship & mentorship linkages"],
    image: labPhysics01.url,
    stats: [{ k: "3", v: "Streams" }, { k: "100%", v: "Counselling" }],
  },
} as const;

type Tier = keyof typeof tiers;

const features = [
  { icon: Cpu, title: "Smart Learning Labs", body: "Computer-aided classrooms that make every lesson interactive and inquiry-led.", image: labPhysics02.url },
  { icon: Beaker, title: "Science & Math Studios", body: "Dedicated hands-on laboratories from Grade 6 upwards for experimentation and discovery.", image: labChem02.url },
  { icon: BookOpen, title: "Reading Culture", body: "A curated library and daily reading rituals that grow lifelong readers.", image: labLibrary02.url },
  { icon: Globe, title: "Global Awareness", body: "Model UN, cultural exchanges and language enrichment build a worldly perspective.", image: events01.url },
  { icon: HeartHandshake, title: "Character & Wellness", body: "Structured mindfulness, values curriculum and counselling for emotional flourishing.", image: campus05.url },
  { icon: Palette, title: "Arts & Athletics", body: "Music, dance, theatre and 12+ sports disciplines — every child finds their spark.", image: events03.url },
];

const streams = [
  { name: "Science", tag: "PCM · PCB · PCMB", body: "Rigorous foundations in Physics, Chemistry, Biology and Mathematics — with research-led capstones and engineering / medical prep.", image: labPhysics01.url, subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"] },
  { name: "Commerce", tag: "With & without Maths", body: "Business studies, accountancy and economics paired with entrepreneurship electives and finance masterclasses.", image: labLibrary02.url, subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics"] },
  { name: "Humanities", tag: "The Liberal Arts", body: "History, political science, psychology and literature — for the future leaders, writers, lawyers and thinkers.", image: labLibrary01.url, subjects: ["History", "Political Science", "Psychology", "Sociology", "English Literature"] },
];

const dayInLife = [
  { time: "07:45", title: "Morning Assembly", body: "Thought for the day, mindfulness and community announcements." },
  { time: "08:15", title: "Core Academics", body: "Four inquiry-led periods — languages, math and sciences." },
  { time: "11:00", title: "Lab & Studio", body: "Rotational access to smart labs, library and performing arts." },
  { time: "13:00", title: "Nourish & Reset", body: "Balanced lunch in the dining hall and open-air play." },
  { time: "14:00", title: "Electives & Clubs", body: "Debate, robotics, music, MUN and 20+ interest circles." },
  { time: "15:30", title: "Sports & Fitness", body: "12+ disciplines across coached teams and free-play courts." },
];

const outcomes = [
  { k: "98%", v: "ICSE / ISC Pass Rate" },
  { k: "1:15", v: "Teacher : Student Ratio" },
  { k: "40+", v: "Board Distinctions" },
  { k: "12+", v: "Sports Disciplines" },
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
        subtitle="Rigorous, inquiry-driven, and refined for the modern world — our academic program grows with every child, from the first alphabet to the university admissions letter."
        bgImage={campus03.url}
      />

      {/* PHILOSOPHY */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Our Philosophy</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal leading-tight">Where inquiry meets <span className="italic text-gradient-gold">excellence.</span></h2>
            <div className="mt-6 h-px w-20 bg-gold" />
            <p className="mt-6 text-muted-foreground leading-relaxed">Every classroom at Disha is engineered around one belief — that a child learns best when challenged with care, guided with warmth, and trusted with responsibility.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[{ i: GraduationCap, l: "CISCE Aligned" }, { i: Sparkles, l: "Inquiry Led" }, { i: Users, l: "Small Cohorts" }, { i: Trophy, l: "Outcome Focused" }].map((x) => (
                <div key={x.l} className="flex items-center gap-3 rounded-xl border border-royal/10 bg-white p-4">
                  <div className="h-9 w-9 rounded-lg bg-royal-gradient grid place-items-center text-gold"><x.i size={16} /></div>
                  <div className="text-sm font-medium text-royal">{x.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="relative">
              <div className="grid grid-cols-6 grid-rows-6 gap-3 aspect-[6/5]">
                <div className="col-span-4 row-span-4 relative rounded-3xl overflow-hidden shadow-luxe">
                  <img src={campus01.url} alt="Campus" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="col-span-2 row-span-3 relative rounded-3xl overflow-hidden shadow-luxe">
                  <img src={labChem04.url} alt="Chemistry lab" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="col-span-2 row-span-3 relative rounded-3xl overflow-hidden shadow-luxe">
                  <img src={labBio01.url} alt="Biology lab" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="col-span-3 row-span-2 relative rounded-3xl overflow-hidden shadow-luxe">
                  <img src={labLibrary02.url} alt="Library" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="col-span-3 row-span-2 relative rounded-3xl bg-royal-gradient text-white p-6 flex flex-col justify-between shadow-luxe">
                  <Quote className="text-gold/60" size={28} />
                  <div className="text-sm md:text-base font-serif italic leading-snug">"Education is the kindling of a flame, not the filling of a vessel."</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 hidden md:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur border border-royal/10 shadow-luxe px-5 py-3">
                <div className="h-10 w-10 rounded-full bg-gold/20 grid place-items-center text-royal"><Trophy size={18} /></div>
                <div>
                  <div className="text-royal font-semibold text-sm">98% Pass Rate</div>
                  <div className="text-xs text-muted-foreground">ICSE / ISC 2025</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIERS */}
      <section className="relative bg-slate-soft py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">The Learning Journey</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">From first steps to the world.</h2>
            <p className="mt-4 text-muted-foreground">Four thoughtfully-designed stages, each honouring the child's evolving mind and heart.</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 md:gap-3 justify-center">
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
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-luxe group">
              <img src={t.image} alt={active} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-royal/85 via-royal/30 to-transparent" />
              <div className="absolute top-6 left-6 right-6 flex justify-between">
                {t.stats.map((s) => (
                  <div key={s.v} className="rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-luxe">
                    <div className="font-serif text-2xl text-royal">{s.k}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
                  </div>
                ))}
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
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Academic Features</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">Where excellence is engineered.</h2>
            </div>
            <p className="text-muted-foreground md:max-w-sm">Every facility, every ritual, every teacher — chosen to make learning unforgettable.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group relative rounded-2xl overflow-hidden border border-royal/5 bg-white h-full hover:shadow-luxe hover:-translate-y-1 transition-all duration-500">
                  <div className="relative h-52 overflow-hidden">
                    <img src={f.image} alt={f.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal/85 via-royal/20 to-transparent" />
                    <div className="absolute top-4 left-4 h-11 w-11 rounded-xl bg-white/95 backdrop-blur grid place-items-center text-royal shadow-luxe"><f.icon size={18} /></div>
                  </div>
                  <div className="p-6">
                    <div className="font-serif text-2xl text-royal">{f.title}</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SENIOR STREAMS */}
      <section className="relative bg-royal-gradient text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, rgba(212,175,55,0.35), transparent 45%), radial-gradient(circle at 85% 70%, rgba(238,185,2,0.25), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Senior Secondary Streams</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Choose your future.</h2>
            <p className="mt-4 text-white/70">Three ISC-aligned streams, each led by seasoned mentors and shaped by real-world exposure.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {streams.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-gold/40 transition-all h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img src={s.image} alt={s.name} className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[900ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal via-royal/40 to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{s.tag}</div>
                      <div className="font-serif text-3xl mt-1">{s.name}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-white/70 leading-relaxed">{s.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.subjects.map((sub) => (
                        <span key={sub} className="text-[10px] uppercase tracking-[0.15em] rounded-full border border-white/15 px-3 py-1 text-white/80">{sub}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DAY IN LIFE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe">
              <img src={campus08.url} alt="Campus life" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-royal/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">A Day at Disha</div>
                <div className="mt-2 font-serif text-3xl">Rhythms that build character.</div>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">A Day in the Life</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">Every hour, considered.</h2>
            <div className="mt-8 relative">
              <div className="absolute left-[68px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-royal/20 to-transparent" />
              <div className="space-y-5">
                {dayInLife.map((d, i) => (
                  <Reveal key={d.time} delay={i * 60}>
                    <div className="flex gap-5 items-start">
                      <div className="w-14 shrink-0 pt-1 font-serif text-xl text-royal tabular-nums">{d.time}</div>
                      <div className="relative shrink-0 mt-2">
                        <div className="h-3 w-3 rounded-full bg-gold ring-4 ring-gold/20" />
                      </div>
                      <div className="flex-1 rounded-2xl border border-royal/5 bg-white p-5 hover:shadow-luxe transition">
                        <div className="font-serif text-lg text-royal">{d.title}</div>
                        <p className="text-sm text-muted-foreground mt-1">{d.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative py-24 bg-slate-soft overflow-hidden">
        <img src={campus09.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">The Proof</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">Outcomes that speak.</h2>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
            {outcomes.map((o, i) => (
              <Reveal key={o.v} delay={i * 60}>
                <div className="rounded-3xl bg-white border border-royal/5 p-8 text-center hover:shadow-luxe transition h-full">
                  <div className="font-serif text-5xl text-gradient-gold">{o.k}</div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-royal/70">{o.v}</div>
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-royal-gradient text-white p-10 md:p-16 shadow-luxe">
          <img src={campus02.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal via-royal/85 to-royal/70" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Admissions Open</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Give your child a beginning worth remembering.</h2>
              <p className="mt-5 text-white/75 max-w-lg">Applications for the 2026-27 academic session are now open. Book a campus visit or request a call from our admissions team.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold text-royal px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold-soft transition">Book a Visit <ArrowRight size={14} /></a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white/10 transition">Talk to Admissions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
