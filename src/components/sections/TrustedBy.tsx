"use client";

export default function TrustedBy() {
  const companies = [
    "QUANTUM_SYS",
    "NEURAL_DYNAMICS",
    "VERTEX_LABS",
    "CORE_FOUNDRY",
    "OMEGA_STREAM"
  ];

  return (
    <section className="py-12 border-y border-white/[0.05] bg-background overflow-hidden relative">
      {/* Decorative gradient masks for smooth fade at edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <div className="overflow-hidden">
        <div className="marquee flex gap-16 items-center">
          {/* First set */}
          {companies.map((company, idx) => (
            <span key={`set1-${idx}`} className="font-mono text-2xl text-foreground/40 uppercase tracking-tighter font-bold">
              {company}
            </span>
          ))}
          {/* Duplicate set for infinite scrolling */}
          {companies.map((company, idx) => (
            <span key={`set2-${idx}`} className="font-mono text-2xl text-foreground/40 uppercase tracking-tighter font-bold">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
