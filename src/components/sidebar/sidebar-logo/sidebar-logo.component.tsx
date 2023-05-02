import { ListItem } from '@mui/material'
import Logo from 'assets/logo_pre-zero.png'
import style from '../style.module.scss'

export const SidebarLogo = () => {
  return (
    <ListItem className={style.sidebarLogo}>
      <img src={Logo} className={style.sidebarLogo__img} />
    </ListItem>
  )
}
