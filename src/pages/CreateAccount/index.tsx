import React from 'react'
import {
  Container,
  Input,
  InputContainer,
  Subtitle,
  TitleInput
} from './styles'
import DefaultTitle from 'src/components/common/DefaultTitle'
import DefaultButton from 'src/components/common/DefaultButton'

const CreateAccount = () => {
  return (
    <>
      <Container>
        <DefaultTitle fontSize={28} title="Create Account" />
        <Subtitle>Enter your details to continue</Subtitle>
        <TitleInput>E-mail Address:</TitleInput>
        <InputContainer>
          <Input
            placeholder="Insert your email address..."
            placeholderTextColor="#C0C0C1"
          />
        </InputContainer>
        <TitleInput>Password:</TitleInput>
        <InputContainer>
          <Input
            placeholder="Insert your password..."
            placeholderTextColor="#C0C0C1"
            secureTextEntry={true}
          />
        </InputContainer>
        <TitleInput>Confirm Password:</TitleInput>
        <InputContainer>
          <Input
            placeholder="Insert your password again..."
            placeholderTextColor="#C0C0C1"
            secureTextEntry={true}
          />
        </InputContainer>
      </Container>
      <DefaultButton
        backgroundColor={'#6161A9'}
        text={'Sign Up'}
        marginVertical={0}
        buttonHandle={() => {}}
      />
    </>
  )
}

export default CreateAccount
