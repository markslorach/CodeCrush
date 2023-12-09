import InfoIcon from '@mui/icons-material/Info';

export default function Answers({
  answers,
  selectedAnswerIndex,
  handleAnswerClick,
  submitted,
  answered,
  isAnswerCorrect,
}) {
  return (

    <div className="flex flex-col gap-4 my-10">
    <small className="text-sm tracking-wide leading-none flex items-center gap-1.5 text-white/50"><InfoIcon fontSize='small'/>Select an answer</small>
      {answers.map((answer, index) => (
        <div key={index} className="form-control ">
          <label
            className={`label cursor-pointer shadow-md rounded-lg py-3 px-3 border-b-4 ${
              submitted
                ? index === selectedAnswerIndex
                  ? isAnswerCorrect
                    ? "border-b-4 border-[#4F8FF8] bg-[#1c375c]" // Correctly selected answer turns blue
                    : "border-b-4 border-red-400/90 bg-[#1c375c]" // Wrong selected answer turns red
                  : answer.correct
                  ? "border-b-4 border-[#4F8FF8] bg-[#1c375c]" // Correct answer turns blue
                  : "bg-[#1c375c]" // Other answers stay the same
                : "bg-[#1c375c] border-white/80" // Background for unselected answers
            }`}
          >
            <span className="label-text text-white/80">{answer.answer_text}</span>
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
  );
}
