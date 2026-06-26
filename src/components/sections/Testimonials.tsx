"use client";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Xephorix has fundamentally redefined how we approach autonomous compute. The brutalist simplicity of their API is matched only by the power of their node mesh.",
      name: "C. Sterling",
      role: "CTO, Vertex"
    },
    {
      quote: "The latency benchmarks we've seen on the 1.A infrastructure are unparalleled. Zero-trust security that actually scales with neural demand.",
      name: "M. J. Aris",
      role: "Lead Architect, Core Foundry"
    },
    {
      quote: "Our autonomous models require sub-millisecond precision. Deploying on Xephorix decreased our orchestration overhead by 80% while increasing reliability.",
      name: "E. Vance",
      role: "VP Eng, Quantum Systems"
    }
  ];

  return (
    <section className="py-32 px-4 md:px-16 bg-background overflow-hidden max-w-7xl mx-auto">
      <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase mb-16 font-bold tracking-tighter text-center md:text-left">
        VOICES_OF_SYSTEM
      </h2>
      
      <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {testimonials.map((t, idx) => (
          <div key={idx} className="min-w-[85vw] md:min-w-[400px] snap-center border border-white/10 p-10 bg-oceanic-noir/20 shrink-0">
            <p className="font-sans text-xl md:text-2xl text-foreground/80 italic mb-10 font-light leading-relaxed">&quot;{t.quote}&quot;</p>
            
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-forsythia text-[24px]">person</span>
              </div>
              <div>
                <p className="font-mono text-[12px] text-forsythia uppercase tracking-widest mb-1">{t.name}</p>
                <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
