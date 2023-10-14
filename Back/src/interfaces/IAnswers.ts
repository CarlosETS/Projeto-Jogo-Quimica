import IQuestions from "./IQuestions";

export default interface IAnswers {
  _id?: string;
  question: string | IQuestions;
  isCorrectAnswer: boolean;
  createdAt?: any;
  updatedAt?: any;
}