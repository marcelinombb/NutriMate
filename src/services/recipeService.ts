import api from './api'

interface Recipe {
  _id: string
  name: string
  description: string
  calories: number
  proteins: string
  carbos: string
  fat: string
  timePrepare: string
}

const recipeService = {
  getRecipes: async () => {
    const res = await api.get<Recipe[]>('/recipes')
    return res
  }
}
export default recipeService
