import supabase from "@/app/config/supabaseClient";

// Components
import BeginnerQuestion from "./BeginnerQuestion";

const date = new Date();
let day = date.getDay();
day = ((day + 6) % 7) + 1;
// console.log(day);

const getQuestions = async () => {
  const { data: questions, error } = await supabase
    .from("questions")
    .select()
    .eq("day_id", day)
    .select();

  if (error) {
    console.log(error);
  }

  if (questions) {
    return questions;
  }
};

const getAnswers = async () => {
  const { data: answers, error } = await supabase
    .from("answers")
    .select()
    .eq("day_id", day)
    .select();

  if (error) {
    console.log(error);
  }

  if (answers) {
    return answers;
  }
};

export const revalidate = 0;

export default async function Beginner() {
  const questions = await getQuestions();
  const answers = await getAnswers();

  return (
    <>
      <h2>Beginner Question</h2>
      <BeginnerQuestion questions={questions} answers={answers} />
    </>
  );
}
