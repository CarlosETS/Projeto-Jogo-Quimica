import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: { type: String },
  email: { type: String},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Users = mongoose.model('Users', schema);

export default Users;
