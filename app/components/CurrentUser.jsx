"use client";

import { useUser } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function CurrentUser() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return (
      <div>
        <p className="text-base tracking-wide font-semibold text-black/50">
          Hello,
        </p>
        <h2>{user.username}.</h2>
      </div>
    );
  }

  return <div>Not signed in</div>;
}
