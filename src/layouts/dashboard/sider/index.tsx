import { useSetting } from '@contexts/setting/context'
import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Menu from './menu'
import { ANIMATION_SPEED, SIDER_BAR_COLLAPSED_WIDTH, SIDER_BAR_WIDTH } from '../constants'

type LayoutSiderProps = {}

const SiderStyled = styled(Layout.Sider)`
  transition: width 0.28s;
  background-color: #304156;
  height: 100%;
  position: fixed !important;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  overscroll-behavior: contain;

  .ant-menu {
    transition: all ${ANIMATION_SPEED}s;
  }
`

const LayoutSider: React.FC<React.PropsWithChildren<LayoutSiderProps>> = () => {
  const { sidebarCollapsed } = useSetting()

  return (
    <SiderStyled
      width={SIDER_BAR_WIDTH}
      collapsedWidth={SIDER_BAR_COLLAPSED_WIDTH}
      collapsed={sidebarCollapsed}
      trigger={null}
    >
      <Menu />
    </SiderStyled>
  )
}

export default LayoutSider
