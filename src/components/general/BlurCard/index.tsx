import { useState, type FC } from 'react'
import { InvertColourButton } from '../Button/styles'
import { Content } from '../Content'
import { BlurCard, BlurCardsContainer } from './styles'

export const BlurCards: FC = () => {
  const [isHovered, setIsHovered] = useState(99)

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
    <BlurCardsContainer>
      {blurDescript.map((x, index) => (
        <BlurCard
          key={index}
          hoverBrowser={isHovered === 99}
          hoverCard={isHovered === index}
          onMouseOver={() => {
            setIsHovered(index)
          }}
          onMouseOut={() => {
            setIsHovered(99)
          }}
          length={length}
        >
          {x.name}
          <p>{length}</p>
          <p>{x.exe}</p>
        </BlurCard>
      ))}
    </BlurCardsContainer>
  )
}
