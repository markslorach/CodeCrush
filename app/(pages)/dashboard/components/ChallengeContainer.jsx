"use client";
export default function ChallengeContainer() {
  return (
    <div className="flex justify-between items-center mb-5">
      <h2>Today's Challenge</h2>
      <select className="select select-sm max-w-xs bg-[#1c375c] tracking-wide leading-none font-semibold text-white/50">
  <option disabled selected>Difficulty</option>
  <option>Beginner</option>
  <option>Intermediate</option>
  <option>Avanced</option>
</select>
    </div>
  );
}
