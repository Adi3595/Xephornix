"use client";
import Link from "next/link";

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
              <li><Link className="hover:text-foreground transition-colors" href="/docs">Documentation</Link></li>
              <li><Link className="hover:text-foreground transition-colors" href="/api-resources">API Resources</Link></li>
              <li><Link className="hover:text-foreground transition-colors" href="/status">Network Status</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-forsythia font-bold">COMPANY</p>
            <ul className="space-y-3 text-foreground/40">
              <li><Link className="hover:text-foreground transition-colors" href="/#network">About Us</Link></li>
              <li><a className="hover:text-foreground transition-colors" href="mailto:admin@xephorix.ai">Contact Us</a></li>
              <li><Link className="hover:text-foreground transition-colors" href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-forsythia font-bold">LEGAL</p>
            <ul className="space-y-3 text-foreground/40">
              <li><Link className="hover:text-foreground transition-colors" href="/terms">Terms & Conditions</Link></li>
              <li><Link className="hover:text-foreground transition-colors" href="/terms">Privacy Policy</Link></li>
              <li><Link className="hover:text-foreground transition-colors" href="/terms">Security & SOC 2</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest text-center md:text-left">
            © 2024 XEPHORIX SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase font-bold tracking-widest">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-forsythia transition-colors">INSTA</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-forsythia transition-colors">X</a>
            <a href="https://github.com/Adi3595/Xephornix" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-forsythia transition-colors">GITHUB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
