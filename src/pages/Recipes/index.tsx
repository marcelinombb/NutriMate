/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/common/NavBar'
import { Container } from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'
import SearchBar from 'src/components/common/SearchBar'
import RecipeCard, { type RecipeCardProps } from 'src/components/RecipeCard'
import { FlatList } from 'react-native'
import { Recipe } from 'src/entitites/Recipe'
import recipeService from 'src/services/recipeService'
import { useNavigation } from '@react-navigation/native'
import { PropsStack } from 'src/routes'

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | []>([])
  const navigation = useNavigation<PropsStack>()

  const handleNavigate = (recipe: Recipe) => {
    navigation.navigate('RecipePage', { recipe })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await recipeService.getRecipes()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setRecipes(response?.data ?? [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
      image={{ uri: item.picture }}
      onPress={() => {
        handleNavigate(item)
      }}
    />
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
