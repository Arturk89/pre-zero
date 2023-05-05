import { List, Divider, Box, Typography } from '@mui/material'
import { sidebar } from 'routes/sidebar'
import { SidebarWrapper, SidebarTitle, SidebarLogo, SidebarLink } from './'
import style from './style.module.scss'

export function Sidebar() {
  return (
    <Box component="nav" className={style.sidebar}>
      <SidebarWrapper>
        <List disablePadding>
          <SidebarLogo />
          <Divider light className={style.divider} />
          {sidebar.map(({ name, children }) => (
            <Box key={name}>
              <SidebarTitle name="Dział Techniczny" />
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
