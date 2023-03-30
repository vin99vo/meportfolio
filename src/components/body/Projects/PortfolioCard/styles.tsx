import styled, { keyframes } from 'styled-components'
export const ProjectCard = styled.div`
  transition: 0.3s all ease-in;
  transform-style: preserve-3d;
`
export const ProjectPara = styled.div`
  font-size: 16px;
  padding: 6px 4px;
  width: 90%;
  line-height: normal;
  transition: 0.3s all ease-in;
`

export const ProjectCardContainer = styled.div<{ isClicked: boolean }>`
  height: 400px;
  width: 350px;
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
    height: 450px;
    width: 800px;
    transform: translateY(0%) translateX(20%);
    box-shadow: 0 0 14px 6px rgb(238, 96, 45);
  
    &:hover > ${ProjectCard} {
      transform: rotateY(180deg) translate(-20px, 0);
    }
    ${ProjectPara} {
      font-size: 18pxpx;
      padding: 14px 10px;
    }
    > ${ProjectCard}{
        transform: rotateY(180deg) translate(-20px, 0);
    }
    
  }`}
`

export const ProjectCardFront = styled.div`
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 50px;
  position: absolute;
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
export const PortfolioSkills = styled.div`
  font-size: 14px;
  padding: 5px 5px;
`
export const Levitate = keyframes`
 0%{
    transform: translateY(0);
  }50% {
    transform: translateY(5px);
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
  width: min(80%, 800px);
  animation: ${Levitate} infinite 2s linear;
`
export const CenterSkillIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: min(80% 800px);
`
export const ProjectCardBack = styled.div`
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 50px;
  padding: 10px;
  position: absolute;
  transform: rotateY(180deg);
`

export const SourceCodeContainer = styled.a`
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
