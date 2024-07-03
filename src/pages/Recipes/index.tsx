/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Children, useEffect, useState } from 'react'
import NavBar from '../../components/common/NavBar'
import { Container } from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'
import SearchBar from 'src/components/common/SearchBar'
import RecipeCard, { type RecipeCardProps } from 'src/components/RecipeCard'
import meal from '@images/fullhidration.png'
import { MealPhoto } from 'src/components/RecipeCard/styles'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { FlatList, ListRenderItem, View } from 'react-native'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Recipe } from 'src/entitites/Recipe'
import recipeService from 'src/services/recipeService'

const Data = [
  {
    _id: '1',
    isLast: false,
    height: 100,
    children: <MealPhoto source={meal} />,
    title: 'Avocado with Toast',
    calories: '450',
    proteins: '18',
    timePrepare: '12'
  }
]
const Recipes = () => {
  const renderItem: ListRenderItem<RecipeCardProps> = ({ item }) => (
    <RecipeCard
      isLast={false}
      height={100}
      title={item.title}
      calories={item.calories}
      proteins={item.proteins}
      timePrepare={item.timePrepare}
    >
      {item.children}
    </RecipeCard>
  )
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Recipes" />
      <SearchBar />
      <FlatList
        data={Data}
        keyExtractor={(item: RecipeCardProps) => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
      />
      <NavBar />
    </Container>
  )
}

export default Recipes
