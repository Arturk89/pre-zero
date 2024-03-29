import { ApplicationWrapper } from 'components/common/app-layout'
import { MainLayout } from 'layout/main-layout'
import { Outlet } from 'react-router-dom'

export function Home() {
  return (
    <ApplicationWrapper>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ApplicationWrapper>
  )
}
