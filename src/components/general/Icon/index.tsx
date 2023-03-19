import './Icon.css'
import { type FC } from 'react'

interface IconProps {
  classes?: string | undefined
  imgUrl: string
  alt: string
  logo?: string
}

export const Icon: FC<IconProps> = ({ classes, imgUrl, alt, logo }) => {
  return classes != null ? (
    <div className={`Icon ${classes}`}>
      <img src={imgUrl} alt={alt} />
      <span>{logo}</span>
    </div>
  ) : (
    <div className="Icon">
      <img src={imgUrl} alt={alt} />
      <span>{logo}</span>
    </div>
  )
}
