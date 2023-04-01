import styled, { keyframes } from 'styled-components'

export const FullContainer = styled.div`
  display: flex;
`

export const Squeeze = keyframes`
    0%{
        transform: scale(1, 1);
    }
    5%{
        transform: scale(0.8, 0.6);
    }
    15%{
        transform: scale(0.8, 0.6);
    }
    25%{
        transform: scale(1.15,1.2);
    }
    35%{
        transform: scale(.9,.8);
    }
    40%{
        transform: scale(1.05,1.05);
    }
    100%{
      transform: scale(1,1);
    }
`

export const WordsWrap = styled.div``
export const LettersWrap = styled.div`
  display: inline-flex;
`
export const SqueezeDiv = styled.div<{ color: string }>`
  box-sizing: content-box;
  color: ${(props) =>
    props.color === 'orange' ? props.theme.callToAction : 'inherit'};
  &:hover {
    opacity: 0.9;
    animation: ${Squeeze} 1.5s linear;
    color: ${(props) => props.theme.callToAction};
    cursor: context-menu;
  }
`
