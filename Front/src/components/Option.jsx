import React, { useState, useEffect } from "react";
import CorrectImg from "../img/correct-image.png";
import WrongImg from "../img/wrong-image.png";
import CorrectAnswerImg from "../img/correct-answer-image.png";
import "../assets/option.css";

const Option = ({ description, isCorrect, handleCallback, classDefault, answerWrong}) => {
  const [clicked, setClicked] = useState(false);
  const [img, setImg] = useState();
  const [options, setOptions] = useState(classDefault);

  useEffect(() => {
    chooseClass(isCorrect, clicked);
  }, [clicked, classDefault]);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      chooseClass(isCorrect, true);
      handleCallback(true);
    }
  };

  const chooseClass = (isCorrect, isSelected = false) => {
    if (isSelected && !isCorrect) {
      setOptions("wrong-clicked disabled");
      setImg(WrongImg);
    } else if (isSelected && isCorrect) {
      setOptions("correct disabled");
      setImg(CorrectImg);
    } else {
      setOptions("wrong disabled");
      setImg(WrongImg);
    }
  }

  return (
    <div
      name={description}
      onClick={handleClick}
      className={`options option ${clicked ? options : (!isCorrect) ? classDefault : answerWrong ? 'correct disabled' : ''}'`}
    >
      <p>{description}</p>
      { clicked && <img src={img} className="image-mark" /> }
      { isCorrect && answerWrong && <img src={CorrectAnswerImg} className="image-mark" /> }
    </div>
  );
};

export default Option;
