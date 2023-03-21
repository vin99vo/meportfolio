import styled from 'styled-components'

export const HeaderWrapper = styled.div<{ HeaderBackground: string }>`
  display: flex;
  flex-direction: row;
  background-color: #2819f5;
  justify-content: space-between;
  margin: 0;
  padding: 2px 50px;
  height: auto;
  color: white;
  background-image: url(${(props) => props.HeaderBackground});
  background-blend-mode: multiply;
  background-size: cover;
`
