import { Grid, Tooltip, IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

export function Notification() {
  return (
    <Tooltip title="powiadomienia" placement="bottom-start" arrow>
      <IconButton>
        <NotificationsIcon sx={{ color: 'primary.main' }} />
      </IconButton>
    </Tooltip>
  )
}
