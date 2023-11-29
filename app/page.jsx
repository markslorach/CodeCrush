import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>CodeCrush</h1>

      <SignedIn>
        <Link href={"/dashboard"}>Continue to Dashboard</Link>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
    </>
  );
}
