import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import ResultsSection from "@/components/ResultsSection";
import RevenueCalculator from "@/components/RevenueCalculator";
import React from "react";

function Pricing() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <PricingSection />
        <RevenueCalculator />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Pricing;
