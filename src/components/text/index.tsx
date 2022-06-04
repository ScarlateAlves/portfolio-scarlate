import React from 'react'
import { TextStyles } from './styles'

interface TextProps {
  children: React.ReactNode
  size?: string
  color?: string
  cursor?: boolean
}

export const Text = ({ children, size, color, cursor }: TextProps) => {
  return (
    <TextStyles cursor={cursor} size={size} color={color}>
      {children}
    </TextStyles>
  )
}
