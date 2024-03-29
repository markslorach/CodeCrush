import GetUser from "@/app/(user)/GetUser";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center h-28">
      <GetUser />
      <UserButton afterSignOutUrl="/" />
    </header>
  )
}
