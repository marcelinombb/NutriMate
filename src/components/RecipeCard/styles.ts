import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 20px;
`
export const Card = styled.View`
  height: 100px;
  width: 95%;
  border-color: ${({ theme }) => theme.colors.lightGray};
  border-width: 2px;
  border-radius: 20px;
`
export const MealPhoto = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 120px;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
