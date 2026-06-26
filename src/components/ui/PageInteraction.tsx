"use client";

import { useEffect, useRef } from "react";

export default function PageInteraction({ children }: { children: React.ReactNode }) {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = scrollWrapperRef.current;
    if (!wrapper) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const setBodyHeight = () => {
      document.body.style.height = `${wrapper.getBoundingClientRect().height}px`;
    };

    const resizeObserver = new ResizeObserver(() => setBodyHeight());
    resizeObserver.observe(wrapper);

    const handleScroll = () => {
      targetY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetRotX = (e.clientY / window.innerHeight - 0.5) * -1.5;
      targetRotY = (e.clientX / window.innerWidth - 0.5) * 1.5;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    setTimeout(setBodyHeight, 100);
    setTimeout(setBodyHeight, 1000);

    let animationId: number;
    const render = () => {
      currentY += (targetY - currentY) * 0.08;
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      wrapper.style.transform = `translate3d(0, -${currentY}px, 0) perspective(2000px) rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;
      
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      document.body.style.height = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      <div 
        ref={scrollWrapperRef} 
        className="w-full pointer-events-auto origin-center will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
