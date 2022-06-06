import { ButtonStylesLink } from './styles'

interface ButtonLinkProps {
  children: React.ReactNode
  primary?: boolean
  href?: string
  color?: string
}

export const ButtonLink = ({
  children,
  primary,
  href,
  color,
}: ButtonLinkProps) => {
  return (
    <ButtonStylesLink
      href={href}
      primary={primary}
      color={color}
      target="_blank"
    >
      {children}{' '}
    </ButtonStylesLink>
  )
}
