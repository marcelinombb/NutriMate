import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const IndicatorContainer = styled.View`
  display: flex; 
  margin: 20px 10px;
  align-items: center;
  flex-direction: row; 
  justify-content: space-around
`
export const Section = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
`
export const SideTitle = styled.Text`
  font-weight: 500;
  font-size: 24px;
`
export const SideSubTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`
export const CenterTitle = styled.Text`
  font-weight: 700;
  font-size: 32px;
`
export const CenterSubTitle = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.darkGray};
`