import { Flex } from 'rebass'
import { Heading, Text } from '..'

export const Presentation = () => {
  return (
    <>
      <Flex justifyContent="center" flexDirection="column" height="100%">
        <Heading size="3.8rem">
          Olá, sou Scarlate Alves
          <span style={{ color: '#E85A71' }}> Front-End </span>
          Developer
        </Heading>
        <Text>
          Trabalho com desenvolvimento front-end desde 2021. No meu tempo livre
          gosto de construir meus projetos sempre tentando aprender novas
          tecnologias.
        </Text>
      </Flex>
    </>
  )
}
