/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/common/NavBar'
import {
  CenterSubTitle,
  CenterTitle,
  Container,
  IndicatorContainer,
  Section,
  SideSubTitle,
  SideTitle
} from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'
import SearchBar from 'src/components/common/SearchBar'
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import meal from '@images/breakfast-photo.jpg'
import PlusCircleIcon from '@icons/plusCircle.png'
import MealCard from 'src/components/MealCard'
import mealService from 'src/services/mealService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { type Meal } from 'src/entitites/Meal'

const Diary = () => {
  const [meals, setMeals] = useState<Meal[]>([])
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let id = userId
        if (!id) {
          id = await AsyncStorage.getItem('userId')
          setUserId(id)
        }

        if (id) {
          const response = await mealService.getMealByUserId(id)
          
          setMeals(response ?? [])
        } else {
          console.error('User ID not found')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [userId])

  const renderItem = ({ item, index }: { item: Meal; index: number }) => (
    <MealCard
      isLast={index === meals.length - 1}
      height={100}
      name={item.name}
      icon={{ uri: item.icon }}
      onPressContainer={() => {}}
      onPressAdd={() => {}}
    />
  )

  return (
    <Container>
      <DefaultTitle fontSize={20} title="Diary" />
      <SearchBar />
      <IndicatorContainer>
        <Section>
          <SideTitle>300</SideTitle>
          <SideSubTitle>Eaten</SideSubTitle>
        </Section>
        <Section>
          <CenterTitle>2300</CenterTitle>
          <CenterSubTitle>Total Calories</CenterSubTitle>
        </Section>
        <Section>
          <SideTitle>2000</SideTitle>
          <SideSubTitle>Remaining</SideSubTitle>
        </Section>
      </IndicatorContainer>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <NavBar />
    </Container>
  )
}

export default Diary
