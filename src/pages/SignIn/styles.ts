import { TextInputMask } from 'react-native-masked-text'
import styled from 'styled-components/native'

export const InputContainer = styled.View`
  width: 280px;
  height: 45px;
  border: 2px solid ${({ theme }) => theme.colors.darkPurple};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 15px;
  margin: 10px auto;
  padding-left: 10px;
`
export const Subtitle = styled.Text`
  margin-top: -30px;
  margin-bottom: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
`
export const TitleInput = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
  padding-left: 3px;
  text-align: left;
`

export const Input = styled.TextInput`
  flex: 1;
  width: 90%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`
export const InputMask = styled(TextInputMask)`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkPurple};
`

export const Background = styled.ImageBackground`
  flex: 1;
`

export const IconContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 5px;
`

export const LogoIcon = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 120px;
`

export const TypeIcon = styled.Image.attrs({
  resizeMode: 'contain'
})`
  margin-top: 50px;
  width: 300px;
`

export const CallIcon = styled.Image.attrs({
  resizeMode: 'contain'
})`
  margin-top: 8px;
  width: 400px;
  margin-bottom: 20px;
`

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
`
