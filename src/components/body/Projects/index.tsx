import { Card } from '../../general/Card'
import { type FC } from 'react'

import { ProjectsSection, SectionTitle, ProjectsContainer } from './styles'
import { SqueezeTitle } from '../../general/SqueezeTitle'
import { PersonalWebsiteCard } from './PortfolioCard'

export const Projects: FC = () => {
  return (
    <ProjectsSection>
      <Card>
        <SectionTitle>
          <SqueezeTitle title="Projects" />
        </SectionTitle>
        <ProjectsContainer>
          <PersonalWebsiteCard />
        </ProjectsContainer>
      </Card>
    </ProjectsSection>
  )
}
