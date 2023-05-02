import { Box } from '@mui/material'
import style from '../style.module.scss'

export const FieldWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Box className={style.fieldWrapper}>{children}</Box>
}
