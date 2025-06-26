"use client";
import { formatTime } from "@/lib/helper";
import { useAppContext } from "@/store/AppContext";
import React from "react";

function ExpiresIn() {
  const { timeLeft } = useAppContext();
  return (
    <p>
      Expires in{" "}
      <span className="font-mono font-bold text-xl">
        {formatTime(timeLeft)}
      </span>
    </p>
  );
}

export default ExpiresIn;
