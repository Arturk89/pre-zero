import { Grid } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export function AppBarContainer({ children }: Props) {
  return (
    <Grid container spacing={1} alignItems="center">
      {children}
    </Grid>
  )
}
