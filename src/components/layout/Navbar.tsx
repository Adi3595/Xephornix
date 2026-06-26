"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-none border border-white/[0.03] z-50 backdrop-blur-xl bg-background/40 flex justify-between items-center px-8 py-4 transition-all duration-500 ease-out hover:border-white/10 hover:bg-background/80">
      <div className="flex items-center gap-3">
        <Image src="/xephorix.svg" alt="Xephorix Logo" width={32} height={32} className="object-contain" />
        <div className="font-mono text-[16px] tracking-[0.1em] text-foreground uppercase font-bold flex items-center">
          XEPHORIX<span className="text-foreground/40 ml-1 font-light">AI</span>
        </div>
      </div>
      
      <nav className="hidden md:flex gap-10 items-center">
        {['Network', 'Infrastructure', 'Pricing', 'Docs'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="text-foreground/50 font-mono text-[10px] hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="text-foreground font-mono text-[10px] border border-white/10 px-5 py-2 hover:bg-foreground hover:text-background transition-all uppercase tracking-widest">
        Deploy Node
      </button>
    </header>
  );
}
