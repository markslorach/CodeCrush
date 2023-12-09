import Image from "next/image";

export const revalidate = 0

export default function Codebox({ day }) {

  return (
    <figure className="rounded-xl shadow-md mb-10 overflow-hidden">
      <Image
        src={`https://hiyjfziavcrmlnohdriv.supabase.co/storage/v1/object/public/question-images/${day}.png`}
        width={900}
        height={436}
        alt="Codebox"
        priority={true}
        className="rounded-xl"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </figure>
  );
}
