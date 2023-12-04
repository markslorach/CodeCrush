import Image from "next/image";

export default function Codebox({ day }) {
  return (
    <figure>
      <Image
        src={`https://hiyjfziavcrmlnohdriv.supabase.co/storage/v1/object/public/question-images/${day}.png`}
        width={900}
        height={436}
        alt="Code box"
        priority={true}
        className="rounded-xl"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </figure>
  );
}
