import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorksSection from "@/components/HowItWorksSection";
import PainPointSection from "@/components/PainPointSection";
import PricingSection from "@/components/PricingSection";
import ResultsSection from "@/components/ResultsSection";
import RevenueCalculator from "@/components/RevenueCalculator";
import React from "react";

function page() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="pt-12 sm:pt-0">
        <HowItWorksSection />
        <PainPointSection />
        <RevenueCalculator />
        <ResultsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default page;
