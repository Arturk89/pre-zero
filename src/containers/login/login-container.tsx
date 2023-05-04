import React from 'react'
import { Form } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@mui/material'
import { PrimaryButton } from 'components/common/button'
import {
  LoginFields,
  defaultValues,
  loginSchema,
  formFields
} from './utils/utils'
import {
  LoginWrapper,
  FormWrapper,
  FieldsWrapper,
  FieldWrapper,
  Logo
} from 'components/login'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import { useNavigate } from 'react-router-dom'

export function LoginContainer() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm<LoginFields>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValues
  })

  const submitted = (data: LoginFields) => {
    console.log('data ', data)
  }

  return (
    <LoginWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit(submitted)}>
          <Logo />
          <FieldsWrapper>
            {formFields.map((f) => (
              <FieldWrapper key={f.id}>
                <TextField
                  key={f.id}
                  variant="outlined"
                  label={f.label}
                  fullWidth
                  error={!!formState.errors[f.name]}
                  helperText={
                    formState.errors && formState.errors[f.name]?.message
                  }
                  {...register(f.name)}
                  sx={{
                    '& .MuiFormHelperText-root': {
                      position: 'absolute',
                      top: 55
                    }
                  }}
                />
              </FieldWrapper>
            ))}
          </FieldsWrapper>
          <PrimaryButton
            text="Zaloguj się"
            Icon={LockOpenOutlinedIcon}
            onClick={() => navigate('/home/garage')}
            type="submit"
            fullWidth
          />
        </Form>
      </FormWrapper>
    </LoginWrapper>
  )
}
