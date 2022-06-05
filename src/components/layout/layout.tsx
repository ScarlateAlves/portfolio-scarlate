import { Container, Main, Section } from './styles'

interface LayoutProps {
  main?: React.ReactNode
  section?: React.ReactNode
  height?: string
}

export const Layout = ({ main, section, height }: LayoutProps) => {
  return (
    <Container height={height}>
      <Main>{main}</Main>
      <Section>{section}</Section>
    </Container>
  )
}
