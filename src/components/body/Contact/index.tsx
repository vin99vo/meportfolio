import { Card } from '../../general/Card'

import { type FC } from 'react'
import {
  ContactWrapper,
  GetInTouch,
  ContactDescriptContainer,
  ContactDescript,
  LinkButton
} from './styles'
import { BlurCards } from '../../general/BlurCard'
import { SqueezeTitle } from '../../general/SqueezeTitle'

export const Contact: FC = () => {
  const isSection = true
  return (
    <ContactWrapper>
      <ContactDescriptContainer>
        <GetInTouch>
          <SqueezeTitle title="03. Get In Touch" isSection />
        </GetInTouch>
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
      <BlurCards />
    </ContactWrapper>
  )
}
