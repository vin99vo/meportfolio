import styled from 'styled-components'

export const StandardButton = styled.button`
  height: 40px;
  width: 150px;
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid;
`

export const InvertColourButton = styled(StandardButton)`
  background-color: #233554;
  color: white;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;

  transition: 0.4s ease-in;
  &:hover {
    background-color: white;
    color: #233554;
  }
`
