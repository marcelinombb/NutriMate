import React from 'react'
import { Card, Container, MealPhoto } from './styles'

import meal from '../../../assets/images/fullhidration.png'

const RecipeCard = () => {
  return (
    <Container>
      <Card>
        <MealPhoto source={meal} />
      </Card>
    </Container>
  )
}

export default RecipeCard
