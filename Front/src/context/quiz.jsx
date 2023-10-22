import React, { createContext, useReducer, useContext } from "react";

import questions from "../data/questions.jsx";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  help: false,
  optionToHide: null,
  correctIndex: -1, // Inclua esta propriedade para manter o índice da resposta correta
};

console.log('Quiz context')
console.log('estado inicial', initialState);

const quizReducer = (state, action) => {

  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME":
      let quizQuestions = questions;

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[1],
      };

      case "REORDER_QUESTIONS": {
        const reorderedQuestions = state.questions.sort(() => {
          return Math.random() - 0.5;
        });
      
        // Encontre o índice da resposta correta na nova ordem
        const correctIndex = reorderedQuestions.findIndex(
          (question) => question.answer === state.questions[state.currentQuestion].answer
        );
      
        return {
          ...state,
          questions: reorderedQuestions,
          correctIndex, // Atualize o correctIndex
        };
      }
      
    case "CHANGE_QUESTION": {
      let questions = state.questions.slice(); // Crie uma cópia da lista de perguntas
      let endGame = false;

      // Verifique se já chegou ao final do jogo
      if (state.currentQuestion + 1 >= questions.length) {
        endGame = true;
      }

      if (!endGame) {
        // Reordene as perguntas antes de passar para a próxima pergunta
        questions = questions.sort(() => Math.random() - 0.5);
      }

      const nextQuestion = state.currentQuestion + 1;
      const currentQuestion = questions[nextQuestion];
      const correctAnswer = currentQuestion ? currentQuestion.answer : '';
      const correctIndex = currentQuestion ? currentQuestion.options.indexOf(correctAnswer) : -1;

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false,
        help: false,
        correctIndex, // Atualize o correctIndex
        questions, // Atualize a lista reordenada
      };
    }


    case "NEW_GAME": {
      console.log(questions);
      console.log(initialState);
      return initialState;
    }

    case "CHECK_ANSWER": {
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };
    }

    case "SHOW_TIP": {
      return {
        ...state,
        help: "tip",
      };
    }

    case "REMOVE_OPTION": {
      const questionWithoutOption = state.questions[state.currentQuestion];

      console.log(state.currentQuestion);

      console.log(questionWithoutOption);

      let repeat = true;
      let optionToHide;

      questionWithoutOption.options.forEach((option) => {
        if (option !== questionWithoutOption.answer && repeat) {
          optionToHide = option;
          repeat = false;
        }
      });

      return {
        ...state,
        optionToHide,
        help: true,
      };
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={[state, dispatch]}>{children}</QuizContext.Provider>;
};