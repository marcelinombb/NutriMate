import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const CoverPhoto = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 40%;
`
export const ContainerText = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  padding-top: 15px;
`
export const ContainerAllMacros = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 10%;
  padding-right: 10%;
`
export const ContainerMacros = styled.View`
  align-items: center;
`
export const MacroIcon = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 23px;
  height: 23px;
`
export const MacroTitle = styled.Text`
  padding-top: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`
export const ContainerDescription = styled.View`
  flex: 1;
  padding: 20px 30px;
`
export const DescriptionText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
`
export const VideoButton = styled.TouchableOpacity`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: 20px;
  width: 60%;
  height: 15%;
`
export const VideoButtonText = styled.Text`
  align-self: center;
  align-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
`
