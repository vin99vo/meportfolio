import './Content.css'
import { Description } from '../Description'
import { type FC } from 'react'

interface ObjectProps {
  title?: string
  date?: string
  role?: string
  descript: string[]
}

export const Content: FC<ObjectProps> = ({ title, date, role, descript }) => {
  const descriptList = descript.map((desc, idx) => (
    <Description description={desc} key={idx} />
  ))

  return (
    <div className="contentbody">
      <h3>{`${title ?? ''}`}</h3>
      <h4>{`${date ?? ''}`}</h4>
      <h5>{`${role ?? ''}`}</h5>
      <p>{descriptList}</p>
    </div>
  )
}
