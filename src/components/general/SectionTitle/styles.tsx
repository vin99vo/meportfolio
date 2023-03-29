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

export const SqueezeDiv = styled.div`
  box-sizing: content-box;
  display: inline;
  &:hover {
    opacity: 0.8;
    animation: ${Squeeze} 1.5s linear;
    color: white;
    cursor: context-menu;
  }
`
