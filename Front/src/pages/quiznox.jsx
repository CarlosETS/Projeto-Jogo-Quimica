import React, { useContext, useEffect, useState } from "react";
import questionService from "../services/QuestionService.js";
import Option from "../components/Option.jsx";
import GameOver from "../components/GameOver.jsx";
import Img from "../img/explam-image.png";
import "../assets/question.css";

const QuizNox = ({ select }) => {
  const [questions, setQuestions] = useState([]);
  const [currentDataIndex, setDataQuestionIndex] = useState(0);

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
    if (currentDataIndex < questions.length - 1) {
      setDataQuestionIndex(currentDataIndex + 1);
    } else {
      // Renderiza o componente GameOver quando não houver mais perguntas
      return <GameOver />;
    }
  };

  console.log(questions);

  // Verifique se a variável `questions` não está vazia
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(currentDataIndex)
  const currentQuestion = questions.data[currentDataIndex];
  console.log(currentQuestion)

  // Crie um array de perguntas com suas respostas associadas
  const questionWithAnswer = currentQuestion.answers.map((answer) => ({
    question: currentQuestion.question.text, // Texto da pergunta
    answer: answer.description, // Texto da resposta
  }));

  console.log(questionWithAnswer);

  const onSelectOption = () => {
    currentQuestion.answer;
  };

  console.log(currentQuestion.answer)

  return (
    <div id="question">
      {currentQuestion ? (
        <>
          <p>
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>
          <h2>{currentQuestion.question.text}</h2>
          <div id="options-container">
            {currentQuestion.answers.map((answer) => (
              <Option
                option={answer.description}
                key={answer._id}
                onSelectOption={onSelectOption} // Passa a função onSelectOption aqui
                isCorrectAnswer={answer.isCorrect} // Passa a prop isCorrectAnswer
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
