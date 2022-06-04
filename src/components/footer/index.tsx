import { FooterStyles } from './styles'
import frame from '../../assets/image/Frame.png'
import Image from 'next/image'
import { Text } from '../text'
import { Flex } from 'rebass'
import { FaceIcon } from '../../assets/icon/icon-contact/face-icon'
import { InstaIcon } from '../../assets/icon/icon-contact/insta-icon'
import { LinkeIcon } from '../../assets/icon/icon-contact/linke-icon'
export const Footer = () => {
  return (
    <FooterStyles>
      <Image width="150px" height="70px" src={frame} />
      <Text size="1rem" color="#fff">
        2022 Copyright | Scarlate
      </Text>
      <Flex flexDirection="column">
        <Text size="1rem" color="#fff">
          Rede sociais
        </Text>
        <Flex justifyContent="space-between">
          <FaceIcon />
          <InstaIcon />
          <LinkeIcon />
        </Flex>
      </Flex>
    </FooterStyles>
  )
}
