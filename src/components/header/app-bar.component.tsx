import { Box } from '@mui/material'
import {
  AppBarWrapper,
  AppBarContainer,
  HeaderTitle,
  HeaderGradient,
  HeaderBreadcrumb,
  HeaderActions
} from './'

export function AppBarHeader() {
  return (
    <Box sx={{ position: 'relative' }}>
      <HeaderGradient />
      <AppBarWrapper>
        <AppBarContainer>
          <HeaderBreadcrumb />
          <HeaderActions />
        </AppBarContainer>
      </AppBarWrapper>
      <HeaderTitle />
    </Box>
  )
}
