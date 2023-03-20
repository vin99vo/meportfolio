import './Card.css'
import { type FC } from 'react'
import { CardContainer } from './card.styles'

type CardProps = {
  classes?: string
  children: React.ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}
