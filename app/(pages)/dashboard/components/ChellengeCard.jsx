import Image from "next/image";
import Link from "next/link";

export default function ChellengeCard({ difficulty }) {
  return (
    <Link className="w-1/2 flex" href={`/${difficulty.toLowerCase()}`}>
      <button className="flex flex-col items-center gap-3 py-4 px-3 rounded-lg bg-[#1c375c] shadow-md">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <Image src="/images/python_logo.png" width={256} height={256} />
          </div>
        </div>
        <h3>Python</h3>
        <small className="text-center tracking-wide text-white/50">
          Challenge yourself with today's Python quiz.
        </small>
      </button>
    </Link>
  );
}
