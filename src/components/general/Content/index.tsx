import { Description } from '../Description'
import { type FC } from 'react'
import { ContentBody } from './content.styles'

type ObjectProps = {
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
    <ContentBody>
      <h3>{`${title ?? ''}`}</h3>
      <h4>{`${date ?? ''}`}</h4>
      <h5>{`${role ?? ''}`}</h5>
      <p>{descriptList}</p>
    </ContentBody>
  )
}
