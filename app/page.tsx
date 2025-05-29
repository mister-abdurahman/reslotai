import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PainPointSection from "@/components/PainPointSection";
import PricingSection from "@/components/PricingSection";
import ResultsSection from "@/components/ResultsSection";
import RevenueCalculator from "@/components/RevenueCalculator";

export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <HeroSection />
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
