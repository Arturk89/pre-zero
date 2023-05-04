import React from 'react'
import { Grid } from '@mui/material'
import { Notification } from './notification'
import { MenuDropdown } from './menu-dropdown'

export function HeaderActions() {
  return (
    <>
      <Grid item xs />
      <Grid item>
        <Notification />
      </Grid>
      <Grid item>
        <MenuDropdown />
      </Grid>
    </>
  )
}
