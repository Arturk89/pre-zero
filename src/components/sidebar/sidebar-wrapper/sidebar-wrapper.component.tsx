import { Box } from '@mui/material'
import style from '../style.module.scss'

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      className={style.sidebarWrapper}
      sx={{
        backgroundColor: 'primary.main',
        borderRightColor: 'primary.light'
      }}
    >
      {children}
    </Box>
  )
}
