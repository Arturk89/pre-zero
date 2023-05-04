import { useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { HeaderDropdown } from 'components/header/header-dropdown/header-dropdown.component'

export function MenuDropdown() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick} sx={{ p: 0.5 }}>
        <Avatar src="/broken-image.jpg" sx={{ bgcolor: 'primary.main' }} />
      </IconButton>
      <HeaderDropdown
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
    </>
  )
}
