import React from 'react'
import { Container, DiaryIcon, Icon, IconButton } from './styles'
import { useNavigation } from '@react-navigation/native'
import { type PropsStack } from '../../../routes'

import homeIcon from '../../../../assets/icons/home-icon-p.png'
import diaryIcon from '../../../../assets/icons/diary-icon-p.png'
import recipesIcon from '../../../../assets/icons/recipes-icon-p.png'
import profileIcon from '../../../../assets/icons/profile-icon-p.png'

const NavBar = () => {
  const navigation = useNavigation<PropsStack>()

  return (
    <Container>
      <IconButton
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <Icon source={homeIcon} />
      </IconButton>

      <IconButton
        onPress={() => {
          navigation.navigate('Diary')
        }}
      >
        <DiaryIcon source={diaryIcon} />
      </IconButton>

      <IconButton
        onPress={() => {
          navigation.navigate('Recipes')
        }}
      >
        <Icon source={recipesIcon} />
      </IconButton>

      <IconButton
        onPress={() => {
          navigation.navigate('Profile')
        }}
      >
        <Icon source={profileIcon} />
      </IconButton>
    </Container>
  )
}

export default NavBar
