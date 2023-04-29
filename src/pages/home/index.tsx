import { ApplicationWrapper } from 'components/common/app-layout'
import { Sidebar } from 'components/sidebar/sidebar-component'
import { AppBarHeader } from 'components/header'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const drawerWidth = 220

export function Home() {
  return (
    <ApplicationWrapper>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Box
          component="nav"
          sx={{
            width: drawerWidth
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <AppBarHeader />

          <Box
            sx={{
              width: '100%',
              flex: 1,
              background: 'rgba(1, 35, 40, 1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                padding: '8px 24px 24px 24px',
                height: '100%'
              }}
            >
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </ApplicationWrapper>
  )
}
