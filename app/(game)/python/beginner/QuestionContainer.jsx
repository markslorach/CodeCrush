"use client";
import { useEffect, useState } from "react";
import supabase from "@/app/config/supabaseClient";

// Hooks
import { usePlayer } from "@/app/hooks/usePlayer";

// Components
import Codebox from "../../components/Codebox";
import Question from "../../components/Question";
import Answers from "../../components/Answers";
import SubmitButton from "../../components/SubmitButton";
import Score from "../../components/Score";

export const revalidate = 0;

export default function QuestionContainer({ questions, answers, day }) {
  const player = usePlayer();

  const [score, setScore] = useState(player.score ?? 0);
  const [submitted, setSubmitted] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [answerValue, setAnswerValue] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  // Filter question by difficulty level
  const question = questions.filter((q) => q.difficulty_level === 1);

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

  // Check for correct answer
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
    <div>
      <header className="flex justify-between items-center h-28">
        <h2>Beginner Question</h2>
        <Score score={score} />
      </header>

      <Codebox day={day} />
      <Question question={question} />
      <Answers
        answers={answers}
        selectedAnswerIndex={selectedAnswerIndex}
        isAnswerCorrect={isAnswerCorrect}
        submitted={submitted}
        answered={answered}
        handleAnswerClick={handleAnswerClick}
      />
      <SubmitButton
        handleSubmit={handleSubmit}
        answered={answered}
        submitted={submitted}
      />
    </div>
  );
}
