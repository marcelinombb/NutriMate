import React from 'react'
import {
  Background,
  ButtonContainer,
  IconContainer,
  LogoIcon,
  TypeIcon,
  CallIcon
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { useNavigation } from '@react-navigation/native'
import { type PropsStack } from '../../routes'

import { BackgroundImage } from '@images'
import { NutrimateIcon, NutrimateIconName, CallToActionIcon } from '@icons'

const Login = () => {
  const navigation = useNavigation<PropsStack>()
  return (
    <Background source={BackgroundImage}>
      <IconContainer>
        <LogoIcon source={NutrimateIcon} />
      </IconContainer>
      <ButtonContainer>
        <TypeIcon source={NutrimateIconName} />
        <CallIcon source={CallToActionIcon} />
        <DefaultButton
          backgroundColor={'#777777'}
          text={'Create Account'}
          marginVertical={15}
          buttonHandle={() => {
            navigation.navigate('Home')
          }}
        />
        <DefaultButton
          backgroundColor={'#7265E3'}
          text={'Sign In'}
          marginVertical={8}
          buttonHandle={() => {
            navigation.navigate('Home')
          }}
        />
      </ButtonContainer>
    </Background>
  )
}

export default Login
