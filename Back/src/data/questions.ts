import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  text: { type: String, required: true },
  isActive: { type: Boolean, required: false, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Questions = mongoose.model('Questions', schema);
export default Questions;