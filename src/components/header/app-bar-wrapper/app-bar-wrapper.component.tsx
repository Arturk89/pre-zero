import { AppBar, Toolbar } from '@mui/material'
import style from '../style.module.scss'

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
