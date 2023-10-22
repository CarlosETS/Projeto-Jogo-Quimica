import React, { createContext, useReducer, useContext, useEffect } from "react";
import * as Yup from 'yup';
import questoesService from '../services/QuestionService.js';

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions: [],
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  help: false,
  optionToHide: null,
  correctIndex: -1,
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
      return {
        ...state,
        questions: action.questions,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS": {
      const reorderedQuestions = state.questions.slice().sort(() => {
        return Math.random() - 0.5;
      });

      const correctIndex = reorderedQuestions.findIndex(
        (question) => question.answer === state.questions[state.currentQuestion].answer
      );

      return {
        ...state,
        questions: reorderedQuestions,
        correctIndex,
      };
    }

    case "CHANGE_QUESTION": {
      let questions = state.questions.slice();
      let endGame = false;

      if (state.currentQuestion + 1 >= questions.length) {
        endGame = true;
      }

      if (!endGame) {
        questions = questions.slice().sort(() => Math.random() - 0.5);
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
        correctIndex,
        questions,
      };
    }

    case "NEW_GAME": {
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

  const fetchAndSetQuestions = async () => {
    try {
      const questions = await questoesService.listarQuestoes(); // Chame o método correto para buscar perguntas do serviço
      dispatch({ type: "START_GAME", questions });
    } catch (error) {
      console.error('Erro ao buscar as perguntas: ' + error.message);
    }
  };

  useEffect(() => {
    fetchAndSetQuestions();
  }, []);

  return <QuizContext.Provider value={[state, dispatch]}>{children}</QuizContext.Provider>;
};
