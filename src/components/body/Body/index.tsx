import AboutMe from '../AboutMe'
import './Body.css'
import Tabs from '../Tabs'

const Body = (): JSX.Element => {
  return (
    <div className="body-container">
      <AboutMe />
      <Tabs />
    </div>
  )
}

export default Body
