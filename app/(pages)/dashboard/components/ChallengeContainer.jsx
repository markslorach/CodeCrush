"use client";
import { useState } from "react";

// Components
import ChellengeCard from "./ChellengeCard";

export default function ChallengeContainer() {
  const [difficulty, setDifficulty] = useState("Beginner");

  const handleChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2>Today's Challenge</h2>
        <select
          className="select select-sm max-w-xs bg-[#1c375c] tracking-wide leading-none font-semibold text-white/50"
          value={difficulty}
          onChange={handleChange}
        >
          <option disabled>Difficulty</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>
     <ChellengeCard difficulty={difficulty} />
    </>
  );
}
