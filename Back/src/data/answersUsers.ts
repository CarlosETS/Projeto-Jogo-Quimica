import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  answer: { type: mongoose.Schema.Types.ObjectId, ref: "Answers" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const AnswersUsers = mongoose.model('AnswersUsers', schema);

export default AnswersUsers;