"use client";

export default function BeginnerQuestion({ questions, answers }) {
  // Filter question by difficulty level
  const beginnerQuestion = questions.filter((q) => q.difficulty_level === 1);
  console.log(beginnerQuestion);

  return (
    <>
      {beginnerQuestion.map((question) => (
        <div key={question.id}>
          <h3>{question.question_text}</h3>
        </div>
      ))}

      {answers.map((answer) => (
        <div key={answer.id}>
          <button value={answer.correct}>{answer.answer_text}</button>
        </div>
      ))}

      <button className="py-3 px-4 rounded-lg text-white/90 bg-purple-500">
        Submit
      </button>
    </>
  );
}
