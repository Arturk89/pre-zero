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
  Box
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'

export function AppBarHeader() {
  return (
    <>
      <AppBar
        sx={{ background: '#fff', height: '61px' }}
        position="sticky"
        elevation={0}
      >
        <Toolbar sx={{ height: '100%' }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Typography sx={{ color: '#012328' }}>Warsztat</Typography>
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
              <Link
                href="/"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: '#8bba14',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                Go to docs
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="Artur" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  )
}
