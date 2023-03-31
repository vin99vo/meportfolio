import { type ReactNode, type FC } from 'react'
import { SqueezeDiv, FullContainer, LettersWrap, WordsWrap } from './styles'

type SqueezeTitleType = {
  title: string
}

export const SqueezeTitle: FC<SqueezeTitleType> = ({ title }) => {
  const start = title.split(' ')
  const phraseLength = start.length

  return (
    <FullContainer>
      <WordsWrap>
        {start.map((word, wordIndex) => (
          <LettersWrap>
            {word.split(/(\s+)/).map((letter) => (
              <SqueezeDiv>{letter} </SqueezeDiv>
            ))}
            {phraseLength !== wordIndex + 1 && <span>&nbsp;</span>}
          </LettersWrap>
        ))}
      </WordsWrap>
    </FullContainer>
  )
}
