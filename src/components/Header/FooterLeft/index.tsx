import LinkedInLogo from '../../../thumbnails/icons/LinkedInLogo.png'
import GitHubLogo from '../../../thumbnails/icons/GitHubLogo.png'
import { Icon } from '../../general/Icon'
import { type FC } from 'react'
import { LinksButton, LinksButtonWrapper } from './styles'

export const FooterLeft: FC = () => {
  return (
    <LinksButtonWrapper>
      <LinksButton
        className="github-button"
        href="https://github.com/vin99vo"
        target="_blank"
        rel="noreferrer"
      >
        <Icon isSmall imgUrl={GitHubLogo} alt="GitHub" />
      </LinksButton>
      <LinksButton
        className="linkedin-button"
        href="https://www.linkedin.com/in/vinvo1/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon isSmall imgUrl={LinkedInLogo} alt="LinkedIn" />
      </LinksButton>
    </LinksButtonWrapper>
  )
}
