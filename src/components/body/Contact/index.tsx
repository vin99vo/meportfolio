import { Card } from '../../general/Card'

import { type FC } from 'react'
import { ContactWrapper } from './styles'
import { BlurCards } from '../../general/BlurCard'

type ContactProps = {
  passedID: string
}

export const Contact: FC<ContactProps> = ({ passedID }) => {
  const about = [
    'Junior Web Developer',
    'Curious Learner',
    'Melbourne, Australia'
  ]

  return (
    <ContactWrapper id={passedID}>
      <BlurCards />
    </ContactWrapper>
  )
}
