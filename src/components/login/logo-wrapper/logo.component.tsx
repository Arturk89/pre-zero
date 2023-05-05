import { Box } from '@mui/material'
import PreZero from 'assets/pre-zero-with-colors.png'
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
