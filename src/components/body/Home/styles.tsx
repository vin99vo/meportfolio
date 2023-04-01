import styled, { keyframes } from 'styled-components'

export const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 80px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.main};
`
export const HomeOuterDiv = styled.div`
  width: min(90%, 800px);
`
export const HiOpening = styled.p`
  line-height: normal;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.callToAction};
  font-size: 20px;
`
export const MyName = styled.div`
  font-size: 52px;
  font-weight: 900;
  padding: 30px 0 0 0;
  line-height: normal;
  color: ${(props) => props.theme.secondary};
`

export const HomeSubtitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  padding: 30px 0 10px 0;
  line-height: normal;
  opacity: 0.8;
  display: block;
  color: ${(props) => props.theme.secondary};
`
export const HomePara = styled.p`
  font-size: 20px;
  line-height: normal;
  padding: 0;
  opacity: 0.75;
  display: inline-flex;
  color: ${(props) => props.theme.secondary};
`
export const Levitate = keyframes`
 0%{
    transform: translateY(-5px);
  }50% {
    transform: translateY(5px);
  } 100% {
    transform: translateY(-5px);
  }
`
export const HomeImg = styled.img`
  object-fit: contain;
  max-height: 350px;
  max-width: 350px;
  border-radius: 40px;
  animation: ${Levitate} infinite 3s linear;
`
