import React from 'react'
import NavBar from '../../components/common/NavBar'
import { Container } from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'
import SearchBar from 'src/components/common/SearchBar'
import RecipeCard from 'src/components/RecipeCard'

const Diary = () => {
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Diary" />
      <SearchBar />
      <RecipeCard height={100} />
      <NavBar />
    </Container>
  )
}

export default Diary
