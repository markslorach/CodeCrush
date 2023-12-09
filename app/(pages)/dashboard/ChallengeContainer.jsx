"use client";
import { useState } from "react";

// Components
import ChellengeCard from "./components/ChellengeCard";

const pythonCard = {
  title: "Python",
  description: "Challenge yourself with today's Python questions!",
  image: "/images/python_logo.png",
  link: "/python",
};

const jsCard = {
  title: "JavaScript",
  description: "Think you can take on today's JavaScript challenge?",
  image: "/images/javascript_logo.png",
  link: "/javascript",
};

export default function ChallengeContainer() {
  const [difficulty, setDifficulty] = useState("Beginner");

  const handleChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-6">
        <h2>Today's Challenge</h2>
        <select
          className="select select-sm max-w-xs bg-[#1c375c] tracking-wide leading-none font-semibold text-white/50 shadow-sm"
          value={difficulty}
          onChange={handleChange}
        >
          <option disabled>Difficulty</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

    <div className="flex gap-5">
      <ChellengeCard
        difficulty={difficulty}
        title={pythonCard.title}
        description={pythonCard.description}
        image={pythonCard.image}
        link={pythonCard.link}
      />
      {/* <ChellengeCard disabled
        difficulty={difficulty}
        title={jsCard.title}
        description={jsCard.description}
        image={jsCard.image}
      /> */}
      </div>
    </div>
  );
}
