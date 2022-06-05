import { Box, Flex } from 'rebass'
import { Heading, Text } from '../../components'
import { Card } from '../../components/card'
import drinks from '../../assets/image/drinks.png'
import organic from '../../assets/image/organic.png'
import resiliaflix from '../../assets/image/resiliaflix.png'
import scarflix from '../../assets/image/scarflix.png'
import poke from '../../assets/image/poke.png'
import { For } from 'react-extras'

const data = [
  {
    src: drinks,
    titlle: 'Drinks',
    git: 'https://github.com/ScarlateAlves/DrinksReact',
    link: 'https://romantic-borg-d5a880.netlify.app/home',
  },
  {
    src: resiliaflix,
    titlle: 'ResiliaFlix',
    git: 'https://github.com/ScarlateAlves/Projeto-ResiliaFlix',
    link: 'https://scarlatealves.github.io/Projeto-ResiliaFlix/',
  },
  {
    src: organic,
    titlle: 'Organic',
    git: 'https://github.com/ScarlateAlves/organic',
    link: 'http://organic.herokuapp.com/',
  },
  {
    src: scarflix,
    titlle: 'Scarflix',
    git: 'https://github.com/ScarlateAlves/scarflix',
  },
  {
    src: poke,
    titlle: 'Pokemon',
    git: 'https://github.com/ScarlateAlves/routes-dynamics-nextjs',
  },
]

export const Project = () => {
  return (
    <>
      <Flex
        id="projects"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb="2rem"
      >
        <Flex alignItems="flex-end" height="20vh">
          <Heading>Projetos</Heading>
        </Flex>
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
              src={item?.src}
              title={item?.titlle}
              git={item?.git}
              link={item?.link}
            />
          )}
        />
      </Box>
    </>
  )
}
