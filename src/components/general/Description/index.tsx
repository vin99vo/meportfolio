import { type FC } from 'react'

type DescriptionProps = {
  description: string
}

export const Description: FC<DescriptionProps> = ({ description }) => {
  return <p>{description}</p>
}
