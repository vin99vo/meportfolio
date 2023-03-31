import { useRef, useState, useEffect } from 'react'
import { AboutMe } from '../body/AboutMe'
import { Projects } from '../body/Projects'
import { Home } from '../body/Home'
import { type ReactNode, type RefObject, type FC } from 'react'
import {
  TabButton,
  TabRows,
  TabsContainer,
  ContentInTabs,
  DropDownContainer,
  Section
} from './styles'
import { HamburgerMenu } from '../general/MenuButton'
import { Contact } from '../body/Contact'

export const Tabs: FC = () => {
  const [toggleTab, setToggleTab] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const scrollMenu = (): void => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsMenuOpen(false)
      }

      setLastScrollY(window.scrollY)
      console.log(lastScrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollMenu)
    }
    return () => {
      window.removeEventListener('scroll', scrollMenu)
    }
  }, [lastScrollY])

  const homeRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  type SectionType = {
    ref: RefObject<HTMLElement>
    component: ReactNode
    title: string
  }
  const sections: SectionType[] = [
    {
      ref: homeRef,
      component: <Home />,
      title: 'Home'
    },
    {
      ref: aboutRef,
      component: <AboutMe />,
      title: 'AboutMe'
    },
    {
      ref: projectsRef,
      component: <Projects />,
      title: 'Projects'
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
    setIsMenuOpen(false)
  }

  const onMenuClickHandler = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <TabsContainer>
      <DropDownContainer>
        <HamburgerMenu onMenuClick={onMenuClickHandler} />
        <TabRows>
          {isMenuOpen &&
            sections.map((section) => (
              <TabButton
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
      {sections.map((section) => (
        <ContentInTabs>
          <Section ref={section.ref}>{section.component}</Section>
        </ContentInTabs>
      ))}
    </TabsContainer>
  )
}
