import api from './api'
import { type User } from 'src/entitites/User'

const userService = {
  register: async (
    firstName: string,
    lastName: string,
    phone: string,
    birth: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await api.post<User>('/user', {
        firstName,
        lastName,
        phone,
        birth,
        email,
        password
      })
      return res
    } catch (error) {
      console.log(error)
    }
  },
  update: async (userId: string, updatedFields: Partial<User>) => {
    try {
      const res = await api.patch<User>(`/user/${userId}`, updatedFields)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default userService
