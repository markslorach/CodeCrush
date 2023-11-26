import { getQuestions } from "../supabaseFetch";
import { getAnswers } from "../supabaseFetch";
import { getPlayer } from "../supabaseFetch";

// Components
import BeginnerQuestion from "./BeginnerQuestion";

export const revalidate = 0;

export default async function Beginner() {
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
      />
    </>
  );
}
