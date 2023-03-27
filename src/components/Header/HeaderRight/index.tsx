import LinkedInLogo from '../../../thumbnails/icons/LinkedInLogo.png'
import GitHubLogo from '../../../thumbnails/icons/GitHubLogo.png'
import { Icon } from '../../general/Icon'
import { type FC } from 'react'
import { LinksButton, LinksButtonWrapper } from './styles'

export const HeaderRight: FC = () => {
  const Links = [
    {
      href: 'https://github.com/vin99vo',
      target: '_blank',
      rel: 'noreferrer',
      imgUrl: GitHubLogo,
      alt: 'GitHub',
      isSmall: true
    },
    {
      href: 'https://www.linkedin.com/in/vinvo1/',
      target: '_blank',
      rel: 'noreferrer',
      imgUrl: LinkedInLogo,
      alt: 'LinkedIn',
      isSmall: true
    }
  ]
  return (
    <LinksButtonWrapper>
      {Links.map((Link) => (
        <LinksButton href={Link.href} target={Link.target} rel={Link.rel}>
          <Icon isSmall={Link.isSmall} imgUrl={Link.imgUrl} alt={Link.alt} />
        </LinksButton>
      ))}
    </LinksButtonWrapper>
  )
}
