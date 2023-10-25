import React, { useContext, useEffect, useState } from "react";
import questionService from "../services/QuestionService.js";
import Option from "../components/Option.jsx";
import GameOver from "../components/GameOver.jsx";
import Img from "../img/explam-image.png";
import "../assets/question.css";

const QuizNox = () => {
  const [questions, setQuestions] = useState([]);
  const [currentDataIndex, setDataQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState([]);
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

  useEffect(() => {
    setCurrentQuestion(questions[currentDataIndex])
  }, [questions, currentDataIndex]);
  

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }
  const answersArray = questions.map((questionAnswers) => questionAnswers.answers);

  const handleAddCountQuestion = () => {
    if (currentDataIndex < questions.length) {
      setDataQuestionIndex(currentDataIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      // Renderiza o componente GameOver quando não houver mais perguntas
      return <GameOver />;
    }
  };

  const handleSelectOption = (isCorrect) => {
    if (isCorrect) {
      setPoints(points + 10);
      setTotalCorrect(totalcorrect + 1);
      setCorrectIndex(answerIndex);
    }
  };
  // currentQuestion = questions[currentDataIndex];
  return (
    <div className="question">
      {console.log(questions.length)}
      {console.log(currentQuestion)}
      {questions.length > 0 && currentQuestion ? (
        <>
          <p>
            Pergunta {currentDataIndex + 1} de {questions.length}
          </p>
          <h2>{currentQuestion.text}</h2>
          <div id="options-container">
            {currentQuestion.answers.map((answer, index) => (
              <Option
                option={answer.description}
                key={answer._id}
                // selectOption={handleSelectOption(answer.isCorrect)}
                // index={index}
                // correctIndex={answersArray.findIndex((answer) => answer.isCorrectAnswer == true)}
              />
            ))}
          </div>
          {/* Resto do seu código para renderização de opções, dica, etc. */}
          <button className="button" onClick={handleAddCountQuestion}>
            Continuar
          </button>
        </>
      ) : (
        <GameOver
          score={points}
          totalQuestions={questions.length}
          totalCorrectQuestions={totalcorrect}
          correctIndex={correctIndex} // Passa o índice da resposta correta para o componente GameOver
        />
      )}
      {currentDataIndex < questions.length && (
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