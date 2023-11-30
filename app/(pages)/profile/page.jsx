"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  if ((!user && !isLoaded) || !isSignedIn) {
    router.push("/");
  }

  return (
    <div>
      Profile
      <SignOutButton />
    </div>
  );
}
