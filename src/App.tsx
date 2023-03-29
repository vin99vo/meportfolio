import { type FC } from 'react'
import { GlobalStyle } from './globalStyles'
import { HeaderRight } from './components/Header/HeaderRight'
import { Tabs } from './components/Tabs'

export const App: FC = () => {
  // const creator = {
  //   author: "Vincent Vo",
  //   lastUpdate: "March 2023"
  // }

  return (
    <>
      <GlobalStyle />
      <HeaderRight />
      <Tabs />
    </>
  )
}
