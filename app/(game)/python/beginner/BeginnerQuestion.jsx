"use client";
import { useEffect, useState } from "react";
import supabase from "@/app/config/supabaseClient";
import Image from "next/image";

// Hooks
import { usePlayer } from "@/app/hooks/usePlayer";

export const revalidate = 0;

export default function BeginnerQuestion({ questions, answers, day }) {
  const player = usePlayer();

  const [score, setScore] = useState(player.score ?? 0);
  const [submitted, setSubmitted] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [answerValue, setAnswerValue] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  // Filter question by difficulty level
  const beginnerQuestion = questions.filter((q) => q.difficulty_level === 1);

  // Trigger handleAnswerClick for the default checked answer (index 0)
  useEffect(() => {
    if (answers) {
      handleAnswerClick({ currentTarget: { value: answers } }, 0);
    }
  }, []);

  // Set player score on load/change
  useEffect(() => {
    if (player) {
      setScore(player.score ?? 0);
    }
  }, [player]);

  // Check if player has already answered question
  useEffect(() => {
    if (player.beginner_answered === day) {
      setAnswered(true);
    } else {
      setAnswered(false);
    }
  }, [player, day]);

  // Log player attempt in supabase
  const logPlayerAttempt = async () => {
    const { error } = await supabase
      .from("players")
      .update({ beginner_answered: day })
      .eq("user_id", player.user_id);

    if (error) {
      console.log(error);
    }
  };

  // Update player in supabase if answer is correct or incorrect.
  const updatePlayerDatabase = () => {
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

  // Add value of answer into state
  const handleAnswerClick = (e, index) => {
    if (answered || submitted) {
      return;
    }
    setSelectedAnswerIndex(index);
    setAnswerValue(e.currentTarget.value);
  };

  // Check if answer is correct
  const checkAnswer = () => {
    setIsAnswerCorrect(answerValue === "true");
  };

  // Handle answer submit
  const handleSubmit = () => {
    updatePlayerDatabase();
    logPlayerAttempt();
    checkAnswer();
    setSubmitted(true);
  };

  return (
    <>
      <p>Score: {score}</p>

      {/* CODE BOX */}
      <figure>
        <Image
          src={`https://hiyjfziavcrmlnohdriv.supabase.co/storage/v1/object/public/question-images/${day}.png`}
          width={900}
          height={436}
          alt="Code box"
          priority={true}
          className="rounded-xl"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </figure>

      {/* QUESTION */}
      {beginnerQuestion.map((question, index) => (
        <div key={index}>
          <h3>{question.question_text}</h3>
        </div>
      ))}

      {/* ANSWERS */}
      <div className="flex flex-col gap-4">
        {answers.map((answer, index) => (
          <div key={index} className="form-control ">
            <label
              className={`label cursor-pointer shadow-md rounded-lg py-3 px-3 ${
                submitted
                  ? index === selectedAnswerIndex
                    ? isAnswerCorrect
                      ? "border-2 border-[#4F8FF8] bg-[#1c375c]" // Correctly selected answer turns blue
                      : "border-2 border-red-400/90 bg-[#1c375c]" // Wrong selected answer turns red
                    : answer.correct
                    ? "border-2 border-[#4F8FF8] bg-[#1c375c]" // Correct answer turns blue
                    : "bg-[#1c375c]" // Other answers stay the same
                  : "bg-[#1c375c] " // Background for unselected answers
              }`}
            >
              <span className="label-text">{answer.answer_text}</span>
              <input
                type="radio"
                name="radio-10"
                value={answer.correct}
                onClick={(e) => handleAnswerClick(e, index)}
                className="radio checked:bg-[#4F8FF8]"
                defaultChecked={index === 0}
                disabled={answered || submitted}
              />
            </label>
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
