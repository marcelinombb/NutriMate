import React from 'react'
import NavBar from '../../components/common/NavBar'
import { Container } from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'

const Profile = () => {
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Profile" />
      <NavBar />
    </Container>
  )
}

export default Profile
