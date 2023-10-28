import { useQuiz } from "../context/QuizProvider";

function RestartButton() {
  const { dispatch } = useQuiz();
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart
    </button>
  );
}

export default RestartButton;
