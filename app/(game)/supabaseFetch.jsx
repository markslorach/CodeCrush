import supabase from "../config/supabaseClient";
import { currentUser } from "@clerk/nextjs";

// Get current day of the week
const date = new Date();
let day = date.getDay();
day = ((day + 6) % 7) + 1;

// Fetch questions from supabase
export const getQuestions = async () => {
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

// Fetch answers from supabase
export const getAnswers = async () => {
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

// Fetch player from supabase
export const getPlayer = async () => {
  const user = await currentUser();

  if (user) {
    const { data: player, error } = await supabase
      .from("players")
      .select()
      .eq("user_id", user.id)
      .single();

    if (error) {
      console.log(error);
    }
    return player;
  }
};
