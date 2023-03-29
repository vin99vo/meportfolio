import { Card } from '../../general/Card'
import { useState, type FC } from 'react'
import { Icon } from '../../general/Icon'
import ReactJSLogo from '../../../thumbnails/icons/ReactJSLogo.png'
import CSS3Logo from '../../../thumbnails/icons/CSS3Logo.png'
import HTML5Logo from '../../../thumbnails/icons/HTML5Logo.png'
import {
  ProjectsSection,
  ProjectTitle,
  ProjectsContainer,
  ProjectCardContainer,
  ProjectCard,
  ProjectCardFront,
  ProjectCardBack,
  SkillIconsContainer,
  CenterSkillIcons,
  ProjectCardExpand
} from './styles'
import { SqueezeTitle } from '../../general/SectionTitle'

export const Projects: FC = () => {
  const [isCardClicked, setIsCardClicked] = useState(false)
  const skills = [
    { imgUrl: ReactJSLogo, alt: 'ReactJS', logo: 'ReactJS' },
    { imgUrl: HTML5Logo, alt: 'HTML5', logo: 'HTML5' },
    { imgUrl: CSS3Logo, alt: 'CSS3', logo: 'CSS3' }
  ]

  const cardClickedHandler = (): void => {
    setIsCardClicked(true)
  }
  return (
    <ProjectsSection>
      <Card>
        <ProjectTitle>
          <SqueezeTitle title="Projects" />
        </ProjectTitle>
        <ProjectsContainer>
          <ProjectCardContainer>
            <ProjectCard onClick={cardClickedHandler}>
              <ProjectCardFront>
                <p>Portfolio website</p>
              </ProjectCardFront>
              <ProjectCardBack>
                <p>
                  This portfolio website is the first project I have build ever
                  since i started my journey as a web developer.
                </p>
                <p>This portfolio is powered by</p>
                <p>This portfolio is powered by</p>
                <p> &#8594; React</p>
              </ProjectCardBack>
              <ProjectCardExpand>
                Hello me expansion
                <CenterSkillIcons>
                  <SkillIconsContainer>
                    {skills.map((skill) => (
                      <Icon
                        isSmall={true}
                        imgUrl={skill.imgUrl}
                        alt={skill.alt}
                        logo={skill.logo}
                        key={skill.alt}
                      />
                    ))}
                  </SkillIconsContainer>
                </CenterSkillIcons>
              </ProjectCardExpand>
            </ProjectCard>
          </ProjectCardContainer>
        </ProjectsContainer>
      </Card>
    </ProjectsSection>
  )
}
