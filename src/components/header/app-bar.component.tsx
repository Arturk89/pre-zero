import { Box } from '@mui/material'
import {
  AppBarWrapper,
  AppBarContainer,
  HeaderBreadcrumb,
  HeaderActions
} from './'

export function AppBarHeader() {
  return (
    <Box>
      <AppBarWrapper>
        <AppBarContainer>
          <HeaderBreadcrumb />
          <HeaderActions />
        </AppBarContainer>
      </AppBarWrapper>
    </Box>
  )
}
