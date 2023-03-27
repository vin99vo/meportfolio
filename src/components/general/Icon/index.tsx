import { type FC } from 'react'
import { IconText, IconImage, IconWrapper } from './styles'

type IconProps = {
  isSmall: boolean
  imgUrl: string
  alt: string
  logo?: string
}

export const Icon: FC<IconProps> = ({ isSmall, imgUrl, alt, logo }) => {
  return (
    <IconWrapper isSmall={isSmall}>
      <IconImage isSmall={isSmall} src={imgUrl} alt={alt} />
      {Boolean(logo) && <IconText>{logo}</IconText>}
    </IconWrapper>
  )
}
