import React from 'react'
import { Card, Container, MealPhoto } from './styles'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import meal from '@images/fullhidration.png'
import PlusCircleIcon from '@icons/plusCircle.png'
export interface RecipeCardProps {
  isLast: boolean
  height: number
}

const RecipeCard = (props: Partial<RecipeCardProps>) => {
  return (
    <Container isLast={props.isLast}>
      <Card height={props.height}>
        <MealPhoto source={meal} />
        <View style={{ flex: 1, width: 'auto', marginLeft: 15, marginRight: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text>teste</Text>
          </View>
          <View style={{}}><TouchableOpacity><Image source={PlusCircleIcon} style={{ width: 35, height: 35 }}/></TouchableOpacity></View>
        </View>
      </Card>
    </Container>
  )
}

export default RecipeCard
