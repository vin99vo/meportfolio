import { type ReactNode, type FC } from 'react'
import { SqueezeDiv, FullContainer } from './styles'

type SqueezeTitleType = {
  title: string
}

export const SqueezeTitle: FC<SqueezeTitleType> = ({ title }) => {
  const start = title.split(/(\s+)/)

  return (
    <FullContainer>
      {start.map((word) => (
        <>
          {word.split('').map((letter) => (
            <SqueezeDiv>{letter} </SqueezeDiv>
          ))}
          &nbsp;
        </>
      ))}
    </FullContainer>
  )
}
