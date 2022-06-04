import styled from 'styled-components'

export const HeadingStyles = styled.h1<{ size?: string }>`
  color: ${(props) => props.color ?? '#3A3A49'};
  font-size: ${(props) => props.size ?? '40px'};
  font-family: 'Inter', sans-serif;
`
