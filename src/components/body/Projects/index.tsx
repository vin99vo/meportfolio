import { Card } from '../../general/Card'
import { type FC } from 'react'

import { ProjectsSection, SectionTitle } from './styles'
import { SqueezeTitle } from '../../general/SqueezeTitle'
import { PersonalWebsiteCard } from './PortfolioCard'

export const Projects: FC = () => {
  const isSection = true
  return (
    <ProjectsSection>
      <SectionTitle>
        <SqueezeTitle title="02. Projects" isSection />
      </SectionTitle>
      <PersonalWebsiteCard />
    </ProjectsSection>
  )
}
