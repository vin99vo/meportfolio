import styled from 'styled-components'

export const LinksButton = styled.a`
  display: flex;
  align-items: center;
  margin: 10px auto 0 auto;
  &:hover img {
    cursor: pointer;
    box-shadow: 0px 3px 10px rgba(255, 255, 255, 0.4);
    color: #fefefe;
  }
`
export const LinksButtonWrapper = styled.div`
  position: fixed;
  inset: auto auto 120px 80px;
`
