export default function Question({ question }) {
  return (
    <div>
      {question.map((question, index) => (
        <div key={index}>
          <h3>{question.question_text}</h3>
        </div>
      ))}
    </div>
  );
}
