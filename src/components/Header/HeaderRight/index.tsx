import LinkedInLogo from '../../../thumbnails/icons/LinkedInLogo.png'
import { Icon } from '../../general/Icon'
import './HeaderRight.css'

export const HeaderRight = (): JSX.Element => {
  return (
    <div className="header-right">
      <a
        className="linkedin-button"
        href="https://www.linkedin.com/in/vinvo1/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon classes="linkedinLogo" imgUrl={LinkedInLogo} alt="LinkedIn" />
      </a>
    </div>
  )
}
