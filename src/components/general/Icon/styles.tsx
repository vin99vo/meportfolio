import styled from 'styled-components'

export const IconWrapper = styled.div<{
  isSmall: boolean
}>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: ${(props) => (props.isSmall ? '0 30px ' : '40px 120px 0 120px')};
`
export const IconImage = styled.img<{ isSmall: boolean }>`
  width: ${(props) => (props.isSmall ? '40px' : '60px')};
  height: ${(props) => (props.isSmall ? '40px' : '60px')};
  border-radius: 30px;
  object-fit: cover;
`
export const IconText = styled.span`
  padding-left: 4px;
  font-size: 16px;
`
