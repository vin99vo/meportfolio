import styled, { withTheme } from 'styled-components'

export const Hamburger = styled.div`
  display: block;
  width: 15px;
  height: 2px;
  margin: 4px auto 2px;
  border-radius: 25%;
  background-color: white;
  color: white;
`
export const InvertColourButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid;
  background-color: #0a192f;
  color: white;
  transition: 0.2s ease-in;
  &:hover {
    background-color: white;
    color: #0a192f;
  }
  &:hover ${Hamburger} {
    background-color: #0a192f;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  inset: 20px auto auto 20px;
`
