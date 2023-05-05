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
    <ListItem
      disablePadding
      sx={{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        marginTop: '.3rem',
        marginBottom: '.3rem'
      }}
    >
      <ListItemButton
        component={NavLink}
        to={href}
        className={style.sidebarLink__button}
        sx={{
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          },
          '&.active': {
            backgroundColor: 'primary.main'
          }
        }}
      >
        <ListItemIcon className={style.sidebarLink__icon}>
          <Icon />
        </ListItemIcon>
        <ListItemText
          sx={{ '& .MuiTypography-root': { fontSize: '0.875rem' } }}
        >
          {name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}
