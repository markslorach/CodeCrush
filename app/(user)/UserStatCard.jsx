export default function UserStatCard({title, value, icon}) {
  return (
    <div className="flex flex-col w-1/3 items-center gap-4 bg-white p-4 rounded-md">
        <p className="text-xl">{icon}</p>
        <p className="text-base font-semibold tracking-wide leading-none">{value}</p>
        <p className="text-base font-semibold tracking-wide leading-none">{title}</p>
    </div>
  )
}
