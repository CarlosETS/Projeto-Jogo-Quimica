import mongoose from 'mongoose';
import IUsers from '../interfaces/IUsers';

const schema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Users = mongoose.model<IUsers>('Users', schema);

export default Users;
