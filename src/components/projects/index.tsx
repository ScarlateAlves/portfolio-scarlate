import { Box, Flex } from 'rebass'
import { Heading, Text } from '..'
import { Card } from '../card'
import drinks from '../../assets/image/drinks.png'
import organic from '../../assets/image/organic.png'
import resiliaflix from '../../assets/image/resiliaflix.png'
import { For } from 'react-extras'

const data = [
  {
    src: resiliaflix,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
  },
  {
    src: drinks,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
  },
  {
    src: drinks,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
  },
  {
    src: drinks,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
  },
  {
    src: drinks,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
  },
  {
    src: drinks,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
  },
  {
    src: organic,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
  },
  {
    src: resiliaflix,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
  },
]

export const Project = () => {
  return (
    <>
      <Flex
        mt="5rem"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Projetos</Heading>
        <Text>
          Confira alguns dos meus projetos feitos em React com Next js
        </Text>
      </Flex>
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '3rem',
          maxWidth: '80%',
          margin: '0 auto 2rem',
        }}
      >
        <For
          of={data}
          render={(item, index) => (
            <Card
              key={index}
              src={item.src}
              title={item.titlle}
              git={item.git}
            />
          )}
        />
      </Box>
    </>
  )
}
