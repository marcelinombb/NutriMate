/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Children, useEffect, useState } from 'react'
import NavBar from '../../components/common/NavBar'
import { Container } from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'
import SearchBar from 'src/components/common/SearchBar'
import RecipeCard, { type RecipeCardProps } from 'src/components/RecipeCard'
import meal from '@images/cleanprotein.png'
import { MealPhoto } from 'src/components/RecipeCard/styles'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { FlatList, ListRenderItem, View } from 'react-native'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Recipe } from 'src/entitites/Recipe'
import recipeService from 'src/services/recipeService'


const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | []>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await recipeService.getRecipes();
        setRecipes(response?.data ?? [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    //@ts-ignore
    fetchData()
  }, [])

  const renderItem = ({ item }: { item: Recipe }) => (
    <RecipeCard
      isLast={false}
      height={100}
      title={item.name}
      calories={item.calories}
      proteins={item.proteins}
      timePrepare={item.timePrepare}
      image={meal}
    >

    </RecipeCard>
  )
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Recipes" />
      <SearchBar />
      <FlatList
        data={recipes}
        keyExtractor={(item: Recipe) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
      />
      <NavBar />
    </Container>
  )
}

export default Recipes
