import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
  DrawerProps
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import DnsRoundedIcon from '@mui/icons-material/DnsRounded'
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual'
import PublicIcon from '@mui/icons-material/Public'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'
import TimerIcon from '@mui/icons-material/Timer'
import SettingsIcon from '@mui/icons-material/Settings'
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup'
import Logo from '@/assets/logo_1.png'

const categories = [
  {
    id: 'Dział Techniczny',
    children: [
      {
        id: 'Authentication',
        icon: <PeopleIcon />,
        active: true
      },
      { id: 'Database', icon: <DnsRoundedIcon /> },
      { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
      { id: 'Hosting', icon: <PublicIcon /> },
      { id: 'Functions', icon: <SettingsEthernetIcon /> }
    ]
  }
]

const item = {
  py: '2px',
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
      sx={{ '& .MuiDrawer-paper': { backgroundColor: '#01343c' } }}>
      <List disablePadding>
        <ListItem sx={{ height: '60px' }}>
          <img src={Logo} style={{ height: '100%' }} />
        </ListItem>
        {/* <ListItem sx={{ ...itemCategory, fontSize: 20, color: '#fff' }}> */}
        {/* Paperbase */}
        {/* </ListItem> */}
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#012328' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  )
}
