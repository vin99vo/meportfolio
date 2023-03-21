import { Card } from '../../general/Card'
import { Icon } from '../../general/Icon'
import frisbeeLogo from '../../../thumbnails/icons/frisbeeLogo.png'
import PcLogo from '../../../thumbnails/icons/pcLogo.jpg'
import { type FC } from 'react'
import { H2, TitleWrapper, AboutMeWrapper } from './styles'

export const AboutMe: FC = () => {
  const about = [
    'Junior Web Developer',
    'Fast and Enthusiastic Learner',
    'Melbourne, Australia'
  ]

  return (
    <AboutMeWrapper>
      <Card>
        <TitleWrapper>
          <Icon isSmall imgUrl={PcLogo} alt="PcLogo" />
          <H2>About me</H2>
          <Icon isSmall imgUrl={frisbeeLogo} alt="frisbeeLogo" />
        </TitleWrapper>
        {about.map((aboutme, idx) => (
          <p key={idx}>&#x2022; {aboutme}</p>
        ))}
      </Card>
    </AboutMeWrapper>
  )
}
