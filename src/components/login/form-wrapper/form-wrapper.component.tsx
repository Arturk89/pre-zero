import React from 'react'
import { Box } from '@mui/material'
import style from '../style.module.scss'

export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Box className={style.formWrapper}>{children}</Box>
}
