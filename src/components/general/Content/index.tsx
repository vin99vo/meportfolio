import './Content.css'
import Description from '../Description'

interface ObjectProps {
  title?: string
  date?: string
  role?: string
  descript: string[]
}

const Content = ({ title, date, role, descript }: ObjectProps): JSX.Element => {
  const descriptList = descript.map((desc, idx) => (
    <Description description={desc} key={idx} />
  ))

  return title != null ? (
    <div className="contentbody">
      <h3>{title}</h3>
      <h4>{date}</h4>
      <h5>{role}</h5>
      <p>{descriptList}</p>
    </div>
  ) : (
    <div className="contentbody">
      <p>{descriptList}</p>
    </div>
  )
}

export default Content
