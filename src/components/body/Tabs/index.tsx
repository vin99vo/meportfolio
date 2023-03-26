import { useRef, useState } from 'react'
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
  Section,
  Hamburger
} from './styles'
import { Contact } from '../Contact'

const HamburgerIcon: FC = () => {
  return (
    <div>
      <Hamburger />
      <Hamburger />
      <Hamburger />
    </div>
  )
}

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
      component: <AboutMe />,
      title: 'About Me'
    },
    {
      ref: eduRef,
      component: <EduAndSkills />,
      title: 'Education and Skills'
    },
    {
      ref: workRef,
      component: <WorkExp />,
      title: 'Work Experience'
    },
    {
      ref: extraRef,
      component: <ExtraCurricular />,
      title: 'Extra Curricular'
    },
    {
      ref: contactRef,
      component: <Contact />,
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
          <HamburgerIcon />
        </InvertColourButton>
        <TabRows>
          {isClickedMe}
          {sections.map((section) => (
            <TabButton
              isClickedMe={isClickedMe}
              isActive={toggleTab === section.title}
              key={section.title}
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
