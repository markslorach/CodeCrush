"use client";
import Link from "next/link";
import { useState } from "react";

export default function ChallengeContainer() {
  const [difficulty, setDifficulty] = useState("Beginner");

  const handleChange = (e) => {
    setDifficulty(e.target.value);
  };

  console.log(difficulty);

  return (
    <>
    <div className="flex justify-between items-center mb-5">
      <h2>Today's Challenge</h2>
      <select
        className="select select-sm max-w-xs bg-[#1c375c] tracking-wide leading-none font-semibold text-white/50"
        value={difficulty}
        onChange={handleChange}
      >
        <option disabled selected>
          Difficulty
        </option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </div>
    <Link href={`/${difficulty.toLowerCase()}`}>Let's go!</Link>
    </>
  );
}
