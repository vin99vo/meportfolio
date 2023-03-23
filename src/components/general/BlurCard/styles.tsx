import styled from 'styled-components'

export const BlurCardSecond = styled.div`
  background-color: beige;
  border: 4px solid;
  width: calc(10%);
  transition: 0.3s ease-in;
  transform: scale(0.97);
`

export const BlurCardsContainer = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  vertical-align: middle;
  &:hover > ${BlurCardSecond}:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  &:hover > ${BlurCardSecond}:not(hover) {
    opacity: 0.5;
    transform: scale(0.8);
  }
`

export const BlurCardFirst = styled.div<{
  hoverCard: boolean
  hoverBrowser: boolean
  length: number
}>`
  background-color: beige;
  border: 4px solid;
  width: calc(60% / ${(props) => props.length});
  transition: 0.3s transform ease-in;
  transform: scale(0.97);
  ${(props) =>
    props.hoverBrowser &&
    `
    opacity: 1;    
`}
  ${(props) =>
    props.hoverCard &&
    `
    opacity: 1;
    transform: scale(1);
`}
  ${(props) =>
    !props.hoverCard &&
    !props.hoverBrowser &&
    `
    opacity: 0.5;   
    filter: blur(1px);
    transform: scale(0.9);
`}
`
