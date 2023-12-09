import { FaStar } from "react-icons/fa6";

export default function Score({ score }) {
  return (
    <h2 className="flex items-center gap-1.5">
      {" "}
      <FaStar className="text-[#4F8FF8]" />
      {score}
    </h2>
  );
}
