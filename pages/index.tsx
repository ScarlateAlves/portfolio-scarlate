import type { NextPage } from 'next'
import { HomeOffice } from '../src/assets/illustration/home-office'
import { Presentation } from '../src/components/presentation'
import { Layout } from '../src/components/layout/layout'
import { Line } from '../src/components/line/styles'
import { Heading } from '../src/components'
import { AboutIlustration } from '../src/assets/illustration/about-ilustration'
import { About } from '../src/components/about'
import { Project } from '../src/components/projects'
import { LineHeading } from '../src/components/line-heading'
import { Contact } from '../src/components/contact'
import { Footer } from '../src/components/footer'

const Home: NextPage = () => {
  return (
    <>
      <Layout main={<Presentation />} section={<HomeOffice />} />
      <Line />
      <LineHeading>
        <Heading size="37px">Sobre mim</Heading>
      </LineHeading>
      <Layout section={<About />} main={<AboutIlustration />} />
      <Line />
      <Project />
      <Line />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
