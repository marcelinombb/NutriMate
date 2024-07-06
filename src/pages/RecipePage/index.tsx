import React from 'react'
import NavBar from '../../components/common/NavBar'

import {
  Container,
  ContainerAllMacros,
  ContainerDescription,
  ContainerMacros,
  CoverPhoto,
  DescriptionText,
  MacroIcon,
  MacroTitle,
  Title
} from './styles'
import { type PropsNavigationStack } from 'src/routes'
import { type RouteProp, useRoute } from '@react-navigation/native'

import CaloriesIcon from '@icons/fire-p.png'
import ProteinIcon from '@icons/muscle-p.png'
import TimeIcon from '@icons/time-p.png'
import FatIcon from '@icons/fat-solid-p.png'

const RecipePage = () => {
  const route = useRoute<RouteProp<PropsNavigationStack, 'RecipePage'>>()
  const { recipe } = route.params
  return (
    <Container>
      <CoverPhoto source={{ uri: recipe.picture }} />
      <Title>{recipe.name}</Title>
      <ContainerAllMacros>
        <ContainerMacros>
          <MacroIcon source={CaloriesIcon} />
          <MacroTitle>{recipe.calories} kcal</MacroTitle>
        </ContainerMacros>
        <ContainerMacros>
          <MacroIcon source={ProteinIcon} />
          <MacroTitle>{recipe.proteins}g</MacroTitle>
        </ContainerMacros>
        <ContainerMacros>
          <MacroIcon source={FatIcon} />
          <MacroTitle>{recipe.fat}g</MacroTitle>
        </ContainerMacros>
        <ContainerMacros>
          <MacroIcon source={TimeIcon} />
          <MacroTitle>{recipe.timePrepare}min</MacroTitle>
        </ContainerMacros>
      </ContainerAllMacros>
      <ContainerDescription>
        <DescriptionText>{recipe.description}</DescriptionText>
      </ContainerDescription>
      <NavBar />
    </Container>
  )
}

export default RecipePage
