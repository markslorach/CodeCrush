import { UserButton } from "@clerk/nextjs";

// Components
import CurrentUser from "../components/CurrentUser";

export default function Dashboard() {
  return (
    <>
    <div className="bg-[#81b1fe] h-72 rounded-b-3xl pt-12 shadow-md">
      <div className="flex justify-between h-min items-center mb-6 px-5">
        <CurrentUser />
        <div className="bg-[#f0f4fe] p-1 rounded-full shadow-md">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      </div>
      <div className="w-full px-5">
      <h1 className="mt-16">Your Stats</h1>
      <h1 className="mt-16 mb-5">Today's Challenge</h1>
      </div>
    </>
  );
}
