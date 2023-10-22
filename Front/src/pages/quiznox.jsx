import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/quiz.jsx";

import Option from "../components/Option.jsx";
import GameOver from "../components/GameOver.jsx";

import Img from "../img/explam-image.png";
import "../assets/question.css";

const QuizNox = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const [gameOver, setGameOver] = useState(false);

  const onSelectOption = (option, selectedIndex) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
    dispatch({ type: "START_GAME" });
  }, []);

  useEffect(() => {
    if (quizState.gameStage === "End") {
      setGameOver(true);
    }
  }, [quizState.gameStage]);

  return (
    <div id="question">
      {gameOver ? (
        <GameOver />
      ) : currentQuestion && (
        <>
          <p>
            Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
          </p>
          <h2>{currentQuestion.question}</h2>
          <div id="options-container">
            {currentQuestion.options.map((option, index) => (
              <Option
                option={option}
                key={option}
                selectOption={onSelectOption}
                index={index}
              />
            ))}
          </div>
          {!quizState.answerSelected && !quizState.help && (
            <>
              {currentQuestion.tip && (
                <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
              )}
              <button
                className="button"
                onClick={() => dispatch({ type: "REMOVE_OPTION" })}
              >
                Excluir uma
              </button>
            </>
          )}
          {!quizState.answerSelected && quizState.help === "tip" && (
            <p>{currentQuestion.tip}</p>
          )}
          {quizState.answerSelected && (
            <button
              className="button"
              onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
            >
              Continuar
            </button>
          )}
        </>
      )}
      {!gameOver && (
        <img
          src={Img}
          alt="Explicação das respostas"
          className="bottom-left-image"
        />
      )}
    </div>
  );
};

export default QuizNox;
