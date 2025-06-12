// lib/nicheConfig.ts (or wherever you prefer to place it)

import React from "react";
import { Metadata } from "next";

// Import all your niche-specific components
import AutoHeroSection from "@/app/niches/auto-services/AutoHeroSection";
import AutoHowItWorks from "@/app/niches/auto-services/AutoHowItWorks";
import AutoRevenueCalculator from "@/app/niches/auto-services/AutoRevenueCalculator";
import AutoCompetitionSection from "@/app/niches/auto-services/AutoCompetitionSection";
import AutoTestimonials from "@/app/niches/auto-services/AutoTestimonials";
import AutoPricing from "@/app/niches/auto-services/AutoPricing";
import AutoPDFDownload from "@/app/niches/auto-services/AutoPDFDownload";
import AutoFinalCTA from "@/app/niches/auto-services/AutoFinalCTA";

import BeautyHeroSection from "@/app/niches/beauty/BeautyHeroSection";
import BeautyHowItWorks from "@/app/niches/beauty/BeautyHowItWorks";
import BeautyRevenueCalculator from "@/app/niches/beauty/BeautyRevenueCalculator";
import BeautyCompetitionSection from "@/app/niches/beauty/BeautyCompetitionSection";
import BeautyTestimonials from "@/app/niches/beauty/BeautyTestimonials";
import BeautyPricing from "@/app/niches/beauty/BeautyPricing";
import BeautyPDFDownload from "@/app/niches/beauty/BeautyPDFDownload";
import BeautyFinalCTA from "@/app/niches/beauty/BeautyFinalCTA";

import DentalHeroSection from "@/app/niches/dentist/DentalHeroSection";
import DentalHowItWorks from "@/app/niches/dentist/DentalHowItWorks";
import DentalRevenueCalculator from "@/app/niches/dentist/DentalRevenueCalculator";
import DentalCompetitionSection from "@/app/niches/dentist/DentalCompetitionSection";
import DentalTestimonials from "@/app/niches/dentist/DentalTestimonials";
import DentalPricing from "@/app/niches/dentist/DentalPricing";
import DentalPDFDownload from "@/app/niches/dentist/DentalPDFDownload";
import DentalFinalCTA from "@/app/niches/dentist/DentalFinalCTA";

import FitnessHeroSection from "@/app/niches/fitness/FitnessHeroSection";
import FitnessHowItWorks from "@/app/niches/fitness/FitnessHowItWorks";
import FitnessRevenueCalculator from "@/app/niches/fitness/FitnessRevenueCalculator";
import FitnessCompetitionSection from "@/app/niches/fitness/FitnessCompetitionSection";
import FitnessTestimonials from "@/app/niches/fitness/FitnessTestimonials";
import FitnessPricing from "@/app/niches/fitness/FitnessPricing";
import FitnessPDFDownload from "@/app/niches/fitness/FitnessPDFDownload";
import FitnessFinalCTA from "@/app/niches/fitness/FitnessFinalCTA";

import LeaseManagementHeroSection from "@/app/niches/lease/LeaseManagementHeroSection";
import LeaseManagementHowItWorks from "@/app/niches/lease/LeaseManagementHowItWorks";
import LeaseRevenueCalculator from "@/app/niches/lease/LeaseRevenueCalculator";
import LeasingCompetitionSection from "@/app/niches/lease/LeasingCompetitionSection";
import LeaseServicesTestimonials from "@/app/niches/lease/LeaseServicesTestimonials";
import LeaseServicesPricing from "@/app/niches/lease/LeaseServicesPricing";
import LeaseServicesPDFDownload from "@/app/niches/lease/LeaseServicesPDFDownload";
import LeaseFAQ from "@/app/niches/lease/LeaseFAQ";
import LeaseServicesFinalCTA from "@/app/niches/lease/LeaseServicesFinalCTA";

import LegalHeroSection from "@/app/niches/legal/LegalHeroSection";
import LegalHowItWorks from "@/app/niches/legal/LegalHowItWorks";
import LegalRevenueCalculator from "@/app/niches/legal/LegalRevenueCalculator";
import LegalCompetitionSection from "@/app/niches/legal/LegalCompetitionSection";
import LegalTestimonials from "@/app/niches/legal/LegalTestimonials";
import LegalPricing from "@/app/niches/legal/LegalPricing";
import LegalPDFDownload from "@/app/niches/legal/LegalPDFDownload";
import LegalFinalCTA from "@/app/niches/legal/LegalFinalCTA";

import PetHeroSection from "@/app/niches/pet/PetHeroSection";
import PetHowItWorks from "@/app/niches/pet/PetHowItWorks";
import PetRevenueCalculator from "@/app/niches/pet/PetRevenueCalculator";
import PetCompetitionSection from "@/app/niches/pet/PetCompetitionSection";
import PetTestimonials from "@/app/niches/pet/PetTestimonials";
import PetPricing from "@/app/niches/pet/PetPricing";
import PetPDFDownload from "@/app/niches/pet/PetPDFDownload";
import PetFinalCTA from "@/app/niches/pet/PetFinalCTA";

import TherapistHeroSection from "@/app/niches/doctors/TherapistHeroSection";
import TherapistHowItWorks from "@/app/niches/doctors/TherapistHowItWorks";
import TherapistRevenueCalculator from "@/app/niches/doctors/TherapistRevenueCalculator";
import TherapistCompetitionSection from "@/app/niches/doctors/TherapistCompetitionSection";
import TherapistTestimonials from "@/app/niches/doctors/TherapistTestimonials";
import TherapistPricing from "@/app/niches/doctors/TherapistPricing";
import TherapistPDFDownload from "@/app/niches/doctors/TherapistPDFDownload";
import TherapistFinalCTA from "@/app/niches/doctors/TherapistFinalCTA";

// Define a type for a niche's configuration
interface NicheConfig {
  title: string;
  description: string;
  components: React.FC[]; // Array of React components for this niche
}

// Map niche slugs to their configurations
export const nicheConfigMap: Record<string, NicheConfig> = {
  auto: {
    title: "Automotive Marketing Services - ReslotAI",
    description: "Get more car sales with our customized marketing solutions.",
    components: [
      AutoHeroSection,
      AutoHowItWorks,
      AutoRevenueCalculator,
      AutoCompetitionSection,
      AutoTestimonials,
      AutoPricing,
      AutoPDFDownload,
      AutoFinalCTA,
    ],
  },
  beauty: {
    title: "Salon and Spa Marketing Services - ReslotAI",
    description:
      "Attract new customers and increase revenue with our beauty marketing services.",
    components: [
      BeautyHeroSection,
      BeautyHowItWorks,
      BeautyRevenueCalculator,
      BeautyCompetitionSection,
      BeautyTestimonials,
      BeautyPricing,
      BeautyPDFDownload,
      BeautyFinalCTA,
    ],
  },
  dentist: {
    title: "Dental Marketing Services - ReslotAI",
    description:
      "Improve patient acquisition and retention with our dental marketing services.",
    components: [
      DentalHeroSection,
      DentalHowItWorks,
      DentalRevenueCalculator,
      DentalCompetitionSection,
      DentalTestimonials,
      DentalPricing,
      DentalPDFDownload,
      DentalFinalCTA,
    ],
  },
  doctors: {
    title: "Dental Marketing Services - ReslotAI",
    description:
      "Improve patient acquisition and retention with our dental marketing services.",
    components: [
      TherapistHeroSection,
      TherapistHowItWorks,
      TherapistRevenueCalculator,
      TherapistCompetitionSection,
      TherapistTestimonials,
      TherapistPricing,
      TherapistPDFDownload,
      TherapistFinalCTA,
    ],
  },
  fitness: {
    title: "Dental Marketing Services - ReslotAI",
    description:
      "Improve patient acquisition and retention with our dental marketing services.",
    components: [
      FitnessHeroSection,
      FitnessHowItWorks,
      FitnessRevenueCalculator,
      FitnessCompetitionSection,
      FitnessTestimonials,
      FitnessPricing,
      FitnessPDFDownload,
      FitnessFinalCTA,
    ],
  },
  lease: {
    title: "Lease Management and Marketing Services - ReslotAI",
    description:
      "Streamline your lease management and marketing with ReslotAI.",
    components: [
      LeaseManagementHeroSection,
      LeaseManagementHowItWorks,
      LeaseRevenueCalculator,
      LeasingCompetitionSection,
      LeaseServicesTestimonials,
      LeaseServicesPricing,
      LeaseServicesPDFDownload,
      LeaseFAQ,
      LeaseServicesFinalCTA,
    ],
  },
  legal: {
    title: "Lease Management and Marketing Services - ReslotAI",
    description:
      "Streamline your lease management and marketing with ReslotAI.",
    components: [
      LegalHeroSection,
      LegalHowItWorks,
      LegalRevenueCalculator,
      LegalCompetitionSection,
      LegalTestimonials,
      LegalPricing,
      LegalPDFDownload,
      LegalFinalCTA,
    ],
  },
  pet: {
    title: "Lease Management and Marketing Services - ReslotAI",
    description:
      "Streamline your lease management and marketing with ReslotAI.",
    components: [
      PetHeroSection,
      PetHowItWorks,
      PetRevenueCalculator,
      PetCompetitionSection,
      PetTestimonials,
      PetPricing,
      PetPDFDownload,
      PetFinalCTA,
    ],
  },
};

// List of all supported niches for static paths generation
export const supportedNiches = Object.keys(nicheConfigMap);

// Default metadata if a niche is not found
export const defaultMetadata: Metadata = {
  title: "ReslotAI - AI-powered marketing solutions",
  description:
    "ReslotAI - AI-powered marketing solutions for various industries.",
};
