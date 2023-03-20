import './Header.css'
import { HeaderLeft } from '../HeaderLeft/'
import { HeaderRight } from '../HeaderRight'
import { type FC } from 'react'
import { HeaderWrapper } from './styles'

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderRight />
    </HeaderWrapper>
  )
}
