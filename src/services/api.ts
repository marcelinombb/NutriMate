import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.0.0.113:3000',
  validateStatus: (status) => status >= 200 && status <= 500,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
