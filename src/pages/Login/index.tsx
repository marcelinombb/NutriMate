import React from 'react'
import NavBar from '../../components/common/NavBar'
import { Container } from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'

const Login = () => {
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Login" />
      <NavBar />
    </Container>
  )
}

export default Login
