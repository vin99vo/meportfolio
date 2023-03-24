import { useEffect, useRef, useState } from 'react'
import { EduAndSkills } from '../EduAndSkills'
import { ExtraCurricular } from '../ExtraCurricular'
import { WorkExp } from '../WorkExp'
import { AboutMe } from '../AboutMe'
import { type ReactNode, type RefObject, type FC } from 'react'
import {
  TabButton,
  TabRows,
  TabsContainer,
  ContentInTabs,
  DropDownContainer,
  InvertColourButton,
  Section
} from './styles'
import { Contact } from '../Contact'

export const Tabs: FC = () => {
  const [toggleTab, setToggleTab] = useState('')
  const [isClickedMe, setIsClickedMe] = useState(false)

  const aboutRef = useRef<HTMLElement | null>(null)
  const eduRef = useRef<HTMLElement | null>(null)
  const workRef = useRef<HTMLElement | null>(null)
  const extraRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  type SectionType = {
    ref: RefObject<HTMLElement>
    component: ReactNode
    title: string
  }
  const sections: SectionType[] = [
    {
      ref: aboutRef,
      component: <AboutMe passedID="About" />,
      title: 'About Me'
    },
    {
      ref: eduRef,
      component: <EduAndSkills passedID="Edu" />,
      title: 'Education and Skills'
    },
    {
      ref: workRef,
      component: <WorkExp passedID="Work" />,
      title: 'Work Experience'
    },
    {
      ref: extraRef,
      component: <ExtraCurricular passedID="Extra" />,
      title: 'Extra Curricular'
    },
    {
      ref: contactRef,
      component: <Contact passedID="Contact" />,
      title: 'Contact'
    }
  ]

  const onTabClickHandler = (section: SectionType): void => {
    section.ref.current?.scrollIntoView({ behavior: 'smooth' })
    setToggleTab(section.title)
  }

  return (
    <TabsContainer>
      <DropDownContainer>
        <InvertColourButton
          onClick={() => {
            setIsClickedMe(!isClickedMe)
            setToggleTab('')
            console.log(isClickedMe)
          }}
        >
          Click me
        </InvertColourButton>
        <TabRows>
          {sections.map((section) => (
            <TabButton
              isClickedMe={isClickedMe}
              isActive={toggleTab === section.title}
              key={section.title}
              // href={tab.to}
              onClick={() => {
                onTabClickHandler(section)
              }}
            >
              {section.title}
            </TabButton>
          ))}
        </TabRows>
      </DropDownContainer>
      <ContentInTabs isClickedMe={isClickedMe}>
        {sections.map((section) => (
          <Section ref={section.ref}>{section.component}</Section>
        ))}
      </ContentInTabs>
    </TabsContainer>
  )
}
