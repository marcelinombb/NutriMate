import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      purple: string
      darkPurple: string
      lightGray: string
      darkGray: string
      background: string
      lightBackground: string
    }
  }
}
