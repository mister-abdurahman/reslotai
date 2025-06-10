import AutoFinalCTA from "@/app/niches/auto-services/AutoFinalCTA";
import AutoHowItWorks from "@/app/niches/auto-services/AutoHowItWorks";
import AutoRevenueCalculator from "@/app/niches/auto-services/AutoRevenueCalculator";
import AutoTestimonials from "@/app/niches/auto-services/AutoTestimonials";
import BeautyFinalCTA from "@/app/niches/beauty/BeautyFinalCTA";
import BeautyHowItWorks from "@/app/niches/beauty/BeautyHowItWorks";
import BeautyRevenueCalculator from "@/app/niches/beauty/BeautyRevenueCalculator";
import BeautyTestimonials from "@/app/niches/beauty/BeautyTestimonials";
import DentalFinalCTA from "@/app/niches/dentist/DentalFinalCTA";
import DentalHowItWorks from "@/app/niches/dentist/DentalHowItWorks";
import DentalRevenueCalculator from "@/app/niches/dentist/DentalRevenueCalculator";
import DentalTestimonials from "@/app/niches/dentist/DentalTestimonials";
import TherapistFinalCTA from "@/app/niches/doctors/TherapistFinalCTA";
import TherapistHowItWorks from "@/app/niches/doctors/TherapistHowItWorks";
import TherapistRevenueCalculator from "@/app/niches/doctors/TherapistRevenueCalculator";
import TherapistTestimonials from "@/app/niches/doctors/TherapistTestimonials";
import FitnessFinalCTA from "@/app/niches/fitness/FitnessFinalCTA";
import FitnessHowItWorks from "@/app/niches/fitness/FitnessHowItWorks";
import FitnessRevenueCalculator from "@/app/niches/fitness/FitnessRevenueCalculator";
import FitnessTestimonials from "@/app/niches/fitness/FitnessTestimonials";
import LegalFinalCTA from "@/app/niches/legal/LegalFinalCTA";
import LegalHowItWorks from "@/app/niches/legal/LegalHowItWorks";
import LegalRevenueCalculator from "@/app/niches/legal/LegalRevenueCalculator";
import LegalTestimonials from "@/app/niches/legal/LegalTestimonials";
import PetFinalCTA from "@/app/niches/pet/PetFinalCTA";
import PetHowItWorks from "@/app/niches/pet/PetHowItWorks";
import PetRevenueCalculator from "@/app/niches/pet/PetRevenueCalculator";
import PetTestimonials from "@/app/niches/pet/PetTestimonials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeaseManagementHowItWorks from "@/app/niches/lease/LeaseManagementHowItWorks";
import LeaseRevenueCalculator from "@/app/niches/lease/LeaseRevenueCalculator";
import LeaseServicesTestimonials from "@/app/niches/lease/LeaseServicesTestimonials";
import LeaseServicesFinalCTA from "@/app/niches/lease/LeaseServicesFinalCTA";

export default async function NicheLanding({ params }: any) {
  const { niche } = await params;

  return (
    <div className="min-h-screen font-inter">
      {niche === "auto" && (
        <>
          <Header path={"auto"} />
          <main>
            <AutoHowItWorks />
            <AutoRevenueCalculator />
            {/* <AutoCompetitionSection /> */}
            <AutoTestimonials />
            {/* <AutoPricing /> */}
            {/* <AutoPDFDownload /> */}
            <AutoFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "beauty" && (
        <>
          <Header path={"beauty"} />
          <main>
            <BeautyHowItWorks />
            <BeautyRevenueCalculator />
            {/* <BeautyCompetitionSection /> */}
            <BeautyTestimonials />
            {/* <BeautyPricing /> */}
            {/* <BeautyPDFDownload /> */}
            <BeautyFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "dentist" && (
        <>
          <Header path={"dentist"} />
          <main>
            <DentalHowItWorks />
            <DentalRevenueCalculator />
            {/* <DentalCompetitionSection /> */}
            <DentalTestimonials />
            {/* <DentalPricing /> */}
            {/* <DentalPDFDownload /> */}
            <DentalFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "doctors" && (
        <>
          <Header path={"doctors"} />
          <main>
            <TherapistHowItWorks />
            <TherapistRevenueCalculator />
            {/* <TherapistCompetitionSection /> */}
            <TherapistTestimonials />
            {/* <TherapistPricing /> */}
            {/* <TherapistPDFDownload /> */}
            <TherapistFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "fitness" && (
        <>
          <Header path={"fitness"} />
          <main>
            <FitnessHowItWorks />
            <FitnessRevenueCalculator />
            {/* <FitnessCompetitionSection /> */}
            <FitnessTestimonials />
            {/* <FitnessPricing /> */}
            {/* <FitnessPDFDownload /> */}
            <FitnessFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "lease" && (
        <>
          <Header path={"lease"} />
          <main>
            <LeaseManagementHowItWorks />
            <LeaseRevenueCalculator />
            <LeaseServicesTestimonials />
            <LeaseServicesFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "legal" && (
        <>
          <Header path={"legal"} />
          <main>
            <LegalHowItWorks />
            <LegalRevenueCalculator />
            {/* <LegalCompetitionSection /> */}
            <LegalTestimonials />
            {/* <LegalPricing /> */}
            {/* <LegalPDFDownload /> */}
            <LegalFinalCTA />
          </main>
          <Footer />
        </>
      )}
      {niche === "pet" && (
        <>
          <Header path={"pet"} />
          <main>
            <PetHowItWorks />
            <PetRevenueCalculator />
            {/* <PetCompetitionSection /> */}
            <PetTestimonials />
            {/* <PetPricing /> */}
            {/* <PetPDFDownload /> */}
            <PetFinalCTA />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
