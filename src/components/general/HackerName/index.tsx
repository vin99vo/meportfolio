import { NameContainer } from './styles'
import { type FC } from 'react'

type HackerNameProps = {
  text: string
}

export const HackerName: FC<HackerNameProps> = ({ text }) => {
  const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
  const startingName = text

  const hoverHandler = (e: React.MouseEvent<HTMLInputElement>): void => {
    let iterations = 0

    const interval = setInterval(() => {
      ;(e.target as HTMLElement).innerText = (e.target as HTMLElement).innerText
        .split('')
        .map((letter: string, index: number) => {
          if (index < iterations) {
            return startingName[index]
          }
          return letters[Math.floor(Math.random() * 52)]
        })
        .join('')

      if (iterations >= startingName.length) clearInterval(interval)

      iterations += 1 / 4
    }, 50)
  }

  return (
    <NameContainer onMouseOver={hoverHandler}>{startingName}</NameContainer>
  )
}
