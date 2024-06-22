import React, { type ReactNode } from 'react'
import { Card, Container } from './styles'

export interface RecipeCardProps {
  isLast: boolean
  height: number
  children: ReactNode
}

const RecipeCard = (props: Partial<RecipeCardProps>) => {
  return (
    <Container isLast={props.isLast}>
      <Card height={props.height}>
        {props.children}
      </Card>
    </Container>
  )
}

export default RecipeCard
