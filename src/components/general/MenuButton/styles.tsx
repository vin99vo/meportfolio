import styled, { withTheme } from 'styled-components'

export const Hamburger = styled.div`
  display: block;
  width: 15px;
  height: 2px;
  margin: 4px auto 2px;
  border-radius: 25%;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.main};
`
export const InvertColourButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid;
  background-color: ${(props) => props.theme.callToAction};
  color: ${(props) => props.theme.main};
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.callToAction};
  }
  &:hover ${Hamburger} {
    background-color: ${(props) => props.theme.callToAction};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  inset: 20px auto auto 20px;
`
