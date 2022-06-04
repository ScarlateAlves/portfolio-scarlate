import Image from 'next/image'
import gitblack from '../../assets/image/gitblack.gif'
import instagram from '../../assets/image/instagram.png'
import linkedin from '../../assets/image/linkedin.jpg'
import twitter from '../../assets/image/twitter.jpg'
import { Text } from '..'
import { ContainerIcon, IconContact } from './styles'

export const SocialNetwork = () => {
  return (
    <>
      <ContainerIcon>
        <IconContact>
          <Image src={gitblack} />
          <Text>GitHub</Text>
        </IconContact>
        <IconContact>
          <Image src={instagram} />
          <Text>Instagram</Text>
        </IconContact>
        <IconContact>
          <Image src={linkedin} />
          <Text>Linkedin</Text>
        </IconContact>
        <IconContact>
          <Image src={twitter} />
          <Text>Twitter</Text>
        </IconContact>
      </ContainerIcon>
    </>
  )
}
