import { UserButton } from "@clerk/nextjs";
import GetUser from "../../../(user)/GetUser";

export default function Header() {
  return (
   
    <div className="py-10">
    <div className="h-10 flex justify-between items-center w-full">
      <GetUser />
      <UserButton afterSignOutUrl="/" />
      </div>
    </div>
      
  );
}
