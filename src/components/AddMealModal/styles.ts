/* eslint-disable no-extra-boolean-cast */
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #18181b66;
`

export const ModalContainer = styled.View`
  width: 80%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`

export const TitleInput = styled.TextInput`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

interface ModalButtonProps {
  cancel?: boolean
}

export const ModalButton = styled.TouchableOpacity<ModalButtonProps>`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${(props) => (Boolean(props.cancel) ? '#ccc' : '#4CAF50')};
`

export const ButtonText = styled.Text`
  color: white;
`
