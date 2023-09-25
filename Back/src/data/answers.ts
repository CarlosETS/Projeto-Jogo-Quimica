import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Questions" },
  isCorrectAnswer: { type: Boolean, default: false},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Answers = mongoose.model('Answers', schema);

export default Answers;
