import { Header } from './components/Header/Header'
import { Body } from './components/body/Body'
import { type FC } from 'react'
import { GlobalStyle } from './globalStyles'
import { Button } from './components/general/InvertColourButton'
import { BlurCards } from './components/general/BlurCard'
import './app.css'

export const App: FC = () => {
  // const creator = {
  //   author: "Vincent Vo",
  //   lastUpdate: "March 2023"
  // }

  return (
    <div>
      <div className="dropdown">
        <button title="General Information" className="dropbtn">
          General Information
        </button>
        <div className="dropdown-content">
          <a href="#">
            <b>Life Span</b>: around 16y
          </a>
          <a href="#">
            <b>Adult Size</b>: 3-5 inches long
          </a>
          <a href="#">
            <b>Weight</b>: 1-3 oz
          </a>
          <a href="#">
            <b>Common Name</b>: Dumpy tree frog
          </a>
          <a href="#">
            <b>Scientific name</b>: <i>Litoria Caerulea</i>
          </a>
        </div>
      </div>
      <GlobalStyle />
      <Header />
      <Body />
      {/* <Button /> */}
      {/* <BlurCards /> */}
    </div>
  )
}
