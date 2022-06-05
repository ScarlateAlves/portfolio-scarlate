import Image from 'next/image'
import gitblack from '../../assets/image/gitblack.gif'
import instagram from '../../assets/image/instagram.png'
import linkedin from '../../assets/image/linkedin.jpg'
import twitter from '../../assets/image/twitter.jpg'
import { Text } from '../../components'
import { Link } from '../../components/nav-bar/styles'
import { ContainerIcon, IconContact } from './styles'

export const SocialNetwork = () => {
  return (
    <>
      <ContainerIcon>
        <Link href="https://github.com/ScarlateAlves" target="_blank">
          <IconContact>
            <Image src={gitblack} />
            <Text>GitHub</Text>
          </IconContact>
        </Link>

        <Link href="https://www.instagram.com/scaralves10/" target="_blank">
          <IconContact>
            <Image src={instagram} />
            <Text color="#E85A71">Instagram</Text>
          </IconContact>
        </Link>

        <Link
          href="https://www.linkedin.com/in/scarlate-alves-518ab5127/"
          target="_blank"
        >
          <IconContact>
            <Image src={linkedin} />
            <Text color="#4EA1D3">Linkedin</Text>
          </IconContact>
        </Link>

        <Link target="_blank">
          <IconContact>
            <Image src={twitter} />
            <Text color="#70AACD">Twitter</Text>
          </IconContact>
        </Link>
      </ContainerIcon>
    </>
  )
}
