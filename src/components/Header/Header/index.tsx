import './Header.css'
import { HeaderLeft } from '../HeaderLeft/'
import { HeaderRight } from '../HeaderRight'

export const Header = (): JSX.Element => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderRight />
    </div>
  )
}
