"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "@/app/config/supabaseClient";

export default function BeginnerQuestion({ questions, answers, player, day }) {
  const [answerValue, setAnswerValue] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState("");
  const [score, setScore] = useState(player.score);

  // Filter question by difficulty level
  const beginnerQuestion = questions.filter((q) => q.difficulty_level === 1);

  // Check if player has already answered question
  useEffect(() => {
    if (player.answered.includes(day)) {
      setAnswered(true);
    } else {
      setAnswered(false);
    }
  }, [player.answered, day]);

  // Add value of answer true/false into state
  const handleAnswerClick = (e) => {
    setAnswerValue(e.currentTarget.value);
  };

  // Log player attempt in supabase and state
  const logPlayerAttempt = async () => {
    const { error } = await supabase
      .from("players")
      .update({ answered: [beginnerQuestion[0].day_id] })
      .eq("user_id", player.user_id);

    if (error) {
      console.log(error);
      return;
    }
  };

  // Check if answer is correct or incorrect
  const checkAnswer = () => {
    answerValue === "true" ? setCorrect("Correct!") : setCorrect("Incorrect!");
  };

  // Update player in supabase if answer is correct or incorrect.
  const UpdatePlayerDatabase = () => {
    if (answerValue === "true") {
      // Remove console.log when finished testing.
      console.log("correct");
      const updatePlayerIfCorrect = async () => {
        setScore(player.score + 10);
        const { data, error } = await supabase
          .from("players")
          .update({
            score: player.score + 10,
            streak: player.streak + 1,
          })
          .eq("user_id", player.user_id);

        if (error) {
          console.log(error);
        }
        if (data) {
          console.log(data);
        }
      };
      updatePlayerIfCorrect();
    } else {
      // Remove console.log when finished testing.
      console.log("incorrect");
      const updatePlayerIfIncorrect = async () => {
        const { data, error } = await supabase
          .from("players")
          .update({ streak: 0 })
          .eq("user_id", player.user_id);

        if (error) {
          console.log(error);
        }
        if (data) {
          console.log(data);
        }
      };
      updatePlayerIfIncorrect();
    }
  };

  // Handle player answer submit
  const handleSubmit = () => {
    if (player.answered.includes(day)) {
      console.log("already answered");
      setAnswered(true);
    } else {
      logPlayerAttempt();
      UpdatePlayerDatabase();
      checkAnswer();
    }
  };

  return (
    <>
      <p>{score}</p>
      <Image
        src={`/images/${day}.png`}
        alt="Codebox"
        width={200}
        height={200}
      />

      {beginnerQuestion.map((question) => (
        <div key={question.id}>
          <h3>{question.question_text}</h3>
        </div>
      ))}

      {answers.map((answer) => (
        <div key={answer.id}>
          <button value={answer.correct} onClick={(e) => handleAnswerClick(e)}>
            {answer.answer_text}
          </button>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="py-3 px-4 rounded-lg text-white/90 bg-purple-500"
        disabled={answered}
      >
        {answered ? "Already Answered" : "Submit"}
      </button>
      <p>{correct}</p>
    </>
  );
}
