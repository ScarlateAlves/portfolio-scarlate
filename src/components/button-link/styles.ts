import styled from 'styled-components'

export const ButtonStylesLink = styled.a<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? '#E85A71' : 'white')};
  border-radius: 39px;
  color: ${(props) => (props.primary ? '#ffffff' : '#E85A71')};
  font-size: 1rem;
  border: solid 1px #e85a71;
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background: #fbe0e4;
    border: solid 1px #fbe0e4;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  }

  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`
