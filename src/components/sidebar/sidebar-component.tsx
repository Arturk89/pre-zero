import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Box
} from '@mui/material'
import { NavLink } from 'react-router-dom'
import { sidebar } from '../../routes/sidebar'
import Logo from '../../assets/logo_1.png'

import style from './style.module.scss'

const item = {
  // py: '1px',
  px: 4,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.07)'
  }
}

//darken 012328
//lighten 01343c
//green 8bba14

export function Sidebar() {
  return (
    <Box
      sx={{
        width: '220px',
        height: '100%',
        backgroundColor: 'primary.main',
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: 'primary.light'
      }}
    >
      <List disablePadding>
        <ListItem sx={{ height: '60px' }}>
          <img
            src={Logo}
            style={{ height: '100%', padding: '.2rem 0 .2rem 8px' }}
          />
        </ListItem>
        <Divider />
        {sidebar.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: 'primary.dark' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id, Icon, href }) => (
              <>
                <ListItem disablePadding key={id}>
                  <ListItemButton component={NavLink} to={href} sx={item}>
                    <ListItemIcon sx={{ paddingRight: '1rem' }}>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText>{id}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Box>
  )
}
