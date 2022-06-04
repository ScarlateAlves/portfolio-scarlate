import { Container, Main, Section } from './styles'

interface LayoutProps {
  main?: React.ReactNode
  section?: React.ReactNode
}

export const Layout = ({ main, section }: LayoutProps) => {
  return (
    <Container>
      <Main>{main}</Main>
      <Section>{section}</Section>
    </Container>
  )
}
