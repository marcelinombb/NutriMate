import styled from 'styled-components/native'
import { type RecipeCardProps } from '.'

export const Container = styled.View<Partial<RecipeCardProps>>`
  align-items: center;
  justify-content: center;
  margin: 0 20px
    ${(props) => {
      return props.isLast ?? false ? 60 + 20 : 20
    }}px
    20px;
`
export const Card = styled.View<Partial<RecipeCardProps>>`
  display: flex;
  flex-direction: row;
  height: ${(props) => props.height}px;
  width: 95%;
  border-color: ${({ theme }) => theme.colors.lightGray};
  border-width: 2px;
  border-radius: 20px;
`
export const MealPhoto = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100px;
  height: 80%;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 10px;
`
export const TitleCard = styled.Text`
  padding-top: 15px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
  font-size: 16px;
`
export const ContainerMacro = styled.View`
  display: flex;
  height: 50px;
  flex-direction: row;
  padding-top: 15px;
  padding-left: 10px;
  gap: 3px;
`
export const MacroIcon = styled.Image.attrs({})`
  height: 15px;
  width: 15px;
  padding-right: 5px;
`
export const MacroNumber = styled.Text`
  font-size: 13px;
`
export const HamburguerMenu = styled.Image.attrs({})`
  height: 14px;
  width: 1%;
  position: absolute;
  right: 15px;
  top: 10px;
  padding-top: 10px;
`
