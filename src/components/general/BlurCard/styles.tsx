import styled from 'styled-components'

export const BlurCard = styled.div<{ url?: string }>`
  background-color: beige;
  border: 4px solid;
  width: calc(30%);
  transition: 0.2s ease-in;
  transform: scale(0.97);
  background-color: #0a192f;
  font-size: 24px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: bottom;
  border-color: rgb(238, 96, 45);
`

export const BlurCardsContainer = styled.div`
  display: flex;
  height: 50%;
  width: 70%;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  &:hover > ${BlurCard}:hover {
    opacity: 1;
    transform: scale(1);
  }
  &:hover > ${BlurCard}:not(hover) {
    opacity: 0.5;
    transform: scale(0.9);
  }
`
export const LinkContainer = styled.a`
  text-decoration: none;
`
export const LinkButton = styled.button`
  background-color: inherit;
  cursor: pointer;
  height: 40px;
  width: auto;
  margin: 5px auto;
  color: white;
  border-style: none;
  font-size: inherit;
  display: block;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`
export const BlurCardPara = styled.div`
  background-color: inherit;
  height: 40px;
  width: auto;
  margin: auto;
  color: white;
  border-style: none;
  font-size: inherit;
  display: flex;
  justify-content: center;
  opacity: 0.6;
`
