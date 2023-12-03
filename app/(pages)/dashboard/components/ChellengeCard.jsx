import Image from "next/image";
import Link from "next/link";

export default function ChellengeCard({
  difficulty,
  title,
  description,
  image,
  link,
}) {
  return (
    <Link className="w-1/2 flex" href={`${link}/${difficulty.toLowerCase()}`}>
      <button className="flex flex-col items-center gap-3 p-4 rounded-lg bg-[#1c375c] shadow-md">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <Image src={image} width={256} height={256} alt="logo" />
          </div>
        </div>
        <h3>{title}</h3>
        <small className="text-center tracking-wide text-white/50">
          {description}
        </small>
      </button>
    </Link>
  );
}
