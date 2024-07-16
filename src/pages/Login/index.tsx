import React from 'react'
import {
  ButtonContainer,
  IconContainer,
  LogoIcon,
  TypeIcon,
  CallIcon
} from './styles'
import DefaultButton from '../../components/common/DefaultButton'
import { useNavigation } from '@react-navigation/native'
import { type PropsStack } from '../../routes'
import NutrimateIcon from '@icons/nutrimate-icon.png'
import NutrimateIconName from '@icons/nutrimate-type.png'
import CallToActionIcon from '@icons/motto-text.png'
import Carousel from 'src/components/CarouselLogin'
import { View } from 'react-native'

const images = [
  {
    url: 'https://s2.glbimg.com/aJODiXk4Vk-r03RddGouHjPgdAg=/smart/e.glbimg.com/og/ed/f/original/2022/04/13/jason-briscoe-grdjp16cpk8-unsplash.jpg'
  },
  {
    url: 'https://envato-shoebox-0.imgix.net/fb4f/4cbf-5f99-43e3-9d51-76b7b8587821/group-lunch-410.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=700&fit=max&markalign=center%2Cmiddle&markalpha=18&s=8909f15f73eaae067bb972c86631b628'
  },
  {
    url: 'https://lunetas.com.br/wp-content/uploads/2022/07/costume-cozinhar-com-criancas-portal-lunetas-430x430.jpg'
  }
]

const Login = () => {
  const navigation = useNavigation<PropsStack>()
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ position: 'absolute', height: '100%', zIndex: 100 }}>
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
              navigation.navigate('CreateAccount')
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
      </View>
      <Carousel images={images}></Carousel>
    </View>
  )
}

export default Login
