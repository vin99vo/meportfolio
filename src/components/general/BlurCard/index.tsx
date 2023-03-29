import { type FC } from 'react'
import collabImg from '../../../thumbnails/icons/collabImg.jpg'
import mailImg from '../../../thumbnails/icons/mailImg.png'
import linkedinImg from '../../../thumbnails/icons/linkedinImg.jpg'
import {
  BlurCardsContainer,
  BlurCard,
  TextContainer,
  BlurCardPara,
  LinkContainer,
  CardImg,
  OuterContainer
} from './styles'

export const BlurCards: FC = () => {
  type BlurObjectsType = {
    imgUrl: string
    href?: string
    target?: string
    rel?: string
    paraObj: string
    linkButtonDescript: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  }

  const BlurObjects: BlurObjectsType[] = [
    {
      imgUrl: collabImg,
      href: 'https://github.com/vin99vo/meportfolio',
      target: '_blank',
      rel: 'noreferrer',
      paraObj: 'Designed & Built by Vincent Vo.',
      linkButtonDescript: 'Find my code on GitHub.'
    },
    {
      imgUrl: mailImg,
      href: 'mailto:vin.vo1999@gmail.com',
      target: '_blank',
      rel: 'noreferrer',
      paraObj: 'Send me an email at ',
      linkButtonDescript: 'vin.vo1999@gmail.com'
    },
    {
      imgUrl: linkedinImg,
      href: 'https://www.linkedin.com/in/vinvo1/',
      target: '_blank',
      rel: 'noreferrer',
      paraObj: 'Reach out to me on ',
      linkButtonDescript: 'LinkedIn'
    }
  ]
  return (
    <OuterContainer>
      <BlurCardsContainer>
        {BlurObjects.map((BlurObject) => (
          <BlurCard>
            <TextContainer>
              <BlurCardPara>{BlurObject.paraObj}</BlurCardPara>
              <LinkContainer
                href={BlurObject.href}
                target={BlurObject.target}
                rel={BlurObject.rel}
              >
                <BlurCardPara>{BlurObject.linkButtonDescript}</BlurCardPara>
              </LinkContainer>
            </TextContainer>
            <LinkContainer
              href={BlurObject.href}
              target={BlurObject.target}
              rel={BlurObject.rel}
            >
              <CardImg src={BlurObject.imgUrl} />
            </LinkContainer>
          </BlurCard>
        ))}
      </BlurCardsContainer>
    </OuterContainer>
  )
}
