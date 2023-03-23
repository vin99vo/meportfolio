import { useState, type FC } from 'react'
import { InvertColourButton } from '../InvertColourButton/styles'
import { Content } from '../Content'
import { BlurCardFirst, BlurCardsContainer, BlurCardSecond } from './styles'

export const BlurCards: FC = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null)

  const blurDescript = [
    { name: 'one', exe: 'testing' },
    { name: 'three', exe: 'this is hard' },
    { name: 'five', exe: 'send help' },
    { name: 'six', exe: 'nice work' },
    { name: 'seven', exe: 'we did it' },
    { name: 'eight', exe: 'let me sleep' },
    { name: 'nine', exe: 'ooga booga' }
  ]
  const length = blurDescript.length

  return (
    <div>
      <BlurCardsContainer>
        {blurDescript.map((x, index) => (
          <BlurCardFirst
            key={index}
            hoverBrowser={isHovered === null}
            hoverCard={isHovered === index}
            onMouseOver={() => {
              setIsHovered(index)
            }}
            onMouseOut={() => {
              setIsHovered(null)
            }}
            length={length}
          >
            {x.name}
            <p>{length}</p>
            <p>{x.exe}</p>
          </BlurCardFirst>
        ))}
      </BlurCardsContainer>
      <BlurCardsContainer>
        <BlurCardSecond />
        <BlurCardSecond />
        <BlurCardSecond />
      </BlurCardsContainer>
    </div>
  )
}
