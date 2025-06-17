import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NicheProvider } from "@/store/AppContext";

const InterSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReslotAI",
  description:
    "Reclaim revenue from cancellations with AI-powered rescheduling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterSans.variable} antialiased`}>
        <NicheProvider>{children}</NicheProvider>
      </body>
    </html>
  );
}
