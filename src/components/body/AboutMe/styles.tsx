import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const AboutMeTitle = styled.div`
  color: ${(props) => props.theme.main};
  font-size: 52px;
  font-weight: 900;
  padding: 10px auto;
  text-align: center;
  display: flex;
  justify-content: center;
`
export const AboutMePara = styled.p`
  font-size: 24px;
  line-height: normal;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0.8;
`
export const SkillsTitle = styled.p`
  font-size: 44px;
  font-weight: bold;
  line-height: normal;
`
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SkillIconsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  vertical-align: middle;
  gap: 40px;
  justify-content: space-around;
  width: min(80%, 800px);
`
export const CenterSkillIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: min(80% 800px);
`
