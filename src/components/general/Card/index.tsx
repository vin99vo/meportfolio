import { type FC } from 'react'
import { CardContainer, FullScreenContainer } from './styles'

type CardProps = {
  classes?: string
  children: React.ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <FullScreenContainer>
      <CardContainer>{children}</CardContainer>
    </FullScreenContainer>
  )
}
