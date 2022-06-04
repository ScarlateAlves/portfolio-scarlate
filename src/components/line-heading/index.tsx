import React from 'react'
import { Flex } from 'rebass'
import { LineIcon } from '../../assets/illustration/line-icon'

interface LineHeadingProps {
  children: React.ReactNode
  mb?: string
}
export const LineHeading = ({ children, mb }: LineHeadingProps) => {
  return (
    <>
      <Flex
        style={{ position: 'relative' }}
        width="100%"
        height="20vh"
        justifyContent="center"
        alignItems="flex-end"
        mb={mb}
      >
        <Flex
          style={{ position: 'absolute', right: '0', top: '0', bottom: '0' }}
        >
          <LineIcon />
        </Flex>
        {children}
      </Flex>
    </>
  )
}
