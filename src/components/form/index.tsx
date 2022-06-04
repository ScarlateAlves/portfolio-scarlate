import { Box, Flex } from 'rebass'
import { Button, Text } from '..'
import { EmailIcon } from '../../assets/icon/icon-contact/email-icon'
import { UserIcon } from '../../assets/icon/icon-contact/user-icon'
import { Input } from '../input'
import { TextArea } from '../textarea'
export const Form = () => {
  return (
    <>
      <Box maxWidth="80%" m="auto" mb="2rem" mt="4rem">
        <Text>Mande-me um email</Text>
        <Flex justifyContent="space-between">
          <Flex flexDirection="column" style={{ gap: '2rem' }}>
            <Input placeholder="Nome" icon={<UserIcon />} />
            <Input placeholder="Email" icon={<EmailIcon />} />
          </Flex>
          <TextArea placeholder="Mensagem"></TextArea>
        </Flex>
        <Flex mt="1.5rem" mb="3.5rem" justifyContent="flex-end">
          <Button primary>Enviar</Button>
        </Flex>
      </Box>
    </>
  )
}
