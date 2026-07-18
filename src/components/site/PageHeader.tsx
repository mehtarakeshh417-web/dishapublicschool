export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-royal-gradient text-white">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.35), transparent 45%), radial-gradient(circle at 80% 60%, rgba(238,185,2,0.2), transparent 50%)",
      }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-8 bg-gold/60" />{eyebrow}<span className="h-px w-8 bg-gold/60" />
        </div>
        <h1 className="mt-6 font-serif text-4xl md:text-6xl font-medium">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl mx-auto text-white/75 text-base md:text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
