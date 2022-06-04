import { CardContainer, Item, LinkStyles } from './styles'
import { Text } from '..'
import { GitHubIcon } from '../../assets/icon/github-icon'
import Image from 'next/image'
import { Flex } from 'rebass'
import { Button } from '../button'
export interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src?: any
  title?: string
  git?: string
}

export const Card = ({ src, title, git }: CardProps) => {
  return (
    <>
      <CardContainer href="#">
        <Image src={src} style={{ borderRadius: '7px' }} />
        <Item>
          <Flex flexDirection="column">
            <Text size="23px">{title}</Text>
            <Button>Ver mais</Button>
          </Flex>
          <LinkStyles href={git}>
            <GitHubIcon />
          </LinkStyles>
        </Item>
      </CardContainer>
    </>
  )
}
