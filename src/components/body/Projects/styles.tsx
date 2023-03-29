import styled, { keyframes } from 'styled-components'

export const ProjectsSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  background-color: #094343;
`
export const ProjectTitle = styled.div`
  color: rgb(238, 96, 45);
  font-size: 52px;
  font-weight: 900;
  padding: 10px auto;
  text-align: center;
  display: flex;
  justify-content: center;
`
export const ProjectsContainer = styled.div`
  width: 100vh;
`
export const ProjectCard = styled.div`
  transition: 0.7s all ease-in;
  transform-style: preserve-3d;
`
export const ProjectCardContainer = styled.div`
  height: 350px;
  width: 300px;
  border-color: red;
  border-style: solid;
  border-width: 2px;
  position: relative;
  transform: scale(0.9);
  transition: 0.3s all ease-in;
  &:hover > ${ProjectCard} {
    transform: rotateY(180deg);
  }
  &:hover {
    border-style: dotted;
    transform: scale(1);
  }
`

export const ProjectCardFront = styled.div`
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 50px;
  position: absolute;
`

export const ProjectCardBack = styled.div`
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 50px;
  position: absolute;
  transform: rotateY(180deg);
`
export const Levitate = keyframes`
 0%{
    transform: translateY(0);
  }50% {
    transform: translateY(20px);
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
