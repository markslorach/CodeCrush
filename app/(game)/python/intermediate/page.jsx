import { getAnswers, getQuestions } from "@/app/db/supabaseFetch";

// Containers

export const revalidate = 0;

export default async function Beginner() {
  // Get current day of the week
  const date = new Date();
  let day = date.getDay();
  day = ((day + 6) % 7) + 1;

  // Fetch data
  const questions = await getQuestions();
  const answers = await getAnswers();

  return (
   <h1>Intermediate</h1>
  );
}
