import React, { useState } from "react";

import CorrectImg from "../img/correct-image.png";
import WrongImg from "../img/wrong-image.png";
import CorrectAnswerImg from "../img/correct-answer-image.png";

import "../assets/option.css";

const Option = ({ option, iscorrect, onSelectOption, selectedAnswer }) => {
  const [clicked, setClicked] = useState(false);

  const isSelected = selectedAnswer === option;
  const isIncorrectOption = !isSelected;

  const isCorrect = iscorrect === true;
  const isWrong = !isCorrect && isIncorrectOption;

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      onSelectOption(option);
    }
  };


  return (
    <div
      onClick={handleClick}
      className={`
        option
        ${isCorrect ? "correct" : ""}
        ${isIncorrectOption ? "wrong" : ""}
        ${clicked && isWrong ? "wrong-clicked" : ""}
        ${clicked && isSelected ? "correct-clicked" : ""}
      `}
    >
      <p>{option}</p>
      {isCorrect && <img src={CorrectAnswerImg} alt="Resposta certa" className="image-mark" />}
      {isWrong && (clicked && isSelected) && <img src={WrongImg} alt="Você errou" className="image-mark" />}
      {isCorrect && clicked && isSelected && <img src={CorrectImg} alt="Resposta correta" className="image-mark" />}
    </div>
  );
};

export default Option;
