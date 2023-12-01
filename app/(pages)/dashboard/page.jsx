// Components
import Header from "./components/Header";
import StatsContainer from "@/app/(user)/StatsContainer";
import ChallengeContainer from "./components/ChallengeContainer";

export default function Dashboard() {
  return (
    <>
      <Header />
      <StatsContainer />
      <ChallengeContainer/>
    </>
  );
}
