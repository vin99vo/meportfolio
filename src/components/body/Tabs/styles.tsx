import styled from 'styled-components'

export const TabButton = styled.button<{
  isClickedMe: boolean
  isActive: boolean
}>`
  padding: 20px 20px;
  margin: 20px 0;
  text-align: center;
  width: 300px;
  background: ${(props) => (props.isActive ? 'white' : 'rgb(212, 212, 212)')};
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
  }
  z-index: 2;
  display: block;
  opacity: ${(props) => (props.isClickedMe ? '1' : '0')};
  transform: translateY(${(props) => (props.isClickedMe ? '0px' : '-10px')});
`
export const TabRows = styled.div`
  /* display: flex; */
`
export const TabsContainer = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 20px auto;
`
export const ContentInTabs = styled.div<{ isClickedMe: boolean }>`
  position: relative;
  flex-grow: 1;
  opacity: ${(props) => (props.isClickedMe ? '1' : '0')};
`
export const ContentShow = styled.div<{ isActive: boolean }>`
  z-index: 1;
  position: absolute;
  width: 100%;
  transition: 0.3s all ease-in-out; /* here */
  /* display: ${(props) => (props.isActive ? 'block' : 'none')}; */
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transform: ${(props) =>
    props.isActive ? 'translateY(0)' : 'translateY(-20px)'};
`
export const DropDownContainer = styled.div`
  position: relative;
  max-width: 1600px;
  /* background: #f1f1f1; */
  margin: 20px auto 0;
  word-break: break-word;
  border: none;
  text-align: left;
`
