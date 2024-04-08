import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'
import LayoutSider from './sider'
import LayoutContent from './content'
import LayoutHeader from './header'
import { Outlet } from 'react-router-dom'
import cx from 'classnames'
import { ANIMATION_SPEED, SIDER_BAR_COLLAPSED_WIDTH, SIDER_BAR_WIDTH } from './constants'
import { useSetting } from '@contexts/setting/context'

const LayoutStyled = styled(Layout)`
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
`

const Wrap = styled.div`
  margin-left: ${SIDER_BAR_WIDTH / 10}rem;
  transition:
    all ${ANIMATION_SPEED}s,
    background 0s;
  &.collapsed {
    margin-left: ${SIDER_BAR_COLLAPSED_WIDTH / 10}rem;
  }
`

const FixedHeader = styled.div<{ $collapsed?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - ${p => (p.$collapsed ? SIDER_BAR_COLLAPSED_WIDTH : SIDER_BAR_WIDTH) / 10}rem);
  transition: width ${ANIMATION_SPEED}s;
`

const MainApp = styled.div`
  width: 100%;
  transition: width ${ANIMATION_SPEED}s;

  position: relative;
  overflow: hidden;
`

type DashboardLayoutProps = {}

const DashboardLayout: React.FC<React.PropsWithChildren<DashboardLayoutProps>> = () => {
  const { sidebarCollapsed } = useSetting()

  return (
    <LayoutStyled>
      <LayoutSider />
      <Wrap className={cx({ collapsed: sidebarCollapsed })}>
        <FixedHeader $collapsed={sidebarCollapsed}>
          <LayoutHeader />
        </FixedHeader>

        <MainApp>
          <Outlet />
        </MainApp>
      </Wrap>
    </LayoutStyled>
  )
}

export default DashboardLayout
