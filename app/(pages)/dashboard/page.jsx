// Components
import Header from "./components/Header";
import StatsContainer from "@/app/(user)/StatsContainer";

export default function Dashboard() {
  return (
    <>
      <Header/>
      <StatsContainer/>
      <h2>Today's Challenge</h2>
    </>
  );
}
