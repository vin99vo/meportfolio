import styled from 'styled-components'

export const HeaderWrapper = styled.div<{ headerBackground: string }>`
  display: flex;
  background-color: #2819f5;
  justify-content: space-between;
  margin: 0;
  padding: 2px auto;
  height: auto;
  color: white;
  background-image: url(${(props) => props.headerBackground});
  background-blend-mode: multiply;
  background-size: cover;
`
