import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Eye, Target, Mail, Linkedin, Phone, Landmark, Compass, Sparkles, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Disha Public School" },
      { name: "description", content: "The journey, vision and leadership of Disha Public School, Ferozepur — a CISCE-affiliated institution shaping young minds since 2002." },
      { property: "og:title", content: "About Us — Disha Public School" },
      { property: "og:description", content: "Journey, vision, mission and leadership of Disha Public School, Ferozepur." },
    ],
  }),
  component: About,
});

const milestones = [
  { year: "2018", title: "The Founding Vision", body: "Disha Public School opens its doors in Ferozepur with a promise to redefine holistic education in Punjab." },
  { year: "2019", title: "CISCE Affiliation", body: "Formal affiliation to CISCE, New Delhi (Affiliation No. PU248) — a milestone recognising academic rigor." },
  { year: "2021", title: "Smart Labs & Library", body: "State-of-the-art computer-aided learning lab and expanded library inaugurated." },
  { year: "2023", title: "Senior Secondary Wing", body: "Expansion to Grade 12 marks a decisive step toward end-to-end learning journeys." },
  { year: "2025", title: "A Growing Family", body: "Thousands of alumni now leading in medicine, engineering, defence, arts and enterprise." },
  { year: "2026", title: "A New Chapter", body: "Continued investment in future-ready pedagogy, wellness and global exposure." },
];

const leadership = [
  { name: "Dr. R. K. Sharma", role: "Principal", bio: "PhD in Education. Two decades of academic leadership across CBSE & CISCE institutions." },
  { name: "Mrs. Anita Malhotra", role: "Vice Principal — Academics", bio: "Curriculum architect. National-award educator championing inquiry-based learning." },
  { name: "Mr. Harjinder Singh", role: "Dean of Student Affairs", bio: "Guides the student council, wellness programs and inter-school engagements." },
  { name: "Dr. Simran Bhullar", role: "Head — Science Department", bio: "Advocate for hands-on STEM. Mentor of the school's award-winning robotics team." },
  { name: "Mr. Rajesh Verma", role: "Head — Humanities", bio: "Historian and debate coach. Guides Model UN and public-speaking initiatives." },
  { name: "Ms. Preeti Kaur", role: "Head — Fine & Performing Arts", bio: "Nurtures artistic voice across visual arts, music, theatre and dance." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A journey rooted in purpose."
        subtitle="From a single classroom in 2018 to a beloved institution shaping thousands of young lives — Disha's story is one of quiet, patient excellence."
      />

      {/* JOURNEY / TIMELINE */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Our Journey</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">Milestones that defined us.</h2>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:-translate-x-px" />
          <div className="space-y-16">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 60}>
                <div className={["relative flex flex-col md:flex-row md:items-center gap-6", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"].join(" ")}>
                  <div className="md:w-1/2 pl-14 md:pl-0 md:px-10">
                    <div className={["rounded-2xl bg-white border border-royal/5 p-8 shadow-luxe", i % 2 === 0 ? "md:text-right" : "md:text-left"].join(" ")}>
                      <div className="font-serif text-3xl text-gold">{m.year}</div>
                      <div className="mt-2 font-serif text-2xl text-royal">{m.title}</div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-4 w-4 rounded-full bg-royal ring-4 ring-gold/40" />
                  <div className="md:w-1/2" />
                </div>
              </Reveal>
            ))}
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
                To be the most respected school in the region — one where every graduate leaves rooted
                in values, restless in curiosity, and ready to lead in a world we cannot yet see.
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
                To deliver a rigorous CISCE curriculum enriched by inquiry, ethics and empathy —
                supported by exceptional teachers, thoughtful facilities and an unwavering commitment
                to each individual child.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Leadership & Faculty</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-royal">The people behind the promise.</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p, i) => {
            const icons = [Landmark, Compass, Sparkles, GraduationCap, Landmark, Sparkles];
            const Ico = icons[i % icons.length];
            return (
              <Reveal key={p.name} delay={i * 60}>
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-royal/5 transition-all duration-500 hover:shadow-luxe hover:-translate-y-1">
                  <div className="aspect-[5/4] bg-royal-gradient relative overflow-hidden">
                    <div className="absolute inset-0 grid place-items-center text-gold/40">
                      <Ico size={80} />
                    </div>
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
            );
          })}
        </div>
      </section>
    </>
  );
}
