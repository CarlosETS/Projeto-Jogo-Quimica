import React from "react";
import { Link } from "react-router-dom";
import "../assets/gameover.css";

const GameOver = ({ score, totalQuestions, totalCorrectQuestions }) => {
  return (
    <div  className="gameover">
      <h2>Fim de Jogo</h2>
      <p className="score">Pontuação: {score}</p>
      <p>
        Você acertou {totalCorrectQuestions} de {totalQuestions} perguntas.
      </p>
      <img src="" alt="Fim do Quiz" className="gameover-image" />
      <div className="button-container">
        <Link to="/quiznox" className="restart-button">
          Reiniciar
        </Link>
        <Link to="/home" className="home-button">
          Retornar à Tela Inicial
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
