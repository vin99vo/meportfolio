import styled from 'styled-components'

export const TabButton = styled.a<{
  isActive: boolean
}>`
  color: ${(props) =>
    props.isActive ? props.theme.callToAction : props.theme.main};
  padding: 12px;
  margin: 10px 0;
  text-align: center;
  width: 100px;
  background: #233554;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.main};
  position: relative;
  font-weight: bold;
  transition: all 0.3s ease;
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
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.callToAction};
    box-shadow: -2px 0 ${(props) => props.theme.callToAction};
  }
  display: block;
  scroll-behavior: smooth;
`
export const TabRows = styled.div`
  position: fixed;
  inset: 50px auto auto 20px;
  z-index: 100;
`
export const TabsContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
`
export const ContentInTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: min(90%, 1600px);
  border-radius: 100px;
`
export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`

export const DropDownContainer = styled.div``
