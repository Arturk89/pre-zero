import { Box } from '@mui/material'
import { HeaderTitle } from './header-title.component'
import { HeaderGradient } from './header-bg-gradient.component'
import { AppBarWrapper, WrapperContainer } from './app-bar-wrapper'
import { HeaderBreadcrumb } from './header-breadcrumb'
import { HeaderActions } from './header-actions'

export function AppBarHeader() {
  return (
    <Box sx={{ position: 'relative' }}>
      <HeaderGradient />
      <AppBarWrapper>
        <WrapperContainer>
          <HeaderBreadcrumb />
          <HeaderActions />
        </WrapperContainer>
      </AppBarWrapper>
      <HeaderTitle />
    </Box>
  )
}
