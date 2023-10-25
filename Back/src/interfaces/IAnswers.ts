import IQuestions from "./IQuestions";

export default interface IAnswers {
  _id?: string;
  question?: string | IQuestions;
  description?: string;
  isCorrectAnswer: boolean;
  createdAt?: any;
  updatedAt?: any;
}