import { getQuestions } from "../../db/supabaseFetch";
import { getAnswers } from "../../db/supabaseFetch";
import { getPlayer } from "../../db/supabaseFetch";

// Components
import BeginnerQuestion from "./BeginnerQuestion";

export const revalidate = 0;

export default async function Beginner() {
  // Get current day of the week
  const date = new Date();
  let day = date.getDay();
  day = ((day + 6) % 7) + 1;

  const questions = await getQuestions();
  const answers = await getAnswers();
  const player = await getPlayer();

  return (
    <>
      <h2>Beginner Question</h2>
      <BeginnerQuestion
        questions={questions}
        answers={answers}
        player={player}
        day={day}
      />
    </>
  );
}
