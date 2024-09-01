/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { KeyboardAvoidingView, Modal, type ModalProps } from 'react-native'
import { Container } from './styles'

interface AddMealModalProps extends ModalProps {
  isOpen: boolean
  withInput?: boolean
}

const AddMealModal = ({
  isOpen,
  withInput,
  children,
  ...rest
}: AddMealModalProps) => {
  const content = withInput ? (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#18181b66'
      }}
    ></KeyboardAvoidingView>
  ) : (
    <Container>{children}</Container>
  )
  return (
    <Modal animationType="fade" transparent={true} visible={isOpen} {...rest}>
      {content}
    </Modal>
  )
}

export default AddMealModal
