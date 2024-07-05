import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.4:3001',
  validateStatus: (status) => status >= 200 && status <= 500,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
