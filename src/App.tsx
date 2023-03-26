import { type FC } from 'react'
import { GlobalStyle } from './globalStyles'
import { BlurCards } from './components/general/BlurCard'
import { HeaderLeft } from './components/Header/HeaderLeft'
import { FooterLeft } from './components/Header/FooterLeft'
import { Tabs } from './components/body/Tabs'

export const App: FC = () => {
  // const creator = {
  //   author: "Vincent Vo",
  //   lastUpdate: "March 2023"
  // }

  return (
    <div>
      <GlobalStyle />
      <HeaderLeft />
      <FooterLeft />
      <Tabs />
      {/* <BlurCards /> */}
    </div>
  )
}
