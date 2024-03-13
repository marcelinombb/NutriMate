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

const Home = () => {
  return (
    <Container>
      <Greeting>
        <Welcome>Welcome Back!</Welcome>
        <GreetingUser>Hi, User</GreetingUser>
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
