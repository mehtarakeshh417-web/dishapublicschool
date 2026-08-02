import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Eye, Target, Mail, Linkedin, Phone } from "lucide-react";
import heroBg from "@/assets/gallery/campus-02.jpg.asset.json";
import directorImg from "@/assets/leadership/director-satinder-pal-singh.jpg.asset.json";
import managerImg from "@/assets/leadership/manager-placeholder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Disha Public School" },
      { name: "description", content: "The journey, vision and leadership of Disha Public School, Ferozepur — a CISCE-affiliated institution shaping young minds since 2018." },
      { property: "og:title", content: "About Us — Disha Public School" },
      { property: "og:description", content: "Journey, vision, mission and leadership of Disha Public School, Ferozepur." },
    ],
  }),
  component: About,
});

const milestones = [
  { year: "2018", title: "The Founding Vision", body: "Disha Public School opens its doors in Ferozepur with a promise to redefine holistic education in Punjab." },
  { year: "2021", title: "Smart Labs & Library", body: "State-of-the-art computer-aided learning lab and expanded library inaugurated, igniting curiosity." },
  { year: "2023", title: "Senior Secondary Wing", body: "Expansion to Grade 12 marks a decisive step toward end-to-end learning journeys." },
  { year: "2026", title: "CISCE Affiliation", body: "Formal affiliation to CISCE, New Delhi (Affiliation No. PU248) — a milestone recognising academic rigor." },
  { year: "2026", title: "A Growing Family", body: "Thousands of alumni now leading in medicine, engineering, defence, arts and enterprise." },
  { year: "2026", title: "A New Chapter", body: "Continued investment in future-ready pedagogy, wellness and global exposure." },
];

const leadership = [
  { name: "Satinder Pal Singh", role: "Director", image: directorImg.url, bio: "Champions a partnership between school and parents — nurturing confident, responsible, compassionate individuals through quality education and strong values." },
  { name: "Pimar Deep Kaur", role: "Manager", image: managerImg, bio: "Believes a child's growth is strongest when parents and teachers work together — committed to a caring, disciplined and inspiring learning environment." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A journey rooted in purpose."
        subtitle="From a single classroom in 2018 to a beloved institution shaping thousands of young lives — Disha's story is one of quiet, patient excellence."
        bgImage={heroBg.url}
      />

      {/* JOURNEY / TIMELINE */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold/60" />
              Our Journey
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-royal">Milestones that defined us.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">A quiet chronicle of vision, growth and excellence — from a single classroom to a flourishing institution.</p>
          </div>

          <div className="relative mt-20 md:mt-28">
            {/* central glowing line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/30 to-transparent blur-sm" />
            </div>

            <div className="space-y-14 md:space-y-24">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={m.title} delay={i * 80}>
                    <div className="relative flex flex-col md:flex-row md:items-center gap-8 md:gap-0">
                      {/* card */}
                      <div className={["md:w-1/2", isLeft ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16 md:text-left"].join(" ")}>
                        <div className={["group relative rounded-2xl bg-white border border-royal/5 p-8 md:p-10 shadow-luxe transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_-30px_rgba(11,37,69,0.45)] overflow-hidden", isLeft ? "md:rounded-br-[2.5rem]" : "md:rounded-bl-[2.5rem]"].join(" ")}>
                          {/* gold accent bar */}
                          <div className={["absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold-soft to-gold", isLeft ? "right-0" : "left-0"].join(" ")} />
                          {/* subtle gold corner glow */}
                          <div className={["absolute -top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 group-hover:opacity-70 opacity-40", isLeft ? "-right-20" : "-left-20"].join(" ")} />
                          <div className="relative">
                            <div className="inline-flex items-center gap-3">
                              <span className="font-serif text-3xl md:text-4xl text-gradient-gold">{m.year}</span>
                              <span className="hidden md:inline-block h-px w-10 bg-gold/40" />
                            </div>
                            <h3 className="mt-4 font-serif text-2xl md:text-3xl text-royal">{m.title}</h3>
                            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{m.body}</p>
                          </div>
                        </div>
                      </div>

                      {/* timeline node */}
                      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
                        <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gold/40 shadow-[0_0_30px_-5px_rgba(212,175,55,0.45)]">
                          <div className="h-3.5 w-3.5 rounded-full bg-gold" />
                          <div className="absolute inset-0 rounded-full border border-gold/30 animate-ping opacity-40" />
                        </div>
                      </div>

                      {/* empty spacer for alternating layout */}
                      <div className={["md:w-1/2", isLeft ? "md:order-2" : "md:order-1"].join(" ")} />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="bg-slate-soft py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-royal-gradient text-white p-12 h-full">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
              <Eye className="text-gold" size={36} />
              <h3 className="mt-6 font-serif text-4xl">Our Vision</h3>
              <div className="mt-4 h-px w-16 bg-gold" />
              <p className="mt-6 leading-relaxed text-white/80">
                To be a leading institution that nurtures confident, compassionate, and responsible individuals through quality education, innovation, and strong moral values, empowering every child to excel in life and contribute positively to society.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-white p-12 border border-royal/5 h-full shadow-luxe">
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-royal/10 blur-3xl" />
              <Target className="text-royal" size={36} />
              <h3 className="mt-6 font-serif text-4xl text-royal">Our Mission</h3>
              <div className="mt-4 h-px w-16 bg-gold" />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                To provide holistic, student-centered education that inspires excellence, creativity, lifelong learning, and strong ethical values in every child.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Leadership</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">The people behind the promise.</h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 max-w-4xl">
          {leadership.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-royal/5 transition-all duration-500 hover:shadow-luxe hover:-translate-y-1">
                <div className="aspect-[5/4] relative overflow-hidden bg-royal-gradient">
                  <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-6 bottom-6 flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" className="h-9 w-9 rounded-full bg-white/10 backdrop-blur grid place-items-center text-white hover:bg-gold hover:text-royal"><Linkedin size={15} /></a>
                    <a href="mailto:" className="h-9 w-9 rounded-full bg-white/10 backdrop-blur grid place-items-center text-white hover:bg-gold hover:text-royal"><Mail size={15} /></a>
                    <a href="tel:" className="h-9 w-9 rounded-full bg-white/10 backdrop-blur grid place-items-center text-white hover:bg-gold hover:text-royal"><Phone size={15} /></a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-serif text-xl text-royal">{p.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-gold mt-1">{p.role}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
