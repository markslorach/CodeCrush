import Link from "next/link";

// Icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export default function NavBar() {
  return (
    <nav className="h-28 fixed z-30 bottom-0 left-0 w-full bg-[#041d3e]">
      <div className="max-w-md mx-auto h-full flex items-center px-5 sm:px-10">
        <div className="bg-[#1c375c] w-full h-min py-4 px-6 rounded-xl shadow-md">
          <ul className="flex w-full justify-between">
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
