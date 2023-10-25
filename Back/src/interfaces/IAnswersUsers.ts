import IAnswers from "./IAnswers";

export default interface IAnswersUsers {
  _id?: string;
  answer: string | IAnswers;
  user: string | IAnswers;
  createdAt?: any;
  updatedAt?: any;
}