"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      toast.error("Email is required");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/join-waitlist", {
        // <--- Point to your new API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast(data.message);
        setEmail(""); // Clear form
      } else {
        toast(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting waitlist form:", error);
      toast("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
        required
        aria-label="Email address"
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 font-semibold px-6"
        aria-label="Get started"
      >
        {isLoading ? "Joining..." : "Join the waitlist"}
      </Button>
    </form>
  );
}

export default WaitlistForm;
