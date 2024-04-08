import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'
import LayoutSider from './sider'
import LayoutContent from './content'
import LayoutHeader from './header'
import { Outlet } from 'react-router-dom'

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`

type DashboardLayoutProps = {}

const DashboardLayout: React.FC<React.PropsWithChildren<DashboardLayoutProps>> = () => {
  return (
    <LayoutStyled>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <LayoutContent>
          <Outlet />
        </LayoutContent>
      </Layout>
    </LayoutStyled>
  )
}

export default DashboardLayout
