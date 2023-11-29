import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

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
