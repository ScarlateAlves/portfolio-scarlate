import Link from 'next/link'
import { NavContainerStyles, NavStyles } from './styles'
import { Text } from '../index'
import logo from '../../assets/image/logo.png'
import Image from 'next/image'

export const NavBar = () => {
  return (
    <NavContainerStyles>
      <Link href="#">
        <Image style={{ cursor: 'pointer' }} width="170px" src={logo} />
      </Link>
      <NavStyles>
        <Link href="#home">
          <Text cursor size="1rem">
            Início
          </Text>
        </Link>
        <Link href="#home">
          <Text cursor size="1rem">
            Sobre
          </Text>
        </Link>
        <Link href="#home">
          <Text cursor size="1rem">
            Projeto
          </Text>
        </Link>
        <Link href="#home">
          <Text cursor size="1rem">
            Contato
          </Text>
        </Link>
      </NavStyles>
    </NavContainerStyles>
  )
}
