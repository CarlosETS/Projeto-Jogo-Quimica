import { Schema } from "mongoose";

export default interface IQuestions {
  id?: string | Schema.Types.ObjectId;
  question?: string;
  responses?: [{}];
  createdAt?: any;
  updatedAt?: any;
}