import { useState, type FC } from 'react'
import ReactJSLogo from '../../../../thumbnails/icons/ReactJSLogo.png'
import CSS3Logo from '../../../../thumbnails/icons/CSS3Logo.png'
import HTML5Logo from '../../../../thumbnails/icons/HTML5Logo.png'
import PortfolioImg from '../../../../thumbnails/icons/portfolioImg.jpg'
import { Icon } from '../../../general/Icon'
import {
  ProjectCardContainer,
  ProjectCardFront,
  ProjectTitle,
  ProjectPara,
  ProjectCardBack,
  ProjectDescript,
  SkillsDivFlex,
  PortfolioSkills,
  SkillIconsContainer,
  CenterSkillIcons,
  SourceCodeButton,
  ImgContainer,
  ProjectImg
} from './styles'

export const PersonalWebsiteCard: FC = () => {
  const [isCardClicked, setIsCardClicked] = useState(false)

  const cardClickedHandler = (): void => {
    setIsCardClicked(!isCardClicked)
  }

  const skills = [
    { imgUrl: ReactJSLogo, alt: 'ReactJS' },
    { imgUrl: HTML5Logo, alt: 'HTML5' },
    { imgUrl: CSS3Logo, alt: 'CSS3' }
  ]
  return (
    <ProjectCardContainer
      onClick={cardClickedHandler}
      isClicked={isCardClicked}
    >
      <ProjectCardFront isClicked={isCardClicked}>
        <ProjectTitle>Personal Website</ProjectTitle>
        <ProjectDescript>
          <ProjectPara>
            A simple website to showcase a little of what I can do.
          </ProjectPara>
          <SkillsDivFlex>
            {skills.map((skill) => (
              <PortfolioSkills>&#8594; {skill.alt}</PortfolioSkills>
            ))}
          </SkillsDivFlex>
        </ProjectDescript>
        <ImgContainer>
          {' '}
          <ProjectImg img={PortfolioImg} />
        </ImgContainer>
      </ProjectCardFront>

      <ProjectCardBack isClicked={isCardClicked}>
        <ProjectTitle>Personal Website</ProjectTitle>
        <ProjectPara>This very site!</ProjectPara>
        <ProjectPara>
          My first portfolio website built after learning React.
        </ProjectPara>
        <ProjectPara>
          Hosted on GitHub Pages and checked with TypeScript, ESLint, Prettier,
          and utilizing Styled Components.
        </ProjectPara>
        <ProjectPara>This website was built with</ProjectPara>
        <CenterSkillIcons>
          <SkillIconsContainer>
            {skills.map((skill) => (
              <div>
                <Icon
                  isSmall={true}
                  imgUrl={skill.imgUrl}
                  alt={skill.alt}
                  key={skill.alt}
                />
                <PortfolioSkills>{skill.alt}</PortfolioSkills>
              </div>
            ))}
          </SkillIconsContainer>
        </CenterSkillIcons>

        <SourceCodeButton
          href="https://github.com/vin99vo/meportfolio"
          target="_blank"
          rel="noreferrer"
        >
          View Source
        </SourceCodeButton>
      </ProjectCardBack>
    </ProjectCardContainer>
  )
}
