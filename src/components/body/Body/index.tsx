import './Body.css'
import { AboutMe } from '../AboutMe'
import { Tabs } from '../Tabs'
import { type FC } from 'react'

export const Body: FC = () => {
  return (
    <div className="body-container">
      <AboutMe />
      <Tabs />
    </div>
  )
}
