"use client";

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 brutalist-grid opacity-10 pointer-events-none invert"></div>
      
      <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto">
        <h2 className="font-mono text-5xl md:text-8xl leading-[0.9] uppercase font-extrabold tracking-tighter">
          Build the <br/> Future of <br/> Autonomous <br/> Intelligence
        </h2>
        
        <button className="bg-background text-foreground px-10 py-5 font-mono text-[12px] uppercase tracking-[0.2em] hover:scale-105 transition-transform active:scale-95 font-bold shadow-2xl">
          INITIALIZE_SYSTEM
        </button>
      </div>
      
      {/* Radial Bloom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-64 bg-background blur-[100px] opacity-20 translate-y-32 pointer-events-none"></div>
    </section>
  );
}
