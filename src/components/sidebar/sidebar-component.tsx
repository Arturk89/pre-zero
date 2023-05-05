import { List, Divider, Box } from '@mui/material'
import { sidebar } from 'routes/sidebar'
import { SidebarWrapper, SidebarLogo, SidebarTitle, SidebarLink } from './'

export function Sidebar() {
  return (
    <Box
      component="nav"
      sx={{
        padding: '1rem',
        borderRadius: '0.75rem'
      }}
    >
      <SidebarWrapper>
        <List disablePadding>
          <SidebarLogo />
          <Divider />
          {sidebar.map(({ name, children }) => (
            <Box key={name}>
              <SidebarTitle name={name} />
              {children.map((link) => (
                <SidebarLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  Icon={link.Icon}
                />
              ))}
            </Box>
          ))}
        </List>
      </SidebarWrapper>
    </Box>
  )
}
