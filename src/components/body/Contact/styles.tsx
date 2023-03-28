import styled from 'styled-components'

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #285704;
`
export const GetInTouch = styled.div`
  color: rgb(238, 96, 45);
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
`

export const LinkButton = styled.button`
  height: 60px;
  width: 220px;
  font-size: 20px;
  border-radius: 6px;
  border: 2px solid;
  background-color: #0a192f;
  color: white;
  transition: 0.2s ease-in;
  &:hover {
    background-color: white;
    color: rgb(238, 96, 45);
  }
  display: block;
  margin: 50px auto 0;
  cursor: pointer;
  font-weight: 800;
`
