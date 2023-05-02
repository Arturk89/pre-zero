import React from 'react'
import { Sidebar } from 'components/sidebar/sidebar-component'
import { AppBarHeader } from 'components/header'
import {
  MainLayoutWrapper,
  BodyWrapper,
  TableWrapper,
  TableOffset
} from 'components/common/app-layout'

type Props = {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <MainLayoutWrapper>
      <Sidebar />
      <BodyWrapper>
        <AppBarHeader />
        <TableWrapper>
          <TableOffset>{children}</TableOffset>
        </TableWrapper>
      </BodyWrapper>
    </MainLayoutWrapper>
  )
}
