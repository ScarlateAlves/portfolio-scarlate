import styled from 'styled-components'

export const Container = styled.div<{ height?: string }>`
  height: ${(props) => props.height ?? ''};
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  grid-template-areas: 'container section';
`

export const Main = styled.main`
  grid-area: container;
  display: grid;
`

export const Section = styled.section`
  grid-area: section;
`
