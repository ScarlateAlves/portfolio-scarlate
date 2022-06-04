import { ContainerInput, IconIput, InputStyles } from './styles'
interface InputProps {
  placeholder?: string
  icon?: React.ReactNode
}

export const Input = ({ placeholder, icon }: InputProps) => {
  return (
    <>
      <ContainerInput>
        <IconIput>{icon}</IconIput>
        <InputStyles placeholder={placeholder} />
      </ContainerInput>
    </>
  )
}
