export default function SubmitButton({ handleSubmit, answered, submitted }) {
  return (
    <button
      onClick={handleSubmit}
      className="py-3 px-4 rounded-lg text-white/90 bg-blue-400"
      disabled={answered || submitted}
    >
      {answered ? "Answered" : "Submit"}
    </button>
  );
}
