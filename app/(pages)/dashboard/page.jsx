import Link from "next/link";

// Components
import Header from "./Header";
import GetUserStats from "../../(user)/GetUserStats";

export default async function Dashboard() {
  return (
    <main>
      <Header />
      {/* Daily coding fact */}
      <GetUserStats/>
      {/* Challenge cards */}
      <Link href={`/beginner`}>
        <button className="py-3 px-4 rounded-lg text-white/90 bg-purple-500">
          Beginner Question
        </button>
      </Link>
    </main>
  );
}
