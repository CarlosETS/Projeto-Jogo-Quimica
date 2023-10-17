import React, { useContext, useState } from "react";

import { QuizContext } from "../context/quiz.jsx";

import "../assets/option.css";

const Option = ({ option, selectOption, answer, hide }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    const [clicked, setClicked] = useState(false);

    const isCorrect = quizState.answerSelected && option === answer;
    const isWrong = quizState.answerSelected && option !== answer;

    const handleOptionClick = () => {
        if (!clicked) {
            setClicked(true);
            if (isWrong) {
                dispatch({ type: "DISABLE_OPTIONS" }); // Desativa outras opções após clicar em uma incorreta
            }
        }
    }

    return (
        <div
            onClick={() => handleOptionClick()}
            className={`option ${quizState.answerSelected && option === answer ? "correct" : ""}
                ${quizState.answerSelected && option !== answer ? "wrong" : ""} ${hide ? "hide" : ""}`}>
            {isCorrect && <span className="checkmark" />}
            {isWrong && !quizState.answerSelected && <span className="crossmark" />}
            <p>{option}</p>
        </div>
    );
};

export default Option;