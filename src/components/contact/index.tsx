import { Flex } from 'rebass'
import { ContactIlustration } from '../../assets/illustration/contact-ilustration'
import { Form } from '../form'
import { Heading } from '../heading'
import { Layout } from '../layout/layout'
import { LineHeading } from '../line-heading'
import { SocialNetwork } from './social-network'

export const Contact = () => {
  return (
    <>
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
    </>
  )
}
