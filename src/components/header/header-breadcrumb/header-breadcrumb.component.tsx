import { Breadcrumbs, Grid, Link, Typography } from '@mui/material'

export function HeaderBreadcrumb() {
  return (
    <Grid item>
      <Typography sx={{ color: 'primary.main' }}>Przegląd zleceń</Typography>
      <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '.8rem' }}>
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography sx={{ fontSize: '.8rem' }} color="#012328">
          Warsztat
        </Typography>
      </Breadcrumbs>
    </Grid>
  )
}
