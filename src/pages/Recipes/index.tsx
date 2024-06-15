import React from 'react'
import NavBar from '../../components/common/NavBar'
import { Container } from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'
import SearchBar from 'src/components/common/SearchBar'
import RecipeCard from 'src/components/RecipeCard'
import { FlatList, View } from 'react-native'

const Recipes = () => {
  const data = new Array(10)
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Recipes" />
      <SearchBar />
      <View></View>
      <FlatList
      data={data}
      renderItem={({ item, index }) => {
        return (
          <RecipeCard isLast={index === data.length - 1} height={74} />
        )
      }}
      />
      <NavBar />
    </Container>
  )
}

export default Recipes
