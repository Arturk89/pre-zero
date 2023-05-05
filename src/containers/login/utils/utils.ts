import { ComponentType } from 'react'
import * as z from 'zod'
import { IS_VALID_PASSWORD } from 'config/regex'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import HttpsIcon from '@mui/icons-material/Https'

export type LoginFields = z.infer<typeof loginSchema>

export const defaultValues = {
  login: '',
  password: ''
}

export const loginSchema = z.object({
  login: z
    .string()
    .min(5, { message: 'Podany login jest za krótki!' })
    .max(40, { message: 'Podany login jest za długi!' }),
  password: z
    .string()
    .min(8, { message: 'Podane hasło jest za krótkie!' })
    .max(40, { message: 'Podane hasło jest zbyt długie!' })
    .regex(IS_VALID_PASSWORD, {
      message:
        'Hasło musi zawierać jedną duzą literę, jedną małą literę, cyfrę oraz znak specjalny'
    })
})

type FormFields = {
  id: string
  name: keyof LoginFields
  label: string
  type: string
  placeholder?: string
  Icon: ComponentType
}

export const formFields: FormFields[] = [
  {
    id: '_1',
    name: 'login',
    label: 'e-mail',
    type: 'text',
    placeholder: 'Uzytkownik',
    Icon: AlternateEmailIcon
  },
  {
    id: '_2',
    name: 'password',
    label: 'hasło',
    type: 'password',
    Icon: HttpsIcon
  }
]
