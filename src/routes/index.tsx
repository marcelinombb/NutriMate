import React from 'react'
import {
  type NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Recipes from '../pages/Recipes'
import Diary from '../pages/Diary'
import RecipePage from '../pages/RecipePage'
import { type Recipe } from 'src/entitites/Recipe'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type PropsNavigationStack = {
  Login: undefined
  Home: undefined
  Diary: undefined
  Recipes: undefined
  Profile: undefined
  RecipePage: { recipe: Recipe }
}

const Stack = createNativeStackNavigator<PropsNavigationStack>()
export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Diary" component={Diary} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="RecipePage" component={RecipePage} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
