import { Avatar, Grid, IconButton, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'

export function HeaderActions() {
  return (
    <>
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
    </>
  )
}
