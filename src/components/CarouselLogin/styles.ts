import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  width: 100%;
  height: 100%;
`

export const ProductImage = styled.Image`
  width: ${width}px;
  border-radius: 5px;
`
