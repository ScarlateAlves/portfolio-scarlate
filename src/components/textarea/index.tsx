import { TextAreaStyles } from './styles'

interface TextAreaProps {
  children?: React.ReactNode
  placeholder?: string
}
export const TextArea = ({ children, placeholder }: TextAreaProps) => {
  return (
    <>
      <TextAreaStyles placeholder={placeholder}>{children}</TextAreaStyles>
    </>
  )
}
