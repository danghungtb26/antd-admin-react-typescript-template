import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useSetting } from '@contexts/setting/context'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: inline-block;
  font-size: 2rem;
  line-height: 4rem;
  cursor: pointer;
`

type HamburgerProps = {}

const Hamburger: React.FC<React.PropsWithChildren<HamburgerProps>> = () => {
  const { sidebarCollapsed, toggleSidebarCollapsed } = useSetting()
  const Component = sidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined
  return (
    <Wrap>
      <Component onClick={toggleSidebarCollapsed} />
    </Wrap>
  )
}

export default Hamburger
