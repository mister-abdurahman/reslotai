import AutoFinalCTA from "@/app/niches/auto-services/AutoFinalCTA";
import AutoPDFDownload from "@/app/niches/auto-services/AutoPDFDownload";
import AutoPricing from "@/app/niches/auto-services/AutoPricing";
import BeautyFinalCTA from "@/app/niches/beauty/BeautyFinalCTA";
import BeautyPDFDownload from "@/app/niches/beauty/BeautyPDFDownload";
import BeautyPricing from "@/app/niches/beauty/BeautyPricing";
import DentalFinalCTA from "@/app/niches/dentist/DentalFinalCTA";
import DentalPDFDownload from "@/app/niches/dentist/DentalPDFDownload";
import DentalPricing from "@/app/niches/dentist/DentalPricing";
import TherapistFinalCTA from "@/app/niches/doctors/TherapistFinalCTA";
import TherapistPDFDownload from "@/app/niches/doctors/TherapistPDFDownload";
import TherapistPricing from "@/app/niches/doctors/TherapistPricing";
import FitnessFinalCTA from "@/app/niches/fitness/FitnessFinalCTA";
import FitnessPDFDownload from "@/app/niches/fitness/FitnessPDFDownload";
import FitnessPricing from "@/app/niches/fitness/FitnessPricing";
import LeaseServicesFinalCTA from "@/app/niches/lease/LeaseServicesFinalCTA";
import LeaseServicesPDFDownload from "@/app/niches/lease/LeaseServicesPDFDownload";
import LeaseServicesPricing from "@/app/niches/lease/LeaseServicesPricing";
import LegalFinalCTA from "@/app/niches/legal/LegalFinalCTA";
import LegalPDFDownload from "@/app/niches/legal/LegalPDFDownload";
import LegalPricing from "@/app/niches/legal/LegalPricing";
import PetFinalCTA from "@/app/niches/pet/PetFinalCTA";
import PetPDFDownload from "@/app/niches/pet/PetPDFDownload";
import PetPricing from "@/app/niches/pet/PetPricing";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Pricing({ params }: any) {
  const { niche } = await params;

  return (
    <div className="min-h-screen font-inter">
      {niche === "auto" && (
        <>
          <Header path={"auto"} />
          <main>
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
