import { CardContainer, Item, LinkStyles } from './styles'
import { Text } from '..'
import { GitHubIcon } from '../../assets/icon/github-icon'
import Image from 'next/image'
import { Flex } from 'rebass'
import { Button } from '../button'
import { Link } from '../nav-bar/styles'
export interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src?: any
  title?: string
  git?: string
  link?: string
}

export const Card = ({ src, title, git, link }: CardProps) => {
  return (
    <>
      <CardContainer href="#">
        <Image src={src} style={{ borderRadius: '7px' }} />
        <Item>
          <Flex flexDirection="column">
            <Text size="23px">{title}</Text>
            <Button>
              <Link href={link} color="#e85a71" target="_blank">
                Vermais
              </Link>
            </Button>
          </Flex>
          <LinkStyles href={git} target="_blank">
            <GitHubIcon />
          </LinkStyles>
        </Item>
      </CardContainer>
    </>
  )
}
