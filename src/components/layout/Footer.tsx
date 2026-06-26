"use client";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/[0.05] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        <div className="font-mono text-7xl md:text-9xl text-foreground opacity-5 leading-none select-none tracking-tighter font-extrabold overflow-hidden">
          XEPHORIX
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-[10px] tracking-widest uppercase">
          <div className="space-y-4">
            <p className="text-forsythia font-bold">RESOURCES</p>
            <ul className="space-y-3 text-foreground/40">
              <li><a className="hover:text-foreground transition-colors" href="#">Documentation</a></li>
              <li><a className="hover:text-foreground transition-colors" href="#">API Resources</a></li>
              <li><a className="hover:text-foreground transition-colors" href="#">Network Status</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-forsythia font-bold">LEGAL</p>
            <ul className="space-y-3 text-foreground/40">
              <li><a className="hover:text-foreground transition-colors" href="#">Framework</a></li>
              <li><a className="hover:text-foreground transition-colors" href="#">Security</a></li>
              <li><a className="hover:text-foreground transition-colors" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest text-center md:text-left">
            © 2024 XEPHORIX SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-foreground/40 hover:text-forsythia transition-colors">terminal</span>
            <span className="material-symbols-outlined text-foreground/40 hover:text-forsythia transition-colors">hub</span>
            <span className="material-symbols-outlined text-foreground/40 hover:text-forsythia transition-colors">dns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
