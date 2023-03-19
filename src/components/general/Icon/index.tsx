import './Icon.css'

interface IconProps {
  classes?: string | undefined
  imgUrl: string
  alt: string
  logo?: string
}

export const Icon = ({
  classes,
  imgUrl,
  alt,
  logo
}: IconProps): JSX.Element => {
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
