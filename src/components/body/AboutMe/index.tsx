import { Card } from '../../general/Card'
import { Icon } from '../../general/Icon'
import { Content } from '../../general/Content'
import { type FC } from 'react'
import ReactJSLogo from '../../../thumbnails/icons/ReactJSLogo.png'
import CSS3Logo from '../../../thumbnails/icons/CSS3Logo.png'
import HTML5Logo from '../../../thumbnails/icons/HTML5Logo.png'
import JavaScriptLogo from '../../../thumbnails/icons/JavaScriptLogo.png'
import ReduxLogo from '../../../thumbnails/icons/ReduxLogo.png'
import TypeScriptLogo from '../../../thumbnails/icons/TypeScriptLogo.png'
import RStudioLogo from '../../../thumbnails/icons/RStudioLogo.png'
import SQLLogo from '../../../thumbnails/icons/SQLLogo.png'
import JavaLogo from '../../../thumbnails/icons/javaLogo.png'
import {
  SkillsContainer,
  AboutMeTitle,
  AboutMePara,
  SkillsTitle,
  SkillIconsContainer,
  AboutMeContainer,
  CenterSkillIcons
} from './styles'

export const AboutMe: FC = () => {
  const skills = [
    { imgUrl: ReactJSLogo, alt: 'ReactJS', logo: 'ReactJS' },
    { imgUrl: HTML5Logo, alt: 'HTML5', logo: 'HTML5' },
    { imgUrl: CSS3Logo, alt: 'CSS3', logo: 'CSS3' },
    { imgUrl: JavaScriptLogo, alt: 'JavaScript', logo: 'JavaScript' },
    { imgUrl: ReduxLogo, alt: 'Redux', logo: 'Redux' },
    { imgUrl: TypeScriptLogo, alt: 'TypeScript', logo: 'TypeScript' },
    { imgUrl: RStudioLogo, alt: 'RStudio', logo: 'RStudio' },
    { imgUrl: SQLLogo, alt: 'SQL', logo: 'SQL' },
    { imgUrl: JavaLogo, alt: 'Java', logo: 'Java' }
  ]

  return (
    <AboutMeContainer>
      <Card>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMePara>
          Interested in all aspects of the front-end spectrum to optimize the
          best outcome for User Experience.
        </AboutMePara>
        <AboutMePara>
          Problem solver, high attention to detail, and efficient. My work is
          always of the highest quality.
        </AboutMePara>
        <SkillsContainer>
          <SkillsTitle>Skills</SkillsTitle>
          <AboutMePara>
            My main area of expertise is in front end development.
          </AboutMePara>
          <CenterSkillIcons>
            <SkillIconsContainer>
              {skills.map((skill) => (
                <Icon
                  isSmall={false}
                  imgUrl={skill.imgUrl}
                  alt={skill.alt}
                  logo={skill.logo}
                  key={skill.alt}
                />
              ))}
            </SkillIconsContainer>
          </CenterSkillIcons>
        </SkillsContainer>
      </Card>
    </AboutMeContainer>
  )
}
