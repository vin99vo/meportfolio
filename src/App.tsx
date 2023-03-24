import { Header } from './components/Header/Header'
import { Body } from './components/body/Body'
import { type FC } from 'react'
import { GlobalStyle } from './globalStyles'
import { Button } from './components/general/InvertColourButton'
import { BlurCards } from './components/general/BlurCard'

export const App: FC = () => {
  // const creator = {
  //   author: "Vincent Vo",
  //   lastUpdate: "March 2023"
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Body />
      {/* <Button /> */}
      {/* <BlurCards /> */}
    </div>
  )
}
