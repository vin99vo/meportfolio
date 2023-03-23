import styled from 'styled-components'

export const IconWrapper = styled.div<{
  isSmall: boolean
}>`
  width: ${(props) => (props.isSmall ? 'auto' : '160px')};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isSmall ? 'center ' : 'start')};
  white-space: nowrap;
  padding: ${(props) => (props.isSmall ? '0 10px ' : '40px 90px')};
`
export const IconImage = styled.img<{ isSmall: boolean }>`
  width: ${(props) => (props.isSmall ? '40px' : '60px')};
  height: ${(props) => (props.isSmall ? '40px' : '60px')};
  border-radius: ${(props) => (props.isSmall ? '50%' : '0px')};
  object-fit: cover;
`
export const IconText = styled.span`
  padding-left: 6px;
  font-size: 16px;
  font-weight: 500;
`
