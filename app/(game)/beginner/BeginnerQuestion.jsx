"use client";
import { useEffect, useState } from "react";
import supabase from "@/app/config/supabaseClient";
import Image from "next/image";

export default function BeginnerQuestion({ questions, answers, player, day }) {
  const [score, setScore] = useState(player.score);
  const [answerValue, setAnswerValue] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  // Filter question by difficulty level
  const beginnerQuestion = questions.filter((q) => q.difficulty_level === 1);

  // Check if player has already answered question
  useEffect(() => {
    player.answered === day ? setAnswered(true) : setAnswered(false);
  }, [player.answered, day]);

  // Add value of answer true/false into state
  const handleAnswerClick = (e, index) => {
    if (answered || submitted) {
      return;
    }
    setSelectedAnswerIndex(index);
    setAnswerValue(e.currentTarget.value);
  };

  // Log player attempt in supabase and state
  const logPlayerAttempt = async () => {
    const { error } = await supabase
      .from("players")
      .update({ answered: beginnerQuestion[0].day_id })
      .eq("user_id", player.user_id);

    if (error) {
      console.log(error);
      return;
    }
  };

  // Check if answer is correct or incorrect
  const checkAnswer = () => {
    setIsAnswerCorrect(answerValue === "true");
  };

  // Update player in supabase if answer is correct or incorrect.
  const UpdatePlayerDatabase = () => {
    if (answerValue === "true") {
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
    if (answered) {
      return;
    }
    logPlayerAttempt();
    checkAnswer();
    UpdatePlayerDatabase();
    setSubmitted(true);
  };

  return (
    <>
      {/* SCORE */}
      <p>{score}</p>

      {/* CODE BOX */}
      <figure>
      <Image
        src={`https://hiyjfziavcrmlnohdriv.supabase.co/storage/v1/object/public/question-images/${day}.png`}
        width={900}
        height={436}
        alt="Code"
        loading="lazy"	
        className="rounded-xl"
        // style={{ width: "100%", height: "auto" }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      </figure>

      {/* QUESTION */}
      {beginnerQuestion.map((question) => (
        <div key={question.id}>
          <h3>{question.question_text}</h3>
        </div>
      ))}

      {/* ANSWERS */}
      <div className="flex flex-col gap-3">
        {answers.map((answer, index) => (
          <div key={answer.id}>
            <button
              value={answer.correct}
              onClick={(e) => handleAnswerClick(e, index)}
              disabled={answered || submitted}
              className={`py-3 px-4 w-full rounded-lg text-left active:bg-slate-400 ${
                submitted
                  ? index === selectedAnswerIndex
                    ? isAnswerCorrect
                      ? "bg-green-400 text-white" // Correctly selected answer turns green
                      : "bg-red-400 text-white" // Wrong selected answer turns red
                    : answer.correct
                    ? "bg-green-400 text-white" // Correct answer turns green
                    : "bg-slate-300 text-black/90" // Other answers stay the same
                  : "bg-slate-300 focus:bg-slate-400 text-black/90" // Background for unselected answers
              }`}
            >
              {answer.answer_text}
            </button>
          </div>
        ))}
      </div>

      {/* SUBMIT BUTTON */}
      <button
        onClick={handleSubmit}
        className="py-3 px-4 rounded-lg text-white/90 bg-purple-500"
        disabled={answered || submitted}
      >
        {answered ? "Already Answered" : "Submit"}
      </button>
    </>
  );
}
