import styled from 'styled-components'

export const BlurCard = styled.div`
  background-color: beige;
  border: 4px solid;
  width: 350px;
  height: 400px;
  transition: 0.2s ease-in;
  transform: scale(0.97);
  background-color: ${(props) => props.theme.secondary};
  font-size: 24px;
  border-color: ${(props) => props.theme.callToAction};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

export const BlurCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: min-content(80%, 1200px);
  gap: 5px;
  flex-wrap: wrap;
  &:hover > ${BlurCard}:hover {
    opacity: 1;
    transform: scale(1);
  }
  &:hover > ${BlurCard}:not(hover) {
    opacity: 0.5;
    transform: scale(0.9);
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
export const LinkContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.main};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`

export const BlurCardPara = styled.div`
  width: auto;
  color: ${(props) => props.theme.main};
  border-style: none;
  font-size: inherit;
  display: block;
  justify-content: center;
  opacity: 0.8;
`
export const CardImg = styled.img`
  object-fit: cover;
  display: block;
  margin: auto;
  width: min(100%, 300px);
`
export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
