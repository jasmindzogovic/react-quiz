import { useQuiz } from "../context/QuizProvider";
import Option from "./Option";

function Question() {
  const { question, dispatch, answer } = useQuiz();
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
