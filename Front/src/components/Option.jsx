import React, { useContext, useState } from "react";
import { QuizContext } from "../context/quiz.jsx";
import "../assets/option.css";

import CorrectImg from "../img/correct-image.png";
import WrongImg from "../img/wrong-image.png";
import CorrectAnswerImg from "../img/correct-answer-image.png";

const Option = ({ option, selectOption, index }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [clicked, setClicked] = useState(false);

  const correctIndex = quizState.correctIndex;
  const answer = quizState.questions[quizState.currentQuestion].answer; // Obtém a resposta correta da pergunta atual

  const isCorrect = quizState.answerSelected && option === answer;
  const isWrong = quizState.answerSelected && option !== answer;
  const isWrongOnClick = clicked && index !== correctIndex;
  const isCorrectOnClick = clicked && index === correctIndex;

  const handleOptionClick = () => {
    if (!clicked) {
      setClicked(true);
      selectOption(index);
      dispatch({ type: "CHECK_ANSWER", payload: { answer, option } }); // Atualiza o estado com a resposta selecionada
    }
  };

  return (
    <div
      onClick={handleOptionClick}
      className={`
                option
                ${isCorrect ? "correct" : ""}
                ${isWrong ? "wrong" : ""}
                ${isWrongOnClick ? "wrong-clicked" : ""}
                ${isCorrectOnClick ? "correct" : ""}
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
