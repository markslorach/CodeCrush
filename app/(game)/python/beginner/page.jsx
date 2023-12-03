// Components
import { getAnswers, getQuestions } from "@/app/db/supabaseFetch";
import BeginnerQuestion from "./BeginnerQuestion";

export const revalidate = true;

export default async function Beginner() {
  // Get current day of the week
  const date = new Date();
  let day = date.getDay();
  day = ((day + 6) % 7) + 1;

  const questions = await getQuestions();
  const answers = await getAnswers();

  return (
    <>
      <h2>Beginner Question</h2>

      <BeginnerQuestion
        questions={questions}
        answers={answers}
        day={day}
      />
    </>
  );
}
