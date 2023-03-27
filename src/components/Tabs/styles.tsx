import styled from 'styled-components'

export const TabButton = styled.a<{
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
  scroll-behavior: smooth;
`
export const TabRows = styled.div`
  position: fixed;
  inset: 50px auto auto 20px;
`
export const TabsContainer = styled.div``
export const ContentInTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`
export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
`

export const DropDownContainer = styled.div``
