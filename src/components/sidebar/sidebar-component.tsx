import { List, Divider, Box } from '@mui/material'
import { sidebar } from 'routes/sidebar'
import { SidebarWrapper, SidebarLogo, SidebarTitle, SidebarLink } from './'
import PersonIcon from '@mui/icons-material/Person'
import style from './style.module.scss'

export function Sidebar() {
  return (
    <Box component="nav" className={style.sidebar}>
      <SidebarWrapper>
        <List disablePadding>
          <SidebarLogo />
          <Divider light className={style.divider} />
          <SidebarLink name="Profil" href="/" Icon={PersonIcon} />
          {sidebar.map(({ name, children }) => (
            <Box key={name}>
              <Divider light className={style.divider} />
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
