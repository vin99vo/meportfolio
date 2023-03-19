import './Card.css'
import { type FC } from 'react'

interface CardProps {
  classes?: string
  children: React.ReactNode
}

export const Card: FC<CardProps> = ({ classes, children }) => {
  return <div className={`card-container ${classes ?? ''}`}>{children}</div>
}
