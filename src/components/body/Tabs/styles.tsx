import styled from 'styled-components'

export const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 14px;
  text-align: center;
  width: 50%;
  background: ${(props) =>
    props.isActive ? 'white' : 'rgba(128, 128, 128, 0.075)'};
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.274);
  box-sizing: content-box;
  position: relative;
  outline: none;
  font-weight: bold;
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
  }`}
`
export const TabRows = styled.div`
  display: flex;
`
export const TabsContainer = styled.div`
  position: relative;
  max-width: 1100px;
  background: #f1f1f1;
  margin: 20px auto 0;
  word-break: break-word;
  border: 1px solid rgba(0, 0, 0, 0.274);
  text-align: left;
`
export const ContentInTabs = styled.div`
  flex-grow: 1;
`
export const ContentShow = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`
