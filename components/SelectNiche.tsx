import { CircleChevronDown } from "lucide-react";
import React from "react";

function SelectNiche() {
  return (
    <div className="py-4 justify-center flex items-center gap-3 bg-purple-100 z-20">
      <p className="text-sm font-semibold  text-center tracking-wider">
        Select Your Industry
      </p>
      <CircleChevronDown width={20} height={20} />
    </div>
  );
}

export default SelectNiche;
