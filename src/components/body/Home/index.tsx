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
import { HackerName } from '../../general/HackerName'
import { SqueezeTitle } from '../../general/SqueezeTitle'

export const Home: FC = () => {
  const about = []

  const name = 'Vincent Vo.'
  const isSection = false

  return (
    <HomeWrapper>
      <HomeImg src={PcLogo} />
      <HomeOuterDiv>
        <Card>
          <HiOpening>Hi, my name is </HiOpening>
          <MyName>
            <HackerName text={name} />
          </MyName>
          <HomeSubtitle>
            <SqueezeTitle
              title="Front-End Software Developer."
              isSection={isSection}
            />
          </HomeSubtitle>
          <HomePara>
            I focus on delivering seamless digital experiences and responsive
            layouts. My goal is to bring your ideas to life.
          </HomePara>
        </Card>
      </HomeOuterDiv>
    </HomeWrapper>
  )
}
