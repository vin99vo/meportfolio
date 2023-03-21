import { HeaderLeft } from '../HeaderLeft/'
import { HeaderRight } from '../HeaderRight'
import { type FC } from 'react'
import { HeaderWrapper } from './styles'
import headerBackImg from '../../../thumbnails/patterns/darkBluePattern.jpg'

export const Header: FC = () => {
  return (
    <HeaderWrapper HeaderBackground={headerBackImg}>
      <HeaderLeft />
      <HeaderRight />
    </HeaderWrapper>
  )
}
