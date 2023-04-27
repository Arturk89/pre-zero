import {
  Toolbar,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Avatar,
  Divider,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
  Breadcrumbs
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import style from './style.module.scss'

export function AppBarHeader() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box className={style.appbar} />
      <AppBar
        sx={{
          height: '61px',
          background: 'transparent'
        }}
        position="sticky"
        elevation={0}
      >
        <Toolbar sx={{ height: '100%' }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '.8rem' }}>
                <Link underline="hover" color="inherit" href="/">
                  MUI
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Core
                </Link>
                <Typography sx={{ fontSize: '.8rem' }} color="#012328">
                  Warsztat
                </Typography>
              </Breadcrumbs>
              {/* <Typography sx={{ color: '#012328' }}>Warsztat</Typography> */}
            </Grid>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => null}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Tooltip title="powiadomienia" placement="bottom-start" arrow>
                <IconButton>
                  <NotificationsIcon sx={{ color: '#01343c' }} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton sx={{ p: 0.5 }}>
                <Avatar src="/broken-image.jpg" sx={{ bgcolor: '#01343c' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
