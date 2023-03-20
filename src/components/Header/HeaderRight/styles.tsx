import styled from 'styled-components'

export const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const LinkedInButton = styled.a`
  margin: 0;
  display: flex;
  align-items: center;
  width: 60px;
  &:hover img {
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
    color: black;
  }
`
