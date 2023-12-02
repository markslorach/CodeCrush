"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  if (!isSignedIn && !user) {
    router.push("/");
  }

  return (
    <div>
      Profile
      <SignOutButton />
    </div>
  );
}
