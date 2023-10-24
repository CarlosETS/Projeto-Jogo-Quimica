import React, { useState, useEffect } from "react";
import CorrectImg from "../img/correct-image.png";
import WrongImg from "../img/wrong-image.png";
import CorrectAnswerImg from "../img/correct-answer-image.png";
import "../assets/option.css";

const Option = ({ option, selectOption, hide, index, correctIndex }) => {
  const [clicked, setClicked] = useState(false);
  const [optionStatus, setOptionStatus] = useState({});

  const isCorrect = selectOption === index && index === correctIndex;
  const isWrong = !isCorrect;
  const isWrongOnClick = clicked && !isCorrect;

  useEffect(() => {
    if (clicked && isWrong) {
      setOptionStatus({ ...optionStatus, [index]: "wrong" });
    }
  }, [clicked, isWrong, index]);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      selectOption(index);
    }
  };

  const optionClasses = ["option"];
  if (isCorrect) {
    optionClasses.push("correct");
  }
  if (isWrongOnClick) {
    optionClasses.push("wrong-clicked");
  }
  if (isCorrect && clicked) {
    optionClasses.push("correct-clicked");
  }
  if (optionStatus[index] === "wrong") {
    optionClasses.push("wrong");
  }

  return (
    <div onClick={handleClick} className={optionClasses.join(" ")}>
      <p>{option}</p>
      {isCorrect && <img src={CorrectImg} alt="Você acertou" className="image-mark" />}
      {isWrongOnClick && <img src={WrongImg} alt="Você errou" className="image-mark" />}
      {isCorrect && clicked && <img src={CorrectAnswerImg} alt="Resposta correta" className="image-mark" />}
    </div>
  );
};

export default Option;
