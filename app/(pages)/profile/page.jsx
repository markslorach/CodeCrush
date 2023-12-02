"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  if (!isSignedIn) {
    router.push("/");
  }

  return (
    <div>
      Profile
      <SignOutButton />
      <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button>
    </div>
  );
}
