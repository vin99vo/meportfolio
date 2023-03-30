import { type FC } from 'react'
import { GlobalStyle, theme } from './styles'
import { HeaderRight } from './components/Header/HeaderRight'
import { Tabs } from './components/Tabs'
import { ThemeProvider } from 'styled-components'

export const App: FC = () => {
  // const creator = {
  //   author: "Vincent Vo",
  //   lastUpdate: "March 2023"
  // }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderRight />
      <Tabs />
    </ThemeProvider>
  )
}
