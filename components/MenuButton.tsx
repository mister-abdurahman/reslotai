"use client";
import { useAppContext } from "@/store/AppContext";
import { Menu, X } from "lucide-react";
import React from "react";

function MenuButton() {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return (
    <button
      className="md:hidden p-2"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle mobile menu"
      aria-expanded={isMenuOpen}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}

export default MenuButton;
