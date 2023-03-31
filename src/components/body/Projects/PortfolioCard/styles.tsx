import styled, { keyframes } from 'styled-components'

export const ProjectPara = styled.div`
  font-size: 16px;
  padding: 6px 4px;
  width: 90%;
  line-height: normal;
  transition: 0.3s all ease-in;
`

export const ProjectCardContainer = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 350px;
  border-color: ${(props) => props.theme.callToAction};
  border-style: solid;
  border-width: 2px;
  position: relative;
  transform: scale(0.9);
  transition: 0.3s all ease-in;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    !props.isClicked &&
    `{
  &:hover {
    border-style: dotted;
    transform: scale(1);
  }
  }`}
  ${(props) =>
    props.isClicked &&
    `{
    width: min(90%, 800px);
    height: auto;
    box-shadow: 0 0 14px 6px rgb(238, 96, 45);   
  }
 }`}
`

export const ProjectCardFront = styled.div<{ isClicked: boolean }>`
  backface-visibility: hidden;
  border-radius: 50px;
  position: absolute;
  transition: 0.3s all ease-in;
  ${(props) =>
    props.isClicked &&
    `{
    transform: rotateY(180deg);
  }`}
`
export const ProjectTitle = styled.div`
  font-size: 24px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  padding: 10px;
`

export const ProjectDescript = styled.div`
  padding: 10px;
`
export const SkillsDivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.callToAction};
`

export const PanMovie = keyframes`
  0%{
    background-position: 0% 0%;
    background-size: 250%;
  }
  33% {
    background-position: 60% 20%;
    background-size: 250%;
  }
  33.001%{
    background-position: 100% 20%;
    background-size: 300%;
  }
  66% {
    background-position: 20% 75%;
    background-size: 300%;
  }
  66.001%{
    background-position: 100% 20%;
    background-size: 150%;
  }
  100% {
    background-position: 55% 0%;
    background-size: 150%;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ProjectImg = styled.div<{ img: string }>`
  height: 150px;
  width: 250px;
  background-image: url(${(props) => props.img});
  background-size: 300%;
  opacity: 0.7;
  animation: ${PanMovie} 15s infinite linear;
`

export const PortfolioSkills = styled.div`
  font-size: 14px;
  padding: 5px 5px;
  backface-visibility: hidden;
`
export const Levitate = keyframes`
 0%{
    transform: translateY(0);
  }50% {
    transform: translateY(10px);
  } 100% {
    transform: translateY(0);
  }
`
export const SkillIconsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  vertical-align: middle;
  gap: 10px;
  justify-content: space-around;
  width: min(80%, 400px);
  animation: ${Levitate} infinite 2s linear;
`
export const CenterSkillIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: min(80%, 800px);
  opacity: 0;
  transition: 0.3s all ease-in;
`
export const ProjectCardBack = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(90%, 600px);
  padding: 10px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: 0.3s all ease-in;
  ${(props) =>
    props.isClicked &&
    `{
    transform: rotateY(0deg);
  }
  > ${ProjectPara}{
    font-size: 22px;
  }
  > ${CenterSkillIcons}{
    opacity: 1;
  }
  > ${ProjectTitle}{
    font-size 32px;
    text-decoration: underline;
  }
  `}
`

export const SourceCodeButton = styled.a`
  border: 2px ${(props) => props.theme.callToAction} solid;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.main};
  border-radius: 10px;
  padding: 4px;
  margin: 6px;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: min(80%, 220px);
  &:hover {
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.callToAction};
    box-shadow: -2px 0 ${(props) => props.theme.callToAction};
  }
`
