export default interface IUsers {
  _id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: any;
  updatedAt?: any;
};

export interface ILogin {
  email: string;
  password: string;
  token?: string;
};