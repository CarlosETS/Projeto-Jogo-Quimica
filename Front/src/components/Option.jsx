import React, { useContext, useState } from "react";

import "../assets/option.css";

import CorrectImg from "../img/correct-image.png";
import WrongImg from "../img/wrong-image.png";
import CorrectAnswerImg from "../img/correct-answer-image.png";

const Option = ({ option, index }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [clicked, setClicked] = useState(false);

  const currentQuestionIndex = quizState.currentQuestion;
  const answer = quizState.questions[currentQuestionIndex].answer;
  const isCorrect = quizState.answerSelected && option === answer;
  const isWrongOnClick = clicked && index !== answer;
  const isCorrectOnClick = clicked && index === answer;

  const handleOptionClick = () => {
    if (!clicked) {
      setClicked(true);
      dispatch({ type: "SELECT_OPTION", payload: { selectedOption: option } });
    }
  };

  return (
    <div
      onClick={handleOptionClick}
      className={`
        option
        ${isCorrect ? "correct" : ""}
        ${isWrongOnClick ? "wrong-clicked" : ""}
        ${isCorrectOnClick ? "correct-clicked" : ""}
      `}
    >
      <p>{option}</p>
      {isCorrect && <img src={CorrectAnswerImg} alt="Resposta certa" className="image-mark" />}
      {isWrongOnClick && <img src={WrongImg} alt="Você errou" className="image-mark" />}
      {isCorrectOnClick && <img src={CorrectImg} alt="Resposta correta" className="image-mark" />}
    </div>
  );
};

export default Option;
