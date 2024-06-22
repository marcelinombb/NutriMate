import React from 'react'
import NavBar from '../../components/common/NavBar'
import {
  Container,
  Greeting,
  GreetingUser,
  NutritionTipTitle,
  NutritionTip,
  NutritionTipContent,
  Welcome
} from './styles'
import NutritionTipList from '../../components/NutritionTipList'
import { TouchableOpacity, View, Image } from 'react-native'
import NotifyIcon from '@icons/notification.png'
import PerfilIcon from '@icons/perfil.png'

const Home = () => {
  return (
    <Container>
      <Greeting>
        <View>
          <Welcome>Welcome Back!</Welcome>
          <GreetingUser>Hi, User</GreetingUser>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity><Image source={NotifyIcon} style={{ width: 48, height: 48 }}/></TouchableOpacity>
          <TouchableOpacity><Image source={PerfilIcon} style={{ width: 48, height: 48 }}/></TouchableOpacity>
        </View>
      </Greeting>
      <NutritionTip>
        <NutritionTipTitle>Nutrition Tips</NutritionTipTitle>
        <NutritionTipContent>
          Hey buddy! It’s a sunny day. Why don’t you get your shoes on and go
          running outside?
        </NutritionTipContent>
      </NutritionTip>
      <NutritionTipList />
      <NavBar />
    </Container>
  )
}

export default Home
