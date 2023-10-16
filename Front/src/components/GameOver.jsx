import React, { useContext } from "react";

import { QuizContext } from "../context/quiz.jsx";

import "../assets/gameover.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log('gameover')
  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={''} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
      <button onClick={() => dispatch({ url: '/home'})}>Retorar a tela inicial</button>
    </div>
  );
};

export default GameOver;