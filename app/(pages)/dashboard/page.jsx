// Components
import Header from "./components/Header";
import StatsContainer from "@/app/(user)/StatsContainer";
import ChallengeContainer from "./ChallengeContainer";

export default function Dashboard() {
  return (
    <>
      <Header />
      <StatsContainer />
      <ChallengeContainer />
    </>
  );
}
