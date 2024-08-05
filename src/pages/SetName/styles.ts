import { TextInputMask } from 'react-native-masked-text'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 50px auto 30px;
`
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
