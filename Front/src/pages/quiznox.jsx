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
  const [classDefault, setClassDefault] = useState('');
  const [answerWrong, setAnswerWrong] = useState(false);
  const [points, setPoints] = useState(0);
  const [rightQuestion, setRightQuestion] = useState(false);

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

  const resetAllInputs = () => {
    setClassDefault('');
    setRightQuestion(false);
    setAnswerWrong(false);
  }

  const handleAddCountQuestion = (rightQuestion) => {
    if (currentDataIndex < questions.length) {
      setDataQuestionIndex(currentDataIndex + 1);
      if (rightQuestion)
        setPoints(() => points + 1);

      resetAllInputs();
    } else {
      return <GameOver />;
    }
  };

  const handleOptionClick = (isClicked, isCorrect) => {
    if (!isCorrect) 
      setAnswerWrong(true);
    else
      setRightQuestion(true);
    if (isClicked)
      setClassDefault('options option wrong disabled')
  };

  return (
    <div className="question">
      {questions.length > 0 && currentQuestion ? (
        <>
          <p className="text-black">
            Pergunta {currentDataIndex + 1} de {questions.length}
          </p>
          <h2 className="text-black">{currentQuestion.question.text}</h2>
          <div id="options-container">
            {currentQuestion.answers.map((answer) => (
              <Option
                description={answer.description}
                key={answer._id}
                isCorrect={answer.isCorrectAnswer}
                classDefault={classDefault}
                handleCallback={(isClicked) => handleOptionClick(isClicked, answer.isCorrectAnswer)}
                answerWrong={answerWrong}
              />
            ))}
          </div>
          <button className="button" disabled={!classDefault} onClick={() => handleAddCountQuestion(rightQuestion)}>
            Continuar
          </button>
        </>
      ) : (
        <GameOver
          score={points}
          totalQuestions={questions.length}
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