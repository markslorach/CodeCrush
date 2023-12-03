import supabase from "../config/supabaseClient";

// Get current day of the week
const date = new Date();
let day = date.getDay();
day = ((day + 6) % 7) + 1;

// Fetch questions from supabase
export const getQuestions = async () => {
  const { data: questions, error } = await supabase
    .from("questions")
    .select()
    .eq("day_id", day);

  if (error) {
    console.log(error);
  }

  if (questions) {
    return questions;
  }
};

// Fetch answers from supabase
export const getAnswers = async () => {
  const { data: answers, error } = await supabase
    .from("answers")
    .select()
    .eq("day_id", day);

  if (error) {
    console.log(error);
  }

  if (answers) {
    return answers;
  }
};