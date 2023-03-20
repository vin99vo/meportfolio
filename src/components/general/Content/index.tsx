import './Content.css'
import { Description } from '../Description'
import { type FC } from 'react'
import { ContentBody, H3, H4, H5, Para } from './content.styles'

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
      <H3>{`${title ?? ''}`}</H3>
      <H4>{`${date ?? ''}`}</H4>
      <H5>{`${role ?? ''}`}</H5>
      <Para>{descriptList}</Para>
    </ContentBody>
  )
}
