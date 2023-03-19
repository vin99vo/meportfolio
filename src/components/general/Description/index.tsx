import './Description.css'
import { type FC } from 'react'

interface DescriptionProps {
  description: string
}

export const Description: FC<DescriptionProps> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  )
}
