import React from 'react'
import { HeadingStyles } from './styles'

interface HeadingProps {
  children: React.ReactNode
  color?: string
  size?: string
}

export const Heading = ({ children, color, size }: HeadingProps) => {
  return (
    <HeadingStyles color={color} size={size}>
      {children}
    </HeadingStyles>
  )
}
