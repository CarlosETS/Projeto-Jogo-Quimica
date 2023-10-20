import React, { useContext } from "react";
import { QuizContext } from "../context/quiz.jsx";
import "../assets/gameover.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de Jogo</h2>
      <p className="score">Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src="" alt="Fim do Quiz" className="gameover-image" />
      <div className="button-container">
        <a className="restart-button" href="/quiznox">
          Reiniciar
        </a>
        <a className="home-button" href="/home">
          Retornar à Tela Inicial
        </a>
      </div>
    </div>
  );
};

export default GameOver;
