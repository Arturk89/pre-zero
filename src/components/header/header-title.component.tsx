import { Breadcrumbs, Link, Box, Typography } from '@mui/material'
import style from './style.module.scss'

export function HeaderTitle() {
  return (
    <Box className={style.headerTitle}>
      {/* <Box className={style.headerTitle__box}>
        <Typography className={style.headerTitle__box__title}>
          Przegląd zleceń
        </Typography>
      </Box> */}
    </Box>
  )
}
