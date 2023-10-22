function Progress({ index, numQuestions, questions, points, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> /{" "}
        {questions
          .map((question) => question.points)
          .reduce((cur, acc) => cur + acc, 0)}
      </p>
    </header>
  );
}

export default Progress;
