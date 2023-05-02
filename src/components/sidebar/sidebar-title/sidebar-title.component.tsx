import { ListItem, ListItemText } from '@mui/material'
import style from '../style.module.scss'

type Props = {
  name: string
}

export const SidebarTitle = ({ name }: Props) => {
  return (
    <ListItem className={style.sidebarTitle}>
      <ListItemText className={style.sidebarTitle__text}>{name}</ListItemText>
    </ListItem>
  )
}
