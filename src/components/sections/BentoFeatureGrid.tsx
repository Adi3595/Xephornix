"use client";

import { useState } from "react";

const features = [
  {
    id: 1,
    num: "01",
    title: "Neural Infrastructure",
    description: "High-fidelity compute clusters optimized for massive parallelization and autonomous logic processing at sub-millisecond latency.",
    icon: "dns",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 2,
    num: "02",
    title: "Autonomous Workflows",
    description: "Self-healing pipelines that adapt to network fluctuations and computational demands without human intervention.",
    icon: "psychology",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 3,
    num: "03",
    title: "Global Node Mesh",
    description: "Localized intelligence clusters distributed globally to ensure zero-trust security and localized data sovereignty.",
    icon: "hub",
    span: "col-span-1 md:col-span-3 row-span-1",
  },
];

export default function BentoFeatureGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-16 bg-background relative z-10 max-w-7xl mx-auto w-full">
      <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase mb-12 border-b border-white/10 pb-4 font-bold tracking-tighter">
        CORE_CAPABILITIES
      </h2>
      
      {/* 
        Responsive Hybrid Layout
        Mobile: Flex Column (Accordion)
        Desktop: CSS Grid (Bento)
      */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{ perspective: "1000px" }}
      >
        {features.map((feature, index) => {
          const isActive = activeIndex === index;
          
          return (
            <div 
              key={feature.id}
              className={`
                group border border-white/10 overflow-hidden bg-oceanic-noir/30 relative transform-gpu
                ${feature.span}
                ${isActive ? 'border-forsythia/30 bg-oceanic-noir/60 shadow-[0_0_20px_rgba(255,200,1,0.05)] translate-z-10 scale-[1.02]' : 'hover:border-white/20 hover:rotate-x-[2deg] hover:rotate-y-[2deg]'}
              `}
              style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', transformStyle: "preserve-3d" }}
            >
              {/* Clickable Header for Mobile Accordion / Desktop Interaction */}
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none relative z-10" 
                onClick={() => setActiveIndex(isActive ? null : index)}
                style={{ transform: isActive ? 'translateZ(20px)' : 'translateZ(0px)', transition: 'transform 0.5s ease' }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] text-foreground/40 font-bold">{feature.num}</span>
                  <span className={`font-mono text-xl md:text-2xl uppercase tracking-tight font-bold transition-colors ${isActive ? 'text-forsythia' : 'text-foreground'}`}>
                    {feature.title}
                  </span>
                </div>
                
                {/* Accordion Icon (Visible on mobile, subtle interaction indicator on desktop) */}
                <span className={`material-symbols-outlined text-foreground/40 transition-transform duration-300 ${isActive ? 'rotate-180 text-forsythia' : ''}`}>
                  expand_more
                </span>
              </button>

              {/* Collapsible Content */}
              <div className={`
                px-6 pb-6 transition-all duration-500 ease-in-out grid relative z-10
                md:grid-rows-[1fr] md:opacity-100 md:h-full
                ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 md:opacity-100'}
              `}
              style={{ transform: isActive ? 'translateZ(30px)' : 'translateZ(0px)' }}
              >
                <div className="overflow-hidden h-full flex flex-col justify-between">
                  <p className="font-sans text-base text-foreground/50 mb-6 max-w-xl font-light">
                    {feature.description}
                  </p>
                  <div className="h-32 bg-background/50 backdrop-blur-sm border border-white/[0.05] flex items-center justify-center transition-all duration-300 group-hover:border-forsythia/20 relative overflow-hidden group-hover:shadow-[inset_0_0_20px_rgba(255,200,1,0.05)]">
                    <span className={`material-symbols-outlined text-4xl transition-all duration-500 relative z-10 ${isActive ? 'text-forsythia/60 scale-125' : 'text-foreground/30 group-hover:scale-110'}`}>
                      {feature.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
