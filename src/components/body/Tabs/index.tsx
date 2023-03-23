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
  ContentShow,
  DropDownContainer
} from './styles'
import { InvertColourButton } from '../../general/InvertColourButton/styles'

export const Tabs: FC = () => {
  const [toggleTab, setToggleTab] = useState(0)
  const [isClickedMe, setIsClickedMe] = useState(false)

  const tabs = [
    { title: 'Education and Skills', index: 1 },
    { title: 'Work Experience', index: 2 },
    { title: 'Extra Curricular', index: 3 }
  ]

  return (
    <TabsContainer>
      <DropDownContainer>
        <InvertColourButton
          onClick={() => {
            setIsClickedMe(!isClickedMe)
            setToggleTab(0)
          }}
        >
          Click me
        </InvertColourButton>
        <TabRows>
          {tabs.map((tab) => (
            <TabButton
              isClickedMe={isClickedMe}
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
      </DropDownContainer>
      <ContentInTabs isClickedMe={isClickedMe}>
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
