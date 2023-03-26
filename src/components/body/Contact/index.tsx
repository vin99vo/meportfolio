import { Card } from '../../general/Card'

import { type FC } from 'react'
import {
  ContactWrapper,
  GetInTouch,
  BlurCardsContainer,
  ContactDescriptContainer,
  ContactDescript,
  LinkButton
} from './styles'
import { BlurCards } from '../../general/BlurCard'

export const Contact: FC = () => {
  const about = [
    'Junior Web Developer',
    'Curious Learner',
    'Melbourne, Australia'
  ]

  return (
    <ContactWrapper>
      <ContactDescriptContainer>
        <GetInTouch>Get In Touch</GetInTouch>
        <ContactDescript>
          Want to get in touch? I&#39;d love to hear from you. Here&#39;s how
          you can reach me...
        </ContactDescript>
        <LinkButton
          onClick={() => {
            window.location.href = 'mailto:vin.vo1999@gmail.com'
          }}
        >
          Say Hello
        </LinkButton>
      </ContactDescriptContainer>
      <BlurCardsContainer>
        <BlurCards />
      </BlurCardsContainer>
    </ContactWrapper>
  )
}