import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import BentoFeatureGrid from "@/components/sections/BentoFeatureGrid";
import PlatformShowcase from "@/components/sections/PlatformShowcase";
import PricingMatrix from "@/components/sections/PricingMatrix";
import PerformanceMetrics from "@/components/sections/PerformanceMetrics";
import Testimonials from "@/components/sections/Testimonials";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-oceanic-noir min-h-screen relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <BentoFeatureGrid />
      <PlatformShowcase />
      <PricingMatrix />
      <PerformanceMetrics />
      <Testimonials />
      <FAQAccordion />
      <FinalCTA />
      <Footer />
    </main>
  );
}
