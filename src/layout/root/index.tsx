import { ApplicationWrapper } from 'components/common/app-layout'
import { Outlet } from 'react-router-dom'

export function Root() {
  return (
    <ApplicationWrapper>
      <Outlet />
    </ApplicationWrapper>
  )
}
