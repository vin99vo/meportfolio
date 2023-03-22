import styled from 'styled-components'

export const BlurCardsContainer = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;

  vertical-align: middle;
`

export const BlurCard = styled.div<{
  hoverCard: boolean
  hoverBrowser: boolean
  length: number
}>`
  background-color: beige;
  border: 4px solid;
  width: calc(60% / ${(props) => props.length});
  transition: 0.3s ease-in;
  ${(props) =>
    props.hoverBrowser &&
    `
    opacity: 1;
`}
  ${(props) =>
    props.hoverCard &&
    `
    opacity: 1;
    width: calc(60% / ${props.length} + 2%);
`}
  ${(props) =>
    !props.hoverCard &&
    !props.hoverBrowser &&
    `
    opacity: 0.5;   
    filter: blur(1px);
`}
`
