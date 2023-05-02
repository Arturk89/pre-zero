import React from 'react'
import { Box } from '@mui/material'
import style from '../style.module.scss'

export const LoginWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Box className={style.loginWrapper}>{children}</Box>
}
