import React, { useContext, useState } from "react";
import { QuizContext } from "../context/quiz.jsx";

import "../assets/option.css";

import CorrectImg from "../img/correct-image.png"
import WrongImg from "../img/wrong-image.png"
import CorrectAnswerImg from "../img/correct-answer-image.png"

const Option = ({ option, selectOption, answer, hide, index }) => {
    const [quizState] = useContext(QuizContext);
    const [clicked, setClicked] = useState(false);

    const correctIndex = quizState.correctIndex;

    const isCorrect = quizState.answerSelected && option === answer;
    const isWrong = quizState.answerSelected && option !== answer;
    const isWrongOnClick = clicked && index !== correctIndex; // Use correctIndex
    const isCorrectOnClick = clicked && index === quizState.correctIndex; // Use correctIndex

    const handleOptionClick = () => {
        if (!clicked) {
            setClicked(true);
            selectOption(index); // Passe o índice quando a opção é clicada
        }
    };
    console.log(correctIndex);
    console.log(quizState.correctIndex);

    return (
        <div
            onClick={handleOptionClick}
            className={`
                option
                ${isCorrect ? "correct" : ""}
                ${isWrong ? "wrong" : ""}
                ${isWrongOnClick ? "wrong-clicked" : ""}
                ${isCorrectOnClick ? "correct" : ""}
                ${hide ? "hide" : ""}
            `}
        >
            <p>{option}</p>
            {isCorrect && <img src={CorrectAnswerImg} alt="Respota certa" className="image-mark" />}
            {isWrongOnClick && <img src={WrongImg} alt="Você errou" className="image-mark"/>}
            {isCorrectOnClick && <img src={CorrectImg} alt="Resposta correta" className="image-mark" />}
        </div>
    );
};

export default Option;
