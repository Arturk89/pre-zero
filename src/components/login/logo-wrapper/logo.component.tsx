import { Box } from '@mui/material'
import PreZero from 'assets/logo_pre-zero.png'
import style from '../style.module.scss'

export const Logo = () => {
  return (
    <Box className={style.logoWrapper}>
      <img
        src={PreZero}
        alt="logo Pre-zero"
        className={style.logoWrapper__img}
      />
    </Box>
  )
}
