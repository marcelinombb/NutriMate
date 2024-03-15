import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Routes from './src/routes'
import { myTheme } from './src/styles'
import { ThemeProvider } from 'styled-components/native'

export default function App () {
  return (
    <>
      <StatusBar style="light" />
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}
