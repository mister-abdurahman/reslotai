"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { validateEmail } from "@/lib/helper";
import { Button } from "./ui/button";
import { toast } from "sonner";

function EmailPDFForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !validateEmail(email)) {
      setIsLoading(false);
      alert("Enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/send-pdf-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail(""); // Clear form
        toast(data.message, {
          description: "Check your inbox for the PDF link.",
        });
      } else {
        toast(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
        {isLoading ? "Sending..." : "Download Now"}
      </Button>
    </form>
  );
}

export default EmailPDFForm;
