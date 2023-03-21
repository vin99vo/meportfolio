import LinkedInLogo from '../../../thumbnails/icons/LinkedInLogo.png'
import { Icon } from '../../general/Icon'
import { type FC } from 'react'
import { LinkedInButton, HeaderRightWrapper } from './styles'

export const HeaderRight: FC = () => {
  return (
    <HeaderRightWrapper>
      <LinkedInButton
        className="linkedin-button"
        href="https://www.linkedin.com/in/vinvo1/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon isSmall imgUrl={LinkedInLogo} alt="LinkedIn" />
      </LinkedInButton>
    </HeaderRightWrapper>
  )
}
