import { Card } from '../../general/Card'
import PcLogo from '../../../thumbnails/icons/pcLogo.jpg'
import { type FC } from 'react'
import {
  HomeOuterDiv,
  HomeSubtitle,
  HomeWrapper,
  HomeImg,
  HomePara,
  MyName,
  HiOpening
} from './styles'

export const Home: FC = () => {
  const about = []

  return (
    <HomeWrapper>
      <HomeImg src={PcLogo} />
      <HomeOuterDiv>
        <Card>
          <HiOpening>Hi, my name is </HiOpening>
          <MyName>Vincent Vo.</MyName>
          <HomeSubtitle>Front-End Software Developer.</HomeSubtitle>
          <HomePara>
            I focus on delivering seamless digital experiences and responsive
            layouts. My goal is to bring your ideas to life.
          </HomePara>
        </Card>
      </HomeOuterDiv>
    </HomeWrapper>
  )
}
