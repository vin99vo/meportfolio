import './Card.css'

interface CardProps {
  classes?: string | undefined
  children: React.ReactNode
}

const Card = ({ classes, children }: CardProps): JSX.Element => {
  // const { classPass = '' } = classes
  return classes != null ? (
    <div className={`card-container ${classes}`}>{children}</div>
  ) : (
    <div className={'card-container'}>{children}</div>
  )
}

export default Card
