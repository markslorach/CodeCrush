export default function StatCard({ title, value, icon }) {
  return (
    <div className="flex flex-col w-1/3 items-center gap-4 bg-[#1c375c] p-4 shadow-md rounded-xl">
      <p className="text-[#4F8FF8] text-xl leading-none">{icon}</p>
      <p className="text-base font-semibold leading-none">{value}</p>
      <h3 className="text-white/50 text-sm font-semibold">{title}</h3>
    </div>
  );
}
