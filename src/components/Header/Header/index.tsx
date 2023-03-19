import './Header.css'
import { HeaderLeft } from '../HeaderLeft/'
import { HeaderRight } from '../HeaderRight'
import { type FC } from 'react'

export const Header: FC = () => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderRight />
    </div>
  )
}
