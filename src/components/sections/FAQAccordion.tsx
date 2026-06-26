"use client";

import { useState } from "react";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "How is data secured?",
      answer: "Our mesh utilizes quantum-resistant encryption across all node-to-node communications, ensuring data remains localized and sovereign. Memory spaces are physically isolated at the hardware level."
    },
    {
      question: "Can I deploy hybrid?",
      answer: "Yes. Xephorix supports hybrid deployments across on-premise hardware and our global decentralized node infrastructure. Custom VPC integration is available on Enterprise protocols."
    },
    {
      question: "What is the orchestration latency?",
      answer: "Average global latency is 1.2ms. The intelligence quotient dynamically routes tasks to the nearest idle compute cluster to ensure zero overhead."
    },
    {
      question: "Do you support custom LLM routing?",
      answer: "Absolutely. Our infrastructure allows you to specify inference endpoints or use our dynamic router to select the optimal model based on cost, latency, and context window requirements."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 md:px-16 border-t border-white/[0.05] bg-background">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase mb-16 text-center font-bold tracking-tighter">
          SYSTEM_QUERIES
        </h2>
        
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            
            return (
              <div key={idx} className="border-b border-white/10 group">
                <button 
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none" 
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                >
                  <span className={`font-mono text-lg md:text-xl uppercase tracking-tight transition-colors ${isActive ? 'text-forsythia' : 'text-foreground group-hover:text-foreground/80'}`}>
                    {faq.question}
                  </span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${isActive ? 'rotate-45 text-forsythia' : 'text-foreground/40'}`}>
                    add
                  </span>
                </button>
                
                <div className={`
                  transition-all duration-300 ease-in-out overflow-hidden
                  ${isActive ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <p className="font-sans text-base text-foreground/60 font-light max-w-3xl leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
