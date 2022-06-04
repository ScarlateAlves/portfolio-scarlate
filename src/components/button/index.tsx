import { ButtonStyles } from './styles'

interface ButtonProps {
  children: React.ReactNode
  primary?: boolean
}

export const Button = ({ children, primary }: ButtonProps) => {
  return <ButtonStyles primary={primary}>{children} </ButtonStyles>
}
