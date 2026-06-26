import InteractiveBackground from "@/components/ui/InteractiveBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center px-4 md:px-16 pt-32 pb-32 overflow-hidden bg-oceanic-noir">
      <InteractiveBackground />
      <div className="scanline z-0 pointer-events-none" />

      {/* Micro-details top corners */}
      <div className="absolute top-32 left-16 font-mono text-[10px] text-foreground/30 hidden md:block tracking-widest reveal-up" style={{animationDelay: '0.1s'}}>
        SYS_COORD: 47.6062° N, 122.3321° W<br />
        STATUS: ACTIVE_NODE
      </div>
      <div className="absolute top-32 right-16 font-mono text-[10px] text-foreground/30 hidden md:block text-right tracking-widest reveal-up" style={{animationDelay: '0.1s'}}>
        XPH_OS // V.2.4.99<br />
        [ORCHESTRATION_LAYER]
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Typography Block */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-10 relative">
          <div className="inline-flex items-center gap-3 font-mono text-[10px] text-foreground/60 uppercase tracking-[0.2em] mb-4 reveal-up" style={{animationDelay: '0.2s'}}>
            <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-pulse shadow-[0_0_8px_rgba(255,200,1,0.6)]"></span>
            System Online / V.2.4
          </div>
          <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tighter leading-[0.9] font-extrabold uppercase reveal-up" style={{animationDelay: '0.3s'}}>
            Power<br />
            <span className="font-light italic text-foreground/50 glitch-text" data-text="Autonomous">Autonomous</span><br />
            Intelligence
          </h1>
          <div className="w-12 h-[1px] bg-foreground/20 reveal-up" style={{animationDelay: '0.4s'}}></div>
          <p className="font-sans text-lg md:text-xl text-foreground/50 max-w-lg font-light leading-relaxed reveal-up" style={{animationDelay: '0.5s'}}>
            Enterprise AI workflow orchestration and neural infrastructure automation. Built for scale, engineered with obsessive precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto reveal-up" style={{animationDelay: '0.6s'}}>
            <button className="bg-foreground text-background font-mono text-[11px] px-8 py-4 hover:bg-foreground/90 transition-all uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-3 group">
              Start Building
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="bg-transparent border border-foreground/10 text-foreground/80 font-mono text-[11px] px-8 py-4 hover:bg-foreground/[0.02] hover:border-foreground/20 transition-all uppercase tracking-[0.15em] flex items-center justify-center gap-3">
              View Documentation
            </button>
          </div>
        </div>

        {/* Right Asymmetrical Graphic / Terminal */}
        <div className="w-full lg:w-[45%] relative mt-16 lg:mt-0 reveal-up" style={{animationDelay: '0.7s'}}>
          {/* Decorative structural lines behind terminal */}
          <div className="absolute -inset-4 border border-white/[0.02] -z-10 translate-y-4 translate-x-4"></div>
          <div className="absolute -inset-8 border border-white/[0.01] -z-10 translate-y-8 translate-x-8"></div>
          
          <div className="bg-oceanic-noir/60 backdrop-blur-xl border border-white/[0.05] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(17,76,90,0.1)] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="flex justify-between items-center px-5 py-3 border-b border-white/[0.03] bg-background/40">
              <div className="flex gap-2.5">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <div className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">xephorix-node-cluster</div>
              <div className="font-mono text-[9px] text-forsythia/60 uppercase tracking-widest flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">lock</span> SECURE
              </div>
            </div>
            
            <div className="p-8 font-mono text-[12px] text-white/70 leading-[2] h-[320px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none z-10"></div>
              
              <div className="flex gap-4 opacity-50 mb-2 text-[10px]">
                <span>[10:42:01.001]</span>
                <span>INFO</span>
              </div>
              <p className="text-white/90 font-light">&gt; Initializing neural pathways...</p>
              <p className="opacity-60 mt-1">&gt; Connecting to global mesh network... [OK]</p>
              <p className="opacity-60 mt-1">&gt; Allocating compute resources: 128 TFLOPS</p>
              <p className="opacity-60 mt-1">&gt; Starting orchestration engine v4.2.1</p>
              
              <div className="flex gap-4 mt-6 opacity-50 mb-2 text-[10px]">
                <span>[10:42:02.145]</span>
                <span className="text-forsythia">EXEC</span>
              </div>
              <p className="text-forsythia/90 font-medium tracking-wide">&gt; SYSTEM READY. Awaiting instructions_</p>
              <div className="w-2.5 h-[1.2em] bg-forsythia/70 animate-pulse mt-1 inline-block align-middle"></div>
              
              <div className="absolute bottom-4 right-4 text-[8px] text-white/20 text-right opacity-50 whitespace-pre">
                {`{
  "node": "ALPHA-7",
  "latency": "1.2ms",
  "threads": 1024
}`}
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-background border border-white/5 px-3 py-1.5 text-[9px] font-mono text-white/40 tracking-widest backdrop-blur-md">
            FIG. 1 / ORCHESTRATION TERMINAL
          </div>
        </div>
      </div>
    </section>
  );
}
