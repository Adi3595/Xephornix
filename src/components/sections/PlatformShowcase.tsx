export default function PlatformShowcase() {
  return (
    <section className="py-20 px-4 md:px-16 bg-oceanic-noir/10 border-y border-white/[0.05] relative z-10 max-w-7xl mx-auto w-full">
      <div className="space-y-12 max-w-4xl mx-auto">
        
        <div className="flex items-end justify-between border-b border-white/10 pb-2">
          <h2 className="font-mono text-[12px] uppercase tracking-widest text-foreground/40 font-bold">
            System_Architecture
          </h2>
          <span className="font-mono text-[12px] text-forsythia font-bold">
            v2.4.0_STABLE
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-white/10 p-6 bg-oceanic-noir/30">
            <p className="font-mono text-[10px] text-foreground/40 uppercase mb-4 tracking-widest font-bold">LATENCY</p>
            <p className="font-mono text-4xl md:text-5xl text-foreground font-bold tracking-tighter">
              1.2<span className="text-xl md:text-2xl text-foreground/40 ml-1">MS</span>
            </p>
          </div>
          <div className="border border-white/10 p-6 bg-oceanic-noir/30">
            <p className="font-mono text-[10px] text-foreground/40 uppercase mb-4 tracking-widest font-bold">THROUGHPUT</p>
            <p className="font-mono text-4xl md:text-5xl text-foreground font-bold tracking-tighter">
              850<span className="text-xl md:text-2xl text-foreground/40 ml-1">TB/S</span>
            </p>
          </div>
        </div>

        {/* Terminal UI */}
        <div className="bg-background border border-white/10 font-mono text-[10px] md:text-[12px] p-6 overflow-hidden shadow-2xl">
          <div className="flex gap-2 mb-6">
            <div className="w-2.5 h-2.5 bg-white/20"></div>
            <div className="w-2.5 h-2.5 bg-white/20"></div>
            <div className="w-2.5 h-2.5 bg-white/20"></div>
          </div>
          <div className="space-y-2 opacity-80 font-light">
            <p className="text-forsythia">$ xephorix deploy --target=mesh-alpha</p>
            <p className="text-foreground/60">&gt;&gt; Initializing neural kernels...</p>
            <p className="text-foreground/60">&gt;&gt; Distributing nodes [324/324]</p>
            <p className="text-foreground/60">&gt;&gt; Synchronizing global state...</p>
            <p className="text-forsythia mt-4">&gt;&gt; DEPLOYMENT_SUCCESSFUL</p>
            <div className="w-2.5 h-4 bg-forsythia animate-pulse inline-block align-middle"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
