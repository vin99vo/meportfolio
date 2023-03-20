import './Description.css'
import { type FC } from 'react'
import { Para } from './styles'

type DescriptionProps = {
  description: string
}

export const Description: FC<DescriptionProps> = ({ description }) => {
  return <Para>{description}</Para>
}
