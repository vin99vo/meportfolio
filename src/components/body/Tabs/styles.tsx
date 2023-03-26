import styled from 'styled-components'

export const TabButton = styled.a<{
  isClickedMe: boolean
  isActive: boolean
}>`
  color: ${(props) => (props.isActive ? 'rgb(238, 96, 45)' : 'white')};
  padding: 20px;
  margin: 20px 0;
  text-align: center;
  width: 100px;
  background: ${(props) =>
    props.isActive ? 'rgba(220, 220, 220, 0.916)' : 'rgb(69, 68, 68)'};
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.274);
  position: relative;
  font-weight: bold;
  transition: 0.2s all ease-in;
  ${(props) =>
    props.isActive &&
    `&::before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: rgb(238, 96, 45);
    border-bottom: transparent;
  }`}
  &:hover {
    background-color: white;
    color: rgb(238, 96, 45);
  }
  display: block;
  opacity: ${(props) => (props.isClickedMe ? '1' : '0')};
  pointer-events: ${(props) => (props.isClickedMe ? 'auto' : 'none')};
  transform: translateY(${(props) => (props.isClickedMe ? '0px' : '-30px')});
  scroll-behavior: smooth;
  z-index: 2;
`
export const TabRows = styled.div`
  position: fixed;
  inset: 180px auto auto 80px;
`
export const TabsContainer = styled.div``
export const ContentInTabs = styled.div<{ isClickedMe: boolean }>`
  flex-grow: 1;
  margin: auto;
`
export const Section = styled.section``
export const DropDownContainer = styled.div`
  z-index: 2;
`
export const Hamburger = styled.div`
  display: block;
  width: 25px;
  height: 2px;
  margin: 4px auto 2px;
  border-radius: 25%;
  background-color: white;
`

export const InvertColourButton = styled.button`
  height: 50px;
  width: 200px;
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
  position: fixed;
  inset: 140px auto auto 80px;
  &:hover ${Hamburger} {
    background-color: #0a192f;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`
