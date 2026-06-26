"use client";

import React, { createContext, useContext, useState, useMemo } from "react";

// --- Types & Constants ---
type Currency = "USD" | "EUR" | "INR";
type BillingCycle = "monthly" | "annual";

const CURRENCY_SYMBOLS: Record<Currency, string> = { USD: "$", EUR: "€", INR: "₹" };
const CURRENCY_MULTIPLIERS: Record<Currency, number> = { USD: 1, EUR: 0.92, INR: 83.5 };
const ANNUAL_DISCOUNT = 0.8; // 20% discount

// --- Context ---
interface PricingState {
  currency: Currency;
  cycle: BillingCycle;
  setCurrency: (c: Currency) => void;
  setCycle: (c: BillingCycle) => void;
}

const PricingContext = createContext<PricingState | null>(null);

function usePricing() {
  const ctx = useContext(PricingContext);
  if (!ctx) throw new Error("usePricing must be used within PricingProvider");
  return ctx;
}

// --- Isolated State Provider ---
function PricingProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  const value = useMemo(() => ({
    currency, cycle, setCurrency, setCycle
  }), [currency, cycle]);

  return <PricingContext.Provider value={value}>{children}</PricingContext.Provider>;
}

// --- Controls (Rerenders only when state changes) ---
const PricingControls = React.memo(function PricingControls() {
  const { currency, cycle, setCurrency, setCycle } = usePricing();

  return (
    <div className="text-center mb-16">
      <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase mb-6 font-bold tracking-tighter">
        SYSTEM_ACCESS
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="inline-flex border border-white/10 p-1 bg-oceanic-noir/20">
          {(["monthly", "annual"] as BillingCycle[]).map((c) => (
            <button
              key={c}
              onClick={() => setCycle(c)}
              className={`px-6 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                cycle === c 
                  ? "bg-foreground text-background" 
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        
        <div className="inline-flex border border-white/10 p-1 bg-oceanic-noir/20">
          {(["USD", "EUR", "INR"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                currency === c 
                  ? "bg-foreground text-background" 
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {c} {CURRENCY_SYMBOLS[c]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

// --- Isolated Price Display (Only this text node rerenders) ---
const PriceDisplay = React.memo(function PriceDisplay({ basePriceUsd }: { basePriceUsd: number }) {
  const { currency, cycle } = usePricing();

  const price = useMemo(() => {
    let calculated = basePriceUsd * CURRENCY_MULTIPLIERS[currency];
    if (cycle === "annual") calculated *= ANNUAL_DISCOUNT;
    
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: currency === 'INR' ? 0 : 0
    }).format(calculated);
  }, [basePriceUsd, currency, cycle]);

  return (
    <div className="flex items-baseline gap-2 mb-8">
      <span className="font-mono text-3xl text-foreground">{CURRENCY_SYMBOLS[currency]}</span>
      <span className="font-mono text-6xl text-foreground font-bold tracking-tighter">{price}</span>
      <span className="font-mono text-[12px] text-foreground/40 uppercase tracking-widest">/MO</span>
    </div>
  );
});

// --- Static Card Components ---
interface CardProps {
  name: string;
  badge: string;
  basePriceUsd: number;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = React.memo(function PricingCard({ name, badge, basePriceUsd, features, highlighted }: CardProps) {
  return (
    <div 
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        e.currentTarget.style.transition = 'none';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        e.currentTarget.style.transition = 'all 0.3s ease-out';
      }}
      className={`p-8 relative overflow-hidden group ${
      highlighted 
        ? "border-2 border-forsythia bg-oceanic-noir/60" 
        : "border border-white/10 bg-background"
    }`}
    style={{ transition: 'all 0.3s ease-out' }}>
      {highlighted ? (
        <div className="absolute top-0 left-0 bg-forsythia text-oceanic-noir px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-widest">
          {badge}
        </div>
      ) : (
        <span className="absolute top-0 right-0 font-mono text-[10px] bg-white/5 px-3 py-1 text-foreground uppercase tracking-widest">
          {badge}
        </span>
      )}
      
      <p className={`font-mono text-[11px] uppercase mb-2 tracking-widest ${highlighted ? "text-foreground/80 mt-6" : "text-foreground/40"}`}>
        {name}
      </p>
      
      <PriceDisplay basePriceUsd={basePriceUsd} />
      
      <ul className="space-y-4 mb-10 font-sans text-base text-foreground/70 font-light">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
            {feat}
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 font-mono text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
        highlighted
          ? "bg-forsythia text-oceanic-noir shadow-[0_0_20px_rgba(255,200,1,0.2)] hover:shadow-[0_0_30px_rgba(255,200,1,0.4)] hover:bg-[#ffdf93]"
          : "border border-forsythia text-foreground hover:bg-forsythia hover:text-oceanic-noir"
      }`}>
        {highlighted ? "START_ENTERPRISE" : "CHOOSE_PROTOCOL"}
      </button>
    </div>
  );
});

// --- Main Export (Static, never rerenders on state change) ---
export default function PricingMatrix() {
  const tiers = [
    {
      name: "Developer",
      badge: "Standard",
      basePriceUsd: 49,
      features: [
        "100 Global Nodes",
        "Basic Neural Fabric",
        "24h Log Retention"
      ]
    },
    {
      name: "Enterprise",
      badge: "RECOMMENDED",
      basePriceUsd: 499,
      highlighted: true,
      features: [
        "Unlimited Global Nodes",
        "Custom Neural Training",
        "Cold Storage Integration"
      ]
    }
  ];

  return (
    <section className="py-32 px-4 md:px-16 bg-oceanic-noir/10">
      <div className="max-w-4xl mx-auto">
        <PricingProvider>
          <PricingControls />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </PricingProvider>
      </div>
    </section>
  );
}
