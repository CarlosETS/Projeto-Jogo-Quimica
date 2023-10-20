import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3100',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
  },
  withCredentials: false
});

export default api;