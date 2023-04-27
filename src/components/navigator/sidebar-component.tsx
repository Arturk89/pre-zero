import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
  DrawerProps,
  Collapse
} from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import DnsRoundedIcon from '@mui/icons-material/DnsRounded'
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual'
import PublicIcon from '@mui/icons-material/Public'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'
import GroupIcon from '@mui/icons-material/Group'
import Logo from '@/assets/logo_1.png'

import BuildIcon from '@mui/icons-material/Build'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SettingsIcon from '@mui/icons-material/Settings'
import ConstructionIcon from '@mui/icons-material/Construction'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

const categories = [
  {
    id: 'Dział Techniczny',
    children: [
      {
        id: 'Warsztat',
        icon: <ConstructionIcon />,
        active: true,
        subChildren: [
          { id: 'Dodaj', icon: <BuildIcon /> },
          { id: 'Wyświetl', icon: <BuildIcon /> }
        ]
      },
      { id: 'Magazyn', icon: <WarehouseIcon />, subChildren: [] },
      { id: 'Pojazdy', icon: <LocalShippingIcon />, subChildren: [] },
      { id: 'Uzytkownicy', icon: <GroupIcon />, subChildren: [] },
      { id: 'Ustawienia', icon: <SettingsIcon />, subChildren: [] }
    ]
  }
]

const item = {
  // py: '1px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.07)'
  }
}

const subchildcss = {
  py: '1px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.07)'
  }
}

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3
}
//darken 012328
//lighten 01343c
export function Sidebar(props: DrawerProps) {
  const { ...other } = props

  return (
    <Drawer
      variant="permanent"
      {...other}
      sx={{ '& .MuiDrawer-paper': { backgroundColor: '#01343c' } }}
    >
      <List disablePadding>
        <ListItem sx={{ height: '60px' }}>
          <img
            src={Logo}
            style={{ height: '100%', padding: '.2rem 0 .2rem 8px' }}
          />
        </ListItem>
        {/* <ListItem sx={{ ...itemCategory, fontSize: 20, color: '#fff' }}> */}
        {/* Paperbase */}
        {/* </ListItem> */}
        <Divider />
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#012328' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, subChildren }) => (
              <>
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                    {/* {true ? <ExpandLess /> : <ExpandMore />} */}
                  </ListItemButton>
                </ListItem>
                {/* <Collapse in={true} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    sx={{ ml: 1, mt: 1, mb: 1 }}>
                    {subChildren.map((s) => (
                      <ListItemButton
                        sx={subchildcss}
                        disablePadding
                        key={s.id}>
                        <ListItemIcon>{s.icon}</ListItemIcon>
                        <ListItemText>{s.id}</ListItemText>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse> */}
              </>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  )
}
