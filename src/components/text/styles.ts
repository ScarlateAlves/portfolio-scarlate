import styled from 'styled-components'

export const TextStyles = styled.p<{ size?: string; cursor?: boolean }>`
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.size ?? '1.3rem'};
  color: ${(props) => props.color ?? '#454552'};
  cursor: ${(props) => (props.cursor ? 'pointer' : '')};
`
