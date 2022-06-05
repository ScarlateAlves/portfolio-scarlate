import type { NextPage } from 'next'
import { HomeOffice } from '../src/assets/illustration/home-office'
import { Presentation } from '../src/components-pages/presentation'
import { Layout } from '../src/components/layout/layout'
import { Line } from '../src/components/line/styles'
import { About } from '../src/components-pages/about'
import { Project } from '../src/components-pages/projects'
import { Contact } from '../src/components-pages/contact'
import { Footer } from '../src/components/footer'
import { Box } from 'rebass'

const Home: NextPage = () => {
  return (
    <>
      <Box id="home">
        <Layout
          height="99.5vh"
          main={<Presentation />}
          section={<HomeOffice />}
        />
      </Box>
      <Line />
      <About />
      <Line />
      <Project />
      <Line />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
