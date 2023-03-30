import { type ReactNode, type FC } from 'react'
import { SqueezeDiv, FullContainer, LettersWrap, WordsWrap } from './styles'

type SqueezeTitleType = {
  title: string
}

export const SqueezeTitle: FC<SqueezeTitleType> = ({ title }) => {
  const start = title.split(/(\s+)/)

  return (
    <FullContainer>
      <WordsWrap>
        {start.map((word) => (
          <LettersWrap>
            {word.split('').map((letter) => (
              <SqueezeDiv>{letter} </SqueezeDiv>
            ))}
            &nbsp;
          </LettersWrap>
        ))}
      </WordsWrap>
    </FullContainer>
  )
}
