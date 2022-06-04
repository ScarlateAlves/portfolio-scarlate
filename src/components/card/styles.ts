import styled from 'styled-components'

export const CardContainer = styled.a`
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
  border-radius: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 320px;
  text-decoration: none;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LinkStyles = styled.a`
  height: 40px;
  border-radius: 50%;
  :hover {
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.24);
  }

  :active {
    transform: scale(0.98);
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.24);
  }
`
