import styled from 'styled-components'

export const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 80px;
`
export const HomeOuterDiv = styled.div`
  width: min(90%, 800px);
`
export const HiOpening = styled.p`
  line-height: normal;
  margin: 0;
  padding: 0;
  color: rgb(238, 96, 45);
  font-size: 20px;
`
export const MyName = styled.p`
  font-size: 52px;
  font-weight: 900;
  padding: 30px 0 0 0;
`

export const HomeSubtitle = styled.p`
  font-size: 40px;
  margin: 0;
  padding: 30px 0 10px 0;
  line-height: normal;
  opacity: 0.75;
`
export const HomePara = styled.p`
  font-size: 20px;
  line-height: normal;
  /* margin: 0; */
  padding: 0;
  opacity: 0.75;
`

export const HomeImg = styled.img`
  object-fit: contain;
  height: 350px;
  width: 350px;
  border-radius: 40px;
`
