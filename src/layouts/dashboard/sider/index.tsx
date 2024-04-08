import { useSetting } from '@contexts/setting/context'
import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'

type LayoutSiderProps = {}

const SiderStyled = styled(Layout.Sider)`
  z-index: 10;
`

const LayoutSider: React.FC<React.PropsWithChildren<LayoutSiderProps>> = () => {
  const { sidebarCollapsed } = useSetting()

  return <SiderStyled width={210} collapsedWidth={54} collapsed={sidebarCollapsed} trigger={null} />
}

export default LayoutSider
