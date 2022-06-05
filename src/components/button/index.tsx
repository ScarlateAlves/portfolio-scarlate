import { ButtonHTMLAttributes } from 'react'
import { ButtonStyles } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  primary?: boolean
}

export const Button = ({ children, primary }: ButtonProps) => {
  return <ButtonStyles primary={primary}>{children} </ButtonStyles>
}
