import mongoose from 'mongoose';
import IQuestions from '../interfaces/IQuestions'

const schema = new mongoose.Schema({
  text: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Questions = mongoose.model<IQuestions>('Questions', schema);

export default Questions;
