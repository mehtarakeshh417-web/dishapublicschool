import { asset } from "@/lib/asset";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import {
  Clock,
  Sun,
  Snowflake,
  Shirt,
  ScrollText,
  Users,
  Wallet,
  ClipboardList,
  ShieldCheck,
  Handshake,
  Trophy,
  ArrowRight,
} from "lucide-react";

import campus02 from "@/assets/gallery/campus-02.jpg.asset.json";
import campus03 from "@/assets/gallery/campus-03.jpg.asset.json";
import campus07 from "@/assets/gallery/campus-07.jpg.asset.json";
import campus09 from "@/assets/gallery/campus-09.jpg.asset.json";
import labLibrary01 from "@/assets/gallery/lab-library-01.jpg.asset.json";
import labChem01 from "@/assets/gallery/lab-chem-01.jpg.asset.json";
import labPhysics01 from "@/assets/gallery/lab-physics-01.jpg.asset.json";
import sports02 from "@/assets/gallery/sports-02.jpg.asset.json";
import events01 from "@/assets/gallery/events-01.jpg.asset.json";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics & School Handbook — Disha Public School" },
      {
        name: "description",
        content:
          "Examination scheme, fee policy, school timings, uniform, rules and the four-house system at Disha Public School, Ferozepur.",
      },
      { property: "og:title", content: "Academics & School Handbook — Disha Public School" },
      {
        property: "og:description",
        content: "Examination weightage, fees, timings, uniform, school rules and house system.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: asset(campus02) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: asset(campus02) },
    ],
  }),
  component: Academics,
});

/* ---------------------------------- data --------------------------------- */

const terms = [
  { name: "Unit I", period: "April – May", weight: 10 },
  { name: "Unit II", period: "June", weight: 10 },
  { name: "Mid-Term", period: "July – September", weight: 20 },
  { name: "Unit III", period: "October – December", weight: 10 },
  { name: "Final-Term", period: "January – March", weight: 50 },
];

const feeRules = [
  "School fees must be deposited by the 10th of every month at the school fee counter.",
  "If the 10th falls on a Sunday, fees may be deposited on the 11th without any late fee.",
  "Any type of discount in the school fees is strictly prohibited by the school management.",
  "Parents are requested to collect the fee receipt for the fees paid at the fee counter.",
  "Students with fee dues will not be allowed to sit in the examination.",
];

const uniforms = {
  Summer: {
    icon: Sun,
    image: asset(campus07),
    rows: [
      {
        who: "Boys",
        text: "Red check shirt, navy blue pants, blue socks with white stripes, black shoes with laces, navy blue turban.",
      },
      {
        who: "Girls",
        text: "Red check shirt / kameez, navy blue skirt / salwar, blue socks with white stripes, black shoes with buckle, navy blue ribbons.",
      },
    ],
  },
  Winter: {
    icon: Snowflake,
    image: asset(campus03),
    rows: [
      {
        who: "Boys",
        text: "Red check shirt, navy blue pants, blue socks with white stripes, navy blue sweater with school logo, navy blue cap / turban.",
      },
      {
        who: "Girls",
        text: "Red check shirt, navy blue skirt with navy blue leggings, navy blue cap, blue socks with white stripes, navy blue sweater with school logo.",
      },
    ],
  },
  House: {
    icon: Trophy,
    image: asset(sports02),
    rows: [
      { who: "Boys", text: "House colour t-shirt, white pants, white socks, white fleet shoes, white turban." },
      { who: "Girls", text: "House colour t-shirt, white skirt, white socks, white fleet shoes, white ribbon." },
    ],
  },
} as const;

type UniformKey = keyof typeof uniforms;

const houses = [
  { name: "Bhagat Singh House", colour: "Red", hex: "#C0392B" },
  { name: "Rajguru House", colour: "Blue", hex: "#1F4E9C" },
  { name: "Sukhdev House", colour: "Yellow", hex: "#E1B12C" },
  { name: "Chandershekhar House", colour: "Green", hex: "#1E8449" },
];

const houseCategories = [
  { n: "01", label: "Primary", detail: "Nursery, LKG, UKG" },
  { n: "02", label: "Junior", detail: "Classes I – IV" },
  { n: "03", label: "Middle", detail: "Classes V – VII" },
  { n: "04", label: "Senior", detail: "Classes VIII – X" },
];

const schoolRules = [
  "Every student has to abide by the school rules; discipline and punctuality are a must.",
  "Students must bring their i-card and school diary to school daily.",
  "Students should brush their teeth, take a bath daily and be in neat, tidy uniform.",
  "No student is allowed in school without uniform — not even on birthdays, functions or extra classes.",
  "An application must be submitted to the class incharge for any day of absence.",
  "No student may leave the school premises except in a serious health case.",
  "Absence in a term examination is not compensated; a heavy fine may be imposed.",
  "Students should communicate in English within the school premises.",
  "Phones and expensive gadgets are strictly prohibited in the school premises.",
  "Bikes and motor vehicles are not allowed in school.",
  "Students must be punctual — late comers will be fined.",
  "Parents may not meet students during school timings (except serious health cases).",
  "No pocket money is allowed in school.",
];

const parentCooperation = [
  "Attend all parent–teacher meetings on the appointed dates.",
  "Enforce regularity and discipline by taking general interest in your child's progress.",
  "Check and sign your ward's diary daily.",
  "Kindly do not send your ward to private tuitions.",
  "Restrict the daily pocket money of your ward.",
  "Send your ward in a proper, neat and tidy uniform.",
];

/* -------------------------------- component ------------------------------- */

function Academics() {
  const [uniform, setUniform] = useState<UniformKey>("Summer");
  const active = uniforms[uniform];

  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="The School Handbook"
        subtitle="Everything that shapes a Disha day — the examination scheme, fee policy, timings, uniform, code of conduct and our four proud houses."
        bgImage={asset(labLibrary01)}
      />

      {/* Quick facts */}
      <section className="relative -mt-10 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-royal/10 bg-royal/10 shadow-[0_40px_100px_-45px_rgba(11,37,69,0.55)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "5", v: "Assessment Terms" },
              { k: "8 AM – 2 PM", v: "Summer Timings" },
              { k: "9 AM – 3 PM", v: "Winter Timings" },
              { k: "4", v: "School Houses" },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 90}>
                <div className="h-full bg-background px-6 py-8 text-center">
                  <div className="font-serif text-2xl md:text-3xl text-gradient-gold">{s.k}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Examination */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div>
                <SectionEyebrow icon={ClipboardList} label="Examination" />
                <h2 className="mt-5 font-serif text-3xl md:text-5xl text-royal">A year measured in five chapters</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  The school curriculum is divided into the following terms and units. The final evaluation is done on
                  the basis of the average of all the terms — promotion is decided on whole-year performance, which is
                  why regularity in work and performance matters so much.
                </p>
                <div className="mt-8 overflow-hidden rounded-2xl border border-royal/10">
                  <img src={asset(labChem01)} alt="Students working in the science laboratory" loading="lazy" className="h-56 w-full object-cover" />
                </div>
              </div>
            </Reveal>

            <div className="space-y-4">
              {terms.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <div className="group rounded-2xl border border-royal/10 bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_70px_-35px_rgba(11,37,69,0.45)]">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <div className="font-serif text-xl text-royal">{t.name}</div>
                        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.period}</div>
                      </div>
                      <div className="font-serif text-2xl text-gradient-gold">{t.weight}%</div>
                    </div>
                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-royal/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-royal to-gold transition-all duration-[1200ms]"
                        style={{ width: `${t.weight * 2}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timings + Fees */}
      <section className="bg-royal-gradient py-24 md:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/15 bg-white/5 p-8 md:p-10 backdrop-blur">
              <SectionEyebrow icon={Clock} label="School Timings" light />
              <div className="mt-8 space-y-5">
                {[
                  { icon: Sun, season: "Summer", time: "8:00 A.M. – 2:00 P.M." },
                  { icon: Snowflake, season: "Winter", time: "9:00 A.M. – 3:00 P.M." },
                ].map((s) => (
                  <div key={s.season} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.25em] text-gold">{s.season}</div>
                      <div className="mt-1 font-serif text-2xl">{s.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-white/60">
                Note — School timings are liable to change according to government orders or climate conditions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-white/15 bg-white/5 p-8 md:p-10 backdrop-blur">
              <SectionEyebrow icon={Wallet} label="Fees" light />
              <ol className="mt-8 space-y-5">
                {feeRules.map((r, i) => (
                  <li key={r} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs font-medium text-gold">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-white/75">{r}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Uniform */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionEyebrow icon={Shirt} label="Uniform" center />
              <h2 className="mt-5 font-serif text-3xl md:text-5xl text-royal">Worn with pride, every single day</h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {(Object.keys(uniforms) as UniformKey[]).map((k) => {
                const Icon = uniforms[k].icon;
                const on = k === uniform;
                return (
                  <button
                    key={k}
                    onClick={() => setUniform(k)}
                    className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition-all duration-500 ${
                      on
                        ? "border-gold bg-royal text-white shadow-[0_20px_45px_-25px_rgba(11,37,69,0.7)]"
                        : "border-royal/15 text-royal hover:border-gold/60"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {k} Uniform
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-12 grid overflow-hidden rounded-3xl border border-royal/10 bg-card shadow-[0_45px_110px_-55px_rgba(11,37,69,0.5)] lg:grid-cols-2">
              <div className="relative min-h-[280px]">
                <img key={active.image} src={active.image} alt={`${uniform} uniform reference`} loading="lazy" className="absolute inset-0 h-full w-full object-cover animate-fade-in" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/70 via-royal/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{uniform}</div>
                  <div className="font-serif text-2xl">Dress Code</div>
                </div>
              </div>
              <div className="divide-y divide-royal/10 p-8 md:p-10">
                {active.rows.map((r) => (
                  <div key={r.who} className="py-6 first:pt-0 last:pb-0">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{r.who}</div>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Every student should come to school in proper uniform. Students without uniform will be fined.",
                "Students should wear the House Uniform on Wednesday and Saturday.",
              ].map((n) => (
                <div key={n} className="flex gap-3 rounded-2xl border border-gold/30 bg-gold/5 p-5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-royal/80">{n}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* House system */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <img src={asset(campus09)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionEyebrow icon={Users} label="House System" center />
              <h2 className="mt-5 font-serif text-3xl md:text-5xl text-royal">Four houses, one spirit</h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                Students are divided into four houses named after India's freedom fighters. Each house is led by house
                prefects — one boy and one girl — with a teacher incharge. The school trophy is awarded to the best
                house on Annual Day, based on performance across all yearly activities.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {houses.map((h, i) => (
              <Reveal key={h.name} delay={i * 100}>
                <div
                  className="group relative h-full overflow-hidden rounded-3xl border border-royal/10 bg-card p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_90px_-40px_rgba(11,37,69,0.5)]"
                  style={{ borderTop: `4px solid ${h.hex}` }}
                >
                  <span
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                    style={{ background: h.hex }}
                  >
                    <Trophy className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl text-royal">{h.name}</h3>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{h.colour}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-14 rounded-3xl border border-royal/10 bg-card p-8 md:p-10">
              <p className="text-center text-muted-foreground leading-relaxed">
                To impart leadership qualities and promote healthy competition, school activities are organised on a
                house basis under four categories.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {houseCategories.map((c) => (
                  <div key={c.n} className="rounded-2xl border border-royal/10 bg-background p-6">
                    <div className="font-serif text-3xl text-gradient-gold">{c.n}</div>
                    <div className="mt-3 font-medium text-royal">{c.label}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{c.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* School rules */}
      <section className="bg-royal-gradient py-24 md:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionEyebrow icon={ScrollText} label="Code of Conduct" center light />
              <h2 className="mt-5 font-serif text-3xl md:text-5xl">School Rules</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {schoolRules.map((r, i) => (
              <Reveal key={r} delay={(i % 2) * 80}>
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-500 hover:border-gold/40">
                  <span className="mt-0.5 font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed text-white/75">{r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parents */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img src={asset(events01)} alt="Parents and teachers at a school gathering" loading="lazy" className="h-56 w-full rounded-2xl object-cover md:h-72" />
              <img src={asset(labPhysics01)} alt="Student in the physics laboratory" loading="lazy" className="mt-8 h-56 w-full rounded-2xl object-cover md:h-72" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionEyebrow icon={Handshake} label="Co-operation from Parents" />
              <h2 className="mt-5 font-serif text-3xl md:text-5xl text-royal">A partnership that shapes the child</h2>
              <ul className="mt-8 space-y-4">
                {parentCooperation.map((p) => (
                  <li key={p} className="flex gap-4 border-b border-royal/10 pb-4 last:border-0">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-muted-foreground leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SectionEyebrow({
  icon: Icon,
  label,
  center,
  light,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${light ? "bg-gold/20 text-gold" : "bg-royal/5 text-gold"}`}>
        <Icon className="h-4 w-4" />
      </span>
      <span className={`text-[11px] uppercase tracking-[0.35em] ${light ? "text-gold" : "text-royal/60"}`}>{label}</span>
    </div>
  );
}
