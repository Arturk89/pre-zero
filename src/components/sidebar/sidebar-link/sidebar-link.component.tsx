import { ComponentType } from 'react'
import { NavLink } from 'react-router-dom'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from '@mui/material'
import style from '../style.module.scss'

type Props = {
  name: string
  href: string
  Icon: ComponentType
}

export const SidebarLink = ({ name, href, Icon }: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={NavLink}
        to={href}
        className={style.sidebarLink__button}
        sx={{
          '&.active': {
            backgroundColor: 'rgba(255, 255, 255, 0.07)'
          }
        }}
      >
        <ListItemIcon className={style.sidebarLink__icon}>
          <Icon />
        </ListItemIcon>
        <ListItemText>{name}</ListItemText>
      </ListItemButton>
    </ListItem>
  )
}
