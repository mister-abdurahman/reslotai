import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/store/AppContext";
import Script from "next/script";

const InterSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReslotAI",
  description:
    "Reclaim revenue from cancellations with AI-powered rescheduling",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reslot AI",
  url: "https://www.reslotai.com",
  logo: "https://www.reslotai.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-804-290-9582", // Client's main contact number
    contactType: "customer service",
    areaServed: "NL",
  },
  sameAs: [
    "https://www.facebook.com/reslotai",
    "https://www.linkedin.com/company/reslotai",
    "https://www.instagram.com/reslotai",
  ],
  // address: {
  //   "@type": "PostalAddress",
  //   // streetAddress: "123 Main St",
  //   addressLocality: "Amsterdam",
  //   addressRegion: "NH", // Or equivalent region
  //   postalCode: "1000 AB",
  //   addressCountry: "NL",
  // },
  slogan: "Re-engage. Convert. Grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterSans.variable} antialiased`}>
        <Script
          id="global-organization-schema" // Unique ID
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <AppProvider>{children}</AppProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/68665a00a81b1119105e49a4/1iv7sv6fg';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `,
          }}
        />
      </body>
    </html>
  );
}
