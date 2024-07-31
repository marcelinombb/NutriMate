/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import {
  ButtonContainer,
  IconContainer,
  LogoIcon,
  TypeIcon,
  CallIcon,
  InputContainer,
  Input
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { useNavigation } from '@react-navigation/native'
import { type PropsStack } from '../../routes'
import NutrimateIcon from '@icons/nutrimate-icon.png'
import NutrimateIconName from '@icons/nutrimate-type.png'
import CallToActionIcon from '@icons/motto-text.png'
import Carousel from 'src/components/CarouselLogin'
import { View } from 'react-native'
import userService from 'src/services/userService'

const images = [
  {
    url: 'https://s2.glbimg.com/aJODiXk4Vk-r03RddGouHjPgdAg=/smart/e.glbimg.com/og/ed/f/original/2022/04/13/jason-briscoe-grdjp16cpk8-unsplash.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://images.unsplash.com/photo-1610558269197-70cfbad7c556?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const SignIn = () => {
  const navigation = useNavigation<PropsStack>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Email and password are required.')
      return
    }

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format.')
      return
    }

    try {
      const users = await userService.list()
      const user = users.find((user: any) => user.email === email)

      if (user && user.password === password) {
        setErrorMessage('')
        navigation.navigate('Home')
      } else {
        setErrorMessage('Invalid email or password.')
      }
    } catch (error) {
      setErrorMessage('Failed to login. Please try again.')
    }
  }
  return (
    <View style={{ backgroundColor: '#43405f', flex: 1, alignItems: 'center' }}>
      <View style={{ position: 'absolute', height: '90%', zIndex: 100 }}>
        <IconContainer>
          <LogoIcon source={NutrimateIcon} />
        </IconContainer>
        <ButtonContainer>
          <TypeIcon source={NutrimateIconName} />
          <CallIcon source={CallToActionIcon} />
          <InputContainer>
            <Input
              placeholder="Email address"
              placeholderTextColor="#C0C0C1"
              value={email}
              onChangeText={setEmail}
            />
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Email address"
              placeholderTextColor="#C0C0C1"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </InputContainer>
          <DefaultButton
            backgroundColor={'#7265E3'}
            text={'Login'}
            marginVertical={8}
            buttonHandle={handleLogin}
          />
        </ButtonContainer>
      </View>
    </View>
  )
}

export default SignIn
