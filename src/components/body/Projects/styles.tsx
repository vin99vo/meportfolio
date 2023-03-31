import styled from 'styled-components'

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 80px;
  background-color: inherit;
`
export const SectionTitle = styled.div`
  color: ${(props) => props.theme.main};
  font-size: 52px;
  font-weight: 900;
  padding: 10px auto;
  text-align: center;
  display: flex;
  justify-content: center;
`
