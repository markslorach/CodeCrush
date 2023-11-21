import Link from "next/link";

// Icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export default function NavBar() {
  return (
    <nav className="flex z-10 fixed bottom-0 left-0 h-16 items-center bg-slate-200 rounded-t-lg w-full">
      <div className="w-full flex">
      <div className="w-full max-w-lg mx-auto">
        <ul className="flex justify-around text-black/70">
          <li>
            <Link href="/dashboard">
              <SpaceDashboardIcon fontSize="medium" />
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <AccountBoxIcon fontSize="medium" />
            </Link>
          </li>
          <li>
            <Link href="/leaderboard">
              <LeaderboardIcon fontSize="medium" />
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
