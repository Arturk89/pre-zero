import { ComponentType } from 'react'
import { Button, ButtonProps } from '@mui/material'

interface Props extends ButtonProps {
  text: string
  Icon: ComponentType
}

export function PrimaryButton({ text, Icon, ...rest }: Props) {
  return (
    <Button startIcon={<Icon />} variant="contained" {...rest}>
      {text}
    </Button>
  )
}
