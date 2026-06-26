import Image from "next/image";

export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#0A1218]">
      {/* 3D Deep Background Layer */}
      <div className="absolute inset-0 w-full h-full opacity-50 mix-blend-lighten transform scale-110">
        <Image 
          src="/images/bg.png" 
          alt="Neural Core Background" 
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      
      {/* Static Foreground Elements Layer */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[20%] left-[25%] w-[400px] h-[400px] bg-forsythia/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] bg-mystic-mint/5 rounded-full blur-[150px]" />
      </div>
      
      {/* Static Tech Overlays */}
      <div className="absolute inset-0 brutalist-grid opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-oceanic-noir/50 to-oceanic-noir" />
    </div>
  );
}
