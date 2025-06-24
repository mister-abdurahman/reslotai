import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import ResultsSection from "@/components/ResultsSection";

function Results() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="pt-12 sm:pt-0">
        <ResultsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default Results;
