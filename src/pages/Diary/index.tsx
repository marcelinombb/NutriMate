import React from 'react'
import NavBar from '../../components/common/NavBar'
import { Container } from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'

const Diary = () => {
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Diary" />
      <NavBar />
    </Container>
  )
}

export default Diary
