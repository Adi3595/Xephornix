import Logo from "@/components/ui/Logo";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-32 px-4 md:px-16 bg-background relative border-t border-white/[0.05] overflow-hidden">
      <Logo className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-foreground/[0.02] pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="w-full md:w-1/2">
          <div className="inline-block px-3 py-1 mb-6 border border-forsythia/30 bg-forsythia/5 text-forsythia font-mono text-[10px] uppercase tracking-widest">
            ABOUT US
          </div>
          <h2 className="font-mono text-4xl md:text-6xl text-foreground uppercase font-bold tracking-tighter mb-6">
            Engineered for <br /><span className="text-foreground/40">Autonomy</span>
          </h2>
          <div className="w-12 h-[1px] bg-foreground/20 mb-8"></div>
          <p className="font-sans text-lg text-foreground/60 font-light leading-relaxed mb-6">
            Xephorix was founded by a collective of low-level systems engineers, cryptographers, and neural architects. We were exhausted by the bloated, high-latency orchestration layers that dominated the enterprise landscape.
          </p>
          <p className="font-sans text-lg text-foreground/60 font-light leading-relaxed">
            Our mission is simple: to build the fastest, most secure, and entirely decentralized execution engine on the planet. We don't just optimize code; we eliminate the operating system entirely.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="border border-white/10 bg-oceanic-noir/20 p-8 flex flex-col items-center justify-center text-center group hover:border-mystic-mint/30 transition-colors">
            <span className="font-mono text-4xl text-mystic-mint font-bold mb-2">0ms</span>
            <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Cold Starts</span>
          </div>
          <div className="border border-white/10 bg-oceanic-noir/20 p-8 flex flex-col items-center justify-center text-center group hover:border-forsythia/30 transition-colors">
            <span className="font-mono text-4xl text-forsythia font-bold mb-2">99.9%</span>
            <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Node Uptime</span>
          </div>
          <div className="border border-white/10 bg-oceanic-noir/20 p-8 flex flex-col items-center justify-center text-center group hover:border-white/30 transition-colors col-span-2">
            <span className="font-mono text-4xl text-foreground font-bold mb-2">1.2M+</span>
            <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Autonomous Executions Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
}
