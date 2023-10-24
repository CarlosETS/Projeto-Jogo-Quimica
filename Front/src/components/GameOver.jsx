import React from "react";
import { Link } from "react-router-dom"; // Importe Link para navegar para outras páginas
import "../assets/gameover.css";

const GameOver = ({ score, totalQuestions }) => {
  return (
    <div id="gameover">
      <h2>Fim de Jogo</h2>
      <p className="score">Pontuação: {score}</p>
      <p>
        Você acertou {score} de {totalQuestions} perguntas.
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
