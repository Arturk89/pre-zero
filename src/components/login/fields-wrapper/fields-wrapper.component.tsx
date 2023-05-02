import { Box } from '@mui/material'
import style from '../style.module.scss'

export const FieldsWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Box className={style.fieldsWrapper}>{children}</Box>
}
