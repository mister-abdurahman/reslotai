"use client";
import React from "react";
import { Badge } from "./ui/badge";
import { useAppContext } from "@/store/AppContext";

function BillingToggle() {
  const { billingCycle, setBillingCycle } = useAppContext();
  return (
    <div className="flex items-center justify-center mb-8 bg-white rounded-lg p-1 w-fit mx-auto">
      <button
        onClick={() => setBillingCycle("monthly")}
        className={`px-6 py-2 rounded-md font-medium transition-colors ${
          billingCycle === "monthly"
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setBillingCycle("annual")}
        className={`px-6 py-2 rounded-md font-medium transition-colors relative ${
          billingCycle === "annual"
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Annual
        <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
          Save 40%
        </Badge>
      </button>
    </div>
  );
}

export default BillingToggle;
