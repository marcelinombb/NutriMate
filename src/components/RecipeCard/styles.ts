import styled from 'styled-components/native'
import { type RecipeCardProps } from '.'

export const Container = styled.View<Partial<RecipeCardProps>>`
  align-items: center;
  justify-content: center;
  margin: 0 20px  ${(props) => {
    // se for o ultimo item adiciona a altura da navbar ao margin-bottom
    return (props.isLast ?? false) ? 60 + 20 : 20
  }}px 20px;
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
  width: 120px;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
