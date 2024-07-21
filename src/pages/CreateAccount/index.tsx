/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
import {
  Container,
  Input,
  InputContainer,
  Subtitle,
  TitleInput
} from './styles'
import DefaultTitle from 'src/components/common/DefaultTitle'
import DefaultButton from 'src/components/common/DefaultButton'
import userService from 'src/services/userService'

const CreateAccount = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
  const handleSignUp = async () => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!email || !password || !confirmPassword) {
      setErrorMessage('All fields are required!')
      return
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format!')
      return
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must be at least 6 characters long and contain letter and number!'
      )
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!')
    }

    try {
      const res = await userService.register(
        'John',
        'Doe',
        '+5585987654321',
        '1997-08-03 21:00:00-03',
        email,
        password
      )
      console.log('Account created:', res?.data)
    } catch (error) {
      setErrorMessage('Failed to create account. Please try again.')
    }
  }
  return (
    <>
      <Container>
        <DefaultTitle fontSize={28} title="Create Account" />
        <Subtitle>Enter your details to continue</Subtitle>
        {errorMessage !== '' ? (
          <Subtitle style={{ paddingTop: 10, color: 'red' }}>
            {errorMessage}
          </Subtitle>
        ) : null}
        <TitleInput>E-mail Address:</TitleInput>
        <InputContainer>
          <Input
            placeholder="Insert your email address..."
            placeholderTextColor="#C0C0C1"
            value={email}
            onChangeText={setEmail}
          />
        </InputContainer>
        <TitleInput>Password:</TitleInput>
        <InputContainer>
          <Input
            placeholder="Insert your password..."
            placeholderTextColor="#C0C0C1"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </InputContainer>
        <TitleInput>Confirm Password:</TitleInput>
        <InputContainer>
          <Input
            placeholder="Insert your password again..."
            placeholderTextColor="#C0C0C1"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </InputContainer>
      </Container>
      <DefaultButton
        backgroundColor={'#6161A9'}
        text={'Sign Up'}
        marginVertical={0}
        buttonHandle={handleSignUp}
      />
    </>
  )
}

export default CreateAccount
