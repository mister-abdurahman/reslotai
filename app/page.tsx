import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PainPointSection from "@/components/PainPointSection";
import PricingSection from "@/components/PricingSection";
import ResultsSection from "@/components/ResultsSection";
import RevenueCalculator from "@/components/RevenueCalculator";
import Script from "next/script";

const homeschema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ReslotAI",
  url: "https://reslotai.com",
  logo: "https://reslotai.com/logo.png",
};

export default function Home() {
  return (
    <>
      <Script
        id="home-schema" // Unique ID for the script tag
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeschema) }}
      />
      <div className="min-h-screen font-inter">
        <Header />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <PainPointSection />
          <RevenueCalculator />
          <ResultsSection />
          <PricingSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
