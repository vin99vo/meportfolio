import { type FC } from 'react'
import { Hamburger, InvertColourButton } from './styles'

type HamburgerMenuProps = {
  onMenuClick?: React.MouseEventHandler<HTMLButtonElement>
}

const HamburgerIcon: FC = () => {
  return (
    <div>
      <Hamburger />
      <Hamburger />
      <Hamburger />
    </div>
  )
}

export const HamburgerMenu: FC<HamburgerMenuProps> = (props) => {
  return (
    <InvertColourButton onClick={props.onMenuClick}>
      <HamburgerIcon />
    </InvertColourButton>
  )
}
