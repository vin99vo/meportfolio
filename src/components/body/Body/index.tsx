import './Body.css'
import { AboutMe } from '../AboutMe'
import { Tabs } from '../Tabs'
import { type FC } from 'react'
import { BodyContainer } from './styles'

export const Body: FC = () => {
  return (
    <BodyContainer>
      <AboutMe />
      <Tabs />
    </BodyContainer>
  )
}
