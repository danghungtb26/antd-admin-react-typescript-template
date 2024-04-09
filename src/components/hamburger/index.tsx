import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useSetting } from '@contexts/setting/context'
import { useMobile } from '@hooks/media'
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
  const { sidebarCollapsed, toggleSidebarCollapsed, drawerOpend, toggleDrawerOpened } = useSetting()
  const mobile = useMobile()
  const cond = !mobile ? sidebarCollapsed : !drawerOpend
  const Component = cond ? MenuUnfoldOutlined : MenuFoldOutlined
  return (
    <Wrap>
      <Component onClick={mobile ? toggleDrawerOpened : toggleSidebarCollapsed} />
    </Wrap>
  )
}

export default Hamburger
