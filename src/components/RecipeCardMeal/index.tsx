import React, { type ReactNode } from 'react'

import CaloriesIcon from '@icons/fire-p.png'
import ProteinIcon from '@icons/muscle-p.png'
import TimeIcon from '@icons/time-p.png'
import HamburguerIcon from '@icons/hamburguer-menu-p.png'
import { type ImageSourcePropType, TouchableOpacity, View } from 'react-native'
import {
  Card,
  Container,
  ContainerMacro,
  HamburguerMenu,
  MacroIcon,
  MacroNumber,
  MealPhoto,
  TitleCard
} from './styles'

export interface RecipeCardProps {
  _id: string
  isLast: boolean
  height: number
  children: ReactNode
  title: string
  calories: string
  proteins: string
  timePrepare: string
  image: ImageSourcePropType
  onPress?: () => void
}

const RecipeCardMeal = (props: Partial<RecipeCardProps>) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={props.onPress}>
      <Container isLast={props.isLast}>
        <Card height={props.height}>
          <MealPhoto source={props.image} />
          <HamburguerMenu source={HamburguerIcon} />
          <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <TitleCard>{props.title}</TitleCard>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <ContainerMacro>
                <MacroIcon source={ProteinIcon} />
                <MacroNumber>{props.proteins}g</MacroNumber>
              </ContainerMacro>
              <ContainerMacro>
                <MacroIcon source={CaloriesIcon} />
                <MacroNumber>{props.calories}</MacroNumber>
              </ContainerMacro>
              <ContainerMacro>
                <MacroIcon source={TimeIcon} />
                <MacroNumber>{props.timePrepare}m</MacroNumber>
              </ContainerMacro>
            </View>
          </View>
        </Card>
      </Container>
    </TouchableOpacity>
  )
}

export default RecipeCardMeal
