import Link from "next/link";

export default function ChellengeCard({ difficulty }) {
  return (
    <Link
      className="flex flex-col items-center gap-3 w-1/2 p-3 rounded-lg bg-[#1c375c] shadow-md"
      href={`/${difficulty.toLowerCase()}`}
    >
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <h3>Python</h3>
      <small className="text-center tracking-wide text-white/50">
        Challenge yourself with today's Python quiz.
      </small>
    </Link>
  );
}
