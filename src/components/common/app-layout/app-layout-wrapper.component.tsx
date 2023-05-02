import { Box } from '@mui/material'
import style from './style.module.scss'

type Props = {
  children: React.ReactNode
}

export function ApplicationWrapper({ children }: Props) {
  return <Box className={style.appWrapper}>{children}</Box>
}

export function MainLayoutWrapper({ children }: Props) {
  return <Box className={style.mainWrapper}>{children}</Box>
}

export function BodyWrapper({ children }: Props) {
  return <Box className={style.bodyWrapper}>{children}</Box>
}

export function TableWrapper({ children }: Props) {
  return <Box className={style.tableWrapper}>{children}</Box>
}

export function TableOffset({ children }: Props) {
  return <Box className={style.tableOffset}>{children}</Box>
}
