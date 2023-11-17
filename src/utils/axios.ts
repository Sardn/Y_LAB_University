import axios from 'axios';
import { getTokenLocalstor } from './helpers/localstor';

export const inctance = axios.create({
  baseURL: 'http://127.0.0.1:5173/',
  headers: {
    Authorization: 'Bearer' + getTokenLocalstor() || '',
  },
});
