import React, { useState, useEffect } from "react";
import CorrectImg from "../img/correct-image.png";
import WrongImg from "../img/wrong-image.png";
import CorrectAnswerImg from "../img/correct-answer-image.png";
import "../assets/option.css";

const Option = ({ option, selectOption, index }) => {
  console.log({ option, selectOption, index })
  const [clicked, setClicked] = useState(false);
  const [optionStatus, setOptionStatus] = useState({});

  const isCorrect = selectOption  ;
  const isWrong = !isCorrect;
  const isWrongOnClick = clicked && !isCorrect;

  useEffect(() => {
    console.log({clicked})
    console.log({isWrong})
    chooseClass();
    if (clicked && isWrong) {
      setOptionStatus({ ...optionStatus});
    }
  }, [clicked, isWrong, index]);

  const handleClick = () => {
    if (!clicked) {
      console.log(isCorrect)
      setClicked(true);
      selectOption(index);
    }
  };

  const optionClasses = ["option"];
  const chooseClass = () => {
    switch (optionClasses) {
      case isCorrect && clicked:
        optionClasses.push("correct-clicked");
        break;
      case isCorrect:
        optionClasses.push("correct");
        break;
      case optionStatus[index] === "wrong":
        optionClasses.push("wrong");
        break;
    
      default:
        break;
    }
  }

  // if (isCorrect) {
  // }
  // if (isWrongOnClick) {
  //   optionClasses.push("wrong-clicked");
  // }
  // if (isCorrect && clicked) {
  //   optionClasses.push("correct-clicked");
  // }
  // if (optionStatus[index] === "wrong") {
  //   optionClasses.push("wrong");
  // }

  return (
    <div name="AAA"   onClick={handleClick} className={`options ${optionClasses}`}>
      <p>{option}</p>
      {isCorrect && <img src={CorrectImg} alt="Você acertou" className="image-mark" />}
      {isWrongOnClick && <img src={WrongImg} alt="Você errou" className="image-mark" />}
      {isCorrect && clicked && <img src={CorrectAnswerImg} alt="Resposta correta" className="image-mark" />}
    </div>
  );
};

export default Option;
