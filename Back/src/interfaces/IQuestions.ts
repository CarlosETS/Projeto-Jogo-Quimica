import { Schema } from "mongoose";

export default interface IQuestions {
  id?: string | Schema.Types.ObjectId;
  question?: string;
  isActive?: boolean;
  responses?: [{}];
  createdAt?: any;
  updatedAt?: any;
}