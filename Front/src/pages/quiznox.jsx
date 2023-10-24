import React, { useContext, useEffect, useState } from "react";
import questionService from "../services/QuestionService.js";
import Option from "../components/Option.jsx";
import GameOver from "../components/GameOver.jsx";
import Img from "../img/explam-image.png";
import "../assets/question.css";

const QuizNox = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsData = await questionService.listarQuestoes();
        setQuestions(questionsData);
      } catch (error) {
        console.error('Erro ao buscar as perguntas: ' + error.message);
      }
    };

    fetchQuestions();
  }, []);

  const changeComponent = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Renderiza o componente GameOver quando não houver mais perguntas
      return <GameOver />;
    }
  };

  // Obtém a pergunta atual
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div id="question">
      {currentQuestion ? (
        <>
          <p>
            Pergunta {currentQuestionIndex + 1} de {questions.length}
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
          {/* Resto do seu código para renderização de opções, dica, etc. */}
          <button className="button" onClick={changeComponent}>
            Continuar
          </button>
        </>
      ) : (
        <GameOver />
      )}
      {!GameOver && (
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
