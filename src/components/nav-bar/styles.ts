import styled from 'styled-components'
export const Container = styled.div<{ border?: boolean }>`
  z-index: 1;
  width: 100%;
  background-color: white;
  border-bottom: ${(props) => (props.border ? 'solid 3px #E85A71' : 'none')};
  /* Fix your navbar by using below two lines of code */
  position: fixed;
  top: 0;
  height: 7.5vh;
  padding-top: ${(props) => (props.border ? '0rem' : '2.3rem')}; ;
`

export const NavContainerStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 81%;
  height: 100%;
  margin: 0rem 10rem;
`

export const NavStyles = styled.nav`
  color: #3a3a49;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`

export const Link = styled.a`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: ${(props) => props.color ?? '#454552'};
  cursor: pointer;
  :hover {
    color: #e85a71;
  }
`
