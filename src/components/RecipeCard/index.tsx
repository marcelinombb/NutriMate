import React, { type ReactNode } from 'react'
import {
  Card,
  Container,
  ContainerMacro,
  MacroIcon,
  MacroNumber,
  TitleCard
} from './styles'
import CaloriesIcon from '@icons/fire-p.png'
import ProteinIcon from '@icons/muscle-p.png'
import TimeIcon from '@icons/time-p.png'
import { View } from 'react-native'

export interface RecipeCardProps {
  _id: string
  isLast: boolean
  height: number
  children: ReactNode
  title: string
  calories: string
  proteins: string
  timePrepare: string
}

const RecipeCard = (props: Partial<RecipeCardProps>) => {
  return (
    <Container isLast={props.isLast}>
      <Card height={props.height}>
        {props.children}
        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <TitleCard>Avocado with Toast</TitleCard>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <ContainerMacro>
              <MacroIcon source={ProteinIcon} />
              <MacroNumber>15g</MacroNumber>
            </ContainerMacro>
            <ContainerMacro>
              <MacroIcon source={CaloriesIcon} />
              <MacroNumber>450</MacroNumber>
            </ContainerMacro>
            <ContainerMacro>
              <MacroIcon source={TimeIcon} />
              <MacroNumber>15m</MacroNumber>
            </ContainerMacro>
          </View>
        </View>
      </Card>
    </Container>
  )
}

export default RecipeCard
