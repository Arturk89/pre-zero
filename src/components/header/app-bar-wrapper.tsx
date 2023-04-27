import { AppBar, Grid, Toolbar } from '@mui/material'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
}

export function AppBarWrapper({ children }: Props) {
  return (
    <AppBar className={style.appbarWrapper} position="sticky" elevation={0}>
      <Toolbar className={style.appbarWrapper__toolbar}>{children}</Toolbar>
    </AppBar>
  )
}

export function WrapperContainer({ children }: Props) {
  return (
    <Grid container spacing={1} alignItems="center">
      {children}
    </Grid>
  )
}
