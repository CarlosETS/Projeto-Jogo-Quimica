import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: { type: String },
  symbol: { type: String },
  atomicNumber: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Elementos = mongoose.model('Elements', schema);

export default Elementos;
