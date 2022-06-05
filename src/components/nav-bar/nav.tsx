import { NavContainerStyles, NavStyles, Link, Container } from './styles'
import logo from '../../assets/image/logo.png'
import Image from 'next/image'
import { useState } from 'react'

export const NavBar = () => {
  const [colorChange, setColorchange] = useState<boolean>(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNavbarColor)
  }

  return (
    <Container border={colorChange}>
      <NavContainerStyles>
        <Link href="#home">
          <Image
            height="80px"
            style={{ cursor: 'pointer' }}
            width="150px"
            src={logo}
          />
        </Link>
        <NavStyles>
          <Link href="#home">Início</Link>
          <Link href="#about">Sobre</Link>
          <Link href="#projects">Projeto</Link>
          <Link href="#contact">Contato</Link>
        </NavStyles>
      </NavContainerStyles>
    </Container>
  )
}
