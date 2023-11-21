import { UserButton } from "@clerk/nextjs";

// Components
import CurrentUser from "../components/CurrentUser";


export default function Dashboard() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1>Dashboard</h1>
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
      <CurrentUser />
      <h1 className="mt-16">Your Stats</h1>
      <h1 className="mt-16 mb-5">Today's Challenge</h1>
    </>
  );
}
