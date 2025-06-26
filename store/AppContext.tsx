"use client";
import React, { useState, useContext, ReactNode } from "react";

interface ContextProps {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  billingCycle: "monthly" | "annual";
  setBillingCycle: React.Dispatch<React.SetStateAction<"monthly" | "annual">>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext<ContextProps | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(300);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        timeLeft,
        setTimeLeft,
        billingCycle,
        setBillingCycle,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext, AppContext };
