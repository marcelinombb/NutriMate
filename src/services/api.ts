import axios from 'axios'
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
  validateStatus: (status) => status >= 200 && status <= 500,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
