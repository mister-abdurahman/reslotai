import AutoFinalCTA from "@/app/niches/auto-services/AutoFinalCTA";
import AutoPDFDownload from "@/app/niches/auto-services/AutoPDFDownload";
import AutoPricing from "@/app/niches/auto-services/AutoPricing";
import AutoTestimonials from "@/app/niches/auto-services/AutoTestimonials";
import BeautyFinalCTA from "@/app/niches/beauty/BeautyFinalCTA";
import BeautyPDFDownload from "@/app/niches/beauty/BeautyPDFDownload";
import BeautyPricing from "@/app/niches/beauty/BeautyPricing";
import BeautyTestimonials from "@/app/niches/beauty/BeautyTestimonials";
import DentalFinalCTA from "@/app/niches/dentist/DentalFinalCTA";
import DentalPDFDownload from "@/app/niches/dentist/DentalPDFDownload";
import DentalPricing from "@/app/niches/dentist/DentalPricing";
import DentalTestimonials from "@/app/niches/dentist/DentalTestimonials";
import TherapistFinalCTA from "@/app/niches/doctors/TherapistFinalCTA";
import TherapistPDFDownload from "@/app/niches/doctors/TherapistPDFDownload";
import TherapistPricing from "@/app/niches/doctors/TherapistPricing";
import TherapistTestimonials from "@/app/niches/doctors/TherapistTestimonials";
import FitnessFinalCTA from "@/app/niches/fitness/FitnessFinalCTA";
import FitnessPDFDownload from "@/app/niches/fitness/FitnessPDFDownload";
import FitnessPricing from "@/app/niches/fitness/FitnessPricing";
import FitnessTestimonials from "@/app/niches/fitness/FitnessTestimonials";
import LeaseServicesFinalCTA from "@/app/niches/lease/LeaseServicesFinalCTA";
import LeaseServicesPDFDownload from "@/app/niches/lease/LeaseServicesPDFDownload";
import LeaseServicesPricing from "@/app/niches/lease/LeaseServicesPricing";
import LeaseServicesTestimonials from "@/app/niches/lease/LeaseServicesTestimonials";
import LegalFinalCTA from "@/app/niches/legal/LegalFinalCTA";
import LegalPDFDownload from "@/app/niches/legal/LegalPDFDownload";
import LegalPricing from "@/app/niches/legal/LegalPricing";
import LegalTestimonials from "@/app/niches/legal/LegalTestimonials";
import PetFinalCTA from "@/app/niches/pet/PetFinalCTA";
import PetPDFDownload from "@/app/niches/pet/PetPDFDownload";
import PetPricing from "@/app/niches/pet/PetPricing";
import PetTestimonials from "@/app/niches/pet/PetTestimonials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Results({ params }: any) {
  const { niche } = await params;

  return (
    <div className="min-h-screen font-inter">
      {niche === "auto" && (
        <>
          <Header path={"auto"} />
          <main>
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
