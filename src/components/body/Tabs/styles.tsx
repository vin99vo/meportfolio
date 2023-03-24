import styled from 'styled-components'

export const TabButton = styled.a<{
  isClickedMe: boolean
  isActive: boolean
}>`
  color: ${(props) => (props.isActive ? 'rgb(238, 96, 45)' : 'white')};
  padding: 20px 20px;
  margin: 20px 0;
  text-align: center;
  width: 100px;
  background: ${(props) =>
    props.isActive ? 'rgba(220, 220, 220, 0.916)' : 'rgb(69, 68, 68)'};
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.274);
  border-bottom: ${(props) => props.isActive && '1px solid transparent'};
  box-sizing: content-box;
  position: relative;
  outline: none;
  font-weight: bold;
  transition: 0.2s all ease-in;
  border-right: ${(props) => (props.isActive ? 'transparent' : 'inherit')};
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
  ${(props) =>
    props.isActive &&
    `&::after {
      content: '>';
      position:absolute;
      right: 10px;
      color:rgb(238, 96, 45);
  }`}
  &:hover {
    background-color: white;
    color: rgb(238, 96, 45);
  }
  z-index: 2;
  display: block;
  opacity: ${(props) => (props.isClickedMe ? '1' : '0')};
  transform: translateY(${(props) => (props.isClickedMe ? '0px' : '-10px')});
  scroll-behavior: smooth;
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

export const InvertColourButton = styled.button`
  height: 40px;
  width: 200px;
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid;
  background-color: #233554;
  color: white;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;

  transition: 0.4s ease-in;
  &:hover {
    background-color: white;
    color: #233554;
  }
  position: fixed;
  inset: 140px auto auto 80px;
`
