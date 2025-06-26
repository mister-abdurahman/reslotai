"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { downloadFile, validateEmail } from "@/lib/helper";
import { Button } from "./ui/button";

function DownloadPDFForm() {
  const [email, setEmail] = useState("");
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (email && validateEmail(email)) {
        downloadFile("/retarget-leads.pdf", "Retarget Leads");
        alert(
          "Your PDF download has started. Please check your downloads folder."
        );
        setEmail("");
      }
    } catch (error: any) {
      alert(
        error.message ||
          "An error occurred while processing your request. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleEmailSubmit}
      className="flex flex-col sm:flex-row gap-3 mt-4"
    >
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
        required
        aria-label="Email address for PDF download"
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 font-semibold px-6"
        aria-label="Download strategy PDF"
      >
        Download Now
      </Button>
    </form>
  );
}

export default DownloadPDFForm;
