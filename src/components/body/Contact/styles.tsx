import styled from 'styled-components'

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
export const GetInTouch = styled.div`
  color: ${(props) => props.theme.main};
  font-size: 60px;
  font-weight: 900;
  padding: 0 auto;
`
export const ContactDescriptContainer = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContactDescript = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  width: min(80%, 600px);
  margin: 5px auto;
  opacity: 0.8;
`

export const LinkButton = styled.button`
  height: 60px;
  width: 220px;
  font-size: 20px;
  border-radius: 6px;
  border: 2px solid;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.main};
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.callToAction};
  }
  display: block;
  margin: 50px auto 0;
  cursor: pointer;
  font-weight: 800;
`
