import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Disha Public School" },
      { name: "description", content: "Get in touch with Disha Public School, Ferozepur. Address, phone, email and admissions enquiries." },
      { property: "og:title", content: "Contact — Disha Public School" },
      { property: "og:description", content: "Address, phone, email and admissions enquiries." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20),
  subject: z.string().trim().min(2, "Subject required").max(120),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

function Field({ label, name, type = "text", value, onChange, error, textarea }: any) {
  const [focused, setFocused] = useState(false);
  const active = focused || value?.length > 0;
  const Cmp = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Cmp
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={textarea ? 4 : undefined}
        className={[
          "peer w-full rounded-xl bg-white border px-4 pt-6 pb-2 text-royal outline-none transition-all",
          textarea ? "min-h-32 resize-none" : "",
          error ? "border-destructive" : "border-royal/10 focus:border-gold focus:ring-4 focus:ring-gold/15",
        ].join(" ")}
        placeholder=" "
      />
      <label
        className={[
          "pointer-events-none absolute left-4 transition-all",
          active ? "top-1.5 text-[10px] uppercase tracking-[0.2em] text-gold" : "top-4 text-sm text-muted-foreground",
        ].join(" ")}
      >
        {label}
      </label>
      {error && <div className="mt-1.5 text-xs text-destructive">{error}</div>}
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const set = (k: string) => (e: any) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { map[i.path[0] as string] = i.message; });
      setErrors(map);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    toast.success("Message sent — we'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you."
        subtitle="Reach out for admissions, campus tours, or anything at all. A member of our team will respond within one working day."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid gap-12 lg:grid-cols-5">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: MapPin, title: "Campus", body: "Village Bagge Ke Pippal, PO Sherkhan, Ghall Khurd Block, Ferozepur, Punjab 152002" },
            { icon: Phone, title: "Phone", body: "+91 96461 00047  ·  +91 75268 42244", href: "tel:+919646100047" },
            { icon: Mail, title: "Email", body: "disha0045272@gmail.com", href: "mailto:disha0045272@gmail.com" },
            { icon: Clock, title: "Office Hours", body: "Mon–Sat · 8:00 AM to 3:30 PM" },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href ?? "#"}
              onClick={(e) => { if (!c.href) e.preventDefault(); }}
              className="group flex items-start gap-5 rounded-2xl bg-white border border-royal/5 p-6 hover:shadow-luxe transition-all"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-royal-gradient grid place-items-center text-gold group-hover:scale-110 transition-transform">
                <c.icon size={20} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{c.title}</div>
                <div className="mt-1 text-royal leading-relaxed break-words">{c.body}</div>
              </div>
            </a>
          ))}
        </div>

        {/* RIGHT — Form */}
        <div className="lg:col-span-3">
          <form onSubmit={submit} className="rounded-3xl bg-white border border-royal/5 p-8 md:p-10 shadow-luxe space-y-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Enquiry Form</div>
              <h3 className="mt-2 font-serif text-3xl text-royal">Send us a message</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" value={form.name} onChange={set("name")} error={errors.name} />
              <Field label="Email address" name="email" type="email" value={form.email} onChange={set("email")} error={errors.email} />
              <Field label="Phone" name="phone" value={form.phone} onChange={set("phone")} error={errors.phone} />
              <Field label="Subject" name="subject" value={form.subject} onChange={set("subject")} error={errors.subject} />
            </div>
            <Field label="Your message" name="message" textarea value={form.message} onChange={set("message")} error={errors.message} />

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 rounded-full bg-royal text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-navy transition disabled:opacity-70"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <>Send Message <Send size={15} className="group-hover:translate-x-1 transition-transform" /></>}
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-royal/5 shadow-luxe">
            <iframe
              title="Disha Public School — Ferozepur"
              src="https://www.google.com/maps?q=Ghall+Khurd+Ferozepur+Punjab&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
