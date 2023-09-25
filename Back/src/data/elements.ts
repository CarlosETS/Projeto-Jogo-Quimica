import mongoose from 'mongoose';
import IElements from '../interfaces/IElements';

const schema = new mongoose.Schema({
  name: { type: String },
  symbol: { type: String },
  atomicNumber: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Elementos = mongoose.model<IElements>('Elements', schema);

export default Elementos;
