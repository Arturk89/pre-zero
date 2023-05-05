import { IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

export function Notification() {
  return (
    <IconButton>
      <NotificationsIcon sx={{ color: 'primary.main' }} />
    </IconButton>
  )
}
