import { useState } from 'react'
import { EduAndSkills } from '../EduAndSkills'
import { ExtraCurricular } from '../ExtraCurricular'
import { WorkExp } from '../WorkExp'
import { type FC } from 'react'
import {
  TabButton,
  TabRows,
  TabsContainer,
  ContentInTabs,
  ContentShow
} from './styles'

export const Tabs: FC = () => {
  const [toggleTab, setToggleTab] = useState(0)

  const tabs = [
    { title: 'Education and Skills', index: 1 },
    { title: 'Work Experience', index: 2 },
    { title: 'Extra Curricular', index: 3 }
  ]

  return (
    <TabsContainer>
      <TabRows>
        {tabs.map((tab) => (
          <TabButton
            isActive={toggleTab === tab.index}
            key={tab.index}
            onClick={() => {
              setToggleTab(tab.index)
            }}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabRows>
      <ContentInTabs>
        <ContentShow isActive={toggleTab === 1}>
          <EduAndSkills />
        </ContentShow>
        <ContentShow isActive={toggleTab === 2}>
          <WorkExp />
        </ContentShow>
        <ContentShow isActive={toggleTab === 3}>
          <ExtraCurricular />
        </ContentShow>
      </ContentInTabs>
    </TabsContainer>
  )
}
