import './Description.css'

interface descriptionProps {
  description: string
}

const Description = ({ description }: descriptionProps): JSX.Element => {
  return (
    <div>
      <p>{description}</p>
    </div>
  )
}

export default Description
