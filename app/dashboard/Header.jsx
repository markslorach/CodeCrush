"use client";
import { UserButton } from "@clerk/nextjs";
import GetUser from "../(user)/GetUser";

// Components

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center">
        <GetUser/>
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}
