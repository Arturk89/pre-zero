import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
  boxShadow:
    'rgba(26, 115, 232, 0.15) 0rem 0.1875rem 0.1875rem 0rem, rgba(26, 115, 232, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(26, 115, 232, 0.15) 0rem 0.0625rem 0.3125rem 0rem',
  color: '#fff',
  borderRadius: '0.5rem',
  minWidth: '64px',
  minHeight: '2.5rem',
  fontSize: '.8rem',
  padding: '0.6rem 1.5rem',
  '&:hover': {
    boxShadow:
      'rgba(26, 115, 232, 0.4) 0rem 0.875rem 1.625rem -0.75rem, rgba(26, 115, 232, 0.15) 0rem 0.25rem 1.4375rem 0rem, rgba(26, 115, 232, 0.2) 0rem 0.5rem 0.625rem -0.3125rem'
  }
}))
