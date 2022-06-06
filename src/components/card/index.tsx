import { CardContainer, Item, LinkStyles } from './styles'
import { Text } from '..'
import { GitHubIcon } from '../../assets/icon/github-icon'
import Image from 'next/image'
import { Flex } from 'rebass'
import { ButtonLink } from '../button-link'
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
      <CardContainer href={link}>
        <Image src={src} style={{ borderRadius: '7px' }} />
        <Item>
          <Flex flexDirection="column">
            <Text size="23px">{title}</Text>
            <ButtonLink href={link} color="#e85a71">
              Vermais
            </ButtonLink>
          </Flex>
          <LinkStyles href={git} target="_blank">
            <GitHubIcon />
          </LinkStyles>
        </Item>
      </CardContainer>
    </>
  )
}
