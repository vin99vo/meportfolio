import { useState, type FC } from 'react'
import { BlurCardsContainer, BlurCardSecond } from './styles'

export const BlurCards: FC = () => {
  return (
    <BlurCardsContainer>
      <BlurCardSecond />
      <BlurCardSecond />
      <BlurCardSecond />
    </BlurCardsContainer>
  )
}
