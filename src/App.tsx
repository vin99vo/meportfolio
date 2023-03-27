import { type FC } from 'react'
import { GlobalStyle } from './globalStyles'
import { BlurCards } from './components/general/BlurCard'
import { HeaderLeft } from './components/Header/HeaderLeft'
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
      <HeaderLeft />
      <HeaderRight />
      <Tabs />
      {/* <BlurCards /> */}
    </>
  )
}
