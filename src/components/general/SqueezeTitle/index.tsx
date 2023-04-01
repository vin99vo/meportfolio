import { type ReactNode, type FC } from 'react'
import { SqueezeDiv, FullContainer, LettersWrap, WordsWrap } from './styles'

type SqueezeTitleType = {
  title: string
  isSection: boolean
}

export const SqueezeTitle: FC<SqueezeTitleType> = ({ title, isSection }) => {
  const start = title.split(' ')
  const phraseLength = start.length

  return (
    <FullContainer>
      <WordsWrap>
        {start.map((word, wordIndex) => (
          <LettersWrap>
            {word.split('').map((letter) => (
              <SqueezeDiv
                color={wordIndex === 0 ? (isSection ? 'orange' : '') : ''}
              >
                {letter}{' '}
              </SqueezeDiv>
            ))}
            {phraseLength !== wordIndex + 1 && <span>&nbsp;</span>}
          </LettersWrap>
        ))}
      </WordsWrap>
    </FullContainer>
  )
}
