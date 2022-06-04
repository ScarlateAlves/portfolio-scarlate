import styled from 'styled-components'

export const ContainerInput = styled.div`
  background: blue;
  display: flex;
  background: #f4f4f4;
  align-items: center;
  width: 70ch;
`
export const InputStyles = styled.input`
  background: #f4f4f4;
  border: none;
  padding: 1rem;
  //caret-color: white;

  ::placeholder {
    font-size: 1rem;
  }
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
export const IconIput = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
`
