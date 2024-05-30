import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const Bar = styled.TextInput`
  width: 85%;
  height: 45px;
  padding: 0 20px;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.lightGray};
  font-size: 18px;
`
