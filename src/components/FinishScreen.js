import { useQuiz } from "../context/QuizProvider";

function FinishScreen() {
  const { points, maxPoints, highScore } = useQuiz();

  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
    </>
  );
}

export default FinishScreen;
