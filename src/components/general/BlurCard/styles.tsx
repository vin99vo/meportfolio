import styled from 'styled-components'

export const BlurCardSecond = styled.div`
  background-color: beige;
  border: 4px solid;
  width: calc(30%);
  transition: 0.3s ease-in;
  transform: scale(0.97);
`

export const BlurCardsContainer = styled.div`
  display: flex;
  height: 70%;
  width: 70%;
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
