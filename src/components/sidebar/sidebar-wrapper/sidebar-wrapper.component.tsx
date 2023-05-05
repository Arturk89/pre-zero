import { Box } from '@mui/material'
import style from '../style.module.scss'

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      className={style.sidebarWrapper}
      sx={{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }}
    >
      {children}
    </Box>
  )
}
