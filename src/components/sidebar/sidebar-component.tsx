import { List, Divider, Box } from '@mui/material'
import { sidebar } from 'routes/sidebar'
import { SidebarWrapper, SidebarLogo, SidebarTitle, SidebarLink } from './'

const DRAWER_WIDTH = 220

export function Sidebar() {
  return (
    <Box component="nav" sx={{ width: DRAWER_WIDTH }}>
      <SidebarWrapper>
        <List disablePadding>
          <SidebarLogo />
          <Divider />
          {sidebar.map(({ name, children }) => (
            <Box key={name} sx={{ bgcolor: 'primary.dark' }}>
              <SidebarTitle name={name} />
              {children.map((link) => (
                <SidebarLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  Icon={link.Icon}
                />
              ))}
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </List>
      </SidebarWrapper>
    </Box>
  )
}
