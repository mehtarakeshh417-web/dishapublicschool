import { asset } from "@/lib/asset";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Sparkles, Award, Users, GraduationCap, BookOpen, Trophy, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroImg1 from "@/assets/gallery/campus-02.jpg.asset.json";
import heroImg2 from "@/assets/gallery/campus-03.jpg.asset.json";
import heroImg3 from "@/assets/gallery/campus-06.jpg.asset.json";
import heroImg4 from "@/assets/gallery/campus-08.jpg.asset.json";
import heroImg5 from "@/assets/gallery/campus-09.jpg.asset.json";
import directorImg from "@/assets/leadership/director-satinder-pal-singh.jpg.asset.json";
import managerImg from "@/assets/leadership/pimar-deep-kaur.jpg.asset.json";

const heroSlides = [asset(heroImg1), asset(heroImg2), asset(heroImg3), asset(heroImg4), asset(heroImg5)];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Disha Public School — Nurturing Leaders, Inspiring Excellence" },
      { name: "description", content: "A CISCE-affiliated senior secondary school in Ferozepur, Punjab. Since 2018, Disha Public School has cultivated academic excellence, character and global citizenship." },
      { property: "og:title", content: "Disha Public School — Nurturing Leaders, Inspiring Excellence" },
      { property: "og:description", content: "A CISCE-affiliated senior secondary school in Ferozepur, Punjab. Since 2018, Disha Public School has cultivated academic excellence, character and global citizenship." },
    ],
  }),
  component: Home,
});

function useCounter(target: number, duration = 1800, active = true) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return v;
}

function StatBlock({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(true)), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = useCounter(value, 1800, active);
  return (
    <div ref={ref} className="relative group">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-slate-soft opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative rounded-2xl border border-royal/5 bg-white p-8 shadow-[0_10px_40px_-20px_rgba(11,37,69,0.15)] hover:-translate-y-1 transition-transform duration-500">
        <div className="font-serif text-5xl md:text-6xl text-royal">
          {n}
          <span className="text-gold">{suffix ?? ""}</span>
        </div>
        <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

const pillars = [
  { icon: Sparkles, title: "Excellence", body: "Uncompromising academic and personal standards, cultivated through mentorship and rigor." },
  { icon: Award, title: "Integrity", body: "A foundation of honesty and ethical character that guides every decision on and off campus." },
  { icon: BookOpen, title: "Innovation", body: "A future-ready curriculum blending inquiry, technology and creative expression." },
  { icon: Users, title: "Community", body: "A close-knit family of learners, families and educators building lifelong belonging." },
];

const testimonials = [
  { name: "Harpreet Kaur", role: "Parent, Grade 8", quote: "Disha has shaped my daughter's confidence and curiosity in ways we never imagined. The care from teachers is unmatched." },
  { name: "Arjun Singh", role: "Alumnus, Batch 2019", quote: "The values I carry today — discipline, empathy, ambition — were seeded on this campus. It's more than a school." },
  { name: "Manpreet Sidhu", role: "Parent, Grade 4", quote: "A rare institution where academic excellence and warmth co-exist. Every child feels genuinely seen." },
  { name: "Simran Bedi", role: "Alumna, Batch 2021", quote: "From smart classrooms to sports laurels, Disha gave me the launchpad to dream boldly and prepare deeply." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative rounded-3xl bg-white border border-royal/5 p-10 md:p-14 shadow-luxe overflow-hidden">
        <Quote className="absolute -top-2 -left-2 text-gold/20" size={140} />
        <div key={i} className="relative animate-fade">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-royal">
            "{t.quote}"
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-royal-gradient grid place-items-center text-gold-soft font-serif text-lg">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-royal">{t.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button aria-label="Previous" onClick={() => setI((n) => (n - 1 + testimonials.length) % testimonials.length)} className="h-10 w-10 rounded-full border border-royal/10 grid place-items-center text-royal hover:bg-royal hover:text-white transition"><ChevronLeft size={18} /></button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={["h-1.5 rounded-full transition-all", idx === i ? "w-8 bg-gold" : "w-2 bg-royal/20"].join(" ")} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
        <button aria-label="Next" onClick={() => setI((n) => (n + 1) % testimonials.length)} className="h-10 w-10 rounded-full border border-royal/10 grid place-items-center text-royal hover:bg-royal hover:text-white transition"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}

const leadershipMessages = [
  {
    role: "Director",
    name: "Satinder Pal Singh",
    image: asset(directorImg),
    label: "A Message from Director",
    quote: "At our school, we believe that education is a partnership between the school and parents. Together, we can nurture confident, responsible, and compassionate individuals through quality education, strong values, and holistic development.",
    body: "Your encouragement, involvement, and trust inspire us to provide a safe, engaging, and enriching learning environment where every child can discover their true potential. Let us continue working together to build a bright future for our children.",
  },
  {
    role: "Manager",
    name: "Pimar Deep Kaur",
    image: asset(managerImg),
    label: "A Message from Manager",
    quote: "A child's growth is strongest when parents and teachers work together. Your support, guidance, and regular communication with the school play a vital role in shaping your child's academic success and personal development.",
    body: "We remain committed to providing a caring, disciplined, and inspiring environment where every student can learn, grow, and excel. Together, let us create a strong foundation for our children's future.",
  },
];

function LeadershipMessages() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % leadershipMessages.length), 6000);
    return () => clearInterval(id);
  }, []);
  const m = leadershipMessages[i];
  return (
    <section className="bg-slate-soft py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl -rotate-2" />
              <div key={i} className="relative aspect-[4/5] rounded-3xl bg-royal-gradient overflow-hidden shadow-luxe animate-slide-in-left">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-royal to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{m.role}</div>
                  <div className="font-serif text-xl mt-1">{m.name}</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-3">
            <div key={i} className="animate-slide-in-right">
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold">{m.label}</div>
              <blockquote className="mt-5 font-serif text-2xl md:text-3xl lg:text-4xl text-royal leading-snug">
                "{m.quote}"
              </blockquote>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {m.body}
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="italic text-3xl text-royal">{m.name}</div>
                <div>
                  <div className="text-sm font-medium text-royal">{m.role}</div>
                  <div className="text-xs text-muted-foreground">Disha Public School</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-12 flex items-center justify-center gap-4">
          <button aria-label="Previous message" onClick={() => setI((n) => (n - 1 + leadershipMessages.length) % leadershipMessages.length)} className="h-10 w-10 rounded-full border border-royal/10 grid place-items-center text-royal hover:bg-royal hover:text-white transition"><ChevronLeft size={18} /></button>
          <div className="flex gap-2">
            {leadershipMessages.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} className={["h-1.5 rounded-full transition-all", idx === i ? "w-8 bg-gold" : "w-2 bg-royal/20"].join(" ")} aria-label={`Message ${idx + 1}`} />
            ))}
          </div>
          <button aria-label="Next message" onClick={() => setI((n) => (n + 1) % leadershipMessages.length)} className="h-10 w-10 rounded-full border border-royal/10 grid place-items-center text-royal hover:bg-royal hover:text-white transition"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((n) => (n + 1) % heroSlides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-royal text-white">
        {/* Carousel background */}
        <div className="absolute inset-0">
          {heroSlides.map((src, i) => (
            <div
              key={src}
              aria-hidden={i !== slide}
              className={[
                "absolute inset-0 transition-opacity duration-[1600ms] ease-in-out",
                i === slide ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <img
                src={src}
                alt=""
                className={[
                  "h-full w-full object-cover will-change-transform",
                  i === slide ? "animate-hero-kenburns" : "",
                ].join(" ")}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          {/* Luxe overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal/85 via-royal/70 to-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-royal/90 via-transparent to-royal/30" />
          <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gold/15 blur-3xl animate-float pointer-events-none" />
        </div>


        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full py-24 md:py-32">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">Est. 2018 · CISCE Affiliated</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] font-medium max-w-5xl">
              Nurturing Leaders,<br />
              <span className="text-gradient-gold italic">Inspiring Excellence.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-white/80 text-lg leading-relaxed">
              A distinguished co-educational institution in Ferozepur, Punjab, where academic rigor meets refined character —
              guiding young minds toward purposeful global futures since 2018.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/academics" className="group inline-flex items-center gap-3 rounded-full bg-white text-royal px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold hover:text-royal transition shadow-luxe">
                Explore Academy
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/gallery" className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-white/10 transition">
                <Play size={16} className="text-gold" /> Virtual Tour
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-8 right-6 md:right-10 flex items-center gap-2 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={["h-1.5 rounded-full transition-all", idx === slide ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"].join(" ")}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em]">
          <span>Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-16 md:-mt-24 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatBlock value={100} suffix="%" label="Success Rate" />
            <StatBlock value={25} suffix="+" label="Sports Laurels" />
            <StatBlock value={15} suffix=":1" label="Student · Teacher" />
            <StatBlock value={8} suffix="+" label="Years of Legacy" />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Our Pillars</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">Four values. One direction.</h2>
          <p className="mt-4 text-muted-foreground">The compass that steers every child, every classroom, every day.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 100}>
              <div className="group relative h-full rounded-2xl border border-royal/5 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe" style={{ perspective: 1200 }}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-royal-gradient grid place-items-center text-gold shadow-luxe">
                    <p.icon size={22} />
                  </div>
                  <div className="mt-6 font-serif text-2xl text-royal">{p.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <div className="mt-6 h-px w-10 bg-gold" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEADERSHIP MESSAGES */}
      <LeadershipMessages />

      {/* TESTIMONIALS */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Voices of Disha</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">Trusted by families for generations.</h2>
          </div>
          <div className="mt-16"><Testimonials /></div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-royal-gradient p-12 md:p-20 text-center text-white shadow-luxe">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
          <Trophy className="mx-auto text-gold" size={40} />
          <h3 className="mt-6 font-serif text-4xl md:text-5xl">Admissions Open · 2026-27</h3>
          <p className="mt-4 text-white/75 max-w-xl mx-auto">Reserve a campus visit and discover why families across Punjab entrust us with their children's future.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold text-royal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-white transition">
            Schedule a Visit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
