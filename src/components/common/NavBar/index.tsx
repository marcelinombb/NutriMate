import React from 'react'
import { Container, Icon, IconButton } from './styles'
import { useNavigation } from '@react-navigation/native'
import { type PropsStack } from '../../../routes'

import { HomeIcon, DiaryIcon, RecipesIcon, ProfileIcon } from '@icons'

const NavBar = () => {
  const navigation = useNavigation<PropsStack>()

  return (
    <Container>
      <IconButton
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <Icon source={HomeIcon} />
      </IconButton>

      <IconButton
        onPress={() => {
          navigation.navigate('Diary')
        }}
      >
        <Icon source={DiaryIcon} />
      </IconButton>

      <IconButton
        onPress={() => {
          navigation.navigate('Recipes')
        }}
      >
        <Icon source={RecipesIcon} />
      </IconButton>

      <IconButton
        onPress={() => {
          navigation.navigate('Profile')
        }}
      >
        <Icon source={ProfileIcon} />
      </IconButton>
    </Container>
  )
}

export default NavBar
