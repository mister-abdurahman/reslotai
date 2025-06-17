"use client";
import React, { useState, useContext, ReactNode } from "react";

type Niche = "default" | "health" | "beauty" | "fitness" | "technology"; // Add more niches as needed

interface NicheContextProps {
  currentNiche: Niche;
  setNiche: (niche: Niche) => void;
}

const NicheContext = React.createContext<NicheContextProps | undefined>(
  undefined
);

const NicheProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentNiche, setNiche] = useState<Niche>("default");

  return (
    <NicheContext.Provider value={{ currentNiche, setNiche }}>
      {children}
    </NicheContext.Provider>
  );
};

const useNiche = () => {
  const context = useContext(NicheContext);
  if (!context) {
    throw new Error("useNiche must be used within a NicheProvider");
  }
  return context;
};

export { NicheProvider, useNiche, NicheContext };
