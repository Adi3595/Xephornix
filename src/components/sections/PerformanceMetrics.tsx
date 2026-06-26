export default function PerformanceMetrics() {
  return (
    <section className="py-32 px-4 md:px-16 bg-background relative border-y border-white/[0.05]">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase mb-16 text-center font-bold tracking-tighter">
          INTELLIGENCE_QUOTIENT
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          
          {/* Circular Chart Representation */}
          <div className="relative w-64 h-64 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90 reveal-up">
              <circle className="text-white/10" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="2"></circle>
              {/* Note: 2 * PI * 110 = 691.15. 98% of 691.15 = 677. Offset = 691 - 677 = 14 */}
              <circle 
                className="text-forsythia transition-all duration-1000 ease-out" 
                cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" 
                strokeDasharray="691" strokeDashoffset="14" strokeWidth="3"
                style={{ filter: "drop-shadow(0px 0px 10px rgba(255, 200, 1, 0.4))" }}
              ></circle>
            </svg>
            <div className="absolute text-center flex flex-col items-center justify-center">
              <p className="font-mono text-6xl text-foreground font-bold tracking-tighter reveal-up" style={{animationDelay: '0.2s'}}>98<span className="text-4xl">%</span></p>
              <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em] mt-2 reveal-up" style={{animationDelay: '0.3s'}}>ACCURACY</p>
            </div>
          </div>
          
          <div className="w-full space-y-10 reveal-up" style={{animationDelay: '0.4s'}}>
            <div className="space-y-3">
              <div className="flex justify-between font-mono text-[11px] text-foreground/60 uppercase tracking-widest">
                <span>Processing Load</span>
                <span className="text-foreground">72%</span>
              </div>
              <div className="h-[2px] bg-white/10 w-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-deep-saffron transition-all duration-1000 ease-out" style={{width: '72%'}}></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between font-mono text-[11px] text-foreground/60 uppercase tracking-widest">
                <span>Node Reliability</span>
                <span className="text-foreground">99.99%</span>
              </div>
              <div className="h-[2px] bg-white/10 w-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-mystic-mint transition-all duration-1000 ease-out" style={{width: '99.99%'}}></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between font-mono text-[11px] text-foreground/60 uppercase tracking-widest">
                <span>Network Latency</span>
                <span className="text-foreground">1.2ms</span>
              </div>
              <div className="h-[2px] bg-white/10 w-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-forsythia transition-all duration-1000 ease-out" style={{width: '15%'}}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
