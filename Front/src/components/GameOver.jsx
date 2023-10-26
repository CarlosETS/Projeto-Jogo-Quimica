import React from "react";
import { Link } from "react-router-dom";
import "../assets/gameover.css";

const GameOver = ({ score, totalQuestions }) => {
  return (
    <div className="gameover">
      <h2 className="text-white text-4xl mb-3"> Fim de Jogo</h2>
      <p className="score text-2xl">Pontuação: {score}</p>
      <p className="text-white mb-4">
        Você acertou {score} de {totalQuestions} perguntas.
      </p>
      <div className="button-container">
        <a onClick={() => window.location.reload()} className="restart-button">
          Reiniciar
        </a>
        <Link to="/home" className="home-button">
          Retornar à Tela Inicial
        </Link>
      </div>  
    </div>
  );
};

export default GameOver;
