import styled from 'styled-components/native'

interface TitleProps {
  fontSize: number
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin: 50px auto 30px;
`

export const Title = styled.Text<TitleProps>`
  font-size: ${(props) => props.fontSize}px;
  color: black;
  font-weight: bold;
`
