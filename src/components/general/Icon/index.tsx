import { useState, type FC } from 'react'
import { IconText, IconImage, IconWrapper } from './styles'

type IconProps = {
  isSmall: boolean
  imgUrl: string
  alt: string
  logo?: string
}

export const Icon: FC<IconProps> = ({ isSmall, imgUrl, alt, logo }) => {
  const [iconHovered, setIconHovered] = useState(false)

  const IconHoverHandler = (): void => {
    setIconHovered(true)
  }
  return (
    <IconWrapper isSmall={isSmall}>
      <IconImage
        isSmall={isSmall}
        src={imgUrl}
        alt={alt}
        onMouseOver={IconHoverHandler}
        iconHovered={iconHovered}
      />
      {Boolean(logo) && <IconText iconHovered={iconHovered}>{logo}</IconText>}
    </IconWrapper>
  )
}
