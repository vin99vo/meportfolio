import './AboutMe.css'
import Card from '../../general/Card'
import { Icon } from '../../general/Icon'
import frisbeeLogo from '../../../thumbnails/icons/frisbeeLogo.png'
import PcLogo from '../../../thumbnails/icons/pcLogo.jpg'

const AboutMe = (): JSX.Element => {
  const about = [
    'Junior Web Developer',
    'Fast and Enthusiastic Learner',
    'Melbourne, Australia'
  ]

  return (
    <div className="aboutme">
      <Card>
        <div className="title-container">
          <Icon classes="PcLogo" imgUrl={PcLogo} alt="PcLogo" />
          <h2>About me</h2>
          <Icon classes="fris" imgUrl={frisbeeLogo} alt="frisbeeLogo" />
        </div>
        {about.map((aboutme, idx) => (
          <p key={idx}>&#x2022; {aboutme}</p>
        ))}
      </Card>
    </div>
  )
}

export default AboutMe
