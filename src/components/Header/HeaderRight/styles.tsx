import styled from 'styled-components'

export const LinksButton = styled.a`
  display: flex;
  align-items: center;
  margin: 10px auto 0 auto;
  &:hover img {
    cursor: pointer;
    box-shadow: 0px 5px 10px rgba(238, 96, 45, 0.8);
    color: #fefefe;
  }
`
export const LinksButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: fixed;
  inset: 10px 10px auto auto;
  @media (max-width: 600px) {
    position: absolute;
    inset: 10px 10px auto auto;
  }
`
