import styled from 'styled-components'

export const TextAreaStyles = styled.textarea`
  background: #f4f4f4;
  border: none;
  padding: 1rem;
  //caret-color: white;
  width: 80ch;
  ::placeholder {
    font-size: 1rem;
  }
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
