import React, { useContext, useEffect, useState } from "react";
import questionService from "../services/QuestionService.js";
import Option from "../components/Option.jsx";
import GameOver from "../components/GameOver.jsx";
import Img from "../img/explam-image.png";
import "../assets/question.css";

const QuizNox = () => {
  const [questions, setQuestions] = useState([]);
  const [currentDataIndex, setDataQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [totalcorrect, setTotalCorrect] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(); // Adicione o estado para rastrear o índice da resposta correta

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

  console.log(questions);

  // Verifique se a variável `questions` não está vazia
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(currentDataIndex)
  const currentQuestion = questions.data[currentDataIndex];
  console.log(currentQuestion)

  const answersArray = currentQuestion.answers.map((answer, index) => ({
    description: answer.description,
    isCorrectAnswer: answer.isCorrectAnswer,
    index: answer.isCorrectAnswer ? index : -1 // Define o índice da resposta correta ou -1 se não for correta
  }));

  console.log('aaaa', answersArray);

  const changeComponent = () => {
    if (currentDataIndex < questions.data.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      // Renderiza o componente GameOver quando não houver mais perguntas
      return <GameOver />;
    }
  };

  const handleSelectOption = (isCorrect, answerIndex) => {
    if (isCorrect) {
      setPoints(points + 10);
      setTotalCorrect(totalcorrect + 1);
      setCorrectIndex(answerIndex); // Define o índice da resposta correta
    }
  };

  return (
    <div className="question">
      {currentQuestion ? (
        <>
          <p>
            Pergunta {currentDataIndex + 1} de {questions.data.length}
          </p>
          <h2>{currentQuestion.question.text}</h2>
          <div id="options-container">
            {currentQuestion.answers.map((answer, index) => (
              <Option
                option={answer.description}
                key={answer._id}
                selectOption={(index) => handleSelectOption(answer.isCorrect, index)}
                index={index}
                correctIndex={answersArray.findIndex((answer) => answer.isCorrectAnswer == true)}
              />
            ))}
          </div>
          {/* Resto do seu código para renderização de opções, dica, etc. */}
          <button className="button" onClick={changeComponent}>
            Continuar
          </button>
        </>
      ) : (
        <GameOver
          score={points}
          totalQuestions={questions.data.length}
          totalCorrectQuestions={totalcorrect}
          correctIndex={correctIndex} // Passa o índice da resposta correta para o componente GameOver
        />
      )}
      {currentDataIndex < questions.data.length && (
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