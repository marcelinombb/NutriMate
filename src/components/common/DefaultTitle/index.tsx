import React from 'react'
import { Container, Title } from './styles'

interface TitleProps {
  fontSize: number
  title: string
}

const DefaultTitle = ({ fontSize, title }: TitleProps) => {
  return (
    <Container>
      <Title fontSize={fontSize}>{title}</Title>
    </Container>
  )
}

export default DefaultTitle
