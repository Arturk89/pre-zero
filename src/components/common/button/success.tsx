import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SuccessButton = styled(Button)<ButtonProps>(({ theme }) => ({
  background: 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
  boxShadow:
    'rgba(76, 175, 80, 0.15) 0rem 0.1875rem 0.1875rem 0rem, rgba(76, 175, 80, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(76, 175, 80, 0.15) 0rem 0.0625rem 0.3125rem 0rem',
  color: '#fff',
  borderRadius: '0.5rem',
  minWidth: '64px',
  minHeight: '2.5rem',
  fontSize: '.8rem',
  padding: '0.6rem 1.5rem',
  '&:hover': {
    boxShadow:
      'rgba(76, 175, 80, 0.4) 0rem 0.875rem 1.625rem -0.75rem, rgba(76, 175, 80, 0.15) 0rem 0.25rem 1.4375rem 0rem, rgba(76, 175, 80, 0.2) 0rem 0.5rem 0.625rem -0.3125rem'
  }
}))
