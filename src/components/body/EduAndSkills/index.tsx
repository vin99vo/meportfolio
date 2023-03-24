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
  SkillIconsContainer,
  SkillEduContainer
} from './styles'

type EduAndSkillsProps = {
  passedID: string
}

export const EduAndSkills: FC<EduAndSkillsProps> = ({ passedID }) => {
  const contents = [
    {
      // title: '',
      // date:'',
      // role: '',
      description: [
        '• University of Melbourne, Bachelor of Commerce (Actuarial Sciences 2022 Graduate)'
      ]
    }
  ]
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
  const contentList = contents.map((x, idx) => (
    <Content descript={x.description} key={idx} />
  ))

  return (
    <SkillEduContainer id={passedID}>
      <Card>
        <h2>Education</h2>
        {contentList}
        <SkillsContainer>
          <h2>Skills</h2>
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
        </SkillsContainer>
      </Card>
    </SkillEduContainer>
  )
}
