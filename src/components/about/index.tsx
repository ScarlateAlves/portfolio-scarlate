import { Box, Flex } from 'rebass'
import { Heading, Text } from '..'
import { CssIcon } from '../../assets/icon/css-icon'
import { GitIcon } from '../../assets/icon/git-icon'
import { HtmlIcon } from '../../assets/icon/html-icon'
import { JestIcon } from '../../assets/icon/jest-icon'
import { JsIcon } from '../../assets/icon/js-icon'
import { NextIcon } from '../../assets/icon/next-icon'
import { ReactIcon } from '../../assets/icon/react-icon'
import { StylesIcon } from '../../assets/icon/styles-icon'
import { TsIcon } from '../../assets/icon/ts-icon'

export const About = () => {
  return (
    <>
      <Flex height="100%" flexDirection="column" justifyContent="center">
        <Text>
          Sou desenvolvedora front-end com especialidade na web. Trabalho com o
          framework Next js utilizando o styled-components e a linguagem
          typescript, para uma melhor perfomace procuro sempre fazer tests com
          jest nas aplicações criadas. Estou no ramo desde 2021, porem já venho
          estudando a mais tempo
        </Text>
        <Text>
          Algumas vezes me aventuro a conhecer um pouco do desenvolvimento
          mobile e também de desing
        </Text>
        <Text>
          Hoje em dia procuro me aperfeiçoar com os padrões de projeto e sempre
          tento estar a par das novas tecnologias
        </Text>
        <Box>
          <Heading size="21px">Skills</Heading>
          <Flex justifyContent="space-between">
            <HtmlIcon />
            <CssIcon />
            <JsIcon />
            <TsIcon />
            <ReactIcon />
            <NextIcon />
            <StylesIcon />
            <JestIcon />
            <GitIcon />
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
