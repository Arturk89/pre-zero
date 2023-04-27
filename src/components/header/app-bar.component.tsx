import {
  Toolbar,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Avatar,
  Typography,
  Tabs,
  Tab
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'

const lightColor = 'rgba(255, 255, 255, 0.7)'

export function AppBarHeader() {
  return (
    <>
      <AppBar
        sx={{ background: '#8bba14', height: '60px' }}
        position="sticky"
        elevation={0}>
        <Toolbar sx={{ height: '100%' }}>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => null}
                edge="start">
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                href="/"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white'
                  }
                }}
                rel="noopener noreferrer"
                target="_blank">
                Go to docs
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}
