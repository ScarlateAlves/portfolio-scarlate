import { Flex } from 'rebass'
import { ContactIlustration } from '../../assets/illustration/contact-ilustration'
import { Form } from '../../components/form'
import { Heading } from '../../components/heading'
import { Layout } from '../../components/layout/layout'
import { LineHeading } from '../../components/line-heading'
import { SocialNetwork } from './social-network'

export const Contact = () => {
  return (
    <div id="contact">
      <LineHeading mb="6rem">
        <Heading>Contato</Heading>
      </LineHeading>
      <Layout
        main={<SocialNetwork />}
        section={
          <Flex alignContent="center" justifyContent="flex-end">
            <ContactIlustration />
          </Flex>
        }
      />

      <Form />
    </div>
  )
}
