"use client";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

// Components
import CurrentUser from "../components/GetUser";

export default function Header() {
  const { user } = useUser();
  return (
    <>
      <div className="bg-[#81b1fe] h-72 rounded-b-3xl pt-12 shadow-md">
        {user && (
          <div className="flex justify-between h-min items-center mb-6 px-5">
            <CurrentUser />
            <div className="bg-[#f0f4fe] p-1 rounded-full shadow-md">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
