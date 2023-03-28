import { Card } from '../../general/Card'
import { type FC } from 'react'
import { Icon } from '../../general/Icon'
import ReactJSLogo from '../../../thumbnails/icons/ReactJSLogo.png'
import CSS3Logo from '../../../thumbnails/icons/CSS3Logo.png'
import HTML5Logo from '../../../thumbnails/icons/HTML5Logo.png'
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectCardContainer,
  ProjectCard,
  ProjectCardFront,
  ProjectCardBack,
  SkillIconsContainer,
  CenterSkillIcons
} from './styles'

export const Projects: FC = () => {
  const skills = [
    { imgUrl: ReactJSLogo, alt: 'ReactJS', logo: 'ReactJS' },
    { imgUrl: HTML5Logo, alt: 'HTML5', logo: 'HTML5' },
    { imgUrl: CSS3Logo, alt: 'CSS3', logo: 'CSS3' }
  ]

  const backClickedHandler = (): void => {}
  return (
    <ProjectsSection>
      <Card>
        <h2>Projects</h2>
        <ProjectsContainer>
          <ProjectCardContainer>
            <ProjectCard>
              <ProjectCardFront>
                <p>Portfolio website</p>
              </ProjectCardFront>
              <ProjectCardBack onClick={backClickedHandler}>
                <p>
                  This portfolio website is the first project I have build ever
                  since i started my journey as a web developer.
                </p>
                <p>This portfolio is powered by</p>
                <p>This portfolio is powered by</p>
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
              </ProjectCardBack>
            </ProjectCard>
          </ProjectCardContainer>
        </ProjectsContainer>
      </Card>
    </ProjectsSection>
  )
}
