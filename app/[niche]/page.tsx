// app/[niche]/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AutoHeroSection from "../niches/auto-services/AutoHeroSection";
import AutoHowItWorks from "../niches/auto-services/AutoHowItWorks";
import AutoRevenueCalculator from "../niches/auto-services/AutoRevenueCalculator";
import AutoCompetitionSection from "../niches/auto-services/AutoCompetitionSection";
import AutoTestimonials from "../niches/auto-services/AutoTestimonials";
import AutoPricing from "../niches/auto-services/AutoPricing";
import AutoPDFDownload from "../niches/auto-services/AutoPDFDownload";
import AutoFinalCTA from "../niches/auto-services/AutoFinalCTA";
import BeautyHeroSection from "../niches/beauty/BeautyHeroSection";
import BeautyHowItWorks from "../niches/beauty/BeautyHowItWorks";
import BeautyRevenueCalculator from "../niches/beauty/BeautyRevenueCalculator";
import BeautyCompetitionSection from "../niches/beauty/BeautyCompetitionSection";
import BeautyTestimonials from "../niches/beauty/BeautyTestimonials";
import BeautyPricing from "../niches/beauty/BeautyPricing";
import BeautyPDFDownload from "../niches/beauty/BeautyPDFDownload";
import BeautyFinalCTA from "../niches/beauty/BeautyFinalCTA";
import DentalHeroSection from "../niches/dentist/DentalHeroSection";
import DentalHowItWorks from "../niches/dentist/DentalHowItWorks";
import DentalRevenueCalculator from "../niches/dentist/DentalRevenueCalculator";
import DentalCompetitionSection from "../niches/dentist/DentalCompetitionSection";
import DentalTestimonials from "../niches/dentist/DentalTestimonials";
import DentalPricing from "../niches/dentist/DentalPricing";
import DentalPDFDownload from "../niches/dentist/DentalPDFDownload";
import DentalFinalCTA from "../niches/dentist/DentalFinalCTA";
import TherapistHeroSection from "../niches/doctors/TherapistHeroSection";
import TherapistHowItWorks from "../niches/doctors/TherapistHowItWorks";
import TherapistRevenueCalculator from "../niches/doctors/TherapistRevenueCalculator";
import TherapistCompetitionSection from "../niches/doctors/TherapistCompetitionSection";
import TherapistTestimonials from "../niches/doctors/TherapistTestimonials";
import TherapistPricing from "../niches/doctors/TherapistPricing";
import TherapistPDFDownload from "../niches/doctors/TherapistPDFDownload";
import TherapistFinalCTA from "../niches/doctors/TherapistFinalCTA";
import FitnessHeroSection from "../niches/fitness/FitnessHeroSection";
import FitnessHowItWorks from "../niches/fitness/FitnessHowItWorks";
import FitnessRevenueCalculator from "../niches/fitness/FitnessRevenueCalculator";
import FitnessCompetitionSection from "../niches/fitness/FitnessCompetitionSection";
import FitnessTestimonials from "../niches/fitness/FitnessTestimonials";
import FitnessPricing from "../niches/fitness/FitnessPricing";
import FitnessPDFDownload from "../niches/fitness/FitnessPDFDownload";
import FitnessFinalCTA from "../niches/fitness/FitnessFinalCTA";
import LegalHeroSection from "../niches/legal/LegalHeroSection";
import LegalHowItWorks from "../niches/legal/LegalHowItWorks";
import LegalRevenueCalculator from "../niches/legal/LegalRevenueCalculator";
import LegalCompetitionSection from "../niches/legal/LegalCompetitionSection";
import LegalTestimonials from "../niches/legal/LegalTestimonials";
import LegalPricing from "../niches/legal/LegalPricing";
import LegalPDFDownload from "../niches/legal/LegalPDFDownload";
import LegalFinalCTA from "../niches/legal/LegalFinalCTA";
import PetHeroSection from "../niches/pet/PetHeroSection";
import PetHowItWorks from "../niches/pet/PetHowItWorks";
import PetRevenueCalculator from "../niches/pet/PetRevenueCalculator";
import PetCompetitionSection from "../niches/pet/PetCompetitionSection";
import PetTestimonials from "../niches/pet/PetTestimonials";
import PetPricing from "../niches/pet/PetPricing";
import PetPDFDownload from "../niches/pet/PetPDFDownload";
import PetFinalCTA from "../niches/pet/PetFinalCTA";
import LeasingCompetitionSection from "@/components/LeasingCompetitionSection";
import LeaseManagementHeroSection from "../niches/lease/LeaseManagementHeroSection";
import LeaseManagementHowItWorks from "../niches/lease/LeaseManagementHowItWorks";
import LeaseRevenueCalculator from "../niches/lease/LeaseRevenueCalculator";
import LeaseServicesTestimonials from "../niches/lease/LeaseServicesTestimonials";
import LeaseServicesPricing from "../niches/lease/LeaseServicesPricing";
import LeaseServicesPDFDownload from "../niches/lease/LeaseServicesPDFDownload";
import LeaseServicesFinalCTA from "../niches/lease/LeaseServicesFinalCTA";

// const content: Record<string, { title: string; subtitle: string }> = {
//   fitness: {
//     title: "Boost Your Fitness Business",
//     subtitle: "Get more clients with tailored marketing.",
//   },
//   legal: {
//     title: "Grow Your Legal Practice",
//     subtitle: "Convert leads into clients with ease.",
//   },
//   default: {
//     title: "Welcome to Our Platform",
//     subtitle: "Choose your niche to get started.",
//   },
// };

export default async function NicheLanding({ params }: any) {
  const { niche } = await params;

  //   const data = content[niche] || content["default"];

  return (
    <div className="min-h-screen font-inter">
      {niche === "auto" && (
        <>
          <Header path={"auto"} />
          <main>
            <AutoHeroSection />
            <AutoHowItWorks />
            <AutoRevenueCalculator />
            <AutoCompetitionSection />
            <AutoTestimonials />
            <AutoPricing />
            <AutoPDFDownload />
            <AutoFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "beauty" && (
        <>
          <Header path={"beauty"} />
          <main>
            <BeautyHeroSection />
            <BeautyHowItWorks />
            <BeautyRevenueCalculator />
            <BeautyCompetitionSection />
            <BeautyTestimonials />
            <BeautyPricing />
            <BeautyPDFDownload />
            <BeautyFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "dentist" && (
        <>
          <Header path={"dentist"} />
          <main>
            <DentalHeroSection />
            <DentalHowItWorks />
            <DentalRevenueCalculator />
            <DentalCompetitionSection />
            <DentalTestimonials />
            <DentalPricing />
            <DentalPDFDownload />
            <DentalFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "doctors" && (
        <>
          <Header path={"doctors"} />
          <main>
            <TherapistHeroSection />
            <TherapistHowItWorks />
            <TherapistRevenueCalculator />
            <TherapistCompetitionSection />
            <TherapistTestimonials />
            <TherapistPricing />
            <TherapistPDFDownload />
            <TherapistFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "fitness" && (
        <>
          <Header path={"fitness"} />
          <main>
            <FitnessHeroSection />
            <FitnessHowItWorks />
            <FitnessRevenueCalculator />
            <FitnessCompetitionSection />
            <FitnessTestimonials />
            <FitnessPricing />
            <FitnessPDFDownload />
            <FitnessFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "lease" && (
        <>
          <Header path={"lease"} />
          <main>
            <LeaseManagementHeroSection />
            <LeaseManagementHowItWorks />
            <LeaseRevenueCalculator />
            <LeasingCompetitionSection />
            <LeaseServicesTestimonials />
            <LeaseServicesPricing />
            <LeaseServicesPDFDownload />
            <LeaseServicesFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "legal" && (
        <>
          <Header path={"legal"} />
          <main>
            <LegalHeroSection />
            <LegalHowItWorks />
            <LegalRevenueCalculator />
            <LegalCompetitionSection />
            <LegalTestimonials />
            <LegalPricing />
            <LegalPDFDownload />
            <LegalFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "pet" && (
        <>
          <Header path={"pet"} />
          <main>
            <PetHeroSection />
            <PetHowItWorks />
            <PetRevenueCalculator />
            <PetCompetitionSection />
            <PetTestimonials />
            <PetPricing />
            <PetPDFDownload />
            <PetFinalCTA />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
