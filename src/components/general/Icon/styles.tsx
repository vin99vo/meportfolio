import styled, { css, keyframes } from 'styled-components'

export const IconWrapper = styled.div<{
  isSmall: boolean
}>`
  width: ${(props) => (props.isSmall ? 'auto' : '160px')};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isSmall ? 'center ' : 'start')};
  white-space: nowrap;
`

export const Shrink = keyframes`
 0%{
    transform: scale(1);
  }50% {
    transform: scale(0);
  } 100% {
    transform: scale(1.05);
  }
`

export const IconImage = styled.img<{ isSmall: boolean; iconHovered: boolean }>`
  width: ${(props) => (props.isSmall ? '40px' : '60px')};
  height: ${(props) => (props.isSmall ? '40px' : '60px')};
  border-radius: ${(props) => (props.isSmall ? '50%' : '0px')};
  object-fit: cover;
  transition: 0.5s all ease-in;
  ${(props) =>
    props.iconHovered &&
    css`
      animation: ${Shrink} 0.6s linear;
    `}
`
export const IconText = styled.span<{ iconHovered: boolean }>`
  padding-left: 6px;
  font-size: 16px;
  font-weight: 500;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: 0.5s all ease-in;
  ${(props) =>
    props.iconHovered &&
    css`
      animation: ${Shrink};
      transform: rotateY(0deg);
    `}
`
