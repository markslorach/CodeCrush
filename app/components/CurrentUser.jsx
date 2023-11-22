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
      
        <h2 className="text-white/90 text-2xl"><span className="text-white/80">Hello,</span> {user.username}.</h2>
        
      </div>
    );
  }

  return <div>Not signed in</div>;
}
